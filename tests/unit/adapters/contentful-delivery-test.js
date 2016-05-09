/* jshint unused: vars */
import setupStore from 'dummy/tests/helpers/store';
import Ember from 'ember';

import { moduleFor, test } from 'ember-qunit';

//import DS from 'ember-data';

//var get = Ember.get;
//var set = Ember.set;
var run = Ember.run;

var store, env, adapter;

moduleFor('adapter:contentful-delivery', 'Adapter | contentful delivery', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  beforeEach() {
    env = setupStore();
    store = env.store;
    adapter = env.contentfulDeliveryAdapter;
  },

  afterEach() {
    run(store, 'destroy');
    run(env.container, 'destroy');
    run(adapter, 'destroy');
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  assert.ok(adapter);
});

test('host config override', function(assert) {
  assert.equal(adapter.get('host'), 'https://cdn.contentful.com');
});

test('namespace config override', function(assert) {
  assert.equal(adapter.get('namespace'), 'spaces/m21hvnsjmt8a');
  assert.equal(adapter.get('access_token'), '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb');
});

test('headers config', function(assert) {
  let headers = adapter.get('headers');
  assert.equal(headers['Accept'], 'application/vnd.api+json');
  assert.equal(headers['content-type'], 'application/vnd.contentful.delivery.v1+json');
});

test('findRecord', function(assert) {
  let type, id;

  type = store.modelFor( 'asset' );
  id = '2dNx7g19AokMyKq4e46guk';
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets/2dNx7g19AokMyKq4e46guk', 'URL - model:asset');
    assert.deepEqual(options.data, {
      'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
    }, 'QUERY - model:asset');
  };
  adapter.findRecord(store, type, id, null);

  type = store.modelFor( 'content-type' );
  id = 'commentPost';
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types/commentPost', 'URL - model:content-type');
    assert.deepEqual(options.data, {
      'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
    }, 'QUERY - model:content-type');
  };
  adapter.findRecord(store, type, id, null);

  type = store.modelFor( 'space' );
  id = 'commentPost';
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a', 'URL - model:space');
    assert.deepEqual(options.data, {
      'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
    }, 'QUERY - model:space');
  };
  adapter.findRecord(store, type, id, null);

  type = store.modelFor( 'post' );
  id = '4iSgf7NFheISOgAYsuQAOO';
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries/4iSgf7NFheISOgAYsuQAOO', 'URL - model:post');
    assert.deepEqual(options.data, {
      'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
    }, 'QUERY - model:post');
  };
  adapter.findRecord(store, type, id, null);

  type = store.modelFor( 'entry' );
  id = '3eOlNEHDpmgsgMmMwgKo2K';
  assert.throws(
    function() {
      adapter.findRecord(store, type, id, null);
    },
    new Ember.Error("You may not call `findRecord` for model 'Entry'. Use 'id' Content-type as model name"),
    "You may not call `findRecord` for model 'entry'. Use 'id' Content-type as model name"
  );
});

test('findAll', function(assert) {
  let type;

  type = store.modelFor( 'asset' );
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets', 'URL - model:asset');
    assert.deepEqual(options.data, {
      'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
    }, 'QUERY - model:asset');
  };
  adapter.findAll(store, type, null, null);

  type = store.modelFor( 'content-type' );
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types', 'URL - model:content-type');
    assert.deepEqual(options.data, {
      'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
    }, 'QUERY - model:content-type');
  };
  adapter.findAll(store, type, null, null);

  type = store.modelFor( 'space' );
  assert.throws(
    function() {
      adapter.findAll(store, type, null, null);
    },
    new Ember.Error("You may not call `findAll` for model 'Space'. Use 'findRecord'"),
    "You may not call `findAll` for model 'space'"
  );

  type = store.modelFor( 'post' );
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries', 'URL - model:post');
    assert.deepEqual(options.data, {
      'access_token' : "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
      'content_type' : "post"
    }, 'QUERY - model:post');
  };
  adapter.findAll(store, type, null, null);

  type = store.modelFor( 'entry' );
  assert.throws(
    function() {
      adapter.findAll(store, type, null, null);
    },
    new Ember.Error("You may not call `findAll` for model 'Entry'"),
    "You may not call `findAll` for model 'entry'"
  );
});

test('query', function(assert) {
  let type, query;

  type = store.modelFor( 'asset' );
  query = {};
  assert.throws(
    function() {
      adapter.query(store, type, query);
    },
    new Ember.Error("For all models besides 'asset', 'content-type', 'space'"),
    "You may use 'query' for all models besides 'asset', 'content-type', 'space'"
  );

  type = store.modelFor( 'entry' );
  query = {'sys.id':'3eOlNEHDpmgsgMmMwgKo2K'};
  adapter.ajax = function(url, type, options) {
    assert.equal( url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries', 'URL - model:entry');
    assert.deepEqual(options.data, {
      'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
      'sys.id': "3eOlNEHDpmgsgMmMwgKo2K"
    }, 'QUERY - model:entry');
  };
  adapter.query(store, type, query);

});
