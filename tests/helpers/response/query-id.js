import Ember from 'ember';

function queryIdRes() {
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
      ],
      "includes": {
        "Entry": [
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
          }
        ],
        "Asset": [
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
    }
  `;
  return Ember.$.parseJSON(jsonResponse);
}

let queryIdResponse = queryIdRes();

export {queryIdResponse};
