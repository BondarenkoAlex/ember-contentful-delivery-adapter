import Ember from 'ember';

function contentTypeRes() {
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
        "id": "commentPost",
        "type": "ContentType",
        "createdAt": "2016-03-11T10:29:22.261Z",
        "updatedAt": "2016-03-25T08:33:37.415Z",
        "revision": 4
      },
      "displayField": "title",
      "name": "Comment Post",
      "description": "Комментарии к посту",
      "fields": [
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "disabled": false
        },
        {
          "id": "numberFeildMy",
          "name": "Number Feild My",
          "type": "Integer",
          "localized": false,
          "required": false,
          "disabled": false
        },
        {
          "id": "dataFeildMy",
          "name": "Data Feild My",
          "type": "Date",
          "localized": false,
          "required": false,
          "disabled": false
        },
        {
          "id": "locationFeildMy",
          "name": "Location Feild My",
          "type": "Location",
          "localized": false,
          "required": false,
          "disabled": false
        },
        {
          "id": "mediaFieldMy",
          "name": "Media Field My",
          "type": "Link",
          "localized": false,
          "required": false,
          "disabled": false,
          "linkType": "Asset"
        },
        {
          "id": "booleanFieldMy",
          "name": "Boolean Field My",
          "type": "Boolean",
          "localized": false,
          "required": false,
          "disabled": false
        },
        {
          "id": "jsonObjectFieldMy",
          "name": "JSON Object Field My",
          "type": "Object",
          "localized": false,
          "required": false,
          "disabled": false
        },
        {
          "id": "referenceFieldToOneMy",
          "name": "Reference Field To One My",
          "type": "Link",
          "localized": false,
          "required": false,
          "disabled": false,
          "linkType": "Entry"
        },
        {
          "id": "referenceFieldToManyMy",
          "name": "Reference Field To Many My",
          "type": "Array",
          "localized": false,
          "required": false,
          "disabled": false
        },
        {
          "id": "referenceFieldToOneMyCard",
          "name": "Reference Field To One My Card",
          "type": "Link",
          "localized": false,
          "required": false,
          "disabled": false,
          "linkType": "Entry"
        },
        {
          "id": "referenceFieldToManyMyCards",
          "name": "Reference Field To Many My Cards",
          "type": "Array",
          "localized": false,
          "required": false,
          "disabled": false
        }
      ]
    }
  `;
  return Ember.$.parseJSON(jsonResponse);
}

function contentTypeResApi() {
  let jsonResponse = `
    {
       "data":{
          "id":"commentPost",
          "type":"content-type",
          "attributes":{
             "sysCreatedAt":"Fri Mar 11 2016 12:29:22 GMT+0200 (Восточная Европа (зима))",
             "sysUpdatedAt":"Fri Mar 25 2016 10:33:37 GMT+0200 (Восточная Европа (зима))",
             "sysRevision":4,
             "name":"Comment Post",
             "displayField":"title",
             "description":"Комментарии к посту",
             "fields":[
                {
                   "id":"title",
                   "name":"Title",
                   "type":"Symbol",
                   "localized":false,
                   "required":false,
                   "disabled":false
                },
                {
                   "id":"numberFeildMy",
                   "name":"Number Feild My",
                   "type":"Integer",
                   "localized":false,
                   "required":false,
                   "disabled":false
                },
                {
                   "id":"dataFeildMy",
                   "name":"Data Feild My",
                   "type":"Date",
                   "localized":false,
                   "required":false,
                   "disabled":false
                },
                {
                   "id":"locationFeildMy",
                   "name":"Location Feild My",
                   "type":"Location",
                   "localized":false,
                   "required":false,
                   "disabled":false
                },
                {
                   "id":"mediaFieldMy",
                   "name":"Media Field My",
                   "type":"Link",
                   "localized":false,
                   "required":false,
                   "disabled":false,
                   "linkType":"Asset"
                },
                {
                   "id":"booleanFieldMy",
                   "name":"Boolean Field My",
                   "type":"Boolean",
                   "localized":false,
                   "required":false,
                   "disabled":false
                },
                {
                   "id":"jsonObjectFieldMy",
                   "name":"JSON Object Field My",
                   "type":"Object",
                   "localized":false,
                   "required":false,
                   "disabled":false
                },
                {
                   "id":"referenceFieldToOneMy",
                   "name":"Reference Field To One My",
                   "type":"Link",
                   "localized":false,
                   "required":false,
                   "disabled":false,
                   "linkType":"Entry"
                },
                {
                   "id":"referenceFieldToManyMy",
                   "name":"Reference Field To Many My",
                   "type":"Array",
                   "localized":false,
                   "required":false,
                   "disabled":false
                },
                {
                   "id":"referenceFieldToOneMyCard",
                   "name":"Reference Field To One My Card",
                   "type":"Link",
                   "localized":false,
                   "required":false,
                   "disabled":false,
                   "linkType":"Entry"
                },
                {
                   "id":"referenceFieldToManyMyCards",
                   "name":"Reference Field To Many My Cards",
                   "type":"Array",
                   "localized":false,
                   "required":false,
                   "disabled":false
                }
             ]
          },
          "relationships":{
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

let contentTypeResponse = contentTypeRes();
let contentTypeResponseApi = contentTypeResApi();

export {contentTypeResponse, contentTypeResponseApi};
