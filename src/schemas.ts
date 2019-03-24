import { gql } from "apollo-server";

export default gql`
  type Query {        
    f(p: PointInput): Point
    r(p: PointInput): Point
  }

  input PointInput {
    lat: Float
    lng: Float
  }

  type Point {
    lat: Float
    lng: Float
  }
  `;