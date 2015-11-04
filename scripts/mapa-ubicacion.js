function initMap() {
  var myLatLng = {lat: 19.470519, lng: -99.249130};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Quimect'
  });
}
 google.maps.event.addDomListener(window, 'load', initMap);

