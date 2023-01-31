import styles from "../../styles/partials/_see_more.module.css"

function SeeMore({tab, text, total}) 
{
    const jauge = (tab.length * 100) / total

    const component = 
    <>
        <div className={styles.Voir_plus}>
            <div className={styles.Result_count}>
                <span>Vous avez vu</span>
                <span className={styles.nombre_deja_vu}> {tab.length} </span>
                <span>{text}{tab.length > 1 ? "s" : null} sur</span>
                <span className={styles.nombre_a_voir}> {total} </span>
            </div>

            <div className={styles.Chargement}>
                <div className={styles.int} style={{width: jauge + "%"}}></div>
            </div>

            {
                tab.length < total 
                ?
                    <button >Afficher Plus</button>
                : null
            }
        </div>
    </>

    return component
}

export default SeeMore