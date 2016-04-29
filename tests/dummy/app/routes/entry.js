import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('entry', '3eOlNEHDpmgsgMmMwgKo2K');
  }
});
