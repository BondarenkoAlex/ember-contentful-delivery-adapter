import Ember from 'ember';
import DS from 'ember-data';
import Owner from './owner';

import ContentfulDeliveryAdapter from 'ember-contentful-delivery-adapter/adapters/contentful-delivery';
import ContentfulDeliverySerializer from 'ember-contentful-delivery-adapter/serializers/contentful-delivery';

import Asset        from 'ember-contentful-delivery-adapter/models/asset';
import ContentType  from 'ember-contentful-delivery-adapter/models/content-type';
import Entry        from 'ember-contentful-delivery-adapter/models/entry';
import Space        from 'ember-contentful-delivery-adapter/models/space';

export default function setupStore(options) {
  var container, registry, owner;
  var env = {};
  options = options || {};

  if (Ember.Registry) {
    registry = env.registry = new Ember.Registry();
    owner = Owner.create({
      __registry__: registry
    });
    container = env.container = registry.container({
      owner: owner
    });
    owner.__container__ = container;
  } else {
    container = env.container = new Ember.Container();
    registry = env.registry = container;
  }

  env.replaceContainerNormalize = function replaceContainerNormalize(fn) {
    if (env.registry) {
      env.registry.normalize = fn;
    } else {
      env.container.normalize = fn;
    }
  };

  var adapter = env.adapter = (options.adapter || '-default');
  delete options.adapter;

  if (typeof adapter !== 'string') {
    env.registry.register('adapter:-ember-data-test-custom', adapter);
    adapter = '-ember-data-test-custom';
  }

  for (var prop in options) {
    registry.register('model:' + Ember.String.dasherize(prop), options[prop]);
  }

  registry.register('service:store', DS.Store.extend({
    adapter: adapter
  }));

  registry.optionsForType('serializer', { singleton: false });
  registry.optionsForType('adapter', { singleton: false });
  //registry.register('adapter:-default', DS.Adapter);
  //
  //registry.register('serializer:-default', DS.JSONSerializer);
  //registry.register('serializer:-rest', DS.RESTSerializer);
  //
  //registry.register('adapter:-rest', DS.RESTAdapter);
  //
  //registry.register('adapter:-json-api', DS.JSONAPIAdapter);
  //registry.register('serializer:-json-api', DS.JSONAPISerializer);

  registry.register('transform:date', DS.DateTransform);
  registry.register('transform:boolean', DS.BooleanTransform);
  registry.register('transform:number', DS.NumberTransform);
  registry.register('transform:string', DS.StringTransform);

  registry.register('adapter:-contentful-delivery', ContentfulDeliveryAdapter);
  registry.register('serializer:-contentful-delivery', ContentfulDeliverySerializer);

  //env.restSerializer = container.lookup('serializer:-rest');
  env.store = container.lookup('service:store');
  //env.serializer = env.store.serializerFor('-default');
  //env.adapter = env.store.get('defaultAdapter');
  env.serializer = env.store.serializerFor('-contentful-delivery');
  env.adapter = env.store.adapterFor('-contentful-delivery');
  //env.container = container;
  //env.registry = registry;

  env.contentfulDeliveryAdapter = container.lookup('adapter:-contentful-delivery');
  env.contentfulDeliverySerializer = container.lookup('serializer:-contentful-delivery');

  //env.serializer = env.contentfulDeliveryAdapter;
  //env.adapter = env.contentfulDeliverySerializer;

  env.contentfulDeliveryAdapter.reopen({
    access_token: '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb',
    namespace   : "spaces/" + 'm21hvnsjmt8a'
  });
  env.contentfulDeliverySerializer.reopen({
    store : env.store
  });
  //registry.register('adapter:-default', env.contentfulDeliveryAdapter);
  //env.adapter = env.store.get('defaultAdapter');

  env.registry.register( 'model:asset', Asset);
  env.registry.register( 'model:content-type', ContentType);
  env.registry.register( 'model:space', Space);
  env.registry.register( 'model:entry', Entry );
  env.registry.register( 'model:post', Entry.extend( {
    title: DS.attr('string'),
    mydescriptions: DS.attr('string')
  }) );
  env.registry.register( 'model:comment-post', Entry.extend( {
    title: DS.attr('string'),
    numberFeildMy: DS.attr('number'),
    dataFeildMy: DS.attr('date'),
    locationFeildMy: DS.attr(),
    mediaFieldMy: DS.belongsTo('asset'),
    booleanFieldMy: DS.attr('boolean'),
    jsonObjectFieldMy: DS.attr(),
    referenceFieldToOneMy:  DS.belongsTo('entry'),
    referenceFieldToManyMy: DS.hasMany('entry'),
    referenceFieldToOneMyCard: DS.belongsTo('entry'),
    referenceFieldToManyMyCards: DS.hasMany('entry')
  }) );


  return env;
}

export {setupStore};

export function createStore(options) {
  return setupStore(options).store;
}
