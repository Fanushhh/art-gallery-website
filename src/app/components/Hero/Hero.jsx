import styles from "./Hero.module.css";
import NavButton from "../NavButton/NavButton";

export const Hero = () => {
    return(
        <section className={styles.heroSection}>
        <h1 className={styles.heading}>
          Modern <br /> art gallery
        </h1>

        <div className={styles.textContainer}>
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          
            <NavButton href='/location' imgUrl='/icon-arrow-right.svg' text="Our location"/>
          
        </div>
      </section>
    )
}