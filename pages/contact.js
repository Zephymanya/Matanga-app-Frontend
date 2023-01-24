import React from "react";
import styles from "../styles/contact.module.css";

const contact = () => {
  const RenduContact = (
    <>
      <div className={styles.contact_content}>
        <div className={styles.contact}>
          <div className={styles.contentTitleCont}>
            <p className={styles.TitleContact}>Contact</p>
          </div>

          <div className={styles.contectInputText}>
            <div className={styles.contentAdresse}>
              <p className={styles.title_column}>ADRESSE</p>
              <p className={styles.paragraphe}>
                Av Boulevard du 30 juin, Kinshasa-Gombe République Démocratique
                du Congo
              </p>
            </div>

            <div className={styles.contact_phone}>
              <p className={styles.title_column}>CONTACT</p>
              <p className={styles.paragraphe}> contact@matanga-app.com</p>
              <p className={styles.paragraphe}>+243 821 234 567</p>
            </div>

            <div className={styles.content_input_contact}>
              <input type={"text"} placeholder="Nom" />
              <input type={"text"} placeholder="Email" />
              <textarea placeholder="Message" />
              <div className={styles.btn_nvoi_input}>
                <button className={styles.btn_envoi}>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return RenduContact;
};

export default contact;
