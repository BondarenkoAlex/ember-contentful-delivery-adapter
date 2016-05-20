import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  name: "my name",
  actions: {
    click() {
      let t = 0;
    }
  },
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
        activeClass: (i === start) ? true : false
      }
    }
    this.set("pagination",pagination);
    let gf = 0;
    debugger;
    //let activeClass,
    //    skipIn;
    //for (let i = 0; i < pages; i++) {
    //  skipIn = i * hash.limit;
    //  activeClass = '';
    //  if (skipIn === hash.skip) {
    //    activeClass = 'active';
    //  }
    //  pagination.push({
    //    skip       : skipIn,
    //    limit      : hash.limit,
    //    activeClass: activeClass
    //  });
    //}
    //return pagination;
  }
});
