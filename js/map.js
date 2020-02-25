let coordinates = [59.938549, 30.322849];
function initMap(ymaps) {
  var myMap = new ymaps.Map(document.querySelector(".modal-map"), {
      center: coordinates,
      zoom: 17
    }),
    myPlacemark = new ymaps.Placemark(coordinates);
  myMap.controls.remove(`trafficControl`);
  myMap.setType("yandex#map");
  myMap.controls.remove(`typeSelector`);
  myMap.controls.remove(`fullscreenControl`);
  myMap.controls.remove(`searchControl`);
  myMap.controls.remove(`geolocationControl`);
  myMap.controls.remove(`zoomControl`);
  myMap.controls.remove(`rulerControl`);
  myMap.geoObjects.add(myPlacemark);
}
