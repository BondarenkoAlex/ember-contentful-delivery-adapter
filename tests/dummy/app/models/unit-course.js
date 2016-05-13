import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr(),
  image: DS.belongsTo('asset')
});
