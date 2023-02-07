import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { useEffect } from "react";
import "./MapBox.css";

export default function MapBox() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/whitneyhuong/cldtj32e4000301mvljwpsduf',
      center: [ 12.567898, 55.67583 ],
      zoom: 9
    });
  }, [])

  return <div id="mapbox"></div>
}