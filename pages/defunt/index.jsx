import Cookies from "js-cookie"
import Head from "next/head"
import { useContext, useEffect, useState } from "react"
import CardsList from "../../components/partials/_CardsList"
import Modal from "../../components/partials/_Modal"
import SeeMore from "../../components/partials/_SeeMore"
import SortingSystem from "../../components/partials/_SortingSystem"
import { dataContext } from "../../contexts/dataContext"
import styles from "../../styles/cimetiere.module.css"
import { rooter } from "../../datas/web"
import axios from "axios"
import { routeApi } from "../../datas/webApi"
import { configAuthHeaderServer, numberData } from "../../components/funtions"
import { head } from "../../datas/webHead"


function Defunt({cimetieres, defunts, onedefun})
{
  const { 
    activeModalCreate, 
    setDefuntUser,
    defuntUser,
    activeModalEdit  
  } = useContext(dataContext)


  const [numberView, setNumberView] = useState(numberData)

  useEffect(() => 
  {
    setDefuntUser(defunts)
  }, [])


  const component = 
  <>
    <Head>
      <meta name="description" content={head.defunt.description} />
      <title>{head.defunt.title}</title>
    </Head>


    <div className={styles.Cimetiere}>
      <h2 className={styles.title_page}>
        <span>Mes défunts</span>
        <i></i>
      </h2>

      <SortingSystem 
        addBtn={true}
        data={{
          cimetieres,
          setDefunts: setDefuntUser,
          query: routeApi.search_all_user_defunt,
          setNumberView,
          defunts: defuntUser
        }}
      />

      {
        defuntUser
        ?
          <>
            <CardsList 
              modify={true} 
              tab={defuntUser}
              view={numberView}
            />

            <SeeMore 
              text={"défunt"} 
              number={{
                numberView: numberView, 
                total: defuntUser.length,
                setNumberView: setNumberView
              }}
            />
          </>
        :
          <h2 className={styles.not_defunt}>Aucun défunt trouvé</h2>
      }

      <Modal 
        activeModal={activeModalCreate} 
        cimetieres={cimetieres}
      />
    </div>
  </>

  return component
}

export async function getServerSideProps({req, res}) 
{
  let cimetieres = []
  let defunts = null


  try 
  {
    const dataCimetieres = await axios.get(routeApi.get_cimetieres)

    if(dataCimetieres.data.data)
    {
      cimetieres = dataCimetieres.data.data
    }
  } 
  catch(err) 
  {
    console.error(err)
  }

  try 
  {
    const dataDefunts = await axios.get(routeApi.get_all_defunts, configAuthHeaderServer(req.cookies.token))

    if(dataDefunts.data.data)
    {
      defunts = dataDefunts.data.data
    }
  } 
  catch(err) 
  {
    console.error(err)
  }

// ******************************************************

  return {
    props: { cimetieres, defunts }
  }
}

export default Defunt;
