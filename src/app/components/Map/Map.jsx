"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import dynamic from "next/dynamic";
import styles from "./Map.module.css";

const markerIcon = new divIcon({
  className: "",
  html: `<div style="width: 40px;
      height: 40px;
      display:flex;
      align-items:center;
      justify-content:center;
      background-color: black;">
      <span style="display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--gold);"></span></div>`,
});
function Map() {
  return (
    <>
      <MapContainer
        preferCanvas={true}
        boxZoom={true}
        center={[44.427, 26.102]}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100%", }}
      >
        <TileLayer
          className={styles.mapContainer}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.427, 26.102]} icon={markerIcon}>
          <Popup>Here is the Modern Art Gallery</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

const MapComponent = dynamic(() => Promise.resolve(Map), {
  ssr: false,
});

export default MapComponent;
