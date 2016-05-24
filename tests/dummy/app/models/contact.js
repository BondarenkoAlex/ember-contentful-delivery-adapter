import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
  title	: DS.attr('string'),
  address	: DS.attr('string'),
  company	: DS.attr('string'),
  freephone	: DS.attr('string'),
  telephone	: DS.attr('string'),
  fax	: DS.attr('string'),
  eMail	: DS.attr('string'),
  location	: DS.attr()
});
