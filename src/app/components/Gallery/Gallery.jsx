import Image from "next/image"
import styles from "./Gallery.module.css"


export const Gallery = () => {
    return(
        <section className={styles.galleryWrapper}>
            <div className={styles.gridItem}>
                <h2>Your Day at the Gallery</h2>
                <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
            </div>
            <picture className={styles.gridItem}>
                <source media="(max-width: 768px)" srcSet="/mobile/image-grid-1.jpg" />
                <source media="(max-width: 1250px)" srcSet="/tablet/image-grid-1.jpg"/>
                <img  src="/desktop/image-grid-1.jpg" alt=""  />
            </picture>
            <picture className={styles.gridItem}>
                <source media="(max-width: 768px)" srcSet="/mobile/image-grid-2.jpg" />
                <source media="(max-width: 1250px)" srcSet="/tablet/image-grid-2.jpg"/>
                <img  src="/desktop/image-grid-2.jpg" alt=""  />
            </picture>
            <picture className={styles.gridItem}>
                <source media="(max-width: 768px)" srcSet="/mobile/image-grid-3.jpg" />
                <source media="(max-width: 1250px)" srcSet="/tablet/image-grid-3.jpg"/>
                <img  src="/desktop/image-grid-3.jpg" alt=""  />
            </picture>
            
           
            <div className={styles.gridItem}>
                <h2>COME & BE INSPIRED</h2>
                <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
            </div>
        </section>
    )
}