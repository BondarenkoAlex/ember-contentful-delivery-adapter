import Ember from 'ember';
import layout from './template';
import google from 'gmaps';

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    let map;
    let lat = this.get("lat");
    let lng = this.get("lon");
    var mapOptions = {
      zoom: 18,
      center: {lat: lat, lng: lng}
    };
    map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map
    });
    var infowindow = new google.maps.InfoWindow({
      content: '<p>Marker Location:' + marker.getPosition() + '</p>'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  }
});
