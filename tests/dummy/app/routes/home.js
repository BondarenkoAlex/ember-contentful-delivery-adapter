import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      sliderRotators : this.store.query('slider-rotator', { limit:2 }),
      recipes		: this.store.query( 'recipe', { limit:3, skip:0, order:"sys.updatedAt" } ),
      courses   : this.store.query('course', { limit:3, skip:1 } ),
      news      : this.store.query( 'news', { limit:2 } )
    });
  }
});
