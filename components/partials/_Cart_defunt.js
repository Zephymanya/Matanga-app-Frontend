import Image from "next/image";
import styles from "../../styles/partials/_cart_defunt.module.css"
import Link from "next/link";
import { htmlPrefilter } from "jquery";
import { HtmlContext } from "next/dist/shared/lib/html-context";
import { dataContext } from "../../contexts/dataContext";
import { useContext } from "react";
import { rooter } from "../../datas/web";

function Cart_defunt({modify, defunt}) 
{
    

    function handleActiveEditDefunt(id)
    {
        setActiveModalCreate(true) 
        setActiveModalEdit(true)
        setDefuntId(id)
    }


    const { 
      setActiveModalCreate,
      setActiveModalEdit,
      setDefuntId
    } = useContext(dataContext)


    const component = (
    <div className={styles.Cart}>
        <div className={styles.title}>
        <strong>{`${defunt.prenom} ${defunt.nom}`}</strong>
        <span>{defunt.cimetiere.nom}</span>
        </div>

        <div className={styles.img_bloc}>
            <Image 
                src={defunt.avatar} 
                alt={"Défunt"}
                className={styles.img_defunt}
                layout={"fill"}
                objectFit={"cover"}
                quality={100}
                sizes="100%"
            />
        </div>

        <div className={styles.texts}>
            <div dangerouslySetInnerHTML={{__html: defunt.description}}/>
        </div>

        <div className={`${styles.btns} ${modify ? styles.modify : null}`}>
            <Link href={`${rooter.defunt.link}/${defunt.slug}`} className={styles.btn_link}>Voir plus</Link>

            {
                modify 
                ?
                    <button className={styles.btn_edit} onClick={() => handleActiveEditDefunt(defunt.id)}>Modifier</button>
                : null
            }
        </div>
    </div>
    );

    return component;
}

export default Cart_defunt;
