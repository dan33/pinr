var map;
var canvas;
var markers = []

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
      { color: "#7cdaff" }
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
      { color: "#dfb7e5" }
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
      { color: "#545454" }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

var work = [
  {
    featureType: "all",
    stylers: [
      { saturation: -100 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { color: "#dd7c7c" }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];


var display_map = function (lat, long, zoom) {
  canvas = $('#map_canvas')[0];
  if (!canvas) {
    return; // quits this function if no canvas element present
  }

  var mapOptions = {
    center: new google.maps.LatLng(lat, long),
    zoom: zoom,
    styles: category,
    visualRefresh: true,
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

var create_pin = function () {
    var title = $('#title').val();
    var address = $('#address').val();
    var category_id = $('#category_id').val();
    var token = $('input[name="authenticity_token"]').val();

    $.ajax({
      dataType: 'json',
      type: 'POST',
      url: '/pins',
      data: {authenticity_token:token, 'pin[title]':title, 'pin[address]':address,
          'pin[category_id]': category_id
        }
    }).done(process_pin);

    return false;
  };

function process_pin(pin) {
  add_pin_to_array(pin);
  display_pins();
};

function add_pin_to_array(pin) {
  pins = _.reject(pins, function(p){return p.id == pin.id;});
  pins.push(pin);
};

function display_pins() {
  clear_markers();
  $('ul#pins').empty();
  _.each(pins, display_pin);
};

function display_pin(pin) {
  add_marker(pin.latitude, pin.longitude, pin.title);

  var li = $('<li>');

  var divA = $('<div>');
  divA.addClass('pin');


  var div1 = $('<div>');
  div1.addClass('category color');
  div1.css('background-color', pin.category.color);

  li.append([divA, div1]);
  $('ul#pins').append(li);
};


function add_marker(lat, long, title) {
  var latlng = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({position: latlng, map: map, title: title});
  markers.push(marker);
};

function clear_markers() {
  _.each(markers, function(m){m.setMap(null);});
  markers = [];
};


var category = interesting;

$(document).ready(function () {
  display_map(-33.89336, 151.217167, 13);
  $('#outdoors').click(function () {
      var category = outdoors;
      $('#map_canvas').empty;
      display_map(-33.89336, 151.217167, 13);

  });
});