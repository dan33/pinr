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
      { saturation: 50 }
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
      { saturation: 100 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

var $category = outdoors;

var display_map = function (lat, long, zoom) {
  canvas = $('#map_canvas')[0];
  if (!canvas) {
    return; // quits this function if no canvas element present
  }

  var mapOptions = {
    center: new google.maps.LatLng(lat, long),
    zoom: zoom,
    styles: $category,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  map = new google.maps.Map(canvas, mapOptions);
};




var add_marker = function (lat, long, title) {
  var latlng = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: title
  });
};

$(document).ready(function () {
  display_map(-33.89336, 151.217167, 13);


});