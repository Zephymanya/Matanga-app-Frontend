import styles from "../../styles/partials/_cards_list.module.css"
import Cart_defunt from "./_Cart_defunt"

function CardsList({modify, tab, view}) 
{
    const component = 
    <>
        <div className={`${tab ? styles.List : styles.List_vide}`}>
            {
                tab 
                ?
                    tab.slice(0, view).map((defunt) => [
                        <Cart_defunt key={defunt.id} defunt={defunt} modify={modify}/>
                    ])
                : 
                    <h2 className={styles.not_defunt}>Aucun défunt trouvé</h2>
            }
        </div>
    </>


    return component
}

export default CardsList