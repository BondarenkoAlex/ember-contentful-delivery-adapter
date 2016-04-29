import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return this.store.createRecord('space');
    return this.store.findRecord('space', 'm21hvnsjmt8a' );
  }
});
