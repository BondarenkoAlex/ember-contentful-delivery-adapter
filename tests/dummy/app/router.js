import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('courses');
  this.route('course', { path:'courses/course/:id'});
  this.route('recipes');
  this.route('recipe', { path:'recipes/recipe/:id'});
  this.route('calendar');
  this.route('chefs');
  this.route('contacts');
  this.route('chefs');
  this.route('chef', { path: '/chef/:id' });
  //this.route('recipe');
  this.route('news', { path: '/news/:id' });
  this.route('calendar-event', { path: '/calendar-event/:id' });
  this.route('education-calendar', { path: '/education-calendar/:id' });
});

export default Router;
