import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNames: ["pagination"],
  pagination : null,
  didReceiveAttrs() {
    this._super(...arguments);
    let total = this.get("total");
    let skip = this.get("skip");
    let limit = this.get("limit");
    if ( Ember.isEmpty(total) || Ember.isEmpty(skip) || Ember.isEmpty(limit) )
      {return;}

    let pages = Math.ceil(total / limit);
    let pagination = new Array( pages );
    for (let i = 0; i < pagination.length ; i++) {
      let start = i * limit;
      pagination[i] = {
        skip       : start,
        limit      : limit,
        index      : i+1
      };
    }
    this.set("pagination",pagination);
  }
});
