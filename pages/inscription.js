import React, { useState, useContext } from "react";
import styles from "../styles/connexion.module.css";
import axios from "axios";
import { routeApi } from "../datas/webApi";
import { configHeader } from "../datas/webApi";
import Head from "next/head";
import { rooter } from "../datas/web"
import { BiLoaderAlt } from "react-icons/bi"
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { dataContext } from "../contexts/dataContext";
import { head } from "../datas/webHead";

function Inscription() 
{
  function handleSubmit(e) 
  {
    e.preventDefault()
    e.stopPropagation()

    setErrors(null)
    setLoader(true)

    const form = new FormData();
      form.append("nom", nom);
      form.append("prenom", prenom);
      form.append("postnom", postnom);
      form.append("sexe", sexe);
      form.append("email", email);
      form.append("password", password);
      form.append("password_confirmation", confirmPassword);


    axios.post(routeApi.register, form, configHeader)
    .then((res) => 
    {
      const response = res.data.data

      Cookies.set("token", `bearer ${response.token.access_token}`, { expires: 7 })
      Cookies.set("user", JSON.stringify(response.user), { expires: 7 })

      SetUserToken("")

      router.push(rooter.defunt.link);

      setLoader(false)
    })
    .catch((err) => {
      if(err.response)
      {
        const dataErrors = JSON.parse(err.response.data)

        dataErrors ? setErrors(dataErrors) : setErrors(null)
        setLoader(false)
      }
    })
  };


  const [nom, setNom] = useState(""),
        [prenom, setPrenom] = useState(""),
        [postnom, setPostnom] = useState(""),
        [sexe, setSexe] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("")

  const [errors, setErrors] = useState(null),
        [loader, setLoader] = useState(false)

  const router = useRouter()

  const {SetUserToken} = useContext(dataContext)


  const RenduInscription = (
    <>
      <Head>
        <meta name="description" content={head.register.description} />
        <title>{head.register.title}</title>
      </Head>


      <div className={styles.Content}>
        <div className={styles.bloc}>
          <h2 className={styles.title}>Inscrivez-vous</h2>

          <div className={styles.input}>
            <label htmlFor="Nom">Nom</label>

            <input
              type={"text"}
              onChange={(e) => setNom(e.target.value)}
              className={`${errors ? errors.nom ? styles.error : null : null} ${errors ? errors.error ? styles.error : null : null}`}
              required
              id="Nom"
              placeholder="Tapez votre nom..."
            ></input>

            {
              errors
              ?
                errors.nom
                ?
                  <div className={styles.errors}>
                    <span>{errors.nom[0]}</span>
                  </div>
                : null
              :null
            }
          </div>

          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="Prenom">Prenom</label>

              <input
                type={"text"}
                onChange={(e) => setPrenom(e.target.value)}
                className={errors ? errors.prenom ? styles.error : null : null}
                required
                id="Prenom"
                placeholder="Tapez votre prenom..."
              ></input>

              {
                errors
                ?
                  errors.prenom
                  ?
                    <div className={styles.errors}>
                      <span>{errors.prenom[0]}</span>
                    </div>
                  : null
                :null
              }
            </div>

            <div className={styles.input}>
              <label htmlFor="Postnom">Postnom</label>

              <input
                type={"text"}
                onChange={(e) => setPostnom(e.target.value)}
                className={errors ? errors.postnom ? styles.error : null : null}
                required
                id="Postnom"
                placeholder="Tapez votre postnom..."
              ></input>

              {
                errors
                ?
                  errors.postnom
                  ?
                    <div className={styles.errors}>
                      <span>{errors.postnom[0]}</span>
                    </div>
                  : null
                :null
              }
            </div>
          </div>

          <div className={styles.input}>
            <label htmlFor="Sexe">Sexe</label>

            <select
              onChange={(e) => setSexe(e.target.value)}
              className={`${errors ? errors.sexe ? styles.error : null : null} ${errors ? errors.error ? styles.error : null : null}`}
              required
              id="Sexe"
              placeholder="Tapez votre sexe..."
            >
              <option  disabled selected>Choisissez votre sexe</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </select>

            {
              errors
              ?
                errors.sexe
                ?
                  <div className={styles.errors}>
                    <span>{errors.sexe[0]}</span>
                  </div>
                : null
              :null
            }
          </div>

          <div className={styles.input}>
            <label htmlFor="Email">Email</label>

            <input
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
              className={`${errors ? errors.email ? styles.error : null : null} ${errors ? errors.error ? styles.error : null : null}`}
              required
              id="Email"
              autoComplete="false"
              placeholder="Tapez votre email..."
            ></input>

            {
              errors
              ?
                errors.email
                ?
                  <div className={styles.errors}>
                    <span>{errors.email[0]}</span>
                  </div>
                : null
              :null
            }
          </div>

          <div className={styles.inputs}>
            <div className={styles.input}>
              <label htmlFor="Password">Mot de passe</label>

              <input
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                className={errors ? errors.password ? styles.error : null : null}
                required
                id="Password"
                placeholder="********"
                autoComplete="false"
              ></input>

              {
                errors
                ?
                  errors.password
                  ?
                    <div className={styles.errors}>
                      <span>{errors.password[0]}</span>
                    </div>
                  : null
                :null
              }
            </div>

            <div className={styles.input}>
              <label className={styles.hidde}>Hidden</label>

              <input
                type={"password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={errors ? errors.confirmPassword ? styles.error : null : null}
                required
                autoComplete="false"
                placeholder="Confirmer votre mot de passe..."
              ></input>
            </div>
          </div>


          <div className={styles.btns}>
            <button className={styles.btn_login} onClick={handleSubmit}>
              <span>S'inscrire</span>

              {
                loader
                ?
                  <BiLoaderAlt className={styles.icon}/>
                : null
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return RenduInscription;
};

export default Inscription;
