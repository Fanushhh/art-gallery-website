import styles from "./page.module.css";

import { Hero } from "./components/Hero/Hero";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <Gallery />
      <Footer footerColor='black'/>
    </main>
  );
}
