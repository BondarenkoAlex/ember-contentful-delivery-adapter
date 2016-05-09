import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('spaces');
  this.route('space');
  this.route('ContentTypes');
  this.route('ContentType');
  this.route('entries');
  this.route('entry');
  this.route('newspace');
  this.route('entryquery');
  this.route('asset');

  this.route('posts');
  this.route('commentPost');
  this.route('post');
  this.route('path');
});

export default Router;
