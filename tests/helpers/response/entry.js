import Ember from 'ember';

function entryRes() {
  let jsonResponse = `
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "m21hvnsjmt8a"
          }
        },
        "id": "3eOlNEHDpmgsgMmMwgKo2K",
        "type": "Entry",
        "createdAt": "2016-03-11T10:48:33.575Z",
        "updatedAt": "2016-03-25T08:37:14.204Z",
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "commentPost"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Entries Title",
        "numberFeildMy": 123,
        "dataFeildMy": "2016-03-02T10:05+03:00",
        "locationFeildMy": {
          "lon": 37.6173,
          "lat": 55.755826
        },
        "mediaFieldMy": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "2dNx7g19AokMyKq4e46guk"
          }
        },
        "booleanFieldMy": true,
        "jsonObjectFieldMy": {
          "id": "tirtyrttle",
          "irtyd": "json",
          "nrtyame": "Tirtytle",
          "tyfdype": "json",
          "tyrtype": "Symbol",
          "reqghuired": false,
          "disfghabled": false,
          "linrtyrtkType": "json",
          "lortyhgcalized": false
        },
        "referenceFieldToOneMy": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "3eOlNEHDpmgsgMmMwgKo2K"
          }
        },
        "referenceFieldToManyMy": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "4fN8l0PIxOiKW4Oyi4MU2k"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "4iSgf7NFheISOgAYsuQAOO"
            }
          }
        ],
        "referenceFieldToOneMyCard": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "4iSgf7NFheISOgAYsuQAOO"
          }
        },
        "referenceFieldToManyMyCards": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "3eOlNEHDpmgsgMmMwgKo2K"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "4fN8l0PIxOiKW4Oyi4MU2k"
            }
          }
        ]
      }
    }
  `;
  return Ember.$.parseJSON(jsonResponse);
}

function entryResApi() {
  let jsonResponse = `
    {
       "data":{
          "id":"3eOlNEHDpmgsgMmMwgKo2K",
          "type":"comment-post",
          "attributes":{
             "title":"Entries Title",
             "numberFeildMy":123,
             "dataFeildMy":"Wed Mar 02 2016 09:05:00 GMT+0200 (Восточная Европа (зима))",
             "locationFeildMy":{
                "lon":37.6173,
                "lat":55.755826
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
             "sysCreatedAt":"Fri Mar 11 2016 12:48:33 GMT+0200 (Восточная Европа (зима))",
             "sysUpdatedAt":"Fri Mar 25 2016 10:37:14 GMT+0200 (Восточная Европа (зима))",
             "sysRevision":2,
             "sysLocale":"en-US"
          },
          "relationships":{
             "mediaFieldMy":{
                "data":{
                   "type":"asset",
                   "id":"2dNx7g19AokMyKq4e46guk"
                }
             },
             "referenceFieldToOneMy":{
                "data":{
                   "type":"entry",
                   "id":"3eOlNEHDpmgsgMmMwgKo2K"
                }
             },
             "referenceFieldToManyMy":{
                "data":[
                   {
                      "type":"entry",
                      "id":"4fN8l0PIxOiKW4Oyi4MU2k"
                   },
                   {
                      "type":"entry",
                      "id":"4iSgf7NFheISOgAYsuQAOO"
                   }
                ]
             },
             "referenceFieldToOneMyCard":{
                "data":{
                   "type":"entry",
                   "id":"4iSgf7NFheISOgAYsuQAOO"
                }
             },
             "referenceFieldToManyMyCards":{
                "data":[
                   {
                      "type":"entry",
                      "id":"3eOlNEHDpmgsgMmMwgKo2K"
                   },
                   {
                      "type":"entry",
                      "id":"4fN8l0PIxOiKW4Oyi4MU2k"
                   }
                ]
             },
             "sysSpace":{
                "data":{
                   "type":"space",
                   "id":"m21hvnsjmt8a"
                }
             }
          }
       },
       "included":[

       ]
    }
  `;
  return Ember.$.parseJSON(jsonResponse);
}

let entryResponse = entryRes();
let entryResponseApi = entryResApi();

export {entryResponse, entryResponseApi};
