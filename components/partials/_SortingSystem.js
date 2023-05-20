import styles from "../../styles/partials/_sorting_system.module.css";
import { FiPlus } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri"
import { useContext, useState } from "react";
import { dataContext } from "../../contexts/dataContext";
import axios from "axios";
import { numberData } from "../funtions";

function SortingSystem({ addBtn, data }) 
{
  function handleSorting(e)
  {
    e.stopPropagation()
    e.preventDefault()

    data.setNumberView(numberData)

    let req

    if(userToken)
    {
      req = axios.get(data.query, {
        params:{
          search, cimetiere
        },
        headers: configAuthHeader
      })
    }
    else
    {
      req = axios.get(data.query, {
        params:{
          search, cimetiere
        }
      })
    }

    req.then((res) => {
      const response = res.data.data

      if(response)
      {
        data.setDefunts(response)
      }
      else
      {
        data.setDefunts([])
      }
    })
    req.catch((err) => console.error(err))
  }
// console.log("defunts", data.defunts);
  const { 
    setActiveModalCreate, 
    userToken,
    configAuthHeader 
  } = useContext(dataContext);
  const [search, setSearch] = useState(null),
        [cimetiere, setCimetiere] = useState(null)

  const component = (
    <>
      <div
        className={`${styles.Sorting} ${!addBtn ? styles.from_center : null}`}
      >
        {
          data.defunts
          ?
            <form className={styles.form}>
              <input
                type={"text"}
                className={styles.input_search}
                placeholder={"Qui cherchez-vous?"}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select className={styles.select_list} onChange={(e) => setCimetiere(e.target.value)}>
                <option disabled selected>Veuillez sélectionner un cimetière</option>
                <option defaultValue={0}>Tous sélectionner</option>
                {
                  data.cimetieres.map((cimetiere) => [
                    <option defaultValue={cimetiere.id}>{cimetiere.nom}</option>
                  ])
                }
              </select>

              <button className={styles.submit_btn} onClick={(e) => handleSorting(e)}>
                <span className={styles.txt}>Chercher</span>
                <RiSearch2Line className={styles.icon} title={"Rechercher"}/>
              </button>
            </form>
          : 
            <div></div>
        }
        {
          addBtn 
          ? 
            <button
              className={styles.btn_add_defunt}
              onClick={() => {
                setActiveModalCreate(true);
              }}
              title={"Ajouter un défunt"}
            >
            <FiPlus className={styles.icon}/>
            </button>
         :null
        }
      </div>
    </>
  );

  return component;
}

export default SortingSystem;
