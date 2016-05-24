import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    },
    skip: {
      refreshModel: true
    }
  },
  model(param, transition) {
    let queryParams = {
          limit:3,
          skip:0
        };
    queryParams = Ember.$.extend(queryParams, transition.queryParams);
    return this.store.query( 'culinary-teacher', { limit:queryParams.limit, skip:queryParams.skip } );
  }
});
