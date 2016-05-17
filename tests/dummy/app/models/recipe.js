import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
	title: DS.attr('string'),
  	preparationTime: DS.attr('string'),
  	ingredients: DS.attr(),
  	preparation: DS.attr('string'),
  	video: DS.attr('string'),
  	image: DS.belongsTo('asset')
  
});
