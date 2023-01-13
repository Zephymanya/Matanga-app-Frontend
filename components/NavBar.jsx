import Image from "next/image"
import styles from "../styles/navbar.module.css"
import logo from "../public/favicon.ico"
import Link from "next/link"
import { rooter } from "../datas/web"
import {FaBars} from "react-icons/fa"

function NavBar()
{
    const component = 
    <>
        <nav className={styles.Nav}>
            <div>
                <Image src={logo} alt={"Logo Matanga"} className={styles.logo}/>
            </div>

            <div className={styles.menu}>
                <div className={styles.links}>
                    <Link href={rooter.home.link} className={styles.link}>{rooter.home.name}</Link>
                    <Link href={rooter.cimetiere.link} className={styles.link}>{rooter.cimetiere.name}</Link>
                    <Link href={rooter.about.link} className={styles.link}>{rooter.about.name}</Link>
                    <Link href={rooter.contact.link} className={styles.link}>{rooter.contact.name}</Link>
                </div>

                <div className={styles.btns}>
                    <Link href={rooter.login.link} className={styles.btn_login}>{rooter.login.name}</Link>
                    <Link href={rooter.register.link} className={styles.btn_register}>{rooter.register.name}</Link>
                </div>

                <FaBars className={styles.bars}/>
            </div>
        </nav>
    </>

    return component
}

export default NavBar