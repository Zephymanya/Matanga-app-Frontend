import styles from "../styles/footer.module.css";
import logo from "../public/img/logo-2.png";
import Image from "next/image";
import { rooter } from "../datas/web";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  const component = (
    <>
      <footer className={styles.Footer}>
        <Image src={logo} alt={"Logo Matanga"} className={styles.logo}/>

        <div className={styles.links}>
          <Link href={rooter.cimetiere.link} className={styles.link}>{rooter.cimetiere.name}</Link>
          <Link href={rooter.about.link} className={styles.link}>{rooter.about.name}</Link>
          <Link href={rooter.contact.link} className={styles.link}>{rooter.contact.name}</Link>
          <Link href={rooter.privacy_policy.link} className={styles.link}>{rooter.privacy_policy.name}</Link>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socials_btn}>
            <Link href={""}>
              <FaFacebookF  className={styles.social}/>
            </Link>

            <Link href={""}>
              <BsTwitter   className={styles.social}/>
            </Link>
            
            <Link href={""}>
              <BsInstagram className={styles.social}/>
            </Link>
          </div>

          <div className={styles.txt}>
            ©2022 
            <span className={styles.matanga_color}>
              Matanga
            </span>. 
            Designer & développer par 
            <Link href={rooter.samy.link} target={"_blank"} className={styles.developper}> 
              {rooter.samy.name}
            </Link> & 
            <Link href={rooter.manya.link} target={"_blank"} className={styles.developper}>
              {rooter.manya.name}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );

  return component;
}

export default Footer;
