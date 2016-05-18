import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findRecord( 'recipe', param.id );
  }
});
