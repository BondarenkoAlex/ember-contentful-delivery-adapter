import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      news              : this.store.query( 'news', { limit:5 } ),
      calendarEvent     : this.store.findAll('calendar-event'),
      educationCalendar :this.store.query('education-calendar', { limit:2 } )
    })
  }
});
