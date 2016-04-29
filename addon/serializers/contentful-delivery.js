import DS from 'ember-data';

//import coerceId from "ember-data/-private/system/coerce-id";
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
    payload = this.normalizeMeta(payload);
    return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
  },
  normalizeMeta(payload){
    if (payload && payload.hasOwnProperty('sys')) {
      let sys = payload['sys'];
      if (sys.hasOwnProperty('type')) {
        let type = sys['type'];
        let payloadNew = {};
        if (type === 'Array' ) {
          let meta = {};
          meta.limit = payload.limit;
          meta.skip = payload.skip;
          meta.total = payload.total;

          return {
            meta : meta,
            items: payload.items,
            includes: payload.includes
          };
        }
      }
    }
    return payload;
  },
  /*
   * @override
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
  normalize(modelClass, resourceHash) {
    let data = null;
    let normalize = this.normalizeResourceHash(modelClass, resourceHash);
    modelClass = normalize.modelClass;
    resourceHash = normalize.resourceHash;
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
  extractType(modelClass, resourceHash) {
    var typeKey = Ember.get(this, 'typeKey');
    var type = resourceHash[typeKey];
    return Ember.String.dasherize(type);
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
