define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - app.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('app.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/components/google-map/component.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - components/google-map/component.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/google-map/component.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/components/header-site/component.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - components/header-site/component.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/header-site/component.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/components/pagination-comp/component.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - components/pagination-comp/component.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/pagination-comp/component.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/destroy-app.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/destroy-app.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/module-for-acceptance.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/module-for-acceptance.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/owner.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/owner.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/resolver.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/resolver.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/asset.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/asset.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/assets.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/assets.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/content-type.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/content-type.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/content-types.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/content-types.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/entries.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/entries.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/entry.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/entry.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/query-content-type.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/query-content-type.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/query-id.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/query-id.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/response/space.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/response/space.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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

  describe('JSHint - helpers/start-app.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/start-app.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
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
    //registry.register('adapter:-default', DS.Adapter);
    //
    //registry.register('serializer:-default', DS.JSONSerializer);
    //registry.register('serializer:-rest', DS.RESTSerializer);
    //
    //registry.register('adapter:-rest', DS.RESTAdapter);
    //
    //registry.register('adapter:-json-api', DS.JSONAPIAdapter);
    //registry.register('serializer:-json-api', DS.JSONAPISerializer);

    registry.register('transform:date', _emberData['default'].DateTransform);
    registry.register('transform:boolean', _emberData['default'].BooleanTransform);
    registry.register('transform:number', _emberData['default'].NumberTransform);
    registry.register('transform:string', _emberData['default'].StringTransform);

    registry.register('adapter:-contentful-delivery', _emberContentfulDeliveryAdapterAdaptersContentfulDelivery['default']);
    registry.register('serializer:-contentful-delivery', _emberContentfulDeliveryAdapterSerializersContentfulDelivery['default']);

    //env.restSerializer = container.lookup('serializer:-rest');
    env.store = container.lookup('service:store');
    //env.serializer = env.store.serializerFor('-default');
    //env.adapter = env.store.get('defaultAdapter');
    env.serializer = env.store.serializerFor('-contentful-delivery');
    env.adapter = env.store.adapterFor('-contentful-delivery');
    //env.container = container;
    //env.registry = registry;

    env.contentfulDeliveryAdapter = container.lookup('adapter:-contentful-delivery');
    env.contentfulDeliverySerializer = container.lookup('serializer:-contentful-delivery');

    //env.serializer = env.contentfulDeliveryAdapter;
    //env.adapter = env.contentfulDeliverySerializer;

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

  describe('JSHint - helpers/store.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/store.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/calendar-event.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/calendar-event.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/calendar-event.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/contact.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/contact.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/contact.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/course.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/course.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/course.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/culinary-teacher.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/culinary-teacher.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/culinary-teacher.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/education-calendar.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/education-calendar.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/education-calendar.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/news.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/news.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/news.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/recipe.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/recipe.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/recipe.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/slider-rotator.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/slider-rotator.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/slider-rotator.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/models/unit-course.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - models/unit-course.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/unit-course.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - resolver.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('resolver.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - router.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('router.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/application.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/application.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/calendar-event.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/calendar-event.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/calendar-event.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/calendar.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/calendar.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/chef.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/chef.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/chef.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/chefs.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/chefs.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/chefs.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/contacts.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/contacts.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/contacts.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/course.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/course.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/course.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/courses.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/courses.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/courses.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/education-calendar.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/education-calendar.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/education-calendar.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/home.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/home.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/home.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/news.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/news.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/news.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/recipe.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/recipe.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/recipe.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/routes/recipes.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - routes/recipes.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/recipes.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-mocha'], function (exports, _dummyTestsHelpersResolver, _emberMocha) {

  (0, _emberMocha.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - test-helper.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('test-helper.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/adapters/contentful-delivery-test', ['exports', 'dummy/tests/helpers/store', 'ember', 'ember-data', 'ember-mocha'], function (exports, _dummyTestsHelpersStore, _ember, _emberData, _emberMocha) {

  //var chai = require("chai");
  //var { chaiAsPromised } = require("chai-as-promised");
  //var { chaiAsPromised } = require("bower_components/chai-as-promised/lib/chai-as-promised");
  //import {chaiAsPromised} from "npm:chai-as-promised";
  //var fgd = chaiAsPromised;
  //import {chaiAsPromised} from "bower_components/chai-as-promised/lib/chai-as-promised";
  //chai.use(chaiAsPromised);
  //D:\Users\Alexey\Documents\Ember\Project\ember-contentful-delivery-adapter\bower_components\chai-as-promised\lib\chai-as-promised.js

  var store, env, adapter;

  (0, _emberMocha.describeModule)('adapter:contentful-delivery', 'Adapter', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {

    describe('#init', function () {
      (0, _emberMocha.it)('exists', function () {
        var adapter = this.subject();
        expect(adapter).to.be.an('object');
      });
    }); // #init

    describe('#config', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = (0, _dummyTestsHelpersStore['default'])();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        _ember['default'].run(store, 'destroy');
        _ember['default'].run(env.container, 'destroy');
        _ember['default'].run(adapter, 'destroy');
      });

      (0, _emberMocha.it)('host', function () {
        var host = adapter.get('host');
        expect(host).to.equal('https://cdn.contentful.com');
      });

      (0, _emberMocha.it)('namespace', function () {
        var namespace = adapter.get('namespace');
        expect(namespace).to.equal('spaces/m21hvnsjmt8a');
      });

      (0, _emberMocha.it)('access_token', function () {
        var accessToken = adapter.get('access_token');
        expect(accessToken).to.equal('0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb');
      });

      (0, _emberMocha.it)('headers["Accept"]', function () {
        var headers = adapter.get('headers');
        expect(headers['Accept']).to.equal('application/vnd.api+json');
      });

      (0, _emberMocha.it)('headers["content-type"]', function () {
        var headers = adapter.get('headers');
        expect(headers['content-type']).to.equal('application/vnd.contentful.delivery.v1+json');
      });
    });

    /*###########################################################*/

    describe('#findRecord', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = (0, _dummyTestsHelpersStore['default'])();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        _ember['default'].run(store, 'destroy');
        _ember['default'].run(env.container, 'destroy');
        _ember['default'].run(adapter, 'destroy');
      });

      describe('#model "asset"', function () {

        (0, _emberMocha.it)('test url', function () {
          var type = undefined,
              id = undefined;

          type = store.modelFor('asset');
          id = 'idAsset';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets/idAsset');
          };
          adapter.findRecord(store, type, id, null);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined,
              id = undefined;

          type = store.modelFor('asset');
          id = 'idAsset';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);
        });
      });

      describe('#model "content-type"', function () {

        (0, _emberMocha.it)('test url', function () {
          var type = undefined,
              id = undefined;

          type = store.modelFor('content-type');
          id = 'idContentType';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types/idContentType');
          };
          adapter.findRecord(store, type, id, null);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined,
              id = undefined;

          type = store.modelFor('content-type');
          id = 'idContentType';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);
        });
      });

      describe('#model "space"', function () {

        (0, _emberMocha.it)('test url', function () {
          var type = undefined,
              id = undefined;

          type = store.modelFor('space');
          id = 'null';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a');
          };
          adapter.findRecord(store, type, id, null);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined,
              id = undefined;

          type = store.modelFor('content-type');
          id = 'null';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);
        });
      });

      describe('#model "entry"', function () {

        (0, _emberMocha.it)('test', function () {
          var type = undefined,
              id = undefined;

          env.registry.register('model:entry', _emberData['default'].Model.extend());

          type = store.modelFor('entry');
          id = 'idEntry';

          expect(function () {
            adapter.findRecord(store, type, id, null);
          }).to['throw'](_ember['default'].Error);
        });
      });

      describe('#model "post"', function () {

        (0, _emberMocha.it)('test url', function () {
          var type = undefined,
              id = undefined;

          //env.registry.register( 'model:post', DS.Model.extend() );
          type = store.modelFor('post');
          id = 'idPost';

          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries/idPost');
          };
          adapter.findRecord(store, type, id, null);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined,
              id = undefined;

          //env.registry.register( 'model:post', DS.Model.extend());
          type = store.modelFor('post');
          id = 'idPost';

          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findRecord(store, type, id, null);
        });
      });
    });

    /*###########################################################*/

    describe('#findAll', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = (0, _dummyTestsHelpersStore['default'])();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        _ember['default'].run(store, 'destroy');
        _ember['default'].run(env.container, 'destroy');
        _ember['default'].run(adapter, 'destroy');
      });

      describe('#model "asset"', function () {
        (0, _emberMocha.it)('test url', function () {
          var type = undefined;
          type = store.modelFor('asset');
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/assets');
          };
          adapter.findAll(store, type, null, null);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined;
          type = store.modelFor('asset');
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findAll(store, type, null, null);
        });
      });

      describe('#model "content-type"', function () {
        (0, _emberMocha.it)('test url', function () {
          var type = undefined;
          type = store.modelFor('content-type');
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/content_types');
          };
          adapter.findAll(store, type, null, null);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined;
          type = store.modelFor('content-type');
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb"
            });
          };
          adapter.findAll(store, type, null, null);
        });
      });

      describe('#model "space"', function () {
        (0, _emberMocha.it)('test', function () {
          var type = undefined;
          type = store.modelFor('space');
          expect(function () {
            adapter.findAll(store, type, null, null);
          }).to['throw'](_ember['default'].Error);
        });
      });

      describe('#model "entry"', function () {
        (0, _emberMocha.it)('test', function () {
          var type = undefined;
          type = store.modelFor('entry');
          expect(function () {
            adapter.findAll(store, type, null, null);
          }).to['throw'](_ember['default'].Error);
        });
      });

      describe('#model "post"', function () {
        (0, _emberMocha.it)('test url', function () {
          var type = undefined;
          type = store.modelFor('post');
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries');
          };
          adapter.findAll(store, type, null, null);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined;
          type = store.modelFor('post');
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
              'content_type': "post"
            });
          };
          adapter.findAll(store, type, null, null);
        });
      });
    });

    /*###########################################################*/

    describe('#query', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = (0, _dummyTestsHelpersStore['default'])();
        store = env.store;
        adapter = env.contentfulDeliveryAdapter;
      });

      afterEach(function () {
        // runs after each test in this block
        _ember['default'].run(store, 'destroy');
        _ember['default'].run(env.container, 'destroy');
        _ember['default'].run(adapter, 'destroy');
      });

      describe('#model "asset"', function () {
        (0, _emberMocha.it)('test', function () {
          var type = undefined,
              query = undefined;
          type = store.modelFor('asset');
          query = { 'sys.id': 'id' };
          expect(function () {
            adapter.query(store, type, query);
          }).to['throw'](_ember['default'].Error);
        });
      });

      describe('#model "content-type"', function () {
        (0, _emberMocha.it)('test', function () {
          var type = undefined,
              query = undefined;
          type = store.modelFor('content-type');
          query = { 'sys.id': 'id' };
          expect(function () {
            adapter.query(store, type, query);
          }).to['throw'](_ember['default'].Error);
        });
      });

      describe('#model "space"', function () {
        (0, _emberMocha.it)('test', function () {
          var type = undefined,
              query = undefined;
          type = store.modelFor('space');
          query = { 'sys.id': 'id' };
          expect(function () {
            adapter.query(store, type, query);
          }).to['throw'](_ember['default'].Error);
        });
      });

      describe('#model "entry"', function () {
        (0, _emberMocha.it)('test url', function () {
          var type = undefined,
              query = undefined;
          type = store.modelFor('entry');
          query = { 'sys.id': 'idEntry' };
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries');
          };
          adapter.query(store, type, query);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined,
              query = undefined;
          type = store.modelFor('entry');
          query = { 'sys.id': 'idEntry' };
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
              'content_type': 'entry',
              'sys.id': "idEntry"
            });
          };
          adapter.query(store, type, query);
        });
      });

      describe('#model "post"', function () {
        (0, _emberMocha.it)('test url', function () {
          var type = undefined,
              query = undefined;
          type = store.modelFor('post');
          query = { 'sys.id': 'idPost' };
          adapter.ajax = function (url, type, options) {
            expect(url).to.equal('https://cdn.contentful.com/spaces/m21hvnsjmt8a/entries');
          };
          adapter.query(store, type, query);
        });

        (0, _emberMocha.it)('test query', function () {
          var type = undefined,
              query = undefined;
          type = store.modelFor('post');
          query = { 'sys.id': 'idPost' };
          adapter.ajax = function (url, type, options) {
            expect(options.data).deep.equal({
              'access_token': "0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb",
              'content_type': 'post',
              'sys.id': "idPost"
            });
          };
          adapter.query(store, type, query);
        });
      });
    });
  });
});
/* jshint unused: vars */
define('dummy/tests/unit/adapters/contentful-delivery-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/adapters/contentful-delivery-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/adapters/contentful-delivery-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/initializers/contentful-delivery-test', ['exports', 'chai', 'mocha', 'ember', 'ember-contentful-delivery-adapter/initializers/contentful-delivery'], function (exports, _chai, _mocha, _ember, _emberContentfulDeliveryAdapterInitializersContentfulDelivery) {

  (0, _mocha.describe)('InitialInitializer', function () {
    var container = undefined,
        application = undefined;

    (0, _mocha.beforeEach)(function () {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
        application.set('contentful', {
          namespace: 'spaces/m21hvnsjmt8a',
          access_token: '0665901a5bc6c853e6533535301171e5e6004011e0e02aac23b03ad537986ffb'
        });
      });
    });

    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      (0, _emberContentfulDeliveryAdapterInitializersContentfulDelivery.initialize)(application);

      // you would normally confirm the results of the initializer here
      (0, _chai.expect)(true).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/initializers/contentful-delivery-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/initializers/contentful-delivery-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/initializers/contentful-delivery-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/calendar-event-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('calendar-event', 'Unit | Model | calendar event', {
    // Specify the other units that are required for this test.
    needs: ['model:space']
  }, function () {
    // Replace this with your real tests.
    beforeEach(function () {
      // runs before each test in this block

    });

    afterEach(function () {
      // runs after each test in this block

    });

    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/calendar-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/calendar-event-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/calendar-event-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/contact-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('contact', 'Unit | Model | contact', {
    // Specify the other units that are required for this test.
    needs: ['model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/contact-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/contact-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/course-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('course', 'Unit | Model | course', {
    // Specify the other units that are required for this test.
    needs: ['model:unit-course', 'model:asset', 'model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/course-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/course-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/course-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/culinary-teacher-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('culinary-teacher', 'Unit | Model | culinary teacher', {
    // Specify the other units that are required for this test.
    needs: ['model:asset', 'model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/culinary-teacher-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/culinary-teacher-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/culinary-teacher-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/education-calendar-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('education-calendar', 'Unit | Model | education calendar', {
    // Specify the other units that are required for this test.
    needs: ['model:asset', 'model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/education-calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/education-calendar-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/education-calendar-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/news-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('news', 'Unit | Model | news', {
    // Specify the other units that are required for this test.
    needs: ['model:asset', 'model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/news-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/news-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/news-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/recipe-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('recipe', 'Unit | Model | recipe', {
    // Specify the other units that are required for this test.
    needs: ['model:asset', 'model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/recipe-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/recipe-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/recipe-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/slider-rotator-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('slider-rotator', 'Unit | Model | slider rotator', {
    // Specify the other units that are required for this test.
    needs: ['model:asset', 'model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/slider-rotator-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/slider-rotator-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/slider-rotator-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/models/unit-course-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('unit-course', 'Unit | Model | unit course', {
    // Specify the other units that are required for this test.
    needs: ['model:asset', 'model:space']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/models/unit-course-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/models/unit-course-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/unit-course-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/calendar-event-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:calendar-event', 'CalendarEventRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/calendar-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/calendar-event-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/calendar-event-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/calendar-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:calendar', 'CalendarRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/calendar-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/calendar-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/chef-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:chef', 'ChefRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/chef-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/chef-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/chef-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/chefs-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:chefs', 'ChefsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/chefs-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/chefs-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/chefs-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/contacts-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:contacts', 'ContactsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/contacts-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/contacts-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/contacts-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/course-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:course', 'CourseRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/course-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/course-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/course-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/courses-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:courses', 'CoursesRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/courses-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/courses-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/courses-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/education-calendar-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:education-calendar', 'EducationCalendarRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/education-calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/education-calendar-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/education-calendar-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/home-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:home', 'HomeRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/home-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/home-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/news-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:news', 'NewsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/news-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/news-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/news-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/recipe-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:recipe', 'RecipeRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/recipe-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/recipe-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/recipe-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/routes/recipes-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:recipes', 'RecipesRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('dummy/tests/unit/routes/recipes-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/routes/recipes-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/recipes-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('dummy/tests/unit/serializers/contentful-delivery-test', ['exports', 'dummy/tests/helpers/store', 'ember', 'ember-data', 'ember-mocha'], function (exports, _dummyTestsHelpersStore, _ember, _emberData, _emberMocha) {

  var store, env, serializer;

  (0, _emberMocha.describeModule)('serializer:contentful-delivery', 'Serializer', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {

    describe('#config', function () {
      beforeEach(function () {
        // runs before each test in this block
        env = (0, _dummyTestsHelpersStore['default'])();
        store = env.store;
        serializer = env.contentfulDeliverySerializer;
      });

      afterEach(function (done) {
        // runs after each test in this block
        _ember['default'].run(store, 'destroy');
        _ember['default'].run(env.container, 'destroy');
        _ember['default'].run(serializer, 'destroy');
        done();
      });

      (0, _emberMocha.it)('exists', function () {
        var serializer = this.subject();
        expect(serializer).to.be.an('object');
      });

      (0, _emberMocha.it)('method extractMeta()', function () {
        var payload = {
          "sys": {
            "type": "Array"
          },
          "total": 1,
          "skip": 0,
          "limit": 100,
          "items": [],
          "includes": {}
        };
        var result = serializer.extractMeta(store, null, payload);
        //debugger;
        expect(result).deep.equal({
          "total": 1,
          "skip": 0,
          "limit": 100
        });
      });

      (0, _emberMocha.it)('method _normalizeResourceHash(). The "type" is not "ContentType"', function () {
        env.registry.register('model:post', _emberData['default'].Model.extend({}));

        var resourceHash = {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "crosqmsbfuzt"
              }
            },
            "id": "5SZjfz4REc08awcE02cKog",
            "type": "Entry",
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
            "title": "string",
            "description": "string",
            "longDescription": "string"
          }
        };

        var modelClass = store.modelFor('post');

        var result = serializer._normalizeResourceHash(modelClass, resourceHash);
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

      (0, _emberMocha.it)('method _normalizeResourceHash(). The "type" is "ContentType"', function () {
        env.registry.register('model:content-type', _emberData['default'].Model.extend({}));

        var resourceHash = {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "crosqmsbfuzt"
              }
            },
            "id": "5SZjfz4REc08awcE02cKog",
            "type": "ContentType",
            "revision": 1,
            "contentType": {
              "sys": {
                "type": "Link",
                "linkType": "ContentType",
                "id": "news"
              }
            },
            "locale": "en-US"
          },
          "fields": {
            "title": "string",
            "description": "string",
            "longDescription": "string"
          }
        };

        var modelClass = store.modelFor('content-type');

        var result = serializer._normalizeResourceHash(modelClass, resourceHash);
        expect(result).to.have.property('sysSpace');
        expect(result).to.have.property('sysId');
        expect(result).to.have.property('sysType');
        expect(result).to.have.property('sysRevision');
        expect(result).to.have.property('sysContentType');
        expect(result).to.have.property('sysLocale');
        expect(result).to.have.property('fields');
      });

      (0, _emberMocha.it)('method _renameSys()', function () {
        var sys = {
          "space": {},
          "id": "id",
          "type": "Entry",
          "createdAt": "string",
          "updatedAt": "string",
          "revision": 2,
          "contentType": {},
          "locale": "en-US"
        };
        var result = serializer._renameSys(sys);
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

      (0, _emberMocha.it)('method extractId()', function () {
        var sys = {
          sysId: "id"
        };
        var result = serializer.extractId(null, sys);
        expect(result).to.equal("id");
      });

      (0, _emberMocha.it)('method extractType() when "type" equal "Entry"', function () {
        var sys = {
          "sysSpace": {},
          "sysId": "id",
          "sysType": "Entry",
          "sysContentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "post"
            }
          }
        };
        var result = serializer.extractType(null, sys);
        expect(result).to.equal("post");
      });

      (0, _emberMocha.it)('method extractType() when "type" not equal "Entry"', function () {
        var sys = {
          "sysSpace": {},
          "sysId": "id",
          "sysType": "Asset",
          sysCreatedAt: "string",
          sysUpdatedAt: "string"
        };
        var result = serializer.extractType(null, sys);
        expect(result).to.equal("Asset");
      });

      (0, _emberMocha.it)('method extractAttributes()', function () {
        env.registry.register('model:post', _emberData['default'].Model.extend({
          title: _emberData['default'].attr('string'),
          descriptions: _emberData['default'].attr('string'),
          asset: _emberData['default'].belongsTo('asset'),
          comments: _emberData['default'].hasMany('comment')
        }));

        var responseObjNormalize = {
          "sysSpace": {},
          "sysId": "id",
          "sysType": "Entry",
          "sysContentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "post"
            }
          },
          "title": "string",
          "descriptions": "string",
          "asset": {},
          "comments": []
        };

        var modelClass = store.modelFor('post');

        var result = serializer.extractAttributes(modelClass, responseObjNormalize);
        expect(result).deep.equal({
          descriptions: "string",
          title: "string"
        });
      });

      (0, _emberMocha.it)('method extractRelationship() when "linkType" not equal "Entry"', function () {
        var relationshipHash = {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "idAsset"
          }
        };
        var result = serializer.extractRelationship('asset', relationshipHash);
        expect(result).deep.equal({
          id: "idAsset",
          type: "Asset"
        });
      });

      (0, _emberMocha.it)('method extractRelationship() when "linkType" equal "Entry". Model name is "post"', function () {
        var relationshipHash = {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "AAA"
          }
        };
        var result = serializer.extractRelationship('post', relationshipHash);
        expect(result).deep.equal({
          id: "AAA",
          type: "post"
        });
      });

      (0, _emberMocha.it)('method extractRelationship() when "linkType" equal "Entry". Model name is "other"', function () {
        var relationshipHash = {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "AAA"
          }
        };
        var result = serializer.extractRelationship('other', relationshipHash);
        expect(result).deep.equal({
          id: "AAA",
          type: "other"
        });
      });

      (0, _emberMocha.it)('method extractRelationships()', function () {
        env.registry.register('model:post', _emberData['default'].Model.extend({
          title: _emberData['default'].attr('string'),
          descriptions: _emberData['default'].attr('string'),
          asset: _emberData['default'].belongsTo('asset'),
          comments: _emberData['default'].hasMany('comment')
        }));

        var relationshipHash = {
          "sysSpace": {},
          "sysId": "id",
          "sysType": "Entry",
          "sysContentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "post"
            }
          },
          "title": "string",
          "descriptions": "string",
          "asset": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "idAsset"
            }
          },
          "comments": [{
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "AAA"
            }
          }, {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "BBB"
            }
          }]
        };

        var modelClass = store.modelFor('post');

        var result = serializer.extractRelationships(modelClass, relationshipHash);
        expect(result).deep.equal({
          "asset": {
            "data": {
              "type": "Asset",
              "id": "idAsset"
            }
          },
          "comments": {
            "data": [{
              "type": "comment",
              "id": "AAA"
            }, {
              "type": "comment",
              "id": "BBB"
            }]
          }
        });
      });
    });
  });
});
/* jshint unused: vars */
define('dummy/tests/unit/serializers/contentful-delivery-test.jshint', ['exports'], function (exports) {
  'use strict';

  describe('JSHint - unit/serializers/contentful-delivery-test.js', function () {
    it('should pass jshint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/serializers/contentful-delivery-test.js should pass jshint.');
        error.stack = undefined;throw error;
      }
    });
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map