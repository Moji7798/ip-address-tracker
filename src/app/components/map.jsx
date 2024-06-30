"use client";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { MAPTILER_STYLE_URL } from "@/constants/config";

const DEFAULT_COORDS = {
  lat: 40.7128,
  lng: 74.006,
};

export default function Map({ coords }) {
  // refs
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  // states
  const [zoom] = useState(14);
  const [API_KEY] = useState(process.env.NEXT_PUBLIC_MAPTILER_KEY);

  // functions
  const initializeMap = () => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `${MAPTILER_STYLE_URL}?key=${API_KEY}`,
      center: [DEFAULT_COORDS.lng, DEFAULT_COORDS.lat],
      zoom: zoom,
    });
  };

  // adds a new marker to map based on given coordinate
  const addMarker = (coords) => {
    marker.current = new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([coords.lng, coords.lat])
      .addTo(map.current);
  };

  // removes the marker from map
  const removeMarker = () => {
    if (marker.current) marker.current.remove();
  };

  // sets the center of map to given coordinate
  const flyTo = (coords) => {
    map.current.flyTo({
      center: [coords.lng, coords.lat],
      essential: true,
    });
  };

  // effects
  /*
   * initilize map on mount
   */
  useEffect(() => {
    if (map.current) return;
    initializeMap();
  }, [API_KEY, zoom]);

  /*
   * if given coordinate changes this will remove old marker and replaces it
   * with another one with updated coordinate and sets center of the map accordingly.
   */
  useEffect(() => {
    if (!map.current || !coords.lat || !coords.lng) return;
    removeMarker();
    addMarker(coords);
    flyTo(coords);
  }, [coords]);

  return (
    <div className={styles.mapWrap}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
}
