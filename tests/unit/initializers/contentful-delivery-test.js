//import setupStore from 'dummy/tests/helpers/store';
import Ember from 'ember';
//import DS from 'ember-data';
import ContentfulDeliveryInitializer from 'dummy/initializers/contentful-delivery';

import {
  describeModule,
  it
  } from 'ember-mocha';

//var store, env, serializer;
let application;

describeModule('initializer:contentful-delivery', 'Initializer',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function () {
    describe('#', function () {
      beforeEach(function () {
        // runs before each test in this block
        Ember.run(function() {
          application = Ember.Application.create();
          application.deferReadiness();
          application.set('contentful', {
            namespace   : 'spaces/m21hvnsjmt8a',
            access_token: '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb'
          });
        });
      });

      it('exists', function () {
        ContentfulDeliveryInitializer.initialize(application);
        debugger;
        let initializer = this.subject();

        expect({}).to.be.an('object');
      });
    });
  }
);



//import Ember from 'ember';
//import ContentfulDeliveryInitializer from 'dummy/initializers/contentful-delivery';
//import { module, test } from 'qunit';
//
//let application;
//
//module('Unit | Initializer | contentful delivery', {
//  beforeEach() {
//    Ember.run(function() {
//      application = Ember.Application.create();
//      application.deferReadiness();
//      application.set('contentful', {
//        namespace   : 'spaces/m21hvnsjmt8a',
//        access_token: '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb'
//      });
//    });
//  }
//});
//
//// Replace this with your real tests.
//test('it works', function(assert) {
//  ContentfulDeliveryInitializer.initialize(application);
//
//  // you would normally confirm the results of the initializer here
//  assert.ok(true);
//});
