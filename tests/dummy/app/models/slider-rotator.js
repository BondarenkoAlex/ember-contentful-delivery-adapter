import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
  title: DS.attr('string'),
  image: DS.belongsTo('asset')
});
