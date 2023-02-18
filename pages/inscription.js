import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/inscription.module.css";
import axios from "axios";
import { routeApi } from "../datas/webApi";
import { configHeader } from "../datas/webApi";

const inscription = (data) => {
  const [Inputnom, setInputnom] = useState("");
  const [Inputpostnom, setInputpostnom] = useState("");
  const [Inputprenom, setInputprenom] = useState("");
  const [InputSexe, setInputSexe] = useState("");
  const [InputEmail, setInputEmail] = useState("");
  const [Inputpassword, setInputpassword] = useState("");
  const [InputConfirm, setInputConfirm] = useState("");

  const CreateUser = () => {
    const form = new FormData();
    form.append("nom", Inputnom);
    form.append("prenom", Inputprenom);
    form.append("postnom", Inputpostnom);
    form.append("sexe", InputSexe);
    form.append("email", InputEmail);
    form.append("password", Inputpassword);
    form.append("password_confirmation", InputConfirm);

    axios
      .post(routeApi.register, form, configHeader)
      .then((res) => {
        console.log("Donner enreistrer avec succès", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateUser();
  };

  const RenduInscription = (
    <>
      <div className={styles.content_inscription}>
        <form className={styles.content_general} onSubmit={handleSubmit}>
          {/* */}
          <div className={styles.content_title}>
            <p className={styles.title}>Inscrivez-vous</p>
          </div>

          <div className={styles.content_info_user}>
            <div className={styles.content_name}>
              <label>Nom</label>
              <input
                type={"text"}
                placeholder="Mayembe"
                name="nom"
                onChange={(e) => {
                  setInputnom(e.target.value);
                }}
              />
            </div>

            <div className={styles.content_pre_post}>
              <div className={styles.content_postnom}>
                <label>Postnom</label>
                <input
                  type={"text"}
                  placeholder="Mayembe"
                  name="postnom"
                  onChange={(e) => {
                    setInputpostnom(e.target.value);
                  }}
                />
              </div>

              <div className={styles.content_prenom}>
                <label>Prenom</label>
                <input
                  type={"text"}
                  placeholder="Mayembe"
                  name="postnom"
                  onChange={(e) => {
                    setInputprenom(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className={styles.liste_sexe}>
              <label>Sexe</label>
              <select
                onChange={(e) => {
                  setInputSexe(e.target.value);
                }}
              >
                <option placeholder="Sexe"></option>
                <option value={"homme"} name="sexe">
                  Homme
                </option>
                <option value={"femme"} name="sexe">
                  Femme
                </option>
              </select>
            </div>

            <div className={styles.content_mail}>
              <label>Email</label>
              <input
                type={"email"}
                placeholder="zepinium@mail.com"
                name="email"
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
              />
            </div>

            <div className={styles.psw}>
              <div className={styles.content_password}>
                <label>Mot de passe</label>
                <input
                  type={"password"}
                  name="password"
                  onChange={(e) => {
                    setInputpassword(e.target.value);
                  }}
                />
              </div>

              <div className={styles.content_confirm}>
                <label>Confirmer mot de passe</label>
                <input
                  type={"password"}
                  name="confirm"
                  onChange={(e) => {
                    setInputConfirm(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.btn_sinup}>
            <button type="onSubmit">S'inscrire</button>
          </div>
        </form>{" "}
      </div>
    </>
  );
  return RenduInscription;
};

export default inscription;
