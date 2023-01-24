import Image from "next/image";
import styles from "../../styles/partials/_cart_defunt.module.css"
import defunt from "../../public/img/defunt.jpg"
import Link from "next/link";

function Cart_defunt() 
{
  const component = (
    <div className={styles.Cart}>
        <div className={styles.title}>
        <strong>John Doé</strong>
        <span>Enterré au cimetière de la Gombe</span>
        </div>

        <div className={styles.img_bloc}>
            <Image 
                src={defunt} 
                alt={"Défunt"}
                className={styles.img_defunt}
                layout={"fill"}
                objectFit={"cover"}
                quality={100}
                sizes="100%"
            />
        </div>

        <div className={styles.texts}>
            <p>
                Le lorem ipsum est, en imprimerie, 
                une suite de mots sans signification 
                utilisée à titre provisoire pour 
                calibrer une mise en page, le texte 
                définitif venant remplacer le 
                faux-texte dès qu'il est prêt ou 
                que la mise en page est achevée. 
                Généralement, on utilise un texte 
                en faux latin, le Lorem ipsum ou 
                Lipsum.
            </p>
        </div>

        <div className={styles.btns}>
            <Link href={""} className={styles.btn_link}>Voir plus</Link>
        </div>
    </div>
  );

  return component;
}

export default Cart_defunt;
