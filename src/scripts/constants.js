import { linspace, calcLine } from "./utils.js";

export const colours = {
  blue: "#2980B9",
  red: "#C70039",
  green: "#229954",
  purple: "#7D3C98",
  yellow: "#F4D03F",
  orange: "#E67E22",
  pink: "#EF46EF",
  cyan: "#46EBEF",
  darkGreen: "#0B5345",
  darkBlue: "#070BCC",
};

const X0_DOWN = 22.1;
const X0_UP = 22.65;
const Y0_DOWN = 47.5;
const Y0_UP = 44.65;
const TG_DOWN = 0.45;
const TG_UP = 0.45;

export const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

/* MOPUG sector */
export const MOPUG = [
  new google.maps.LatLng(46.416667, 21.294444),
  new google.maps.LatLng(46.212222, 21.529167),
  new google.maps.LatLng(45.731944, 22.498889),
  new google.maps.LatLng(45.544444, 22.935278),
  new google.maps.LatLng(45.415833, 22.965278),
  new google.maps.LatLng(44.867222, 22.8475),
  new google.maps.LatLng(44.652778, 22.552778),
  new google.maps.LatLng(46.416667, 21.294444),
];

/* MOPUG subsectors */
export const MOPUG1 = [
  new google.maps.LatLng(46.416667, 21.294444),
  new google.maps.LatLng(46.212222, 21.529167),
  new google.maps.LatLng(45.731944, 22.498889),
  new google.maps.LatLng(45.544444, 22.935278),
  new google.maps.LatLng(45.415833, 22.965278),
  new google.maps.LatLng(45.5166, 21.9365),
  new google.maps.LatLng(46.416667, 21.294444),
];

export const MOPUG2 = [
  new google.maps.LatLng(45.5166, 21.9365),
  new google.maps.LatLng(45.415833, 22.965278),
  new google.maps.LatLng(44.867222, 22.8475),
  new google.maps.LatLng(44.652778, 22.552778),
];

/* BUDOP sector */
export const BUDOP = [
  new google.maps.LatLng(48.016667, 23.1),
  new google.maps.LatLng(47.694444, 23.160833),
  new google.maps.LatLng(47.491389, 23.125),
  new google.maps.LatLng(46.493055, 23.168889),
  new google.maps.LatLng(46.259167, 23.508611),
  new google.maps.LatLng(45.960278, 23.088056),
  new google.maps.LatLng(45.745, 22.888333),
  new google.maps.LatLng(45.544444, 22.935278),
  new google.maps.LatLng(45.731944, 22.498888),
  new google.maps.LatLng(46.212222, 21.529167),
  new google.maps.LatLng(46.416667, 21.294444),
  new google.maps.LatLng(48.016667, 23.1),
];

/* BUDOP subsectors */
export const BUDOP1 = [
  new google.maps.LatLng(46.212222, 21.529167),
  new google.maps.LatLng(46.416667, 21.294444),
  new google.maps.LatLng(47.04043, 21.9983),
  new google.maps.LatLng(46.493055, 23.168889),
  new google.maps.LatLng(46.259167, 23.508611),
  new google.maps.LatLng(45.960278, 23.088056),
  new google.maps.LatLng(45.745, 22.888333),
  new google.maps.LatLng(45.544444, 22.935278),
  new google.maps.LatLng(45.731944, 22.498888),
];

export const BUDOP2 = [
  new google.maps.LatLng(47.04043, 21.9983),
  new google.maps.LatLng(48.016667, 23.1),
  new google.maps.LatLng(47.694444, 23.160833),
  new google.maps.LatLng(47.491389, 23.125),
  new google.maps.LatLng(47.05145, 23.14434),
  new google.maps.LatLng(46.493055, 23.168889),
];

export const BUDOP3 = [
  new google.maps.LatLng(47.05145, 23.14434),
  new google.maps.LatLng(47.20315, 22.18192),
  new google.maps.LatLng(48.016667, 23.1),
  new google.maps.LatLng(47.694444, 23.160833),
  new google.maps.LatLng(47.491389, 23.125),
  new google.maps.LatLng(46.493055, 23.168889),
];

export const LONG_DOWN = linspace(22.1, 22.7, 7);
export const LONG_UP = linspace(22.65, 23.45, 7);
export const LAT_DOWN = calcLine(LONG_DOWN, X0_DOWN, Y0_DOWN, TG_DOWN);
export const LAT_UP = calcLine(LONG_UP, X0_UP, Y0_UP, TG_UP);
export const DOWN = [LONG_DOWN, LAT_DOWN];
export const UP = [LONG_UP, LAT_UP];

export const directionsUp = linspace(290, 350, 10);
export const directionsDown = linspace(120, 170, 10);

export const iconUp = {
  url: "http://earth.google.com/images/kml-icons/track-directional/track-14.png",
  scaledSize: new google.maps.Size(30, 30),
};
export const iconDown = {
  url: "http://earth.google.com/images/kml-icons/track-directional/track-6.png",
  scaledSize: new google.maps.Size(30, 30),
};
