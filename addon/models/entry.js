import DS from 'ember-data';

export default DS.Model.extend({
  sysCreatedAt: DS.attr('date'),
  sysUpdatedAt: DS.attr('date'),
  sysRevision : DS.attr('number'),

  sysLocale: DS.attr('string'),
  sysSpace: DS.belongsTo('space'),/*,
  sysContentType: DS.belongsTo('content-type')*/
  title: DS.attr('string')
});
