import loadGoogleMapsApi from 'load-google-maps-api'

loadGoogleMapsApi({
  key: 'AIzaSyCGHfirQ0GAtnFW4Kpxad1nChj7vvxIvfQ'
}).then(function(googleMaps) {
  new googleMaps.Map(document.querySelector('.map__container'), {
    center: { lat: 55.782909, lng: 37.626548 },
    zoom: 12,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5'
          }
        ]
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f5f5'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dadada'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#c9c9c9'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      }
    ]
  })
})

const map = document.querySelector('.map')
const input = map.querySelector('.map__input')

const addressItems = map.querySelectorAll('.map__address')

input.addEventListener('input', () => {
  addressItems.forEach(item => {
    const address = item.querySelector('.map__address-self')

    if (
      !address.textContent
        .toLowerCase()
        .trim()
        .replace(/[.,]/gu, '')
        .includes(
          `${input.value
            .toLowerCase()
            .trim()
            .replace(/[.,]/gu, '')}`
        )
    ) {
      item.classList.add('map__address--hide')
    } else {
      item.classList.remove('map__address--hide')
    }
  })
})
