import Ember from 'ember';

export function pagination(params, hash) {


    //let pages = Math.ceil(hash.total / hash.limit);
    //let pagination = [];
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
  options.template.yield();
}

export default Ember.Helper.helper(pagination);
