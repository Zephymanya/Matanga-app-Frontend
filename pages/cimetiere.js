import Image from "next/image";
import React from "react";
import styles from "../styles/cimetiere.module.css";
import Card_list from "../components/partials/_Card_list";
import Slider from "../components/partials/_Slider";

const cimetiere = () => {
  const tab = [1, 2, 3, 4, 5, 6];

  const renduCimetiere = (
    <>
      <div className={styles.contentCimet}>
        <h1 className={styles.cimetTitle}>Notre cimetière</h1>
        <hr className={styles.cimetBarr} />
      </div>

      <div className={styles.ContentInputs}>
        <input
          type={"text"}
          className={styles.inputCherCimet}
          placeholder="Qui cherchez-vous?"
        />

        <select className={styles.selectCimetier}>
          <option valeur="fr"> Choisissez le cimetière</option>
          <option valeur="nl">Gombe</option>
          <option valeur="en">Necropol</option>
          <option valeur="other">Mbeseke</option>
        </select>

        <div>
          <button className={styles.btnCimet}>Chercher</button>
        </div>
      </div>

      <div className={styles.ContentPrincipCard}>
        <Card_list tab={tab} />
        <Card_list tab={tab} />
      </div>

      <div className={styles.vuDefunt}>
        <div>
          <p>Vous avez vu 12 défunts sur 23</p>
        </div>

        <div className={styles.progresseBar}>
          <div className={styles.timeLine}></div>
        </div>

        <div className={styles.btnVplusGeneral}>
          <button className={styles.btnVplusT}>Voir plus</button>
        </div>
      </div>
    </>
  );

  return renduCimetiere;
};

export default cimetiere;
