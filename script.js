//This function creates the initial map.

window.onbeforeunload = null;

async function initMap() {
    //creates map and marker/pin element and info window
      const { Map } = await google.maps.importLibrary("maps");
      /*const LA = {
        north: 34.5000,
        south: 33.6000,
        west: -119.0000,
        east: -117.6000,
      };
      */

      map = new Map(document.getElementById("map"), {
      center: { lat: 34.0549, lng: -118.2426 },
      zoom: 8,
      disableDefaultUI: false,
      mapTypeControl: false,
     // fullscreenControl: false,
      //restriction: {
        //latLngBounds: LA,
        //strictBounds: true
      //},
      styles: [
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#686868"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "-22"
                },
                {
                    "visibility": "on"
                },
                {
                    "color": "#b4b4b4"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": "-51"
                },
                {
                    "lightness": "11"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "saturation": "3"
                },
                {
                    "lightness": "-56"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "-52"
                },
                {
                    "color": "#9094a0"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "6.13"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "weight": "1.24"
                },
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "-10"
                },
                {
                    "gamma": "0.94"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b4b4b4"
                },
                {
                    "weight": "5.40"
                },
                {
                    "lightness": "7"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#231f1f"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#595151"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "-16"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#282626"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": "-41"
                },
                {
                    "lightness": "-41"
                },
                {
                    "color": "#2a4592"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "1.10"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "-16"
                },
                {
                    "weight": "0.72"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "-37"
                },
                {
                    "color": "#2a4592"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#eeed6a"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#0a0808"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#b7e4f4"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]

      }
    )
    console.log("Map Loaded")
};



/*
  function geolocateCenter(){
    if(navigator.geolocation){ //checks if geo-location even supported before running
    navigator.geolocation.getCurrentPosition(function(position){
        map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
    }
    else
        console.log("geolocation is not supported by browser");
}
*/



//function to center the map at whatever cordinates
function centerMap(lat, long){
    map.setCenter( {lat:lat, lng: long});
    map.setZoom(8);
}






  
//addPin("34.33494",  "-118.51849, 297.32", "Time (PST): 2025-05-02 02:09 AM PDT", )
  async function addPin(Lat,Long, bright, time, day){

    console.log(Lat,Long, bright, time, day);
    
    
    const { Map } = await google.maps.importLibrary("maps");
    let iconURL = '';
    if (day < 4) {
        iconURL = 'fire_imgs/RedFire.png'
        //red
      } else if (day < 7) {
         iconURL = 'fire_imgs/OrangeFire.png'
        //orange
      } else {
         iconURL = 'fire_imgs/GreenFire.png'
        //green
      } 
    const marker = new google.maps.Marker({
        map: window.map,
        position: { lat: parseFloat(Lat), lng: parseFloat(Long) },
        title: 'Fire',
        icon: {
            url: iconURL,
            scaledSize: new google.maps.Size(35, 35),
          },
      });



      //constructs infowindow
  const content = `
  <div class="feh-content">
  <p class="feh-content-description">Latitude:${Lat}</p>
 <p class="feh-content-description">Longitude:${Long}</p>
 <p class="feh-content-description">Brightness:${bright}</p>
 <p class="feh-content-description">Reported At:${time}</p>
 <p class="feh-content-description">Reported ${day} day(s) ago</p>
  </div>
`;

const infoWindow = new google.maps.InfoWindow({
  content: content,
  minWidth: 200,
  maxWidth: 200,
});
window.currentInfoWindow = infoWindow;
  //removes old info-window if you click a new one.
  marker.addListener('click', () => {
    //close old info window if new one opens
    if (window.currentInfoWindow) {
        window.currentInfoWindow.close();
      }
  infoWindow.setContent(content);
  infoWindow.open(window.map, marker);
  //track info windows to close old one
  window.currentInfoWindow = infoWindow;
});

infoWindow.addListener('closeclick', function() {
  window.map.fitBounds(window.bounds);
});
}

  


