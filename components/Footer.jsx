import styles from "../styles/footer.module.css";
import logo from "../public/favicon.ico";
import Image from "next/image";
import { rooter } from "../datas/web";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  const component = (
    <>
      <footer className={styles.contentPrincip} >

        <div className={styles.contentImageFooter}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.links}>
          <Link href={rooter.cimetiere.link} className={styles.link}>
            {rooter.cimetiere.name}
          </Link>
          <Link href={rooter.about.link} className={styles.link}>
            {rooter.about.name}
          </Link>
          <Link href={rooter.contact.link} className={styles.link}>
            {rooter.contact.name}
          </Link>
        </div>

        <div className={styles.lastLine}>
          <div className={styles.contentIcons}>
            <BsFacebook className={styles.icons} />
            <BsTwitter className={styles.icons} />
            <BsInstagram className={styles.icons} />
          </div>

          <div className={styles.lastTexte}>
            <p>
              ©2022<span className={styles.textMatanga}> Matanga.</span>Designer & développer par
              <span className={styles.flyts} > Flyts </span>&<span className={styles.mayembe}>Mayembe</span>
            </p>
          </div>
          
        </div>
      </footer>
    </>
  );

  return component;
}

export default Footer;
