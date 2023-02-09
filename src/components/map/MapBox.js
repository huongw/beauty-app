import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { useEffect } from "react";
import "./MapBox.css";

export default function MapBox() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/whitneyhuong/cldtj32e4000301mvljwpsduf',
      center: [ -73.57107354269651, 45.49961551766191 ],
      zoom: 9
    });

    const marker = new mapboxgl.Marker()
    .setLngLat([ -73.57107354269651, 45.49961551766191 ])
    .addTo(map);
    
  }, [])

  return <div id="mapbox"></div>
}