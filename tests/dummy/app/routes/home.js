import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      sliderRotators : this.store.query('slider-rotator', { limit:2 }),
      recipes		: this.store.query( 'recipe', { limit:3, skip:4 } )
    })
  }
});
