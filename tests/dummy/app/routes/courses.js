import Ember from 'ember';

export default Ember.Route.extend({
  //model() {
  //
  //    return this.store.query( 'culinary-teacher', { limit:2 } ).then((result) => {
  //      this.meta = result.get('meta');
  //    })
  //
  //},
  //meta: null
  model() {
    return Ember.RSVP.hash({
      courses         : this.store.findAll('course'),
      culinaryTeachers: this.store.findAll('culinary-teacher')
      //culinaryTeachers: this.store.query( 'culinary-teacher', { limit:2 } )
    }).then((result) => {
      let meta = result.get('meta');
    })
  }
});
