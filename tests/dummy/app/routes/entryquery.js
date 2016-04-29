import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //let entry = this.store.findRecord('comment-post', '3eOlNEHDpmgsgMmMwgKo2K'); //this.store.query('entry', {'sys.id':'3eOlNEHDpmgsgMmMwgKo2K'/*,limit:1,skip:0*/});
    //let mediaFieldMy = entry.get("mediaFieldMy");
    //return this.store.query('entry', {'sys.id':'3eOlNEHDpmgsgMmMwgKo2K'/*,limit:1,skip:0*/});
    //return entry.sysSpace;

    let sysSpace;
    let entry = this.store.findRecord('comment-post', '3eOlNEHDpmgsgMmMwgKo2K').then(function (data) {
      //data.get('mediaFieldMy').then(function (c) {
      //  console.log(c);
      //})
    });
    return this.store.findRecord('comment-post', '3eOlNEHDpmgsgMmMwgKo2K');
  }
});
