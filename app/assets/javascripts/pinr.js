var map;
var canvas;

var outdoors = [
  {
    featureType: "all",
    stylers: [
      { saturation: -100 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#7cdaff" },
      { saturation: 0 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

var interesting = [
  {
    featureType: "all",
    stylers: [
      { saturation: -100 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#dfb7e5" },
      { saturation: 0 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

var nightlife = [
  {
    featureType: "all",
    stylers: [
      { saturation: -100 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#393939" },
      { saturation: 0 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

var category = interesting;

var display_map = function (lat, long, zoom) {
  canvas = $('#map_canvas')[0];
  if (!canvas) {
    return; // quits this function if no canvas element present
  }

  var mapOptions = {
    center: new google.maps.LatLng(lat, long),
    zoom: zoom,
    styles: category,
    panControl: true,
    panControlOptions: {
    position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
    style: google.maps.ZoomControlStyle.LARGE,
    position: google.maps.ControlPosition.RIGHT_TOP
    },
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  map = new google.maps.Map(canvas, mapOptions);
};




function add_marker(lat, long, title)
{
  var latlng = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({position: latlng, map: map, title: title});
  markers.push(marker);
}

function clear_markers()
{
  _.each(markers, function(m){m.setMap(null);});
  markers = [];
}

$(document).ready(function () {
  display_map(-33.89336, 151.217167, 13);


});