"use client";
import { Footer } from "../components/Footer/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./location.module.css";
import { divIcon } from "leaflet";
import "leaflet-defaulticon-compatibility";
import NavButton from "../components/NavButton/NavButton";

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

export default function Location() {
  return (
    <>
    <NavButton customStyle='customButton' href="/" imgUrl='/icon-arrow-left.svg' text="Back to home"/>
      <MapContainer
        preferCanvas={true}
        boxZoom={true}
        center={[44.427, 26.102]}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100%" }}
      >
      
        <TileLayer
          className={styles.mapContainer}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.427, 26.102]} icon={markerIcon}>
          <Popup>
            Here is the Modern Art Gallery
          </Popup>
        </Marker>
      </MapContainer>

      <main className={styles.locationWrapper}>
        <section className={styles.locationContainer}>
            <h1>Our <br /> location</h1>
            <div>
              <p className={styles.accent}>99 King Street</p>
              <p>
                Newport <br />
                RI 02840
                <br />
                United States of America
              </p>
              <p>
                Our newly opened gallery is located near the Edward King House on 99
                King Street, the Modern Art Gallery is free to all visitors and open
                seven days a week from 8am to 9pm.
              </p>
            </div>
        </section>
      </main>
      <Footer footerColor={"var(--gold)"} />
    </>
  );
}
