import axios from "axios"
import Head from "next/head"
import { useContext, useEffect, useState } from "react"
import { numberData } from "../components/funtions"
import CardsList from "../components/partials/_CardsList"
import SeeMore from "../components/partials/_SeeMore"
import SortingSystem from "../components/partials/_SortingSystem"
import { dataContext } from "../contexts/dataContext"
import { routeApi } from "../datas/webApi"
import { head } from "../datas/webHead"
import styles from "../styles/cimetiere.module.css"


function cimetiere({defunts, cimetieres})
{
  const {
    defuntCimetieres, setDefuntCimetieres
  } = useContext(dataContext)

  const [numberView, setNumberView] = useState(numberData)

  useEffect(() => 
  {
    setDefuntCimetieres(defunts)
  }, [])


  const component = 
  <>
    <Head>
      <meta name="description" content={head.cimetiere.description} />
      <title>{head.cimetiere.title}</title>
    </Head>

    <div className={styles.Cimetiere}>
      <h2 className={styles.title_page}>
        <span>Notre cimetière</span>
        <i></i>
      </h2>

      {
        <>
          <SortingSystem 
          addBtn={false} 
          data={{
            cimetieres: cimetieres,
            setDefunts: setDefuntCimetieres,
            query: routeApi.search_all_defunt,
            setNumberView: setNumberView,
            defunts: defuntCimetieres
          }}
        />

        {
            defuntCimetieres.length
            ?
              <CardsList 
                tab={defuntCimetieres} 
                view={numberView}
              />
            :
              <h2 className={styles.not_defunt}>Aucun défunt trouvé</h2>
        }

        {
          defuntCimetieres.length
          ?
            <SeeMore 
              text={"défunt"} 
              number={{
                numberView: numberView, 
                total: defuntCimetieres.length,
                setNumberView: setNumberView
              }}
            />
          :null
        }
        </>
      }
    </div>
  </>

  return component
}


export async function getServerSideProps({req, res}) 
{
  let defunts = [],
      cimetieres = []

  try 
  {
    const dataDefunts = await axios.get(routeApi.get_defunts_all_user)

    if(dataDefunts.data.data)
    {
      defunts = dataDefunts.data.data
    }
  } 
  catch(err) 
  {
    console.error(err)
  }

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

  return {
    props: { defunts, cimetieres }
  }
}


export default cimetiere
