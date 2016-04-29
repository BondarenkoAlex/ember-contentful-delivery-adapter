import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
  title: DS.attr('string'),
  mydescriptions: DS.attr('string')
});
/*

{
  "sys":{
    "type":"Array"
  },
  "total":1,
  "skip":0,
  "limit":100,
  "items":[
    {
      "sys":{
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"m21hvnsjmt8a"
          }
        },
        "id":"4iSgf7NFheISOgAYsuQAOO",
        "type":"Entry",
        "createdAt":"2016-03-03T12:06:09.724Z",
        "updatedAt":"2016-03-03T12:06:09.724Z",
        "revision":1,
        "contentType":{
          "sys":{
            "type":"Link",
            "linkType":"ContentType",
            "id":"post"
          }
        },
        "locale":"en-US"
      },
      "fields":{
        "title":"Post1",
        "mydescriptions":"Discriptions1"
      }
    }
  ]
}

*/
