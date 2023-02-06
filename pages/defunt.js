import CardsList from "../components/partials/_CardsList";
import SeeMore from "../components/partials/_SeeMore";
import SortingSystem from "../components/partials/_SortingSystem";
import styles from "../styles/cimetiere.module.css";
import Modale from "../components/partials/_Modale";
import { useContext } from "react";
import { dataContext } from "../utils/dataContext";

function Defunt() {
  const { showModal } = useContext(dataContext);
  const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const component = (
    <>
      {showModal ? <Modale /> : null}
      <div className={styles.Cimetiere}>
        <h2 className={styles.title_page}>
          <span>Mes défunts</span>
          <i></i>
        </h2>

        <SortingSystem addBtn={true} />

        <CardsList tab={tab} modify={true} />

        <SeeMore tab={tab} text={"défunt"} total={15} />
      </div>
    </>
  );

  return component;
}

export default Defunt;
