import DS from 'ember-data';
import Ember from 'ember';

import coerceId from "ember-data/-private/system/coerce-id";
import normalizeModelName from "ember-data/-private/system/normalize-model-name";
import { modelHasAttributeOrRelationshipNamedType } from "ember-data/-private/utils";


export default DS.JSONSerializer.extend({
  /*
   * @override
   * */
  //primaryKey: 'sysId',

  //typeKey: 'type',
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
    //let normalize = this.normalizeResourceHash(modelClass, resourceHash);
    //modelClass = normalize.modelClass;
    //resourceHash = normalize.resourceHash;
    if (resourceHash) {
      data = {
        id:            this.extractId(modelClass, resourceHash),
        type:          this.extractType(modelClass, resourceHash),
        attributes:    this.extractAttributes(modelClass, resourceHash),
        relationships: this.extractRelationships(modelClass, resourceHash)
      };

      this.applyTransforms(modelClass, data.attributes);
    }

    return { data };
  },
    /*
   * @override
   * */
  extractId(modelClass, resourceHash) {
    let id;
    let sys = resourceHash['sys'];
    if ( sys.type !== 'Entry' ){
      let primaryKey = Ember.get(this, 'primaryKey');  
      id = sys[primaryKey];
    }
    return coerceId(id);
/*
    modelName.toLowerCase() === 'Space'.toLowerCase()
    modelName.toLowerCase() === 'Entry'.toLowerCase()
    modelName.toLowerCase() === 'Asset'.toLowerCase() 
    modelName.toLowerCase() === 'Content-type'.toLowerCase()
*/
  },
  extractType(modelClass, resourceHash) {
    let type;
    let sys = resourceHash['sys'];
    //let typeKey = Ember.get(this, 'typeKey');
    if ( sys.type !== 'Entry' ){
      type = sys['type'];
    }
    else {
      let contentType = sys['contentType'];
      type = contentType.sys['id'];
    }
    return type;
  },
  /*
   * @override
   * */
  extractAttributes(modelClass, resourceHash) {
    var attributeKey;
    var attributes = {};

    modelClass.eachAttribute((key) => {
      attributeKey = this.keyForAttribute(key, 'deserialize');
      attributes[key] = this._extractAttributes(modelClass, resourceHash, attributeKey);

      // if (resourceHash.hasOwnProperty(attributeKey)) {
      //   attributes[key] = resourceHash[attributeKey];
      // }
    });

    return attributes;
  },
  /*
   * @override
   * */
  keyForAttribute(key, method) {
    return key;
  },

  _extractAttributes(modelClass, resourceHash, attributeKey) {
    let _this = this;
    let keys = ['sys', 'fields', 'other'],
        value,
        attributes;
    
    for (let val of keys) {
      attributes = _this._extractAttributesByKey(resourceHash, val);
      
      let isSys = false;
      if ( val === 'sys' ) {
        isSys = true;
      }

      value = _this._getValueAttributeByAttributeKey(attributeKey, attributes, isSys);
      if ( value ) {
        break;
      }
    }
    return value;
  },

  _extractAttributesByKey(resourceHash, key){
    let attributes;
    if ( key !== 'other' ) {
      if ( resourceHash.hasOwnProperty(key) ) {
        attributes = resourceHash[key];
      }
    }
    else {
      for(let k in resourceHash) {
        if ( k !== 'sys' && k !== 'fields' )
          attributes[k] = resourceHash[k];
      }

    }
    return attributes;
  },

  _getValueAttributeByAttributeKey(attributeKey, attributes, isSys=false){
    let value;
    let key;
    let k;
    for(let key in attributes) {
      k = key;
      if ( isSys ) {
        k = 'sys' + Ember.String.classify(key);
      }
      if ( k === attributeKey ){
        value = attributes[key];
        break;
      }
    }
    return value;
  },










  normalizeResourceHash(modelClass, resourceHash){
    resourceHash = this.renameSys(resourceHash);
    let normalize = this.detectType(modelClass, resourceHash);
    return normalize;
  },
  renameSys(resourceHash){
    if (resourceHash.hasOwnProperty('sys')) {
      let sys = resourceHash['sys'] ;
      let sysNew = {};
      for (let key in sys) {
        let keyNormalize = Ember.String.camelize('sys-' + key);
        sysNew[keyNormalize] = sys[key];
        //
      }
      Ember.$.extend(resourceHash, sysNew);
      delete resourceHash['sys'];
    }
    return resourceHash;
  },
  detectType(modelClass, resourceHash){
    var typeKey = Ember.get(this, 'typeKey');
    if ( resourceHash[typeKey] === 'Entry' ) {
      if (resourceHash.hasOwnProperty('sysContentType')){
        let type = resourceHash.sysContentType.sys.id;
        resourceHash[typeKey] = type;
        modelClass = this.store.modelFor( type );
        resourceHash = this.extractFields(resourceHash);
        delete resourceHash['sysContentType'];
      }
    }
    else if ( resourceHash[typeKey] === 'Asset' ){
      resourceHash = this.extractFields(resourceHash);
    }
    return { modelClass : modelClass, resourceHash : resourceHash }
  },
  extractFields(resourceHash){
    let fields;
    if (resourceHash.hasOwnProperty('fields')){
      fields = resourceHash['fields'];
      delete resourceHash['fields'];
    }
    Ember.$.extend(resourceHash,fields);
    return resourceHash;
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
  }
});
