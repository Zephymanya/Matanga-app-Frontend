import CardsList from "../components/partials/_CardsList"
import SeeMore from "../components/partials/_SeeMore"
import SortingSystem from "../components/partials/_SortingSystem"
import styles from "../styles/cimetiere.module.css"


function cimetiere ()
{
  const tab = [1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  const component = 
  <>
    <div className={styles.Cimetiere}>
      <h2 className={styles.title_page}>
        <span>Notre cimetière</span>
        <i></i>
      </h2>

      <SortingSystem addBtn={false}/>

      <CardsList tab={tab}/>

      <SeeMore tab={tab} text={"défunt"} total={15} />
    </div>
  </>

  return component
}

export default cimetiere
