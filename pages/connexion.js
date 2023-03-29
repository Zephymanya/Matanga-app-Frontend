import React, { useContext, useState } from "react";
import styles from "../styles/connexion.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { configHeader, routeApi } from "../datas/webApi";
import { BiLoaderAlt } from "react-icons/bi"
import { dataContext } from "../contexts/dataContext";
import { rooter } from "../datas/web";
import Cookies from "js-cookie";
import Head from "next/head";
import { head } from "../datas/webHead";


const connexion = () => {

  function handleLogin(e)
  {
    e.preventDefault()
    e.stopPropagation()

    setErrors(null)
    setLoader(true)
    
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    axios.post(routeApi.login, form, configHeader)
    .then((res) => {
      Cookies.set("token", `bearer ${res.data.access_token}`, { expires: 7 })
      Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 })

      SetUserToken("")

      router.push(rooter.defunt.link);

      setLoader(false)
    })
    .catch((err) => {
      if(err.response)
      {
        const dataErrors = err.response.data

        dataErrors ? setErrors(dataErrors) : setErrors(null)
        setLoader(false)
      }
    })
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [loader, setLoader] = useState(false);
  const {SetUserToken} = useContext(dataContext);

  const router = useRouter();

  const RenduConnexion = (
    <>
      <Head>
        <meta name="description" content={head.login.description} />
        <title>{head.login.title}</title>
      </Head>


      <div className={styles.Content}>
        <div className={styles.bloc}>
          <h2 className={styles.title}>Connectez-Vous</h2>

          <div className={styles.input}>
            <label htmlFor="Email">Email</label>

            <input
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
              className={`${errors ? errors.email ? styles.error : null : null} ${errors ? errors.error ? styles.error : null : null}`}
              required
              id="Email"
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


            {   
              errors
              ?
                errors.error
                ?
                  <div className={styles.errors}>
                    <span>{"L'adresse e-mail ou le mot de passe est incorrecte"}</span>
                  </div>
                : null
              :null
            }
          </div>

          <div className={styles.input}>
            <label htmlFor="Password">Mot de passe</label>

            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              className={errors ? errors.password ? styles.error : null : null}
              required
              id="Password"
              placeholder="********"
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

          <div className={styles.btns}>
            <button className={styles.btn_login} onClick={handleLogin}>
              <span>Se connecter</span>

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
  return RenduConnexion;
};

export default connexion;
