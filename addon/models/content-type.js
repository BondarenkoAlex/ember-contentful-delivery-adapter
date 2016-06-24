import DS from 'ember-data';

export default DS.Model.extend({
  sysCreatedAt   : DS.attr('date'),
  sysUpdatedAt   : DS.attr('date'),
  sysRevision    : DS.attr('number'),

  name        : DS.attr('string'),
  displayField: DS.attr('string'),
  description : DS.attr('string'),
  fields      : DS.attr(),

  sysSpace       : DS.belongsTo('space')
});
