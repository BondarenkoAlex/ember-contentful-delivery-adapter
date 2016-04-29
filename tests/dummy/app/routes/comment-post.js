import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('comment-post', '3eOlNEHDpmgsgMmMwgKo2K');
  }
});
