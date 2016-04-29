import Ember from 'ember';

function assetsRes() {
  let jsonResponse = `
    {
      "sys": {
        "type": "Array"
      },
      "total": 1,
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
            "id": "2dNx7g19AokMyKq4e46guk",
            "type": "Asset",
            "createdAt": "2016-03-11T10:46:22.475Z",
            "updatedAt": "2016-03-11T10:46:22.475Z",
            "revision": 1,
            "locale": "en-US"
          },
          "fields": {
            "title": "Название медиа ресурса",
            "description": "Его описание",
            "file": {
              "url": "//assets.contentful.com/m21hvnsjmt8a/2dNx7g19AokMyKq4e46guk/6b741e91435a5b259894ffaae817cd6b/media-sql.txt",
              "details": {
                "size": 3171
              },
              "fileName": "media-sql.txt",
              "contentType": "text/plain"
            }
          }
        }
      ]
    }
  `;
  return Ember.$.parseJSON(jsonResponse);
}

let assetsResponse = assetsRes();

export {assetsResponse};
