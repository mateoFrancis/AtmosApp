//This function creates the initial map.
async function initMap() {
    //creates map and marker/pin element and info window
      const { Map } = await google.maps.importLibrary("maps");
      const LA = {
        north: 34.5000,
        south: 33.6000,
        west: -119.0000,
        east: -117.6000,
      };

      map = new Map(document.getElementById("map"), {
      center: { lat: 34.0549, lng: -118.2426 },
      zoom: 8,
      disableDefaultUI: false,
      mapTypeControl: false,
      fullscreenControl: false,
      restriction: {
        latLngBounds: LA,
        strictBounds: true
      },
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




/*
function test_marker(){
    makeMarker(33.96553, -118.22328, 0, 42.7, 74.8, 12.4, 327.69, 310, "2025-04-26 01:42 PM PDT", 90001, 'sunny')
    makeMarker(33.82178, -118.24393, 1, 85.1, 91.2, 5.7, 297.41, 90, "2025-04-27 02:05 AM PDT", 90066, 'cloudy')
    makeMarker(33.82178, -118.24939, 2, 66.3, 82, 8, 301.44, 27, "2025-04-27 02:05 AM PDT" ,90401, 'rainy' )
  };
  */
  

async function makeMarker(Lat, Long, id, humidity, temperature, wind_speed, degree, bright, time, zip, weather ) {
    const { Map } = await google.maps.importLibrary("maps");
    // creates a map if none exists
    if (!window.map) {
      window.map = new Map(document.getElementById("map"), {
        center: { lat: 34.0549, lng: -118.2426 },
        zoom: 8,
        mapId: 'b32f4d216a605f57',
      });
    }




  
    // calculates color using FFWI 
    //FFWI = (n*sqr(1+U^2))/0.3002 where u is wind speed
    //n = 1-2 *(EMC/30) + 1.5* (EMC/30)^2 -0.5(EMC/30)^3
    //EMC formula changes depending on humidity.

    //Calculating EMC
    
    let EMC = 0;
    if (humidity < 10)
        EMC = 0.03229+0.281073 * humidity - 0.000578 * humidity * temperature;
    else if(humidity >= 10 && humidity < 50)
        EMC = 2.22749 + 0.160107 * humidity - 0.01478 * temperature;
    else if(humidity >= 50)
        EMC = 21.0606 + 0.005565 * (humidity*humidity) - 0.00035 * humidity * temperature - 0.483199 * humidity

    //using EMC to calculate n
    let n = 1 - 2 * (EMC/30) + 1.5 * (EMC/30 * EMC/30) - 0.5 * (EMC/30 * EMC/30 *EMC/30);

    //calculating index FFWI and converting it to 1-5 severity.
    let FFWI = (n * Math.sqrt(1 + (wind_speed*wind_speed)))/0.3002;
    console.log(FFWI);
    //scale of 0-100, where any number greater than 100 is set back to 100



      //adds data to live updates
      document.getElementById("live").innerHTML += `At ${time} a severity ${FFWI.toFixed(3)} fire at ${FFWI.toFixed(3)}. &nbsp;&nbsp;&nbsp;`;

    // adds data to the table
    let newrow = document.createElement('tr');

    newrow.innerHTML = `<td>${id}</td> 
    <td>${zip}</td>
    <td>${time}</td>
     <td>${FFWI.toFixed(3)}</td>
    <td>${temperature}°F</td>
    <td>${humidity}%</td>
    <td>${wind_speed}mph / ${degree}°</td>
    <td>${weather}</td>`

    let tablebody = document.querySelector('#fireTable tbody');
    tablebody.appendChild(newrow);

    
    //Sets severiy for the index
    let iconURL = '';

    if (FFWI < 21) {
      iconURL = 'images/green.png'
      //green
    } else if (FFWI < 41) {
      iconURL ='images/blue.png'
      //blue
    } else if (FFWI < 61) {
      iconURL = 'images/yellow.png'
      //yellow
    } else if (FFWI < 81) {
       iconURL = 'images/orange.png'
      //orange
    } else if (FFWI >= 81) {
       iconURL = 'images/red.png'
      //red
    } 
  
    // Create marker depending on what pin is set to.
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
      <p class="feh-content-description">Fire #${id}</p>
      <p class="feh-content-description">Latitude: ${Lat}°F </p>
      <p class="feh-content-description">Longitude: ${Long}% </p>
      <p class="feh-content-description">Brightness (K): ${bright}% </p>
      <p class="feh-content-description">Time (PST): ${time} </p>
      <p class="feh-content-description">Weather: ${weather} </p>
      <p class="feh-content-description">Severity Index: ${FFWI.toFixed(3)} </p>
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










//The exact same function as before but It takes an array of arrays as an input.
//Formated as:
//  array(Latitude, Longtitude, Color, Title, Description)

async function array_makeMarkers(markersData) {
    const { Map } = await google.maps.importLibrary("maps");
  
    // Creates a map if none exists
    if (!window.map) {
      window.map = new Map(document.getElementById("map"), {
        center: { lat: 34.0549, lng: -118.2426 },
        zoom: 8,
        mapId: 'b32f4d216a605f57',
      });
    }
   

  
    // Loop through each marker data and create the markers
    markersData.forEach(([Lat, Long, Color, Title, Description]) => {
      let iconURL = '';
      // calculates color using FFWI 
    //FFWII = (n*sqr(1+U^2))/0.3002 where u is wind speed
    //n = 1-2 *(EMC/30) + 1.5* (EMC/30)^2 -0.5(EMC/30)^3
    //EMC formula changes depending on humidity.

    //Calculating EMC
    let EMC = 0;
    if (humidity < 10)
        EMC = 0.03229+0.281073 * humidity - 0.000578 * humidity * temperature;
    else if(humidity >= 10 && humidity < 50)
        EMC = 2.22749 + 0.160107 * humidity - 0.01478 * temperature;
    else if(humidity >= 50)
        EMC = 21.0606 + 0.005565 * (humidity*humidity) - 0.00035 * humidity * temperature - 0.483199 * humidity

    //using EMC to calculate n
    let n = 1 - 2 * (EMC/30) + 1.5 * (EMC/30 * EMC/30) - 0.5 * (EMC/30 * EMC/30 *EMC/30);

    //calculating index FFWI and converting it to 1-5 severity.
    let FFWI = (n * Math.sqrt(1 + (wind_speed*wind_speed)))/0.3002;
    //scale of 0-100, where any number greater than 100 is set back to 100


    
      if (FFWI > 21) {
        iconURL = 'images/green.png';
      } else if (FFWI > 41) {
        iconURL = 'images/blue.png';
      } else if (FFWI > 61) {
        iconURL = 'images/yellow.png';
      } else if (FFWI > 81) {
        iconURL = 'images/orange.png';
      } else if (FFWI >= 81) {
        iconURL = 'images/red.png';
      } 

      
      const marker = new google.maps.Marker({
        map: window.map,
        position: { lat: Lat, lng: Long },
        title: Title,
        icon: {
          url: iconURL,
          scaledSize: new google.maps.Size(50, 50),
        },
      });
    
      const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 200,
      });
    
      const content = `
        <div class="feh-content">
          <h3 class="feh-content-title">${Title}</h3>
          <p class="feh-content-description">${Description}</p>
        </div>`;
    
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
  
  
      /* Commented out because I don't think it works well with our project
      //changes map to zoom out to display all markers
      if (!window.bounds) {
          window.bounds = new google.maps.LatLngBounds();
        }
        // Add the new marker's position to the bounds
      window.bounds.extend(new google.maps.LatLng(parseFloat(Cords[0]), parseFloat(Cords[1])));
      
      // Adjust the map to fit the new bounds
      window.map.fitBounds(window.bounds);
      //end of changing map position, probably remove
      */
  
  
      //handle when the infoWindow is closed
      infoWindow.addListener('closeclick', function() {
        window.map.fitBounds(window.bounds);
      });
    });
  }  

