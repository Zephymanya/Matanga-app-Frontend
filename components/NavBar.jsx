import Image from "next/image"
import styles from "../styles/navbar.module.css"
import logo from "../public/favicon.ico"
import Link from "next/link"
import { rooter } from "../datas/web"
import {FaBars} from "react-icons/fa"
import {CgClose} from "react-icons/cg"
import { useState } from "react"
import { AiFillHome } from "react-icons/ai"
import { useRouter } from "next/router";

function NavBar()
{
    function handleActiveMenu()
    {
        !activeMenu ?
            setactiveMenu(true)
        :
            setactiveMenu(false)
    }

    function handleCloseMenu()
    {
        setactiveMenu(false)
    }

    const [activeMenu, setactiveMenu] = useState(false)
    const {asPath} = useRouter()

    const component = 
    <>
        <nav className={`${styles.Nav} ${asPath === "/" ? null : styles.Other_menu} ${activeMenu ? styles.Active_menu : null}`}>
            <div>
                <Image src={logo} alt={"Logo Matanga"} className={styles.logo}/>
            </div>

            <div className={styles.menu}>
                <div  className={styles.title_menu}>
                    <h3>Menu</h3>

                    <CgClose onClick={handleActiveMenu} className={styles.close_menu}/>
                </div>

                <div className={styles.links}>
                    <Link href={rooter.home.link} className={styles.link}>
                        <span>{rooter.home.name}</span>
                        <AiFillHome className={styles.icon_home}/>
                    </Link>
                    <Link href={rooter.cimetiere.link} className={styles.link}>{rooter.cimetiere.name}</Link>
                    <Link href={rooter.about.link} className={styles.link}>{rooter.about.name}</Link>
                    <Link href={rooter.contact.link} className={styles.link}>{rooter.contact.name}</Link>
                </div>

                <div className={styles.btns}>
                    <Link href={rooter.login.link} className={styles.btn_login}>{rooter.login.name}</Link>
                    <Link href={rooter.register.link} className={styles.btn_register}>{rooter.register.name}</Link>
                </div>
            </div>

            <div onClick={handleCloseMenu} className={styles.close_nav_menu}></div>
            
            <FaBars className={styles.bars} onClick={handleActiveMenu}/>
        </nav>
    </>

    return component
}

export default NavBar