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
<YOUR CONTENTFUL SPACE> : Contentful account -> APIs -> Content delivery / preview keys -> Website Key -> Space ID
<YOUR CONTENTFUL ACCESS TOKEN> : Contentful account -> APIs -> Content delivery / preview keys -> Website Key -> Production

## Models

Addon have added models:
space,
asset,
content-type,
entry

All new models should inherit "entry" model.
Example:
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
