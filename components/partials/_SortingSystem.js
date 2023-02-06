import styles from "../../styles/partials/_sorting_system.module.css";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { dataContext } from "../../utils/dataContext";

function SortingSystem({ addBtn }) {
  const { setshowModal, showModal } = useContext(dataContext);
  const handleClick = () => {
    setshowModal(true);
  };

  console.log(showModal);

  const component = (
    <>
      <div
        className={`${styles.Sorting} ${!addBtn ? styles.from_center : null}`}
      >
        <form className={styles.form}>
          <input
            type={"text"}
            className={styles.input_search}
            placeholder={"Qui cherchez-vous?"}
          />

          <select className={styles.select_list}>
            <option value={"Gombe"}>Gombe</option>
            <option value={"Gombe"}>Gombe</option>
            <option value={"Gombe"}>Gombe</option>
          </select>

          <button className={styles.submit_btn}>Chercher</button>
        </form>

        {addBtn ? (
          <button
            className={styles.btn_add_defunt}
            title={"Ajouter un défunt"}
            onClick={handleClick}
          >
            <FiPlus className={styles.icon} />
          </button>
        ) : null}
      </div>
    </>
  );

  return component;
}

export default SortingSystem;
