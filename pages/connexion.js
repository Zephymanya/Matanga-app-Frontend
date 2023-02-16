import React, { useState } from "react";
import styles from "../styles/connexion.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState(false);
  const [erreurData, setErreurData] = useState(false);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const router = useRouter();

  const UserLoin = async (e) => {
    if (!email || !password) {
      setErreur(true);
      setMessage("Remplissez les deux champs SVP!");
    } else {
      axios
        .post("http://127.0.0.1:8000/api/auth/login", {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          router.push("/");
          setLoader(true);
        })
        .catch((err) => {
          setErreurData(true);
          setMessage("Email ou Mot de passe incorrecte");
        });
    }
  };

  const RenduConnexion = (
    <>
      <div className={styles.content_inscription}>
        <div className={styles.content_general}>
          <div className={styles.content_input}>
            <p className={styles.title}>Connectez-Vous</p>
            <div className={styles.content_email}>
              <label>Email</label>
              <input
                type={"text"}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            {/*
             
             */}
            <div className={styles.content_pwd}>
              <label>Mot de passe</label>
              <input
                type={"text"}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>{" "}
            {/*
             */}
            <div className={styles.content_btn}>
              <button className={styles.sinup} onClick={UserLoin}>
                Se connecter
              </button>
              <div className={styles.erreur}>
                {loader ? <span className={styles.loader}></span> : null}

                {erreur ? (
                  <div className={styles.ErrorMessage}>
                    <p>{message} </p>
                  </div>
                ) : null}
                {erreurData ? (
                  <div className={styles.ErrorMessage}>
                    <p>{message} </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return RenduConnexion;
};

export default connexion;
