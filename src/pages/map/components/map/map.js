import loadGoogleMapsApi from 'load-google-maps-api'

loadGoogleMapsApi('AIzaSyCGHfirQ0GAtnFW4Kpxad1nChj7vvxIvfQ').then(function(
  googleMaps
) {
  new googleMaps.Map(document.querySelector('.map__container'), {
    center: { lat: 55.782909, lng: 37.626548 },
    zoom: 12
  })
})
