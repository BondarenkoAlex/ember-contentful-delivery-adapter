import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('asset', '2dNx7g19AokMyKq4e46guk');
  }
});
