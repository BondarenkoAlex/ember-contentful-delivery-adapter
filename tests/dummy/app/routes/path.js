import Ember from 'ember';

export default Ember.Route.extend({
	  model: function() {
    //return this.store.createRecord('space');
    //return this.store.findAll('asset');
    //return this.store.findRecord('asset', '2dNx7g19AokMyKq4e46guk');
    //return this.store.findRecord('comment-post', '3eOlNEHDpmgsgMmMwgKo2K');
	return this.store.findAll('content-type');
    
  }
});
