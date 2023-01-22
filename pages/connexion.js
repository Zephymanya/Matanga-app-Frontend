import React from "react";
import styles from "../styles/connexion.module.css";

const connexion = () => {
  const RenduConnexion = (
    <>
      <div className={styles.content_inscription}>
        <div className={styles.content_general}>
          <div className={styles.content_input}>
            <p className={styles.title}>Inscrivez-vous</p>
            {/*
             */}
            <div className={styles.content_email}>
              <label>Email</label>
              <input type={"text"}></input>
            </div>
            {/*
             */}
            <div className={styles.content_pwd}>
              <label>Mot de passe</label>
              <input type={"text"}></input>
            </div>{" "}
            {/* 
            
            */}
            <div className={styles.content_btn}>
              <button className={styles.sinup}>S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return RenduConnexion;
};

export default connexion;
