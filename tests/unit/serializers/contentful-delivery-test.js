/* jshint unused: vars */
import setupStore from 'dummy/tests/helpers/store';
import Ember from 'ember';

import { moduleFor, /*moduleForModel,*/ test } from 'ember-qunit';
//import QUnit from 'qunit';

import {assetResponse} from 'dummy/tests/helpers/response/asset';
import {assetsResponse} from 'dummy/tests/helpers/response/assets';
import {contentTypeResponse, contentTypeResponseApi} from 'dummy/tests/helpers/response/content-type';
import {contentTypesResponse, contentTypesResponseApi} from 'dummy/tests/helpers/response/content-types';
import {entryResponse, entryResponseApi} from 'dummy/tests/helpers/response/entry';
import {entriesResponse, entriesResponseApi} from 'dummy/tests/helpers/response/entries';
import {queryContentTypeResponse} from 'dummy/tests/helpers/response/query-content-type';
import {queryIdResponse} from 'dummy/tests/helpers/response/query-id';
import {spaceResponse} from 'dummy/tests/helpers/response/space';

//import DS from 'ember-data';

//var get = Ember.get;
//var set = Ember.set;
var run = Ember.run;

var store, env, serializer;
//var spaceResponse,
//    assetResponse,
//    assetsResponse,
//    contentTypeResponse,
//    contentTypeResponseApi,
//    contentTypesResponse,
//    contentTypesResponseApi,
//    entryResponse,
//    queryContentTypeResponse,
//    queryIdResponse;

moduleFor('serializer:contentful-delivery', 'Serializer | contentful delivery', {
  // Specify the other units that are required for this test.
  //needs: ['serializer:contentful-delivery'],
  beforeEach() {
    env = setupStore();
    store = env.store;
    serializer = env.contentfulDeliverySerializer;

    //assetResponse = asset();
    //assetsResponse = assets();
    //contentTypeResponse = contentTypeRes();
    //contentTypeResponseApi = contentTypeResApi();
    //contentTypesResponse = contentTypesRes();
    //contentTypesResponseApi = contentTypesResApi();
    //entryResponse = entry();
    //queryContentTypeResponse = queryContentType();
    //queryIdResponse = queryId();
    //spaceResponse = space();
  },

  afterEach() {
    run(store, 'destroy');
    run(env.container, 'destroy');
    run(serializer, 'destroy');
  }
});

// Replace this with your real tests.
//test('it serializes records', function(assert) {
//  //let serializedRecord = serializer.serialize();
//  //assert.ok(serializedRecord);
//  let spaceResponses = 54;
//  assert.ok(1);
//});

test('normalizeMeta', function (assert) {
  let rezult;
  rezult = serializer.normalizeMeta( contentTypesResponse );
  assert.deepEqual(rezult.meta, {
    limit: 100,
    skip : 0,
    total: 2
  },'contentTypesResponse');

  rezult = serializer.normalizeMeta(assetsResponse);
  assert.deepEqual(rezult.meta, {
    limit: 100,
    skip : 0,
    total: 1
  },'assetsResponse');

  rezult = serializer.normalizeMeta(queryContentTypeResponse);
  assert.deepEqual(rezult.meta, {
    limit: 100,
    skip : 0,
    total: 2
  },'queryContentTypeResponse');

  rezult = serializer.normalizeMeta(queryIdResponse);
  assert.deepEqual(rezult.meta, {
    limit: 100,
    skip : 0,
    total: 1
  },'queryIdResponse');
});

test('_normalizeResponse - findAll for model:content-type', function (assert) {
  let rezult,
      payload,
      primaryModelClass,
      id,
      requestType,
      isSingle;

  payload = serializer.normalizeMeta(contentTypesResponse);
  primaryModelClass = store.modelFor( 'content-type' );
  id = null; //'commentPost';
  requestType = 'findAll';
  isSingle = false;
  rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
  //QUnit.dump.maxDepth = 10;
  assert.deepEqual(rezult.data.attribute, contentTypesResponseApi.data.attribute,'attribute - model:content-type');
});

test('_normalizeResponse - findRecord for model:content-type', function (assert) {
  let rezult,
      payload,
      primaryModelClass,
      id,
      requestType,
      isSingle;

  payload = serializer.normalizeMeta(contentTypeResponse);
  primaryModelClass = store.modelFor( 'content-type' );
  id = 'commentPost';
  requestType = 'findRecord';
  isSingle = true;
  rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
  //QUnit.dump.maxDepth = 10;
  assert.deepEqual(rezult.data.attributes.length, contentTypeResponseApi.data.attributes.length,'attribute length');
});

test('_normalizeResponse - findRecord for model:entry', function (assert) {
  let rezult,
      payload,
      primaryModelClass,
      id,
      requestType,
      isSingle;

  payload = serializer.normalizeMeta(entryResponse);
  primaryModelClass = store.modelFor( 'entry' );
  id = '3eOlNEHDpmgsgMmMwgKo2K';
  requestType = 'findRecord';
  isSingle = true;
  rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
  //QUnit.dump.maxDepth = 10;
  assert.deepEqual(rezult.data.attributes.length, entryResponseApi.data.attributes.length,'attributes length');
});

test('_normalizeResponse - findAll for model:entry', function (assert) {
  let rezult,
      payload,
      primaryModelClass,
      id,
      requestType,
      isSingle;

  payload = serializer.normalizeMeta(entriesResponse);
  primaryModelClass = store.modelFor( 'entry' );
  id = null; //'3eOlNEHDpmgsgMmMwgKo2K';
  requestType = 'findAll';
  isSingle = false;
  rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
  //QUnit.dump.maxDepth = 10;
  assert.deepEqual(rezult.data.length, entriesResponseApi.data.length,'data length');
});
