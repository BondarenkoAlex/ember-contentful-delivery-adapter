/* jshint unused: vars */
import setupStore from 'dummy/tests/helpers/store';
import Ember from 'ember';
import DS from 'ember-data';

import {
  describeModule,
  it
  } from 'ember-mocha';

//var chai = require("chai");
//var { chaiAsPromised } = require("chai-as-promised");
//var { chaiAsPromised } = require("bower_components/chai-as-promised/lib/chai-as-promised");
//import {chaiAsPromised} from "npm:chai-as-promised";
//var fgd = chaiAsPromised;
//import {chaiAsPromised} from "bower_components/chai-as-promised/lib/chai-as-promised";
//chai.use(chaiAsPromised);
//D:\Users\Alexey\Documents\Ember\Project\ember-contentful-delivery-adapter\bower_components\chai-as-promised\lib\chai-as-promised.js

var store, env, adapter;

describeModule('adapter:contentful-delivery', 'Adapter',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function () {

    describe('#init', function () {
      it('exists', function () {
        let adapter = this.subject();
        expect(adapter).to.be.an('object');
      });
    }); // #init

    describe('#config', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = setupStore();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        Ember.run(store, 'destroy');
        Ember.run(env.container, 'destroy');
        Ember.run(adapter, 'destroy');
      });

      it('host', function () {
        let host = adapter.get('host');
        expect(host).to.equal('https://cdn.contentful.com');
      });

      it('namespace', function () {
        let namespace = adapter.get('namespace');
        expect(namespace).to.equal('spaces/m21hvnsjmt8a');
      });

      it('access_token', function () {
        let accessToken = adapter.get('access_token');
        expect(accessToken).to.equal('0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb');
      });

      it('headers["Accept"]', function () {
        let headers = adapter.get('headers');
        expect(headers['Accept']).to.equal('application/vnd.api+json');
      });

      it('headers["content-type"]', function () {
        let headers = adapter.get('headers');
        expect(headers['content-type']).to.equal('application/vnd.contentful.delivery.v1+json');
      });

    });

/*###########################################################*/

    describe('#findRecord', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = setupStore();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        Ember.run(store, 'destroy');
        Ember.run(env.container, 'destroy');
        Ember.run(adapter, 'destroy');
      });

      describe('#model "asset"', function () {

        it('test url', function () {
          let type, id;

          type = store.modelFor('asset');
          id = 'idAsset';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets/idAsset');
          };
          adapter.findRecord(store, type, id, null);

        });

        it('test query', function () {
          let type, id;

          type = store.modelFor('asset');
          id = 'idAsset';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);

        });
      });


      describe('#model "content-type"', function () {

        it('test url', function () {
          let type, id;

          type = store.modelFor('content-type');
          id = 'idContentType';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types/idContentType');
          };
          adapter.findRecord(store, type, id, null);

        });

        it('test query', function () {
          let type, id;

          type = store.modelFor('content-type');
          id = 'idContentType';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);

        });
      });

      describe('#model "space"', function () {

        it('test url', function () {
          let type, id;

          type = store.modelFor('space');
          id = 'null';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a');
          };
          adapter.findRecord(store, type, id, null);

        });

        it('test query', function () {
          let type, id;

          type = store.modelFor('content-type');
          id = 'null';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);

        });
      });

      describe('#model "entry"', function () {

        it('test', function () {
          let type, id;

          env.registry.register( 'model:entry', DS.Model.extend());

          type = store.modelFor('entry');
          id = 'idEntry';

          expect( function () {
            adapter.findRecord(store, type, id, null);
          } ).to.throw(Ember.Error);

        });
      });

      describe('#model "post"', function () {

        it('test url', function () {
          let type, id;

          //env.registry.register( 'model:post', DS.Model.extend() );
          type = store.modelFor('post');
          id = 'idPost';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries/idPost');
          };
          adapter.findRecord(store, type, id, null);

        });

        it('test query', function () {
          let type, id;

          //env.registry.register( 'model:post', DS.Model.extend());
          type = store.modelFor('post');
          id = 'idPost';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);

        });
      });
    });


/*###########################################################*/

    describe('#findAll', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = setupStore();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        Ember.run(store, 'destroy');
        Ember.run(env.container, 'destroy');
        Ember.run(adapter, 'destroy');
      });

      describe('#model "asset"', function () {
        it('test url', function () {
          let type;
          type = store.modelFor('asset');
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets');
          };
          adapter.findAll(store, type, null, null);
        });

        it('test query', function () {
          let type;
          type = store.modelFor('asset');
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findAll(store, type, null, null);
        });
      });


      describe('#model "content-type"', function () {
        it('test url', function () {
          let type;
          type = store.modelFor('content-type');
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types');
          };
          adapter.findAll(store, type, null, null);
        });

        it('test query', function () {
          let type;
          type = store.modelFor('content-type');
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findAll(store, type, null, null);
        });
      });

      describe('#model "space"', function () {
        it('test', function () {
          let type;
          type = store.modelFor('space');
          expect( function () {
            adapter.findAll(store, type, null, null);
          } ).to.throw(Ember.Error);
        });
      });

      describe('#model "entry"', function () {
        it('test', function () {
          let type;
          type = store.modelFor('entry');
          expect( function () {
            adapter.findAll(store, type, null, null);
          } ).to.throw(Ember.Error);
        });
      });

      describe('#model "post"', function () {
        it('test url', function () {
          let type;
          type = store.modelFor('post');
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries');
          };
          adapter.findAll(store, type, null, null);
        });

        it('test query', function () {
          let type;
          type = store.modelFor('post');
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
              'content_type' : "post"
            });
          };
          adapter.findAll(store, type, null, null);
        });
      });
    });


/*###########################################################*/

    describe('#query', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = setupStore();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        Ember.run(store, 'destroy');
        Ember.run(env.container, 'destroy');
        Ember.run(adapter, 'destroy');
      });

      describe('#model "asset"', function () {
        it('test', function () {
          let type, query;
          type = store.modelFor('asset');
          query = {'sys.id':'id'};
          expect( function () {
            adapter.query(store, type, query);
          } ).to.throw(Ember.Error);
        });
      });


      describe('#model "content-type"', function () {
        it('test', function () {
          let type, query;
          type = store.modelFor('content-type');
          query = {'sys.id':'id'};
          expect( function () {
            adapter.query(store, type, query);
          } ).to.throw(Ember.Error);
        });
      });

      describe('#model "space"', function () {
        it('test', function () {
          let type, query;
          type = store.modelFor('space');
          query = {'sys.id':'id'};
          expect( function () {
            adapter.query(store, type, query);
          } ).to.throw(Ember.Error);
        });
      });

      describe('#model "entry"', function () {
        it('test url', function () {
          let type, query;
          type = store.modelFor('entry');
          query = {'sys.id':'idEntry'};
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries');
          };
          adapter.query(store, type, query);
        });

        it('test query', function () {
          let type, query;
          type = store.modelFor('entry');
          query = {'sys.id':'idEntry'};
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
              'content_type':'entry',
              'sys.id' : "idEntry"
            });
          };
          adapter.query(store, type, query);
        });
      });

      describe('#model "post"', function () {
        it('test url', function () {
          let type, query;
          type = store.modelFor('post');
          query = {'sys.id':'idPost'};
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries');
          };
          adapter.query(store, type, query);
        });

        it('test query', function () {
          let type, query;
          type = store.modelFor('post');
          query = {'sys.id':'idPost'};
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
              'content_type':'post',
              'sys.id' : "idPost"
            });
          };
          adapter.query(store, type, query);
        });
      });

    });

  }
);
