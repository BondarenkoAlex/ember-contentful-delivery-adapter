/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import("vendor/javascripts/gmaps.js");
  app.import("vendor/javascripts/jquery.flexslider-min.js");

  if (app.env === 'development') {

  }

  if (app.env === 'production') {

  }

  if (app.env === 'test') {
  }

  return app.toTree();
};