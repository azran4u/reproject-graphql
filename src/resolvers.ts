import {forward, reverse} from "./reproject";
import { Point } from "./point";

export default {
    Query: {            
      f(obj: object, args: {p: Point}): Point {
        const [lat, lng] : [Number, Number] = forward([args.p.lat, args.p.lng]); 
        return {lat: lat, lng: lng}       
      },
      r(obj: object, args: {p: Point}): Point {
        const [lat, lng] : [Number, Number] = reverse([args.p.lat, args.p.lng]); 
        return {lat: lat, lng: lng}       
      }    
    }
  };