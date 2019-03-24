import {GeoProjection, geoEquirectangular, geoMercator} from "d3-geo";

const proj4326: GeoProjection = geoEquirectangular();
const proj3857: GeoProjection = geoMercator();

// input - original coordinate
// output - coordinate for 

export function forward(coordination: [Number, Number]) : [Number, Number] {
  return <[Number, Number]> proj3857.invert(proj4326(<[number, number]> coordination));
}

// input - coordinate in mapbox
// output - original coordinate
export function reverse(coordination: [Number, Number]) : [Number, Number] {
  return <[Number, Number]> proj4326.invert(proj3857(<[number, number]> coordination));
}