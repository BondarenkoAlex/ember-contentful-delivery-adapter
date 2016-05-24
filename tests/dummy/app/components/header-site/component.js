import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  didInsertElement: function () {
    Ember.$('.flexslider').flexslider({
      animation: "fade",
      slideshow: true,
      slideshowSpeed: 7000,
      animationDuration: 600,
      prevText: "",
      nextText: "",
      controlNav: false
    })
  }
});
