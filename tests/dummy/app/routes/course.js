import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findRecord( 'course', param.id );
  }
});
