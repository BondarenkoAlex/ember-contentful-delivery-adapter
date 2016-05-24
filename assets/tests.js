define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/components/google-map/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/google-map/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/google-map/component.js should pass jshint.\ncomponents/google-map/component.js: line 14, col 15, \'google\' is not defined.\ncomponents/google-map/component.js: line 17, col 22, \'google\' is not defined.\ncomponents/google-map/component.js: line 21, col 26, \'google\' is not defined.\ncomponents/google-map/component.js: line 25, col 5, \'google\' is not defined.\n\n4 errors');
  });
});
define('dummy/tests/components/header-site/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/header-site/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/header-site/component.js should pass jshint.\ncomponents/header-site/component.js: line 15, col 7, Missing semicolon.\n\n1 error');
  });
});
define('dummy/tests/components/pagination-comp/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/pagination-comp/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/pagination-comp/component.js should pass jshint.\ncomponents/pagination-comp/component.js: line 24, col 8, Missing semicolon.\n\n1 error');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/owner', ['exports', 'ember'], function (exports, _ember) {

  var Owner = undefined;

  if (_ember['default']._RegistryProxyMixin && _ember['default']._ContainerProxyMixin) {
    Owner = _ember['default'].Object.extend(_ember['default']._RegistryProxyMixin, _ember['default']._ContainerProxyMixin);
  } else {
    Owner = _ember['default'].Object.extend();
  }

  exports['default'] = Owner;
});
define('dummy/tests/helpers/owner.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/owner.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/owner.js should pass jshint.');
  });
});
define('dummy/tests/helpers/pagination.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/pagination.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/pagination.js should pass jshint.\nhelpers/pagination.js: line 23, col 3, \'options\' is not defined.\n\n1 error');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/asset', ['exports', 'ember'], function (exports, _ember) {

  function assetRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "space": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Space",\n            "id": "m21hvnsjmt8a"\n          }\n        },\n        "id": "2dNx7g19AokMyKq4e46guk",\n        "type": "Asset",\n        "createdAt": "2016-03-11T10:46:22.475Z",\n        "updatedAt": "2016-03-11T10:46:22.475Z",\n        "revision": 1,\n        "locale": "en-US"\n      },\n      "fields": {\n        "title": "Название медиа ресурса",\n        "description": "Его описание",\n        "file": {\n          "url": "//assets.contentful.com/m21hvnsjmt8a/2dNx7g19AokMyKq4e46guk/6b741e91435a5b259894ffaae817cd6b/media-sql.txt",\n          "details": {\n            "size": 3171\n          },\n          "fileName": "media-sql.txt",\n          "contentType": "text/plain"\n        }\n      }\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var assetResponse = assetRes();

  exports.assetResponse = assetResponse;
});
define('dummy/tests/helpers/response/asset.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/asset.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/asset.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/assets', ['exports', 'ember'], function (exports, _ember) {

  function assetsRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "type": "Array"\n      },\n      "total": 1,\n      "skip": 0,\n      "limit": 100,\n      "items": [\n        {\n          "sys": {\n            "space": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Space",\n                "id": "m21hvnsjmt8a"\n              }\n            },\n            "id": "2dNx7g19AokMyKq4e46guk",\n            "type": "Asset",\n            "createdAt": "2016-03-11T10:46:22.475Z",\n            "updatedAt": "2016-03-11T10:46:22.475Z",\n            "revision": 1,\n            "locale": "en-US"\n          },\n          "fields": {\n            "title": "Название медиа ресурса",\n            "description": "Его описание",\n            "file": {\n              "url": "//assets.contentful.com/m21hvnsjmt8a/2dNx7g19AokMyKq4e46guk/6b741e91435a5b259894ffaae817cd6b/media-sql.txt",\n              "details": {\n                "size": 3171\n              },\n              "fileName": "media-sql.txt",\n              "contentType": "text/plain"\n            }\n          }\n        }\n      ]\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var assetsResponse = assetsRes();

  exports.assetsResponse = assetsResponse;
});
define('dummy/tests/helpers/response/assets.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/assets.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/assets.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/content-type', ['exports', 'ember'], function (exports, _ember) {

  function contentTypeRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "space": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Space",\n            "id": "m21hvnsjmt8a"\n          }\n        },\n        "id": "commentPost",\n        "type": "ContentType",\n        "createdAt": "2016-03-11T10:29:22.261Z",\n        "updatedAt": "2016-03-25T08:33:37.415Z",\n        "revision": 4\n      },\n      "displayField": "title",\n      "name": "Comment Post",\n      "description": "Комментарии к посту",\n      "fields": [\n        {\n          "id": "title",\n          "name": "Title",\n          "type": "Symbol",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "numberFeildMy",\n          "name": "Number Feild My",\n          "type": "Integer",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "dataFeildMy",\n          "name": "Data Feild My",\n          "type": "Date",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "locationFeildMy",\n          "name": "Location Feild My",\n          "type": "Location",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "mediaFieldMy",\n          "name": "Media Field My",\n          "type": "Link",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "linkType": "Asset"\n        },\n        {\n          "id": "booleanFieldMy",\n          "name": "Boolean Field My",\n          "type": "Boolean",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "jsonObjectFieldMy",\n          "name": "JSON Object Field My",\n          "type": "Object",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "referenceFieldToOneMy",\n          "name": "Reference Field To One My",\n          "type": "Link",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "linkType": "Entry"\n        },\n        {\n          "id": "referenceFieldToManyMy",\n          "name": "Reference Field To Many My",\n          "type": "Array",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "referenceFieldToOneMyCard",\n          "name": "Reference Field To One My Card",\n          "type": "Link",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "linkType": "Entry"\n        },\n        {\n          "id": "referenceFieldToManyMyCards",\n          "name": "Reference Field To Many My Cards",\n          "type": "Array",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        }\n      ]\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  function contentTypeResApi() {
    var jsonResponse = '\n    {\n       "data":{\n          "id":"commentPost",\n          "type":"content-type",\n          "attributes":{\n             "sysCreatedAt":"Fri Mar 11 2016 12:29:22 GMT+0200 (Восточная Европа (зима))",\n             "sysUpdatedAt":"Fri Mar 25 2016 10:33:37 GMT+0200 (Восточная Европа (зима))",\n             "sysRevision":4,\n             "name":"Comment Post",\n             "displayField":"title",\n             "description":"Комментарии к посту",\n             "fields":[\n                {\n                   "id":"title",\n                   "name":"Title",\n                   "type":"Symbol",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                },\n                {\n                   "id":"numberFeildMy",\n                   "name":"Number Feild My",\n                   "type":"Integer",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                },\n                {\n                   "id":"dataFeildMy",\n                   "name":"Data Feild My",\n                   "type":"Date",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                },\n                {\n                   "id":"locationFeildMy",\n                   "name":"Location Feild My",\n                   "type":"Location",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                },\n                {\n                   "id":"mediaFieldMy",\n                   "name":"Media Field My",\n                   "type":"Link",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false,\n                   "linkType":"Asset"\n                },\n                {\n                   "id":"booleanFieldMy",\n                   "name":"Boolean Field My",\n                   "type":"Boolean",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                },\n                {\n                   "id":"jsonObjectFieldMy",\n                   "name":"JSON Object Field My",\n                   "type":"Object",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                },\n                {\n                   "id":"referenceFieldToOneMy",\n                   "name":"Reference Field To One My",\n                   "type":"Link",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false,\n                   "linkType":"Entry"\n                },\n                {\n                   "id":"referenceFieldToManyMy",\n                   "name":"Reference Field To Many My",\n                   "type":"Array",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                },\n                {\n                   "id":"referenceFieldToOneMyCard",\n                   "name":"Reference Field To One My Card",\n                   "type":"Link",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false,\n                   "linkType":"Entry"\n                },\n                {\n                   "id":"referenceFieldToManyMyCards",\n                   "name":"Reference Field To Many My Cards",\n                   "type":"Array",\n                   "localized":false,\n                   "required":false,\n                   "disabled":false\n                }\n             ]\n          },\n          "relationships":{\n             "sysSpace":{\n                "data":{\n                   "type":"space",\n                   "id":"m21hvnsjmt8a"\n                }\n             }\n          }\n       },\n       "included":[\n\n       ]\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var contentTypeResponse = contentTypeRes();
  var contentTypeResponseApi = contentTypeResApi();

  exports.contentTypeResponse = contentTypeResponse;
  exports.contentTypeResponseApi = contentTypeResponseApi;
});
define('dummy/tests/helpers/response/content-type.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/content-type.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/content-type.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/content-types', ['exports', 'ember'], function (exports, _ember) {

  function contentTypesRes() {
    var jsonResponse = '\n{\n  "sys": {\n    "type": "Array"\n  },\n  "total": 2,\n  "skip": 0,\n  "limit": 100,\n  "items": [\n    {\n      "sys": {\n        "space": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Space",\n            "id": "m21hvnsjmt8a"\n          }\n        },\n        "id": "post",\n        "type": "ContentType",\n        "createdAt": "2016-03-03T11:32:50.810Z",\n        "updatedAt": "2016-03-24T14:28:59.491Z",\n        "revision": 3\n      },\n      "displayField": "title",\n      "name": "Post",\n      "description": "Описание",\n      "fields": [\n        {\n          "id": "title",\n          "name": "Title",\n          "type": "Symbol",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "mydescriptions",\n          "name": "Mydescriptions",\n          "type": "Text",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "name",\n          "name": "name",\n          "type": "Symbol",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        }\n      ]\n    },\n    {\n      "sys": {\n        "space": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Space",\n            "id": "m21hvnsjmt8a"\n          }\n        },\n        "id": "commentPost",\n        "type": "ContentType",\n        "createdAt": "2016-03-11T10:29:22.261Z",\n        "updatedAt": "2016-03-25T08:33:37.415Z",\n        "revision": 4\n      },\n      "displayField": "title",\n      "name": "Comment Post",\n      "description": "Комментарии к посту",\n      "fields": [\n        {\n          "id": "title",\n          "name": "Title",\n          "type": "Symbol",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "numberFeildMy",\n          "name": "Number Feild My",\n          "type": "Integer",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "dataFeildMy",\n          "name": "Data Feild My",\n          "type": "Date",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "locationFeildMy",\n          "name": "Location Feild My",\n          "type": "Location",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "mediaFieldMy",\n          "name": "Media Field My",\n          "type": "Link",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "linkType": "Asset"\n        },\n        {\n          "id": "booleanFieldMy",\n          "name": "Boolean Field My",\n          "type": "Boolean",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "jsonObjectFieldMy",\n          "name": "JSON Object Field My",\n          "type": "Object",\n          "localized": false,\n          "required": false,\n          "disabled": false\n        },\n        {\n          "id": "referenceFieldToOneMy",\n          "name": "Reference Field To One My",\n          "type": "Link",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "linkType": "Entry"\n        },\n        {\n          "id": "referenceFieldToManyMy",\n          "name": "Reference Field To Many My",\n          "type": "Array",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "items": {\n            "type": "Link",\n            "validations": [],\n            "linkType": "Entry"\n          }\n        },\n        {\n          "id": "referenceFieldToOneMyCard",\n          "name": "Reference Field To One My Card",\n          "type": "Link",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "linkType": "Entry"\n        },\n        {\n          "id": "referenceFieldToManyMyCards",\n          "name": "Reference Field To Many My Cards",\n          "type": "Array",\n          "localized": false,\n          "required": false,\n          "disabled": false,\n          "items": {\n            "type": "Link",\n            "validations": [],\n            "linkType": "Entry"\n          }\n        }\n      ]\n    }\n  ]\n}\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  function contentTypesResApi() {
    var jsonResponse = '\n    {\n       "data":[\n          {\n             "id":"post",\n             "type":"content-type",\n             "attributes":{\n                "sysCreatedAt":"Thu Mar 03 2016 13:32:50 GMT+0200 (Восточная Европа (зима))",\n                "sysUpdatedAt":"Thu Mar 24 2016 16:28:59 GMT+0200 (Восточная Европа (зима))",\n                "sysRevision":3,\n                "name":"Post",\n                "displayField":"title",\n                "description":"Описание",\n                "fields":[\n                  {\n                    "id": "title",\n                    "name": "Title",\n                    "type": "Symbol",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "mydescriptions",\n                    "name": "Mydescriptions",\n                    "type": "Text",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "name",\n                    "name": "name",\n                    "type": "Symbol",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  }\n                ]\n             },\n             "relationships":{\n                "sysSpace":{\n                   "data":{\n                      "type":"space",\n                      "id":"m21hvnsjmt8a"\n                   }\n                }\n             }\n          },\n          {\n             "id":"commentPost",\n             "type":"content-type",\n             "attributes":{\n                "sysCreatedAt":"Fri Mar 11 2016 12:29:22 GMT+0200 (Восточная Европа (зима))",\n                "sysUpdatedAt":"Fri Mar 25 2016 10:33:37 GMT+0200 (Восточная Европа (зима))",\n                "sysRevision":4,\n                "name":"Comment Post",\n                "displayField":"title",\n                "description":"Комментарии к посту",\n                "fields":[\n                  {\n                    "id": "title",\n                    "name": "Title",\n                    "type": "Symbol",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "numberFeildMy",\n                    "name": "Number Feild My",\n                    "type": "Integer",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "dataFeildMy",\n                    "name": "Data Feild My",\n                    "type": "Date",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "locationFeildMy",\n                    "name": "Location Feild My",\n                    "type": "Location",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "mediaFieldMy",\n                    "name": "Media Field My",\n                    "type": "Link",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false,\n                    "linkType": "Asset"\n                  },\n                  {\n                    "id": "booleanFieldMy",\n                    "name": "Boolean Field My",\n                    "type": "Boolean",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "jsonObjectFieldMy",\n                    "name": "JSON Object Field My",\n                    "type": "Object",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false\n                  },\n                  {\n                    "id": "referenceFieldToOneMy",\n                    "name": "Reference Field To One My",\n                    "type": "Link",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false,\n                    "linkType": "Entry"\n                  },\n                  {\n                    "id": "referenceFieldToManyMy",\n                    "name": "Reference Field To Many My",\n                    "type": "Array",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false,\n                    "items": {\n                      "type": "Link",\n                      "validations": [],\n                      "linkType": "Entry"\n                    }\n                  },\n                  {\n                    "id": "referenceFieldToOneMyCard",\n                    "name": "Reference Field To One My Card",\n                    "type": "Link",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false,\n                    "linkType": "Entry"\n                  },\n                  {\n                    "id": "referenceFieldToManyMyCards",\n                    "name": "Reference Field To Many My Cards",\n                    "type": "Array",\n                    "localized": false,\n                    "required": false,\n                    "disabled": false,\n                    "items": {\n                      "type": "Link",\n                      "validations": [],\n                      "linkType": "Entry"\n                    }\n                  }\n                ]\n             },\n             "relationships":{\n                "sysSpace":{\n                   "data":{\n                      "type":"space",\n                      "id":"m21hvnsjmt8a"\n                   }\n                }\n             }\n          }\n       ],\n       "included":[\n\n       ],\n       "meta":{\n          "limit":100,\n          "skip":0,\n          "total":2\n       }\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var contentTypesResponse = contentTypesRes();
  var contentTypesResponseApi = contentTypesResApi();

  exports.contentTypesResponse = contentTypesResponse;
  exports.contentTypesResponseApi = contentTypesResponseApi;
});
define('dummy/tests/helpers/response/content-types.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/content-types.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/content-types.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/entries', ['exports', 'ember'], function (exports, _ember) {

  function entriesRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "type": "Array"\n      },\n      "total": 3,\n      "skip": 0,\n      "limit": 100,\n      "items": [\n        {\n          "sys": {\n            "space": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Space",\n                "id": "m21hvnsjmt8a"\n              }\n            },\n            "id": "4fN8l0PIxOiKW4Oyi4MU2k",\n            "type": "Entry",\n            "createdAt": "2016-03-24T14:27:21.408Z",\n            "updatedAt": "2016-03-24T14:27:21.408Z",\n            "revision": 1,\n            "contentType": {\n              "sys": {\n                "type": "Link",\n                "linkType": "ContentType",\n                "id": "post"\n              }\n            },\n            "locale": "en-US"\n          },\n          "fields": {\n            "title": "name",\n            "mydescriptions": "dfgdfgdf"\n          }\n        },\n        {\n          "sys": {\n            "space": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Space",\n                "id": "m21hvnsjmt8a"\n              }\n            },\n            "id": "3eOlNEHDpmgsgMmMwgKo2K",\n            "type": "Entry",\n            "createdAt": "2016-03-11T10:48:33.575Z",\n            "updatedAt": "2016-03-25T08:37:14.204Z",\n            "revision": 2,\n            "contentType": {\n              "sys": {\n                "type": "Link",\n                "linkType": "ContentType",\n                "id": "commentPost"\n              }\n            },\n            "locale": "en-US"\n          },\n          "fields": {\n            "title": "Entries Title",\n            "numberFeildMy": 123,\n            "dataFeildMy": "2016-03-02T10:05+03:00",\n            "locationFeildMy": {\n              "lon": 37.6173,\n              "lat": 55.755826\n            },\n            "mediaFieldMy": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Asset",\n                "id": "2dNx7g19AokMyKq4e46guk"\n              }\n            },\n            "booleanFieldMy": true,\n            "jsonObjectFieldMy": {\n              "id": "tirtyrttle",\n              "irtyd": "json",\n              "nrtyame": "Tirtytle",\n              "tyfdype": "json",\n              "tyrtype": "Symbol",\n              "reqghuired": false,\n              "disfghabled": false,\n              "linrtyrtkType": "json",\n              "lortyhgcalized": false\n            },\n            "referenceFieldToOneMy": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Entry",\n                "id": "3eOlNEHDpmgsgMmMwgKo2K"\n              }\n            },\n            "referenceFieldToManyMy": [\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "4fN8l0PIxOiKW4Oyi4MU2k"\n                }\n              },\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "4iSgf7NFheISOgAYsuQAOO"\n                }\n              }\n            ],\n            "referenceFieldToOneMyCard": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Entry",\n                "id": "4iSgf7NFheISOgAYsuQAOO"\n              }\n            },\n            "referenceFieldToManyMyCards": [\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "3eOlNEHDpmgsgMmMwgKo2K"\n                }\n              },\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "4fN8l0PIxOiKW4Oyi4MU2k"\n                }\n              }\n            ]\n          }\n        },\n        {\n          "sys": {\n            "space": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Space",\n                "id": "m21hvnsjmt8a"\n              }\n            },\n            "id": "4iSgf7NFheISOgAYsuQAOO",\n            "type": "Entry",\n            "createdAt": "2016-03-03T12:06:09.724Z",\n            "updatedAt": "2016-03-03T12:06:09.724Z",\n            "revision": 1,\n            "contentType": {\n              "sys": {\n                "type": "Link",\n                "linkType": "ContentType",\n                "id": "post"\n              }\n            },\n            "locale": "en-US"\n          },\n          "fields": {\n            "title": "Post1",\n            "mydescriptions": "Discriptions1"\n          }\n        }\n      ],\n      "includes": {\n        "Asset": [\n          {\n            "sys": {\n              "space": {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Space",\n                  "id": "m21hvnsjmt8a"\n                }\n              },\n              "id": "2dNx7g19AokMyKq4e46guk",\n              "type": "Asset",\n              "createdAt": "2016-03-11T10:46:22.475Z",\n              "updatedAt": "2016-03-11T10:46:22.475Z",\n              "revision": 1,\n              "locale": "en-US"\n            },\n            "fields": {\n              "title": "Название медиа ресурса",\n              "description": "Его описание",\n              "file": {\n                "url": "//assets.contentful.com/m21hvnsjmt8a/2dNx7g19AokMyKq4e46guk/6b741e91435a5b259894ffaae817cd6b/media-sql.txt",\n                "details": {\n                  "size": 3171\n                },\n                "fileName": "media-sql.txt",\n                "contentType": "text/plain"\n              }\n            }\n          }\n        ]\n      }\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  function entriesResApi() {
    var jsonResponse = '\n    {\n       "data":[\n          {\n             "id":"4fN8l0PIxOiKW4Oyi4MU2k",\n             "type":"post",\n             "attributes":{\n                "title":"name",\n                "mydescriptions":"dfgdfgdf",\n                "sysCreatedAt":"2016-03-24T14:27:21.408Z",\n                "sysUpdatedAt":"2016-03-24T14:27:21.408Z",\n                "sysRevision":1,\n                "sysLocale":"en-US"\n             },\n             "relationships":{\n                "sysSpace":{\n                   "data":{\n                      "type":"space",\n                      "id":"m21hvnsjmt8a"\n                   }\n                }\n             }\n          },\n          {\n             "id":"3eOlNEHDpmgsgMmMwgKo2K",\n             "type":"comment-post",\n             "attributes":{\n                "title":"Entries Title",\n                "numberFeildMy":123,\n                "dataFeildMy":"2016-03-02T07:05:00.000Z",\n                "locationFeildMy":{\n                   "lon":37.6173,\n                   "lat":55.755826\n                },\n                "booleanFieldMy":true,\n                "jsonObjectFieldMy":{\n                   "id":"tirtyrttle",\n                   "irtyd":"json",\n                   "nrtyame":"Tirtytle",\n                   "tyfdype":"json",\n                   "tyrtype":"Symbol",\n                   "reqghuired":false,\n                   "disfghabled":false,\n                   "linrtyrtkType":"json",\n                   "lortyhgcalized":false\n                },\n                "sysCreatedAt":"2016-03-11T10:48:33.575Z",\n                "sysUpdatedAt":"2016-03-25T08:37:14.204Z",\n                "sysRevision":2,\n                "sysLocale":"en-US"\n             },\n             "relationships":{\n                "mediaFieldMy":{\n                   "data":{\n                      "type":"asset",\n                      "id":"2dNx7g19AokMyKq4e46guk"\n                   }\n                },\n                "referenceFieldToOneMy":{\n                   "data":{\n                      "type":"entry",\n                      "id":"3eOlNEHDpmgsgMmMwgKo2K"\n                   }\n                },\n                "referenceFieldToManyMy":{\n                   "data":[\n                      {\n                         "type":"entry",\n                         "id":"4fN8l0PIxOiKW4Oyi4MU2k"\n                      },\n                      {\n                         "type":"entry",\n                         "id":"4iSgf7NFheISOgAYsuQAOO"\n                      }\n                   ]\n                },\n                "referenceFieldToOneMyCard":{\n                   "data":{\n                      "type":"entry",\n                      "id":"4iSgf7NFheISOgAYsuQAOO"\n                   }\n                },\n                "referenceFieldToManyMyCards":{\n                   "data":[\n                      {\n                         "type":"entry",\n                         "id":"3eOlNEHDpmgsgMmMwgKo2K"\n                      },\n                      {\n                         "type":"entry",\n                         "id":"4fN8l0PIxOiKW4Oyi4MU2k"\n                      }\n                   ]\n                },\n                "sysSpace":{\n                   "data":{\n                      "type":"space",\n                      "id":"m21hvnsjmt8a"\n                   }\n                }\n             }\n          },\n          {\n             "id":"4iSgf7NFheISOgAYsuQAOO",\n             "type":"post",\n             "attributes":{\n                "title":"Post1",\n                "mydescriptions":"Discriptions1",\n                "sysCreatedAt":"2016-03-03T12:06:09.724Z",\n                "sysUpdatedAt":"2016-03-03T12:06:09.724Z",\n                "sysRevision":1,\n                "sysLocale":"en-US"\n             },\n             "relationships":{\n                "sysSpace":{\n                   "data":{\n                      "type":"space",\n                      "id":"m21hvnsjmt8a"\n                   }\n                }\n             }\n          }\n       ],\n       "included":[\n\n       ],\n       "meta":{\n          "limit":100,\n          "skip":0,\n          "total":3\n       }\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var entriesResponse = entriesRes();
  var entriesResponseApi = entriesResApi();

  exports.entriesResponse = entriesResponse;
  exports.entriesResponseApi = entriesResponseApi;
});
define('dummy/tests/helpers/response/entries.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/entries.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/entries.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/entry', ['exports', 'ember'], function (exports, _ember) {

  function entryRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "space": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Space",\n            "id": "m21hvnsjmt8a"\n          }\n        },\n        "id": "3eOlNEHDpmgsgMmMwgKo2K",\n        "type": "Entry",\n        "createdAt": "2016-03-11T10:48:33.575Z",\n        "updatedAt": "2016-03-25T08:37:14.204Z",\n        "revision": 2,\n        "contentType": {\n          "sys": {\n            "type": "Link",\n            "linkType": "ContentType",\n            "id": "commentPost"\n          }\n        },\n        "locale": "en-US"\n      },\n      "fields": {\n        "title": "Entries Title",\n        "numberFeildMy": 123,\n        "dataFeildMy": "2016-03-02T10:05+03:00",\n        "locationFeildMy": {\n          "lon": 37.6173,\n          "lat": 55.755826\n        },\n        "mediaFieldMy": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Asset",\n            "id": "2dNx7g19AokMyKq4e46guk"\n          }\n        },\n        "booleanFieldMy": true,\n        "jsonObjectFieldMy": {\n          "id": "tirtyrttle",\n          "irtyd": "json",\n          "nrtyame": "Tirtytle",\n          "tyfdype": "json",\n          "tyrtype": "Symbol",\n          "reqghuired": false,\n          "disfghabled": false,\n          "linrtyrtkType": "json",\n          "lortyhgcalized": false\n        },\n        "referenceFieldToOneMy": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Entry",\n            "id": "3eOlNEHDpmgsgMmMwgKo2K"\n          }\n        },\n        "referenceFieldToManyMy": [\n          {\n            "sys": {\n              "type": "Link",\n              "linkType": "Entry",\n              "id": "4fN8l0PIxOiKW4Oyi4MU2k"\n            }\n          },\n          {\n            "sys": {\n              "type": "Link",\n              "linkType": "Entry",\n              "id": "4iSgf7NFheISOgAYsuQAOO"\n            }\n          }\n        ],\n        "referenceFieldToOneMyCard": {\n          "sys": {\n            "type": "Link",\n            "linkType": "Entry",\n            "id": "4iSgf7NFheISOgAYsuQAOO"\n          }\n        },\n        "referenceFieldToManyMyCards": [\n          {\n            "sys": {\n              "type": "Link",\n              "linkType": "Entry",\n              "id": "3eOlNEHDpmgsgMmMwgKo2K"\n            }\n          },\n          {\n            "sys": {\n              "type": "Link",\n              "linkType": "Entry",\n              "id": "4fN8l0PIxOiKW4Oyi4MU2k"\n            }\n          }\n        ]\n      }\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  function entryResApi() {
    var jsonResponse = '\n    {\n       "data":{\n          "id":"3eOlNEHDpmgsgMmMwgKo2K",\n          "type":"comment-post",\n          "attributes":{\n             "title":"Entries Title",\n             "numberFeildMy":123,\n             "dataFeildMy":"Wed Mar 02 2016 09:05:00 GMT+0200 (Восточная Европа (зима))",\n             "locationFeildMy":{\n                "lon":37.6173,\n                "lat":55.755826\n             },\n             "booleanFieldMy":true,\n             "jsonObjectFieldMy":{\n                "id":"tirtyrttle",\n                "irtyd":"json",\n                "nrtyame":"Tirtytle",\n                "tyfdype":"json",\n                "tyrtype":"Symbol",\n                "reqghuired":false,\n                "disfghabled":false,\n                "linrtyrtkType":"json",\n                "lortyhgcalized":false\n             },\n             "sysCreatedAt":"Fri Mar 11 2016 12:48:33 GMT+0200 (Восточная Европа (зима))",\n             "sysUpdatedAt":"Fri Mar 25 2016 10:37:14 GMT+0200 (Восточная Европа (зима))",\n             "sysRevision":2,\n             "sysLocale":"en-US"\n          },\n          "relationships":{\n             "mediaFieldMy":{\n                "data":{\n                   "type":"asset",\n                   "id":"2dNx7g19AokMyKq4e46guk"\n                }\n             },\n             "referenceFieldToOneMy":{\n                "data":{\n                   "type":"entry",\n                   "id":"3eOlNEHDpmgsgMmMwgKo2K"\n                }\n             },\n             "referenceFieldToManyMy":{\n                "data":[\n                   {\n                      "type":"entry",\n                      "id":"4fN8l0PIxOiKW4Oyi4MU2k"\n                   },\n                   {\n                      "type":"entry",\n                      "id":"4iSgf7NFheISOgAYsuQAOO"\n                   }\n                ]\n             },\n             "referenceFieldToOneMyCard":{\n                "data":{\n                   "type":"entry",\n                   "id":"4iSgf7NFheISOgAYsuQAOO"\n                }\n             },\n             "referenceFieldToManyMyCards":{\n                "data":[\n                   {\n                      "type":"entry",\n                      "id":"3eOlNEHDpmgsgMmMwgKo2K"\n                   },\n                   {\n                      "type":"entry",\n                      "id":"4fN8l0PIxOiKW4Oyi4MU2k"\n                   }\n                ]\n             },\n             "sysSpace":{\n                "data":{\n                   "type":"space",\n                   "id":"m21hvnsjmt8a"\n                }\n             }\n          }\n       },\n       "included":[\n\n       ]\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var entryResponse = entryRes();
  var entryResponseApi = entryResApi();

  exports.entryResponse = entryResponse;
  exports.entryResponseApi = entryResponseApi;
});
define('dummy/tests/helpers/response/entry.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/entry.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/entry.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/query-content-type', ['exports', 'ember'], function (exports, _ember) {

  function queryContentTypeRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "type": "Array"\n      },\n      "total": 2,\n      "skip": 0,\n      "limit": 100,\n      "items": [\n        {\n          "sys": {\n            "space": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Space",\n                "id": "m21hvnsjmt8a"\n              }\n            },\n            "id": "4iSgf7NFheISOgAYsuQAOO",\n            "type": "Entry",\n            "createdAt": "2016-03-03T12:06:09.724Z",\n            "updatedAt": "2016-03-03T12:06:09.724Z",\n            "revision": 1,\n            "contentType": {\n              "sys": {\n                "type": "Link",\n                "linkType": "ContentType",\n                "id": "post"\n              }\n            },\n            "locale": "en-US"\n          },\n          "fields": {\n            "title": "Post1",\n            "mydescriptions": "Discriptions1"\n          }\n        },\n        {\n          "sys": {\n            "space": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Space",\n                "id": "m21hvnsjmt8a"\n              }\n            },\n            "id": "4fN8l0PIxOiKW4Oyi4MU2k",\n            "type": "Entry",\n            "createdAt": "2016-03-24T14:27:21.408Z",\n            "updatedAt": "2016-03-24T14:27:21.408Z",\n            "revision": 1,\n            "contentType": {\n              "sys": {\n                "type": "Link",\n                "linkType": "ContentType",\n                "id": "post"\n              }\n            },\n            "locale": "en-US"\n          },\n          "fields": {\n            "title": "name",\n            "mydescriptions": "dfgdfgdf"\n          }\n        }\n      ]\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var queryContentTypeResponse = queryContentTypeRes();

  exports.queryContentTypeResponse = queryContentTypeResponse;
});
define('dummy/tests/helpers/response/query-content-type.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/query-content-type.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/query-content-type.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/query-id', ['exports', 'ember'], function (exports, _ember) {

  function queryIdRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "type": "Array"\n      },\n      "total": 1,\n      "skip": 0,\n      "limit": 100,\n      "items": [\n        {\n          "sys": {\n            "space": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Space",\n                "id": "m21hvnsjmt8a"\n              }\n            },\n            "id": "3eOlNEHDpmgsgMmMwgKo2K",\n            "type": "Entry",\n            "createdAt": "2016-03-11T10:48:33.575Z",\n            "updatedAt": "2016-03-25T08:37:14.204Z",\n            "revision": 2,\n            "contentType": {\n              "sys": {\n                "type": "Link",\n                "linkType": "ContentType",\n                "id": "commentPost"\n              }\n            },\n            "locale": "en-US"\n          },\n          "fields": {\n            "title": "Entries Title",\n            "numberFeildMy": 123,\n            "dataFeildMy": "2016-03-02T10:05+03:00",\n            "locationFeildMy": {\n              "lon": 37.6173,\n              "lat": 55.755826\n            },\n            "mediaFieldMy": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Asset",\n                "id": "2dNx7g19AokMyKq4e46guk"\n              }\n            },\n            "booleanFieldMy": true,\n            "jsonObjectFieldMy": {\n              "id": "tirtyrttle",\n              "irtyd": "json",\n              "nrtyame": "Tirtytle",\n              "tyfdype": "json",\n              "tyrtype": "Symbol",\n              "reqghuired": false,\n              "disfghabled": false,\n              "linrtyrtkType": "json",\n              "lortyhgcalized": false\n            },\n            "referenceFieldToOneMy": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Entry",\n                "id": "3eOlNEHDpmgsgMmMwgKo2K"\n              }\n            },\n            "referenceFieldToManyMy": [\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "4fN8l0PIxOiKW4Oyi4MU2k"\n                }\n              },\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "4iSgf7NFheISOgAYsuQAOO"\n                }\n              }\n            ],\n            "referenceFieldToOneMyCard": {\n              "sys": {\n                "type": "Link",\n                "linkType": "Entry",\n                "id": "4iSgf7NFheISOgAYsuQAOO"\n              }\n            },\n            "referenceFieldToManyMyCards": [\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "3eOlNEHDpmgsgMmMwgKo2K"\n                }\n              },\n              {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Entry",\n                  "id": "4fN8l0PIxOiKW4Oyi4MU2k"\n                }\n              }\n            ]\n          }\n        }\n      ],\n      "includes": {\n        "Entry": [\n          {\n            "sys": {\n              "space": {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Space",\n                  "id": "m21hvnsjmt8a"\n                }\n              },\n              "id": "4fN8l0PIxOiKW4Oyi4MU2k",\n              "type": "Entry",\n              "createdAt": "2016-03-24T14:27:21.408Z",\n              "updatedAt": "2016-03-24T14:27:21.408Z",\n              "revision": 1,\n              "contentType": {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "ContentType",\n                  "id": "post"\n                }\n              },\n              "locale": "en-US"\n            },\n            "fields": {\n              "title": "name",\n              "mydescriptions": "dfgdfgdf"\n            }\n          },\n          {\n            "sys": {\n              "space": {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Space",\n                  "id": "m21hvnsjmt8a"\n                }\n              },\n              "id": "4iSgf7NFheISOgAYsuQAOO",\n              "type": "Entry",\n              "createdAt": "2016-03-03T12:06:09.724Z",\n              "updatedAt": "2016-03-03T12:06:09.724Z",\n              "revision": 1,\n              "contentType": {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "ContentType",\n                  "id": "post"\n                }\n              },\n              "locale": "en-US"\n            },\n            "fields": {\n              "title": "Post1",\n              "mydescriptions": "Discriptions1"\n            }\n          }\n        ],\n        "Asset": [\n          {\n            "sys": {\n              "space": {\n                "sys": {\n                  "type": "Link",\n                  "linkType": "Space",\n                  "id": "m21hvnsjmt8a"\n                }\n              },\n              "id": "2dNx7g19AokMyKq4e46guk",\n              "type": "Asset",\n              "createdAt": "2016-03-11T10:46:22.475Z",\n              "updatedAt": "2016-03-11T10:46:22.475Z",\n              "revision": 1,\n              "locale": "en-US"\n            },\n            "fields": {\n              "title": "Название медиа ресурса",\n              "description": "Его описание",\n              "file": {\n                "url": "//assets.contentful.com/m21hvnsjmt8a/2dNx7g19AokMyKq4e46guk/6b741e91435a5b259894ffaae817cd6b/media-sql.txt",\n                "details": {\n                  "size": 3171\n                },\n                "fileName": "media-sql.txt",\n                "contentType": "text/plain"\n              }\n            }\n          }\n        ]\n      }\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var queryIdResponse = queryIdRes();

  exports.queryIdResponse = queryIdResponse;
});
define('dummy/tests/helpers/response/query-id.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/query-id.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/query-id.js should pass jshint.');
  });
});
define('dummy/tests/helpers/response/space', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = spaceRes;

  function spaceRes() {
    var jsonResponse = '\n    {\n      "sys": {\n        "type": "Space",\n          "id": "m21hvnsjmt8a"\n      },\n      "name": "BlankTest",\n      "locales": [\n        {\n          "code": "en-US",\n          "default": true,\n          "name": "U.S. English"\n        }\n      ]\n    }\n  ';
    return _ember['default'].$.parseJSON(jsonResponse);
  }

  var spaceResponse = spaceRes();

  exports.spaceResponse = spaceResponse;
});
define('dummy/tests/helpers/response/space.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/response/space.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/response/space.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/store', ['exports', 'ember', 'ember-data', 'dummy/tests/helpers/owner', 'ember-contentful-delivery-adapter/adapters/contentful-delivery', 'ember-contentful-delivery-adapter/serializers/contentful-delivery', 'ember-contentful-delivery-adapter/models/asset', 'ember-contentful-delivery-adapter/models/content-type', 'ember-contentful-delivery-adapter/models/entry', 'ember-contentful-delivery-adapter/models/space'], function (exports, _ember, _emberData, _dummyTestsHelpersOwner, _emberContentfulDeliveryAdapterAdaptersContentfulDelivery, _emberContentfulDeliveryAdapterSerializersContentfulDelivery, _emberContentfulDeliveryAdapterModelsAsset, _emberContentfulDeliveryAdapterModelsContentType, _emberContentfulDeliveryAdapterModelsEntry, _emberContentfulDeliveryAdapterModelsSpace) {
  exports['default'] = setupStore;
  exports.createStore = createStore;

  function setupStore(options) {
    var container, registry, owner;
    var env = {};
    options = options || {};

    if (_ember['default'].Registry) {
      registry = env.registry = new _ember['default'].Registry();
      owner = _dummyTestsHelpersOwner['default'].create({
        __registry__: registry
      });
      container = env.container = registry.container({
        owner: owner
      });
      owner.__container__ = container;
    } else {
      container = env.container = new _ember['default'].Container();
      registry = env.registry = container;
    }

    env.replaceContainerNormalize = function replaceContainerNormalize(fn) {
      if (env.registry) {
        env.registry.normalize = fn;
      } else {
        env.container.normalize = fn;
      }
    };

    var adapter = env.adapter = options.adapter || '-default';
    delete options.adapter;

    if (typeof adapter !== 'string') {
      env.registry.register('adapter:-ember-data-test-custom', adapter);
      adapter = '-ember-data-test-custom';
    }

    for (var prop in options) {
      registry.register('model:' + _ember['default'].String.dasherize(prop), options[prop]);
    }

    registry.register('service:store', _emberData['default'].Store.extend({
      adapter: adapter
    }));

    registry.optionsForType('serializer', { singleton: false });
    registry.optionsForType('adapter', { singleton: false });
    registry.register('adapter:-default', _emberData['default'].Adapter);

    registry.register('serializer:-default', _emberData['default'].JSONSerializer);
    registry.register('serializer:-rest', _emberData['default'].RESTSerializer);

    registry.register('adapter:-rest', _emberData['default'].RESTAdapter);

    registry.register('adapter:-json-api', _emberData['default'].JSONAPIAdapter);
    registry.register('serializer:-json-api', _emberData['default'].JSONAPISerializer);

    registry.register('transform:date', _emberData['default'].DateTransform);
    registry.register('transform:boolean', _emberData['default'].BooleanTransform);
    registry.register('transform:number', _emberData['default'].NumberTransform);
    registry.register('transform:string', _emberData['default'].StringTransform);

    registry.register('adapter:-contentful-delivery', _emberContentfulDeliveryAdapterAdaptersContentfulDelivery['default']);
    registry.register('serializer:-contentful-delivery', _emberContentfulDeliveryAdapterSerializersContentfulDelivery['default']);

    env.restSerializer = container.lookup('serializer:-rest');
    env.store = container.lookup('service:store');
    env.serializer = env.store.serializerFor('-default');
    env.adapter = env.store.get('defaultAdapter');

    //env.container = container;
    //env.registry = registry;

    env.contentfulDeliveryAdapter = container.lookup('adapter:-contentful-delivery');
    env.contentfulDeliverySerializer = container.lookup('serializer:-contentful-delivery');
    env.contentfulDeliveryAdapter.reopen({
      access_token: '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb',
      namespace: 'spaces/m21hvnsjmt8a'
    });
    env.contentfulDeliverySerializer.reopen({
      store: env.store
    });
    //registry.register('adapter:-default', env.contentfulDeliveryAdapter);
    //env.adapter = env.store.get('defaultAdapter');

    env.registry.register('model:asset', _emberContentfulDeliveryAdapterModelsAsset['default']);
    env.registry.register('model:content-type', _emberContentfulDeliveryAdapterModelsContentType['default']);
    env.registry.register('model:space', _emberContentfulDeliveryAdapterModelsSpace['default']);
    env.registry.register('model:entry', _emberContentfulDeliveryAdapterModelsEntry['default']);
    env.registry.register('model:post', _emberContentfulDeliveryAdapterModelsEntry['default'].extend({
      title: _emberData['default'].attr('string'),
      mydescriptions: _emberData['default'].attr('string')
    }));
    env.registry.register('model:comment-post', _emberContentfulDeliveryAdapterModelsEntry['default'].extend({
      title: _emberData['default'].attr('string'),
      numberFeildMy: _emberData['default'].attr('number'),
      dataFeildMy: _emberData['default'].attr('date'),
      locationFeildMy: _emberData['default'].attr(),
      mediaFieldMy: _emberData['default'].belongsTo('asset'),
      booleanFieldMy: _emberData['default'].attr('boolean'),
      jsonObjectFieldMy: _emberData['default'].attr(),
      referenceFieldToOneMy: _emberData['default'].belongsTo('entry'),
      referenceFieldToManyMy: _emberData['default'].hasMany('entry'),
      referenceFieldToOneMyCard: _emberData['default'].belongsTo('entry'),
      referenceFieldToManyMyCards: _emberData['default'].hasMany('entry')
    }));

    return env;
  }

  exports.setupStore = setupStore;

  function createStore(options) {
    return setupStore(options).store;
  }
});
define('dummy/tests/helpers/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/store.js should pass jshint.');
  });
});
define('dummy/tests/models/calendar-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/calendar-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/calendar-event.js should pass jshint.');
  });
});
define('dummy/tests/models/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/calendar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/calendar.js should pass jshint.');
  });
});
define('dummy/tests/models/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contact.js should pass jshint.');
  });
});
define('dummy/tests/models/course.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/course.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/course.js should pass jshint.');
  });
});
define('dummy/tests/models/culinary-teacher.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/culinary-teacher.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/culinary-teacher.js should pass jshint.');
  });
});
define('dummy/tests/models/education-calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/education-calendar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/education-calendar.js should pass jshint.');
  });
});
define('dummy/tests/models/news.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/news.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/news.js should pass jshint.');
  });
});
define('dummy/tests/models/recipe.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/recipe.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/recipe.js should pass jshint.');
  });
});
define('dummy/tests/models/slider-rotator.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/slider-rotator.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/slider-rotator.js should pass jshint.');
  });
});
define('dummy/tests/models/unit-course.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/unit-course.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/unit-course.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('dummy/tests/routes/calendar-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/calendar-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/calendar-event.js should pass jshint.');
  });
});
define('dummy/tests/routes/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/calendar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/calendar.js should pass jshint.\nroutes/calendar.js: line 9, col 7, Missing semicolon.\n\n1 error');
  });
});
define('dummy/tests/routes/chef.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/chef.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/chef.js should pass jshint.');
  });
});
define('dummy/tests/routes/chefs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/chefs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/chefs.js should pass jshint.');
  });
});
define('dummy/tests/routes/contacts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/contacts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts.js should pass jshint.');
  });
});
define('dummy/tests/routes/course.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/course.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/course.js should pass jshint.');
  });
});
define('dummy/tests/routes/courses.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/courses.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/courses.js should pass jshint.');
  });
});
define('dummy/tests/routes/education-calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/education-calendar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/education-calendar.js should pass jshint.');
  });
});
define('dummy/tests/routes/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home.js should pass jshint.\nroutes/home.js: line 8, col 7, Missing semicolon.\n\n1 error');
  });
});
define('dummy/tests/routes/news.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/news.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/news.js should pass jshint.');
  });
});
define('dummy/tests/routes/recipe.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/recipe.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/recipe.js should pass jshint.');
  });
});
define('dummy/tests/routes/recipes.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/recipes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/recipes.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/adapters/contentful-delivery-test', ['exports', 'dummy/tests/helpers/store', 'ember', 'ember-qunit'], function (exports, _dummyTestsHelpersStore, _ember, _emberQunit) {

  //import DS from 'ember-data';

  //var get = Ember.get;
  //var set = Ember.set;
  var run = _ember['default'].run;

  var store, env, adapter;

  (0, _emberQunit.moduleFor)('adapter:contentful-delivery', 'Adapter | contentful delivery', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
    beforeEach: function beforeEach() {
      env = (0, _dummyTestsHelpersStore['default'])();
      store = env.store;
      adapter = env.contentfulDeliveryAdapter;
    },

    afterEach: function afterEach() {
      run(store, 'destroy');
      run(env.container, 'destroy');
      run(adapter, 'destroy');
    }
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    assert.ok(adapter);
  });

  (0, _emberQunit.test)('host config override', function (assert) {
    assert.equal(adapter.get('host'), 'https://cdn.contentful.com');
  });

  (0, _emberQunit.test)('namespace config override', function (assert) {
    assert.equal(adapter.get('namespace'), 'spaces/m21hvnsjmt8a');
    assert.equal(adapter.get('access_token'), '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb');
  });

  (0, _emberQunit.test)('headers config', function (assert) {
    var headers = adapter.get('headers');
    assert.equal(headers['Accept'], 'application/vnd.api+json');
    assert.equal(headers['content-type'], 'application/vnd.contentful.delivery.v1+json');
  });

  (0, _emberQunit.test)('findRecord', function (assert) {
    var type = undefined,
        id = undefined;

    type = store.modelFor('asset');
    id = '2dNx7g19AokMyKq4e46guk';
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets/2dNx7g19AokMyKq4e46guk', 'URL - model:asset');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
      }, 'QUERY - model:asset');
    };
    adapter.findRecord(store, type, id, null);

    type = store.modelFor('content-type');
    id = 'commentPost';
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types/commentPost', 'URL - model:content-type');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
      }, 'QUERY - model:content-type');
    };
    adapter.findRecord(store, type, id, null);

    type = store.modelFor('space');
    id = 'commentPost';
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a', 'URL - model:space');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
      }, 'QUERY - model:space');
    };
    adapter.findRecord(store, type, id, null);

    type = store.modelFor('post');
    id = '4iSgf7NFheISOgAYsuQAOO';
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries/4iSgf7NFheISOgAYsuQAOO', 'URL - model:post');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
      }, 'QUERY - model:post');
    };
    adapter.findRecord(store, type, id, null);

    type = store.modelFor('entry');
    id = '3eOlNEHDpmgsgMmMwgKo2K';
    assert.throws(function () {
      adapter.findRecord(store, type, id, null);
    }, new _ember['default'].Error("You may not call `findRecord` for model 'Entry'. Use 'id' Content-type as model name"), "You may not call `findRecord` for model 'entry'. Use 'id' Content-type as model name");
  });

  (0, _emberQunit.test)('findAll', function (assert) {
    var type = undefined;

    type = store.modelFor('asset');
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets', 'URL - model:asset');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
      }, 'QUERY - model:asset');
    };
    adapter.findAll(store, type, null, null);

    type = store.modelFor('content-type');
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types', 'URL - model:content-type');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
      }, 'QUERY - model:content-type');
    };
    adapter.findAll(store, type, null, null);

    type = store.modelFor('space');
    assert.throws(function () {
      adapter.findAll(store, type, null, null);
    }, new _ember['default'].Error("You may not call `findAll` for model 'Space'. Use 'findRecord'"), "You may not call `findAll` for model 'space'");

    type = store.modelFor('post');
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries', 'URL - model:post');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
        'content_type': "post"
      }, 'QUERY - model:post');
    };
    adapter.findAll(store, type, null, null);

    type = store.modelFor('entry');
    assert.throws(function () {
      adapter.findAll(store, type, null, null);
    }, new _ember['default'].Error("You may not call `findAll` for model 'Entry'"), "You may not call `findAll` for model 'entry'");
  });

  (0, _emberQunit.test)('query', function (assert) {
    var type = undefined,
        query = undefined;

    type = store.modelFor('asset');
    query = {};
    assert.throws(function () {
      adapter.query(store, type, query);
    }, new _ember['default'].Error("For all models besides 'asset', 'content-type', 'space'"), "You may use 'query' for all models besides 'asset', 'content-type', 'space'");

    type = store.modelFor('entry');
    query = { 'sys.id': '3eOlNEHDpmgsgMmMwgKo2K' };
    adapter.ajax = function (url, type, options) {
      assert.equal(url, 'https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries', 'URL - model:entry');
      assert.deepEqual(options.data, {
        'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
        'sys.id': "3eOlNEHDpmgsgMmMwgKo2K"
      }, 'QUERY - model:entry');
    };
    adapter.query(store, type, query);
  });
});
/* jshint unused: vars */
define('dummy/tests/unit/adapters/contentful-delivery-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters/contentful-delivery-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/contentful-delivery-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/initializers/contentful-delivery-test', ['exports', 'ember', 'dummy/initializers/contentful-delivery', 'qunit'], function (exports, _ember, _dummyInitializersContentfulDelivery, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | contentful delivery', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
        application.set('contentful', {
          namespace: 'spaces/m21hvnsjmt8a',
          access_token: '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb'
        });
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _dummyInitializersContentfulDelivery['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('dummy/tests/unit/initializers/contentful-delivery-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers/contentful-delivery-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/contentful-delivery-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/models/calendar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('calendar', 'Unit | Model | calendar', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('dummy/tests/unit/models/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/calendar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/calendar-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/models/chef-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('chef', 'Unit | Model | chef', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('dummy/tests/unit/models/chef-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/chef-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/chef-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/models/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('contact', 'Unit | Model | contact', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('dummy/tests/unit/models/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contact-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/models/course-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('course', 'Unit | Model | course', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('dummy/tests/unit/models/course-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/course-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/course-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/models/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('home', 'Unit | Model | home', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('dummy/tests/unit/models/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/home-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/models/recipe-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('recipe', 'Unit | Model | recipe', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('dummy/tests/unit/models/recipe-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/recipe-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/recipe-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/calendar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:calendar', 'Unit | Route | calendar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/calendar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/calendar-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/chefs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:chefs', 'Unit | Route | chefs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/chefs-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/chefs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/chefs-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/contacts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contacts', 'Unit | Route | contacts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/contacts-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/contacts-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contacts-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/courses-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:courses', 'Unit | Route | courses', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/courses-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/courses-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/courses-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/recipes-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:recipes', 'Unit | Route | recipes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/recipes-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/recipes-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/recipes-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/serializers/contentful-delivery-test', ['exports', 'dummy/tests/helpers/store', 'ember', 'ember-qunit', 'dummy/tests/helpers/response/asset', 'dummy/tests/helpers/response/assets', 'dummy/tests/helpers/response/content-type', 'dummy/tests/helpers/response/content-types', 'dummy/tests/helpers/response/entry', 'dummy/tests/helpers/response/entries', 'dummy/tests/helpers/response/query-content-type', 'dummy/tests/helpers/response/query-id', 'dummy/tests/helpers/response/space'], function (exports, _dummyTestsHelpersStore, _ember, _emberQunit, _dummyTestsHelpersResponseAsset, _dummyTestsHelpersResponseAssets, _dummyTestsHelpersResponseContentType, _dummyTestsHelpersResponseContentTypes, _dummyTestsHelpersResponseEntry, _dummyTestsHelpersResponseEntries, _dummyTestsHelpersResponseQueryContentType, _dummyTestsHelpersResponseQueryId, _dummyTestsHelpersResponseSpace) {

  //import DS from 'ember-data';

  //var get = Ember.get;
  //var set = Ember.set;
  var run = _ember['default'].run;

  var store, env, serializer;
  //var spaceResponse,
  //    assetResponse,
  //    assetsResponse,
  //    contentTypeResponse,
  //    contentTypeResponseApi,
  //    contentTypesResponse,
  //    contentTypesResponseApi,
  //    entryResponse,
  //    queryContentTypeResponse,
  //    queryIdResponse;

  (0, _emberQunit.moduleFor)('serializer:contentful-delivery', 'Serializer | contentful delivery', {
    // Specify the other units that are required for this test.
    //needs: ['serializer:contentful-delivery'],
    beforeEach: function beforeEach() {
      env = (0, _dummyTestsHelpersStore['default'])();
      store = env.store;
      serializer = env.contentfulDeliverySerializer;

      //assetResponse = asset();
      //assetsResponse = assets();
      //contentTypeResponse = contentTypeRes();
      //contentTypeResponseApi = contentTypeResApi();
      //contentTypesResponse = contentTypesRes();
      //contentTypesResponseApi = contentTypesResApi();
      //entryResponse = entry();
      //queryContentTypeResponse = queryContentType();
      //queryIdResponse = queryId();
      //spaceResponse = space();
    },

    afterEach: function afterEach() {
      run(store, 'destroy');
      run(env.container, 'destroy');
      run(serializer, 'destroy');
    }
  });

  // Replace this with your real tests.
  //test('it serializes records', function(assert) {
  //  //let serializedRecord = serializer.serialize();
  //  //assert.ok(serializedRecord);
  //  let spaceResponses = 54;
  //  assert.ok(1);
  //});

  /*test('normalizeMeta', function (assert) {
    let rezult;
    rezult = serializer.normalizeMeta( contentTypesResponse );
    assert.deepEqual(rezult.meta, contentTypesResponseApi.meta,'contentTypesResponse');
  
    rezult = serializer.normalizeMeta(assetsResponse);
    assert.deepEqual(rezult.meta, {
      limit: 100,
      skip : 0,
      total: 1
    },'assetsResponse');
  
    rezult = serializer.normalizeMeta(queryContentTypeResponse);
    assert.deepEqual(rezult.meta, {
      limit: 100,
      skip : 0,
      total: 2
    },'queryContentTypeResponse');
  
    rezult = serializer.normalizeMeta(queryIdResponse);
    assert.deepEqual(rezult.meta, {
      limit: 100,
      skip : 0,
      total: 1
    },'queryIdResponse');
  });*/

  (0, _emberQunit.test)('_normalizeResponse - findAll for model:content-type', function (assert) {
    var rezult = undefined,
        payload = undefined,
        primaryModelClass = undefined,
        id = undefined,
        requestType = undefined,
        isSingle = undefined;

    payload = serializer.normalizeMeta(_dummyTestsHelpersResponseContentTypes.contentTypesResponse);
    primaryModelClass = store.modelFor('content-type');
    id = null; //'commentPost';
    requestType = 'findAll';
    isSingle = false;
    rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
    //QUnit.dump.maxDepth = 10;
    assert.deepEqual(rezult.data.attribute, _dummyTestsHelpersResponseContentTypes.contentTypesResponseApi.data.attribute, 'attribute - model:content-type');
  });

  (0, _emberQunit.test)('_normalizeResponse - findRecord for model:content-type', function (assert) {
    var rezult = undefined,
        payload = undefined,
        primaryModelClass = undefined,
        id = undefined,
        requestType = undefined,
        isSingle = undefined;

    payload = serializer.normalizeMeta(_dummyTestsHelpersResponseContentType.contentTypeResponse);
    primaryModelClass = store.modelFor('content-type');
    id = 'commentPost';
    requestType = 'findRecord';
    isSingle = true;
    rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
    //QUnit.dump.maxDepth = 10;
    assert.deepEqual(rezult.data.attributes.length, _dummyTestsHelpersResponseContentType.contentTypeResponseApi.data.attributes.length, 'attribute length');
  });

  (0, _emberQunit.test)('_normalizeResponse - findRecord for model:entry', function (assert) {
    var rezult = undefined,
        payload = undefined,
        primaryModelClass = undefined,
        id = undefined,
        requestType = undefined,
        isSingle = undefined;

    payload = serializer.normalizeMeta(_dummyTestsHelpersResponseEntry.entryResponse);
    primaryModelClass = store.modelFor('entry');
    id = '3eOlNEHDpmgsgMmMwgKo2K';
    requestType = 'findRecord';
    isSingle = true;
    rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
    //QUnit.dump.maxDepth = 10;
    assert.deepEqual(rezult.data.attributes.length, _dummyTestsHelpersResponseEntry.entryResponseApi.data.attributes.length, 'attributes length');
  });

  (0, _emberQunit.test)('_normalizeResponse - findAll for model:entry', function (assert) {
    var rezult = undefined,
        payload = undefined,
        primaryModelClass = undefined,
        id = undefined,
        requestType = undefined,
        isSingle = undefined;

    payload = serializer.normalizeMeta(_dummyTestsHelpersResponseEntries.entriesResponse);
    primaryModelClass = store.modelFor('entry');
    id = null; //'3eOlNEHDpmgsgMmMwgKo2K';
    requestType = 'findAll';
    isSingle = false;
    rezult = serializer._normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle);
    //QUnit.dump.maxDepth = 10;
    assert.deepEqual(rezult.data.length, _dummyTestsHelpersResponseEntries.entriesResponseApi.data.length, 'data length');
  });
});
/* jshint unused: vars */
/*moduleForModel,*/
//import QUnit from 'qunit';
define('dummy/tests/unit/serializers/contentful-delivery-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers/contentful-delivery-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/serializers/contentful-delivery-test.js should pass jshint.\nunit/serializers/contentful-delivery-test.js: line 8, col 9, \'assetResponse\' is defined but never used.\nunit/serializers/contentful-delivery-test.js: line 9, col 9, \'assetsResponse\' is defined but never used.\nunit/serializers/contentful-delivery-test.js: line 14, col 9, \'queryContentTypeResponse\' is defined but never used.\nunit/serializers/contentful-delivery-test.js: line 15, col 9, \'queryIdResponse\' is defined but never used.\nunit/serializers/contentful-delivery-test.js: line 16, col 9, \'spaceResponse\' is defined but never used.\n\n5 errors');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map