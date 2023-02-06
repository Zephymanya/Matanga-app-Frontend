import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/inscription.module.css";
import UploadImage from "../components/partials/_UploadImage";

const inscription = (inscription) => {
  const RenduInscription = (
    <>
      <div className={styles.content_inscription}>
        <div className={styles.content_general}>
          <div className={styles.content_input}>
            <p className={styles.title}>Inscrivez-vous</p>
            <div className={styles.content_name}>
              <label>Nom d'utilisateur</label>
              <input type={"text"}></input>
            </div>

            <div className={styles.content_email}>
              <label>Email</label>
              <input type={"text"}></input>
            </div>

            <div className={styles.content_pwd}>
              <label>Mot de passe</label>
              <input type={"text"}></input>
            </div>
          </div>

          <div className={styles.img_content}>
            <UploadImage inscription={inscription} />
            <div className={styles.content_btn}>
              <button className={styles.sinup}>S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return RenduInscription;
};

export default inscription;
