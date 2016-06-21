/* jshint unused: vars */
import setupStore from 'dummy/tests/helpers/store';
import Ember from 'ember';
import DS from 'ember-data';

import { expect } from 'chai';
import {
  describeModule,
  it
  } from 'ember-mocha';

var store, env, serializer;

describeModule('serializer:contentful-delivery', 'Serializer',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function () {

    describe('#config', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = setupStore();
        store = env.store;
        serializer = env.contentfulDeliverySerializer;
      });

      afterEach(function (done) {
        // runs after each test in this block
        Ember.run(store, 'destroy');
        Ember.run(env.container, 'destroy');
        Ember.run(serializer, 'destroy');
        done();
      });

      it('exists', function () {
        let serializer = this.subject();
        expect(serializer).to.be.an('object');
      });

      it('method extractMeta()', function () {
        let payload = {
          "sys":{
            "type":"Array"
          },
          "total":1,
          "skip":0,
          "limit":100,
          "items":[  ],
          "includes":{  }
        };
        let result = serializer.extractMeta(store, null, payload);
        //debugger;
        expect(result).deep.equal({
          "total":1,
          "skip":0,
          "limit":100
        });
      });

      it('method _normalizeResourceHash(). The "type" is not "ContentType"', function () {
        env.registry.register( 'model:post', DS.Model.extend( { }) );

        let resourceHash = {
          "sys"   : {
            "space"      : {
              "sys": {
                "type"    : "Link",
                "linkType": "Space",
                "id"      : "crosqmsbfuzt"
              }
            },
            "id"         : "5SZjfz4REc08awcE02cKog",
            "type"       : "Entry",
            "revision"   : 1,
            "contentType": {
              "sys": {
                "type"    : "Link",
                "linkType": "ContentType",
                "id"      : "post"
              }
            },
            "locale"     : "en-US"
          },
          "fields": {
            "title"          : "string",
            "description"    : "string",
            "longDescription": "string"
          }
        };

        let modelClass = store.modelFor('post');

        let result = serializer._normalizeResourceHash(modelClass, resourceHash);
        expect(result).to.have.property('sysSpace');
        expect(result).to.have.property('sysId');
        expect(result).to.have.property('sysType');
        expect(result).to.have.property('sysRevision');
        expect(result).to.have.property('sysContentType');
        expect(result).to.have.property('sysLocale');
        expect(result).to.have.property('title');
        expect(result).to.have.property('description');
        expect(result).to.have.property('longDescription');
      });

      it('method _normalizeResourceHash(). The "type" is "ContentType"', function () {
        env.registry.register( 'model:content-type', DS.Model.extend( { }) );

        let resourceHash = {
          "sys"   : {
            "space"      : {
              "sys": {
                "type"    : "Link",
                "linkType": "Space",
                "id"      : "crosqmsbfuzt"
              }
            },
            "id"         : "5SZjfz4REc08awcE02cKog",
            "type"       : "ContentType",
            "revision"   : 1,
            "contentType": {
              "sys": {
                "type"    : "Link",
                "linkType": "ContentType",
                "id"      : "news"
              }
            },
            "locale"     : "en-US"
          },
          "fields": {
            "title"          : "string",
            "description"    : "string",
            "longDescription": "string"
          }
        };

        let modelClass = store.modelFor('content-type');

        let result = serializer._normalizeResourceHash(modelClass, resourceHash);
        expect(result).to.have.property('sysSpace');
        expect(result).to.have.property('sysId');
        expect(result).to.have.property('sysType');
        expect(result).to.have.property('sysRevision');
        expect(result).to.have.property('sysContentType');
        expect(result).to.have.property('sysLocale');
        expect(result).to.have.property('fields');
      });

      it('method _renameSys()', function () {
        let sys = {
          "space":{  },
          "id":"id",
          "type":"Entry",
          "createdAt":"string",
          "updatedAt":"string",
          "revision":2,
          "contentType":{  },
          "locale":"en-US"
        };
        let result = serializer._renameSys(sys);
        expect(result).deep.equal({
          sysSpace: {},
          sysId: "id",
          sysType: "Entry",
          sysCreatedAt: "string",
          sysUpdatedAt: "string",
          sysRevision: 2,
          sysContentType: {},
          sysLocale: "en-US"
        });
      });

      it('method extractId()', function () {
        let sys = {
          sysId: "id"
        };
        let result = serializer.extractId(null, sys);
        expect(result).to.equal("id");
      });

      it('method extractType() when "type" equal "Entry"', function () {
        let sys = {
          "sysSpace":{  },
          "sysId":"id",
          "sysType":"Entry",
          "sysContentType":{
            "sys":{
              "type":"Link",
              "linkType":"ContentType",
              "id":"post"
            }
          }
        };
        let result = serializer.extractType(null, sys);
        expect(result).to.equal("post");
      });

      it('method extractType() when "type" not equal "Entry"', function () {
        let sys = {
          "sysSpace":{  },
          "sysId":"id",
          "sysType":"Asset",
          sysCreatedAt: "string",
          sysUpdatedAt: "string"
        };
        let result = serializer.extractType(null, sys);
        expect(result).to.equal("Asset");
      });

      it('method extractAttributes()', function () {
        env.registry.register( 'model:post', DS.Model.extend( {
          title: DS.attr('string'),
          descriptions: DS.attr('string'),
          asset:  DS.belongsTo('asset'),
          comments: DS.hasMany('comment')
        }) );

        let responseObjNormalize = {
          "sysSpace":{  },
          "sysId":"id",
          "sysType":"Entry",
          "sysContentType":{
            "sys":{
              "type":"Link",
              "linkType":"ContentType",
              "id":"post"
            }
          },
          "title" : "string",
          "descriptions" : "string",
          "asset" : {},
          "comments": []
        };

        let modelClass = store.modelFor('post');

        let result = serializer.extractAttributes(modelClass, responseObjNormalize);
        expect(result).deep.equal({
          descriptions: "string",
          title: "string"
        });
      });

      it('method extractRelationship() when "linkType" not equal "Entry"', function () {
        let relationshipHash = {
          "sys": {
            "type"    : "Link",
            "linkType": "Asset",
            "id"      : "idAsset"
          }
        };
        let result = serializer.extractRelationship('asset', relationshipHash);
        expect(result).deep.equal({
          id: "idAsset",
          type: "Asset"
        });
      });

      it('method extractRelationship() when "linkType" equal "Entry". Model name is "post"', function () {
        let relationshipHash = {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "AAA"
          }
        };
        let result = serializer.extractRelationship('post', relationshipHash);
        expect(result).deep.equal({
          id: "AAA",
          type: "post"
        });
      });

      it('method extractRelationship() when "linkType" equal "Entry". Model name is "other"', function () {
        let relationshipHash = {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "AAA"
          }
        };
        let result = serializer.extractRelationship('other', relationshipHash);
        expect(result).deep.equal({
          id: "AAA",
          type: "other"
        });
      });

      it('method extractRelationships()', function () {
        env.registry.register( 'model:post', DS.Model.extend( {
          title: DS.attr('string'),
          descriptions: DS.attr('string'),
          asset:  DS.belongsTo('asset'),
          comments: DS.hasMany('comment')
        }) );

        let relationshipHash = {
          "sysSpace":{  },
          "sysId":"id",
          "sysType":"Entry",
          "sysContentType":{
            "sys":{
              "type":"Link",
              "linkType":"ContentType",
              "id":"post"
            }
          },
          "title" : "string",
          "descriptions" : "string",
          "asset" : {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "idAsset"
            }
          },
          "comments": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "AAA"
              }
            },
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "BBB"
              }
            }
          ]
        };

        let modelClass = store.modelFor('post');

        let result = serializer.extractRelationships(modelClass, relationshipHash);
        expect(result).deep.equal({
          "asset"   : {
            "data": {
              "type": "Asset",
              "id"  : "idAsset"
            }
          },
          "comments": {
            "data": [
              {
                "type": "comment",
                "id"  : "AAA"
              },
              {
                "type": "comment",
                "id"  : "BBB"
              }
            ]
          }
        });
      });



    });

  }
);
