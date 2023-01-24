import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/inscription.module.css";
import homme from "../public/img/homme.jpg";
import { BiUser } from "react-icons/bi";

const inscription = () => {
  const [uploadImage, setUploadImage] = useState();
  const [preview, setPreview] = useState("");

  const handleImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (uploadImage) {
      const reader = new FileReader();
      reader.readAsDataURL(uploadImage);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    } else {
    }
  }, [uploadImage]);

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
            <div className={styles.content_image}>
              <input
                type="file"
                multiple
                accept="image/*"
                className={styles.input_file}
                onChange={handleImage}
              />
              {preview ? (
                <Image
                  src={preview}
                  alt="Image use"
                  className={styles.User_img}
                  width={200}
                  height={200}
                />
              ) : (
                <BiUser className={styles.User_img} />
              )}
            </div>
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
