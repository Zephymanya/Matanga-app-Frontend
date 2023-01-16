import React from "react";
import styles from "../styles/defunt.module.css";

const defunt = () => {
  const RenduDefunt = (
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

        <div className={styles.content_btnModal}>
            
        </div>
      </div>
    </>
  );
  return RenduDefunt;
};

export default defunt;
