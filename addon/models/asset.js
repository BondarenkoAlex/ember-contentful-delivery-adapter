import DS from 'ember-data';

export default DS.Model.extend({
  sysCreatedAt: DS.attr('date'),
  sysUpdatedAt: DS.attr('date'),
  sysRevision : DS.attr('number'),

  sysLocale  : DS.attr('string'),

  title      : DS.attr('string'),
  description: DS.attr('string'),
  file       : DS.attr(),
  sysSpace   : DS.belongsTo('space')
});
