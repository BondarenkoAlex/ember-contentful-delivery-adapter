import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
  teacherName: DS.attr('string'),
  teacherLastName: DS.attr('string'),
  cooking: DS.attr('string'),
  levelsTaught: DS.attr('string'),
  overview: DS.attr('string'),
  foto: DS.belongsTo('asset')
});
