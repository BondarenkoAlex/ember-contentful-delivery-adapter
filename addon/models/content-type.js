import DS from 'ember-data';

export default DS.Model.extend({
  sysCreatedAt   : DS.attr('date'),
  sysUpdatedAt   : DS.attr('date'),
  sysRevision    : DS.attr('number'),

  name        : DS.attr('string'),
  displayField: DS.attr('string'),
  description : DS.attr('string'),
  fields      : DS.attr(),

  //sysFields      : DS.attr('array'), // не нужен
  sysSpace       : DS.belongsTo('space')
});
/*
 {
description: "Описание"
displayField: "title"
 fields: Array[3]
name: "Post"
  sysCreatedAt: "2016-03-03T11:32:50.810Z"
              sysId: "post"
  sysRevision: 3
  sysSpace: Object
              sysType: "ContentType"
  sysUpdatedAt: "2016-03-24T14:28:59.491Z"
 }
*/
