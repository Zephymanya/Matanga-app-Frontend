import Image from "next/image";
import styles from "../../styles/partials/_avatar.module.css"

function Avatar ({user}) 
{
    const component = 
    <>
        <div className={styles.avatar}>
            <div>
                <Image
                src={user.avatar}
                layout={"fill"}
                objectFit={"cover"}
                quality={100}
                sizes="100%"
                alt={`${user.nom} ${user.prenom}`}
                className={styles.user_image}
                />
            </div>
        </div>
    </>

    return component
}

export default Avatar;
