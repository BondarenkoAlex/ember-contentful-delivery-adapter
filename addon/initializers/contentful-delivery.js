import ContentfulDeliveryAdapter from '../adapters/contentful-delivery';
import ContentfulDeliverySerializer from '../serializers/contentful-delivery';

export function initialize( application ) {
  // application.inject('route', 'foo', 'service:foo');
  let config = application.get( 'contentful' );
  ContentfulDeliveryAdapter.reopen({
    access_token: config.access_token,
    namespace   : "spaces/" + config.namespace
  });
  application.register('adapter:application', ContentfulDeliveryAdapter);
  application.register('serializer:application', ContentfulDeliverySerializer);
}

export default {
  name: 'contentful-delivery',
  initialize
};
