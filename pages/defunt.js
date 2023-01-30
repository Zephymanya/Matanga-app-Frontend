import CardsList from "../components/partials/_CardsList"
import SeeMore from "../components/partials/_SeeMore"
import SortingSystem from "../components/partials/_SortingSystem"
import styles from "../styles/cimetiere.module.css"


function Defunt()
{
  const tab = [1, 2, 3, 4 ,5 ,6, 7, 8, 9]

  const component = 
  <>
    <div className={styles.Cimetiere}>
      <h2 className={styles.title_page}>
        <span>Mes défunts</span>
        <i></i>
      </h2>

      <SortingSystem addBtn={true}/>

      <CardsList tab={tab} modify={true}/>

      <SeeMore tab={tab} text={"défunt"} total={15} />
    </div>
  </>

  return component
}

export default Defunt