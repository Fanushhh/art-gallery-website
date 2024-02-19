"use client";

import { Footer } from "../components/Footer/Footer";

import styles from "./location.module.css";
import Map from "../components/Map/Map";
import NavButton from "../components/NavButton/NavButton";



export default function Location() {

  return (
    <>
    <NavButton customStyle='customButton' href="/" imgUrl='/icon-arrow-left.svg' text="Back to home"/>
      <Map />

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
