let coordinates=[59.938549,30.322849]
function initMap (ymaps) {
  var myMap = new ymaps.Map(document.getElementById("modal-map"), {
      center: coordinates,
      zoom: 17
  }),
  myPlacemark = new ymaps.Placemark(coordinates);
  myMap.geoObjects.add(myPlacemark)
}
