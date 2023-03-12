import styles from "../../styles/partials/_see_more.module.css"
import { numberData } from "../funtions"

function SeeMore({text, number}) 
{
    function handleSeeMore()
    {
        if(number.numberView < number.total)
        {
            number.setNumberView(number.numberView + numberData)
        }
    }


    let jauge = 0
    let view = 0

    if(number.numberView < number.total)
    {
        jauge = (number.numberView * 100) / number.total
        view  = number.numberView
    }
    else{
        jauge = 100
        view  = number.total
    }

    const component = 
    <>
        <div className={styles.Voir_plus}>
            <div className={styles.Result_count}>
                <span>Vous avez vu</span>
                <span className={styles.nombre_deja_vu}> {view} </span>
                <span>{text}{view > 1 ? "s" : null} sur</span>
                <span className={styles.nombre_a_voir}> {number.total} </span>
            </div>

            <div className={styles.Chargement}>
                <div className={styles.int} style={{width: jauge + "%"}}></div>
            </div>

            {
                view < number.total 
                ?
                    <button onClick={handleSeeMore}>Afficher Plus</button>
                : null
            }
        </div>
    </>

    return component
}

export default SeeMore