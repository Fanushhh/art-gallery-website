import Link from "next/link";
import Image from "next/image";
import styles from './NavButton.module.css';
export default function NavButton({ href, imgUrl, text, customStyle }) {
  
  return (
    <Link className={`${styles.navButton} ${styles[customStyle]}`} href={href}>
      {text}
      <Image width={8} height={24} src={imgUrl} alt=""/>
    </Link>
  );
}
