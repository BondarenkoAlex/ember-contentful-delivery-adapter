import Ember from 'ember';

export default Ember.Route.extend({
  // redirect: function() {
  //   this.transitionTo('home');
  // }
  model() {
    return Ember.RSVP.hash({
      sliderRotator         : this.store.findAll('slider-rotator')
    })
  }
});
