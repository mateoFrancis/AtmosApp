// Global variables
let map;
let pendingActions = [];
let currentInfoWindow;

// Queue map-dependent actions
function whenMapReady(fn) {
  if (map) {
    fn();
  } else {
    pendingActions.push(fn);
  }
}

// Initialize map
async function initMap() {
  try {
    const { Map } = await google.maps.importLibrary("maps");
    
    map = new Map(document.getElementById("map"), {
      center: { lat: 34.0549, lng: -118.2426 },
      zoom: 8,
      disableDefaultUI: false,
      mapTypeControl: false,
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


    
    console.log("Map Loaded");
    
    // Execute any queued actions
    pendingActions.forEach(fn => fn());
    pendingActions = [];
  } catch (error) {
    console.error("Error initializing map:", error);
  }
}

// Function to center the map at specific coordinates
function centerMap(lat, long) {
  whenMapReady(() => {
    map.setCenter({ lat: parseFloat(lat), lng: parseFloat(long) });
    map.setZoom(8);
  });
}

// Function to add fire markers to map
async function addPin(Lat, Long, bright, time, day) {
  console.log(Lat, Long, bright, time, day);
  
  whenMapReady(async () => {
    try {
      // Determine fire icon based on age
      let iconURL = '';
      if (day < 4) {
        iconURL = 'fire_imgs/RedFire.png'; // recent fires (red)
      } else if (day < 7) {
        iconURL = 'fire_imgs/OrangeFire.png'; // less recent fires (orange)
      } else {
        iconURL = 'fire_imgs/GreenFire.png'; // older fires (green)
      }
      
      // Create marker
      const marker = new google.maps.Marker({
        map: map,
        position: { lat: parseFloat(Lat), lng: parseFloat(Long) },
        title: 'Fire',
        icon: {
          url: iconURL,
          scaledSize: new google.maps.Size(35, 35),
        },
      });

      // Construct info window content
      const content = `
        <div class="feh-content">
          <p class="feh-content-description">Latitude: ${Lat}</p>
          <p class="feh-content-description">Longitude: ${Long}</p>
          <p class="feh-content-description">Brightness: ${bright}</p>
          <p class="feh-content-description">Reported At: ${time}</p>
          <p class="feh-content-description">Reported ${day} day(s) ago</p>
        </div>
      `;

      const infoWindow = new google.maps.InfoWindow({
        content: content,
        minWidth: 200,
        maxWidth: 200,
      });

      // Add click listener to show info window
      marker.addListener('click', () => {
        // Close old info window if new one opens
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
        // Track info windows to close old one
        currentInfoWindow = infoWindow;
      });

      infoWindow.addListener('closeclick', function() {
        if (window.bounds) {
          map.fitBounds(window.bounds);
        }
      });
    } catch (error) {
      console.error("Error adding pin:", error);
    }
  });
}

// Handle page unload events
window.onbeforeunload = null;