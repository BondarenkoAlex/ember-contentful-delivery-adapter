import Ember from 'ember';

export default Ember.Route.extend({
  //conten : Ember.inject.service('contentful'),
	model() {
    //this.get('contentful').namespace = 'newSpace';
        return this.store.findRecord('space', 'm21hvnsjmt8a' );
    }
});
