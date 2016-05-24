import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord( 'contact', '2o9EveNBtSc2I2EsGAciSi' );
  }
});
