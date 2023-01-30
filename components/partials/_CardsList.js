import styles from "../../styles/partials/_cards_list.module.css"
import Cart_defunt from "./_Cart_defunt"

function CardsList({tab, modify}) 
{
    const component = 
    <>
        <div className={styles.List}>
            {
                tab.map((defunt) => [
                    <Cart_defunt  key={defunt} modify={modify}/>
                ])
            }
        </div>
    </>


    return component
}

export default CardsList