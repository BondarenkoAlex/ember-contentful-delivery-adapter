import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      sliderRotators : this.store.findAll('slider-rotator'),
      recipes		: this.store.query( 'recipe', { limit:3, skip:4 } )
    })
  }
});
