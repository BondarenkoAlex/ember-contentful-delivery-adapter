import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
  title: DS.attr('string'),
  numberFeildMy: DS.attr('number'),
  dataFeildMy: DS.attr('date'),
  locationFeildMy: DS.attr(), //'c-location'
  mediaFieldMy: DS.belongsTo('asset'),
  booleanFieldMy: DS.attr('boolean'),
  jsonObjectFieldMy: DS.attr(), //'c-json-object'
  referenceFieldToOneMy: DS.belongsTo('comment-post', { inverse: null }),
  referenceFieldToManyMy: DS.hasMany('post', { inverse: null }),
  referenceFieldToOneMyCard: DS.belongsTo('comment-post', { inverse: null }),
  referenceFieldToManyMyCards: DS.hasMany('post', { inverse: null })
});

/*
 {
    booleanFieldMy: true
    dataFeildMy: "2016-03-02T10:05+03:00"
    id: "3eOlNEHDpmgsgMmMwgKo2K"
    jsonObjectFieldMy: Object
    locationFeildMy: Object
    mediaFieldMy: Object
    numberFeildMy: 123
 referenceFieldToManyMy: Array[2]
 referenceFieldToManyMyCards: Array[2]
 referenceFieldToOneMy: Object
 referenceFieldToOneMyCard: Object
         sysContentType: Object
         sysCreatedAt: "2016-03-11T10:48:33.575Z"
         sysLocale: "en-US"
         sysRevision: 2
         sysSpace: Object
         sysUpdatedAt: "2016-03-25T08:37:14.204Z"
    title: "Entries Title"
    type: "Entry"
 }
*/

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
        "id":"3eOlNEHDpmgsgMmMwgKo2K",
        "type":"Entry",
        "createdAt":"2016-03-11T10:48:33.575Z",
        "updatedAt":"2016-03-25T08:37:14.204Z",
        "revision":2,
        "contentType":{
          "sys":{
            "type":"Link",
            "linkType":"ContentType",
            "id":"commentPost"
          }
        },
        "locale":"en-US"
      },
      "fields":{
        "title":"Entries Title",
        "numberFeildMy":123,
        "dataFeildMy":"2016-03-02T10:05+03:00",
        "locationFeildMy":{
          "lon":37.6173,
          "lat":55.755826
        },
        "mediaFieldMy":{
          "sys":{
            "type":"Link",
            "linkType":"Asset",
            "id":"2dNx7g19AokMyKq4e46guk"
          }
        },
        "booleanFieldMy":true,
        "jsonObjectFieldMy":{
          "id":"tirtyrttle",
          "irtyd":"json",
          "nrtyame":"Tirtytle",
          "tyfdype":"json",
          "tyrtype":"Symbol",
          "reqghuired":false,
          "disfghabled":false,
          "linrtyrtkType":"json",
          "lortyhgcalized":false
        },
        "referenceFieldToOneMy":{
          "sys":{
            "type":"Link",
            "linkType":"Entry",
            "id":"3eOlNEHDpmgsgMmMwgKo2K"
          }
        },
        "referenceFieldToManyMy":[
          {
            "sys":{
              "type":"Link",
              "linkType":"Entry",
              "id":"4fN8l0PIxOiKW4Oyi4MU2k"
            }
          },
          {
            "sys":{
              "type":"Link",
              "linkType":"Entry",
              "id":"4iSgf7NFheISOgAYsuQAOO"
            }
          }
        ],
        "referenceFieldToOneMyCard":{
          "sys":{
            "type":"Link",
            "linkType":"Entry",
            "id":"4iSgf7NFheISOgAYsuQAOO"
          }
        },
        "referenceFieldToManyMyCards":[
          {
            "sys":{
              "type":"Link",
              "linkType":"Entry",
              "id":"3eOlNEHDpmgsgMmMwgKo2K"
            }
          },
          {
            "sys":{
              "type":"Link",
              "linkType":"Entry",
              "id":"4fN8l0PIxOiKW4Oyi4MU2k"
            }
          }
        ]
      }
    }
  ],
  "includes":{
    "Entry":[
        {
          "sys":{
            "space":{
              "sys":{
                "type":"Link",
                "linkType":"Space",
                "id":"m21hvnsjmt8a"
              }
            },
            "id":"4fN8l0PIxOiKW4Oyi4MU2k",
            "type":"Entry",
            "createdAt":"2016-03-24T14:27:21.408Z",
            "updatedAt":"2016-03-24T14:27:21.408Z",
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
            "title":"name",
            "mydescriptions":"dfgdfgdf"
          }
        },
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
      ],
      "Asset":[
        {
          "sys":{
            "space":{
              "sys":{
                "type":"Link",
                "linkType":"Space",
                "id":"m21hvnsjmt8a"
              }
            },
            "id":"2dNx7g19AokMyKq4e46guk",
            "type":"Asset",
            "createdAt":"2016-03-11T10:46:22.475Z",
            "updatedAt":"2016-03-11T10:46:22.475Z",
            "revision":1,
            "locale":"en-US"
          },
          "fields":{
            "title":"Название медиа ресурса",
            "description":"Его описание",
            "file":{
              "url":"//assets.contentful.com/m21hvnsjmt8a/2dNx7g19AokMyKq4e46guk/6b741e91435a5b259894ffaae817cd6b/media-sql.txt",
              "details":{
                "size":3171
              },
              "fileName":"media-sql.txt",
              "contentType":"text/plain"
            }
          }
        }
      ]
    }
}

*/
