import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('courses');
  this.route('recipes', function() {
    this.route('recipe', { path:'/:id'})
  });
  this.route('calendar');
  this.route('chefs');
  this.route('contacts');
  this.route('culinary-teachers', { path: '/culinary-teachers/:id' });
});

export default Router;
