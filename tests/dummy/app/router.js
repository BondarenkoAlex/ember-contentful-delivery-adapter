import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('courses');
  this.route('recipes');
  this.route('calendar');
  this.route('chefs');
  this.route('contacts');
  this.route('home');
  this.route('culinary-teachers', { path: '/culinary-teachers/:id' });
});

export default Router;
