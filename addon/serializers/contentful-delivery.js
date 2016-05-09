import DS from 'ember-data';
import Ember from 'ember';

import coerceId from "ember-data/-private/system/coerce-id";
import normalizeModelName from "ember-data/-private/system/normalize-model-name";
import { modelHasAttributeOrRelationshipNamedType } from "ember-data/-private/utils";


export default DS.JSONSerializer.extend({
  /*
   * @override
   * */
  primaryKey: 'sysId',

  typeKey: 'sysType',
  /*
   * @override
   * */
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    switch (requestType) {
      case 'findRecord':
        return this.normalizeFindRecordResponse(...arguments);
      case 'findAll':
        return this.normalizeFindAllResponse(...arguments)
      case 'query':
        return this.normalizeQueryResponse(...arguments);
    }
  },
  /*
   * @override
   * */
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    return this.normalizeSingleResponse(...arguments);
  },
  /*
   * @override
   * */
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    return this.normalizeArrayResponse(...arguments);
  },
  /*
   * @override
   * */
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    return this.normalizeArrayResponse(...arguments);
  },
  /*
   * @override
   * */
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, true);
  },
  /*
   * @override
   * */
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    // payload = this.normalizeMeta(payload);
    return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
  },
  /*
   * @override !!!
   * */
  _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
    let documentHash = {
      data: null,
      included: []
    };

    let meta = this.extractMeta(store, primaryModelClass, payload);
    if (meta) {
      documentHash.meta = meta;
    }

    if (isSingle) {
      let { data, included } = this.normalize(primaryModelClass, payload);
      //let data = this.normalize(primaryModelClass, payload);
      //let included = payload.includes;
      documentHash.data = data;
      if (included) {
        documentHash.included = included;
      }
    } else {
      let items = payload.items;
      let ret = new Array(items.length);
      for (let i = 0, l = items.length; i < l; i++) {
        let item = items[i];
        let {data,included} = this.normalize(primaryModelClass, item);
        //let included = payload.includes;
        if (included) {
          documentHash.included.push(...included);
        }
        ret[i] = data;
      }

      documentHash.data = ret;
    }

    return documentHash;
  },
    /*
   * @override
   * */
  extractMeta(store, modelClass, payload) {
    let meta = this._extractMeta(payload);
    return meta;
  },
  _extractMeta(payload){
    let meta = {};
    if (payload && payload.hasOwnProperty('sys')) {
      let sys = payload['sys'];
      if (sys.hasOwnProperty('type')) {
        let type = sys['type'];
        let payloadNew = {};
        if (type === 'Array' ) {
          meta.limit = payload.limit;
          meta.skip = payload.skip;
          meta.total = payload.total;
        }
      }
    }
    return meta;
  },
  /*
   * @override
   * */
  normalize(modelClass, resourceHash) {
    let data = null;
    
    let responseAttributes = this._extractAttributes(modelClass, resourceHash);

    if (responseAttributes) {
      data = {
        id:            this.extractId(modelClass, responseAttributes),
        type:          this.extractType(modelClass, responseAttributes),
        attributes:    this.extractAttributes(modelClass, responseAttributes),
        relationships: this.extractRelationships(modelClass, responseAttributes)
      };

      this.applyTransforms(modelClass, data.attributes);
    }

    return { data };
  },

  _extractAttributes(modelClass, resourceHash) {
    let keys = ['sys', 'fields', 'other'];
    let attributes = {};
    
    for (let value of keys) {
      let attributesByVal = this._extractAttributesByKey(modelClass, resourceHash, value);
      attributes = Ember.$.extend(attributes, attributesByVal)
    }
    return attributes;
  },

  _extractAttributesByKey(modelClass, resourceHash, key ){
    let attributes = {};
    if ( key === 'sys' ){
      if ( resourceHash.hasOwnProperty(key) ) {
        let sys = resourceHash[key];
        attributes = this._renameSys(sys);
      }
    } 
    else if ( key === 'fields' ) {
      if ( resourceHash.hasOwnProperty(key) ) {
        if ( modelClass.modelName == 'content-type' ){
          attributes = {
            fields: resourceHash[key]
          }
        }
        else {
          attributes = resourceHash[key];
        }
        
      }
    }   
    else if ( key === 'other' ){
      for(let k in resourceHash) {
        if ( k !== 'sys' && k !== 'fields' ){
          attributes[k] = resourceHash[k];
        }
      }
    }
    return attributes;
  },

  _renameSys(sys){
    let attributes = {};
    for (let key in sys) {
      let sysKey = 'sys' + Ember.String.classify(key);
      attributes[sysKey] = sys[key];
    }
    return attributes;
  },
    /*
   * @override
   * */
  extractId(modelClass, responseAttributes) {
    let primaryKey = Ember.get(this, 'primaryKey');  
    let id = responseAttributes[primaryKey];
    return coerceId(id);
  },

  extractType(modelClass, responseAttributes) {
    let type;
    let typeKey = Ember.get(this, 'typeKey'); 
    //let sys = resourceHash['sys'];
    //let typeKey = Ember.get(this, 'typeKey');
    if ( responseAttributes[typeKey] !== 'Entry' ){
      type = responseAttributes[typeKey];
    }
    else {
      let contentType = responseAttributes['sysContentType'];
      type = contentType.sys['id'];
    }
    return type;
  },
  /*
   * @override
   * */
  extractAttributes(modelClass, responseAttributes) {
    let attributeKey;
    let attributes = {};

    modelClass.eachAttribute((key) => {
      attributeKey = this.keyForAttribute(key, 'deserialize');
      if ( responseAttributes.hasOwnProperty(attributeKey) ) {
        attributes[key] = responseAttributes[attributeKey];
      }
    });

    return attributes;
  },
  /*
   * @override
   * */
  keyForAttribute(key, method) {
    return key;
  },






 /*
   * @override
   * */

  extractRelationships(modelClass, responseAttributes) {
    let relationships = {};

    modelClass.eachRelationship((key, relationshipMeta) => {
      let relationship = null;
      let relationshipKey = this.keyForRelationship(key, relationshipMeta.kind, 'deserialize');

      if (responseAttributes.hasOwnProperty(relationshipKey)) {
        let data = null;
        let relationshipHash = responseAttributes[relationshipKey];
        
        if (relationshipMeta.kind === 'belongsTo') {
          data = this.extractRelationship(relationshipMeta.type, relationshipHash);
        } 
        else if (relationshipMeta.kind === 'hasMany') {
          if (!Ember.isNone(relationshipHash)) {
            data = new Array(relationshipHash.length);
            for (let i = 0, l = relationshipHash.length; i < l; i++) {
              let item = relationshipHash[i];
              data[i] = this.extractRelationship(relationshipMeta.type, item);
            }
          }
        }
        relationship = { data };
      }

      let linkKey = this.keyForLink(key, relationshipMeta.kind);
      if (responseAttributes.links && responseAttributes.links.hasOwnProperty(linkKey)) {
        let related = responseAttributes.links[linkKey];
        relationship = relationship || {};
        relationship.links = { related };
      }

      if (relationship) {
        relationships[key] = relationship;
      }
    });

    return relationships;
  },
  /*
   * @override
   * */
  extractRelationship(relationshipModelName, relationshipHash) {
    if (Ember.isNone(relationshipHash)) { return null; }

    if ( relationshipHash.hasOwnProperty('sys') ) {
      let sys = relationshipHash['sys'];
      if ( sys['type'] == 'Link' ) {
        if ( sys['linkType'] === "Entry" ){
          sys['type'] = relationshipModelName;
        }
        else {
          sys['type'] = sys['linkType'];
        }
        delete sys['linkType'];
      }
      relationshipHash = relationshipHash['sys'];
      delete relationshipHash['sys'];
    }
    return this._super(relationshipModelName, relationshipHash);
  },
    /*
   * @override
   * */
  keyForRelationship(key, typeClass, method) {
    return key;
  },
});
