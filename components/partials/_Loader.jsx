import styles from "../../styles/partials/_loader.module.css"
import {BiLoaderAlt} from "react-icons/bi"

function Loader() 
{
    const component = 
    <div className={styles.Loader}>
        <BiLoaderAlt className={styles.icon}/>
    </div>

    return component
}

export default Loader