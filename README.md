[![Build Status](https://travis-ci.org/BondarenkoAlex/ember-contentful-delivery-adapter.svg?branch=master)](https://travis-ci.org/BondarenkoAlex/ember-contentful-delivery-adapter)

# ember-contentful-delivery-adapter
This is an Ember Data adapter/serializer that uses the READ ONLY  [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) from service [contentful](https://www.contentful.com/)

# DEMO
http://bondarenkoalex.github.io/ember-contentful-delivery-adapter/ 

## Create a New Application

```
ember new simple-contentful-app
cd simple-contentful-app
```

## Installation addon
```
ember install ember-contentful-delivery-adapter
```

## Create account at Contentful

You'll want to get an account at [Contentful login](https://be.contentful.com/login).
After registration adds space. You will have provided key and space.

## Configure your application

After installing the addon, you add Namespace and Access Token in `config/environment.js`
```
APP: {
    // Here you can pass flags/options to your application instance
    // when it is created
    contentful: {
        namespace     : '<YOUR CONTENTFUL SPACE>',
        access_token  : '<YOUR CONTENTFUL ACCESS TOKEN>'
    }
}
```

Contentful account:

`<YOUR CONTENTFUL SPACE> : Contentful account -> APIs -> Content delivery / preview keys -> Website Key -> Space ID`

`<YOUR CONTENTFUL ACCESS TOKEN> : Contentful account -> APIs -> Content delivery / preview keys -> Website Key -> Production`

## Models

Addon has added models:
```
// addon/models/
space,
asset,
content-type,
entry
```

All new models should inherit "entry" model. This model contains the default fields, such as 
```
// addon/models/entry.js
import DS from 'ember-data';

export default DS.Model.extend({
  sysCreatedAt: DS.attr('date'),
  sysUpdatedAt: DS.attr('date'),
  sysRevision : DS.attr('number'),
  sysLocale: DS.attr('string'),
  sysSpace: DS.belongsTo('space')
});
```
Example model:
```
// models/course.js
import DS from 'ember-data';
import Entry from 'ember-contentful-delivery-adapter/models/entry';

export default Entry.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  objectives: DS.attr(),
  unit: DS.belongsTo('unit-course'),
  image: DS.belongsTo('asset')
});
```

### Naming Models
The new models names as ID "content model".
`Contentful account -> APIs -> Content model explorer -> <content model (IDENTIFIER)>`

Example:
| content model (IDENTIFIER)  | Name model |
| ------------- | ------------- |
| course  | course  |
| calendarEvent  | calendar-event  |
| unitCourseSimple  | unit-course-simple  |

## Usage
Your application should have configured setting `config/environment.js` and created models.
You can use the requests, such as: `findRecord, findAll` and `query`.
Example:
```
// app/routes/<file>.js
model() {
  return this.store.findAll('course');
}
```
or
```
// app/routes/<file>.js
model() {
  return this.store.findRecord('course', <Id of Resource>);
}
```
or
```
// app/routes/<file>.js
model() {
  return this.store.query('course', { 'sys.id':<Id of Resource> } );
}
```
`query` param sees ["search parameters"](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/query-entries?console=1)
