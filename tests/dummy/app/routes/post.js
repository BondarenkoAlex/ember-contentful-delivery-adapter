import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('post', '4iSgf7NFheISOgAYsuQAOO' );
    //return this.store.query('post', {
    //  'sys.id' : '4iSgf7NFheISOgAYsuQAOO'
    //} );

    //return this.store.queryRecord('post', {
    //  'sys.id' : '4iSgf7NFheISOgAYsuQAOO'
    //} );
  }
});
