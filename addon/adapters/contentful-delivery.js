import Ember from 'ember';
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
	defaultSerializer: '-contentful-delivery',

	host: 'https://cdn.contentful.com',

	parentModelName : 'entry',

	headers: {
		'Accept'        : 'application/vnd.api+json',
		'content-type'  : 'application/vnd.contentful.delivery.v1+json'
	},
  /**
   @overrade
   */
  findRecord(store, type, id, snapshot) {
    let modelName = type.modelName;
    let query = {};
    if (modelName.toLowerCase() === 'Space'.toLowerCase()) {
      modelName = null;
      id = null;
    }
    else if ( modelName.toLowerCase() === 'Entry'.toLowerCase() ){
     throw new Ember.Error("You may not call `findRecord` for model 'Entry'. Use 'id' Content-type as model name");
    }
    else if ( modelName.toLowerCase() !== 'Asset'.toLowerCase() &&
              modelName.toLowerCase() !== 'Content-type'.toLowerCase()) {
      modelName = 'Entry';
    }
    query = this.addTokenToQuery(query);
    if (this.sortQueryParams) {
      query = this.sortQueryParams(query);
    }

    const url = this.buildURL(modelName, id, snapshot, 'findRecord');

    return this.ajax(url, 'GET', {data: query});
  },

  /**
   @overrade
   */
  findAll(store, type, sinceToken, snapshotRecordArray) {
    let modelName = type.modelName;

    let query = {};

    if ( modelName.toLowerCase() === 'Space'.toLowerCase() ){
      throw new Ember.Error("You may not call `findAll` for model 'Space'. Use 'findRecord'");
    }
    else if ( modelName.toLowerCase() === 'Entry'.toLowerCase() ){
     throw new Ember.Error("You may not call `findAll` for model 'Entry'");
    }
    else if (modelName.toLowerCase() !== 'Asset'.toLowerCase() &&
              modelName.toLowerCase() !== 'Content-type'.toLowerCase() /*&&
              modelName.toLowerCase() !== 'Entry'.toLowerCase()*/ ) {
      query = Ember.$.extend(query, {
        'content_type': Ember.String.camelize(modelName)
      });
      modelName = 'Entry';
    }

    const url = this.buildURL(modelName, null, null, 'findAll');

    query = this.addTokenToQuery(query);

    if (sinceToken) {
      query.since = sinceToken;
    }

    if (this.sortQueryParams) {
      query = this.sortQueryParams(query);
    }

    return this.ajax(url, 'GET', {data: query});
  },

  /**
   @overrade
   */
  query(store, type, query) {
    let modelName = type.modelName;

    if (modelName.toLowerCase() === 'Space'.toLowerCase() ||
        modelName.toLowerCase() === 'Asset'.toLowerCase() ||
        modelName.toLowerCase() === 'Content-type'.toLowerCase()) {
      throw new Ember.Error("For all models besides 'asset', 'content-type', 'space'");
    }

    modelName = 'Entry';

    query = this.addTokenToQuery(query);

    if (this.sortQueryParams) {
      query = this.sortQueryParams(query);
    }

    let url = this.buildURL(modelName, null, null, 'query', query);

    return this.ajax(url, 'GET', {data: query});
  },

  /**
   @overrade
   * */
  queryRecord(store, type, query) {
    throw new Ember.Error("You may not call `queryRecord` on a store. Use 'query'.");
  },
  /**
   @overrade
   */
  findMany: null,

  /**
   @overrade
   */
  findHasMany: null,

  /**
   @overrade
   */
  findBelongsTo: null,

  /**
   @overrade
   */
  createRecord(store, type, snapshot) {
    throw new Ember.Error("You may not call `createRecord` on a store.");
  },

  /**
   @overrade
   */
  updateRecord(store, type, snapshot) {
    throw new Ember.Error("You may not call `updateRecord` on a store.");
  },

  /**
   @overrade
   * */
  deleteRecord(store, type, snapshot) {
    throw new Ember.Error("You may not call `deleteRecord` on a store.");
  },

  addTokenToQuery(query) {
    let access_token = this.get('access_token');
    query = Ember.$.extend(query, {
      access_token: access_token
    });
    return query;
  },

  pathForType(modelName) {
    let pluralize = Ember.String.pluralize(modelName);
    let camelize = Ember.String.camelize(pluralize);
    return Ember.String.decamelize(camelize);
  }

});
