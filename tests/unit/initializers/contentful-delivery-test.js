/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it,
  beforeEach
  } from 'mocha';
import Ember from 'ember';
import { initialize } from 'ember-contentful-delivery-adapter/initializers/contentful-delivery';

describe('InitialInitializer', function() {
  let container, application;

  beforeEach(function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
      application.set('contentful', {
        namespace   : 'spaces/m21hvnsjmt8a',
        access_token: '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb'
      });
    });
  });

  // Replace this with your real tests.
  it('works', function() {
    initialize(application);

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok;
  });
});
