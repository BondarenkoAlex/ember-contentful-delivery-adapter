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


  //app.import("vendor/javascripts/jquery.flexslider-min.js");
  //app.import('vendor/javascripts/gmaps.js');

  //D:\Users\Alexey\Documents\Ember\Project\ember-contentful-delivery-adapter\tests\dummy\public\assets\javascripts\gmaps.js
  if (app.env === 'development') {
    app.import("vendor/javascripts/gmaps.js");
    app.import("vendor/javascripts/jquery.flexslider-min.js");

    //app.import("vendor/styles/reset.css");
    //app.import("vendor/styles/style.css");
    //app.import("vendor/styles/grid.css");
    //app.import("vendor/styles/ie.css");
    //
    //app.import("vendor/javascripts/jquery.flexslider-min.js");
    //app.import("vendor/styles/flexslider.css");
    //
    //app.import('vendor/javascripts/gmaps.js');
  }
  //
  //if (app.env === 'production') {
  //
  //}
  //
  if (app.env === 'test') {
    //app.import("node_modules/chai-as-promised/lib/chai-as-promised.js", { type: 'test' });
    //exclude: ["vendor/styles/style.css"]
    //app.import("vendor/styles/reset.css", { type: 'test' });
    //app.import("vendor/styles/style.css", { type: 'test' });
    //app.import("vendor/styles/grid.css", { type: 'test' });
    //app.import("vendor/styles/ie.css", { type: 'test' });
  }

  return app.toTree();
};
