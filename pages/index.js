import Image from "next/image";
import styles from "../styles/home.module.css";
import bg_banner from "../public/img/bg-home.jpg";
import Link from "next/link";
import { rooter } from "../datas/web";
import {
  MdOutlineArrowDropDownCircle,
  MdOutlineArrowForwardIos,
  MdLocationOn,
  MdEmail,
} from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { useRef, useEffect, useState, useContext } from "react";
import matanga from "../public/img/matanga-image.jpg";
import Cart_defunt from "../components/partials/_Cart_defunt";
import Slider from "../components/partials/_Slider";

function Home() {
  function handleGoDown() {
    refAbout.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  function handleShowTexteBloc() {
    if (showTextBloc) {
      setShowTextBloc(false);
    } else {
      setShowTextBloc(true);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entrie) => {
      const myEntrie = entrie[0];

      setLeftAnimation(myEntrie.isIntersecting);

      if (myEntrie.isIntersecting) observer.unobserve(myEntrie.target);
    });
    observer.observe(textAnimate.current);
  }, []);

  const refAbout = useRef(),
    textAnimate = useRef();

  const [leftAnimation, setLeftAnimation] = useState(),
    [showTextBloc, setShowTextBloc] = useState(false);

  const tab = [1, 2, 3, 4, 5];

  const component = (
    <div className={styles.Home}>
      <header className={styles.header}>
        <Image
          src={bg_banner}
          layout={"fill"}
          objectFit={"cover"}
          alt={"Photo d'une fleure"}
          quality={100}
          sizes="100%"
        />

        <div className={styles.textes_and_btn}>
          <strong>Je ne saurai perdre ton amour</strong>

          <span>Merci de donner les informations aux générations futures</span>

          <Link href={rooter.login.link} className={styles.btn}>
            Connectez-vous
          </Link>
        </div>

        <MdOutlineArrowDropDownCircle
          className={styles.btn_arrow_down}
          onClick={handleGoDown}
        />

        <div className={styles.filter}></div>
      </header>

      <div id="About" ref={refAbout} className={styles.About}>
        <h2 className={styles.title_page}>
          <span>Qui sommes nous?</span>
          <i></i>
        </h2>

        <div className={styles.textes_and_image}>
          <div className={styles.bloc_img}>
            <div className={styles.img_bloc_color_1}></div>
            <Image
              src={matanga}
              alt={"Photo de l'entreprise Matanga"}
              className={styles.img}
              quality={100}
            />
            <div className={styles.img_bloc_color_2}></div>
          </div>

          <div
            className={`${styles.textes_and_btn} ${
              leftAnimation ? styles.animation : null
            }`}
            ref={textAnimate}
          >
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>

            <Link href={rooter.about.link} className={styles.btn}>
              en savoir plus
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.MapBloc}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.580764098452!2d15.31573201427314!3d-4.301292696873507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3474b3fd38bd%3A0xf327ab52f3685bc8!2sGare%20Centrale!5e0!3m2!1sfr!2scd!4v1673789793044!5m2!1sfr!2scd"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={styles.myMap}
        ></iframe>

        <div
          className={`${styles.bloc_textes} ${
            showTextBloc ? styles.show_text_bloc : null
          }`}
        >
          <div className={styles.texte}>
            <MdLocationOn className={styles.icon} />
            <p>
              Av Boulevard du 30 juin , Kinshasa-Gombe République Démocratique
              du Congo
            </p>
          </div>

          <div className={styles.texte}>
            <MdEmail className={styles.icon} />
            <p>contact@matanga-app.com</p>
          </div>

          <div className={styles.texte}>
            <BsFillPhoneFill className={styles.icon} />
            <p>+243 821 234 567</p>
          </div>

          <button className={`${styles.btn}`} onClick={handleShowTexteBloc}>
            <MdOutlineArrowForwardIos
              className={`${styles.icon} ${
                showTextBloc ? styles.icon_active : null
              }`}
            />
          </button>
        </div>
      </div>

      <div className={styles.Deceased_person}>
        <h2 className={styles.title_page}>
          <span>Personnes récement décédées</span>
          <i></i>
        </h2>

        <div>
          <Slider tab={tab} />
        </div>
      </div>
    </div>
  );

  return component;
}

export default Home;
