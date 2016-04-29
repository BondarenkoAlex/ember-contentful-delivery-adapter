import Ember from 'ember';

function queryContentTypeRes() {
  let jsonResponse = `
    {
      "sys": {
        "type": "Array"
      },
      "total": 2,
      "skip": 0,
      "limit": 100,
      "items": [
        {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "m21hvnsjmt8a"
              }
            },
            "id": "4iSgf7NFheISOgAYsuQAOO",
            "type": "Entry",
            "createdAt": "2016-03-03T12:06:09.724Z",
            "updatedAt": "2016-03-03T12:06:09.724Z",
            "revision": 1,
            "contentType": {
              "sys": {
                "type": "Link",
                "linkType": "ContentType",
                "id": "post"
              }
            },
            "locale": "en-US"
          },
          "fields": {
            "title": "Post1",
            "mydescriptions": "Discriptions1"
          }
        },
        {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "m21hvnsjmt8a"
              }
            },
            "id": "4fN8l0PIxOiKW4Oyi4MU2k",
            "type": "Entry",
            "createdAt": "2016-03-24T14:27:21.408Z",
            "updatedAt": "2016-03-24T14:27:21.408Z",
            "revision": 1,
            "contentType": {
              "sys": {
                "type": "Link",
                "linkType": "ContentType",
                "id": "post"
              }
            },
            "locale": "en-US"
          },
          "fields": {
            "title": "name",
            "mydescriptions": "dfgdfgdf"
          }
        }
      ]
    }
  `;
  return Ember.$.parseJSON(jsonResponse);
}

let queryContentTypeResponse = queryContentTypeRes();

export {queryContentTypeResponse};
