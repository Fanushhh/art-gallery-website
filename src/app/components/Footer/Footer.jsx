import styles from "./Footer.module.css";
import Image from "next/image";

export const Footer = ({footerColor}) => {
    return(
        <footer className={styles.footerWrapper} style={{backgroundColor:footerColor}}>
            <section className={styles.footerContainer}>
                <div>
                    <h2>Modern <br />Art Gallery</h2>
                    <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
                </div>
                <div>
                    <a href="https://www.facebook.com"><Image width={20} height={20} src="/icon-facebook.svg" alt="facebook"/></a>
                    <a href="https://www.instagram.com"><Image width={20} height={20} src="/icon-instagram.svg" alt="instagram"/></a>
                    <a href="https://www.twitter.com"><Image width={20} height={20} src="/icon-twitter.svg" alt="twitter"/></a>
                </div>
            </section>
        </footer>
    )
}