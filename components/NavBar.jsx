"use client"
import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import logo from "../public/img/logo-2.png";
import Link from "next/link";
import { rooter } from "../datas/web";
import { FaBars, FaUserEdit } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";
import { IoLogOut } from "react-icons/io5";
import { GiCoffin } from "react-icons/gi"
import { dataContext } from "../contexts/dataContext";
import axios from "axios";
import { routeApi } from "../datas/webApi";
import Cookies from "js-cookie";
import Avatar from "./partials/_Avatar";

function NavBar() 
{
  function handleActiveMenu() {
    !activeMenu ? setactiveMenu(true) : setactiveMenu(false);
  }

  function handleCloseMenu() {
    setactiveMenu(false);
  }

  function handleLogout()
  {
    axios.post(routeApi.logout, {}, {
      headers: configAuthHeader
    })
    .then((res) => {
      if(res.data.success)
      {
        Cookies.remove("token")
        Cookies.remove("user")

        SetUserToken(null)
        SetShowFonCUser(false)
  
        router.push(rooter.login.link)
      }
    })
    .catch((error) => console.error(error))
  }
  

  const handleclick = (e) => {
    e.preventDefault();
    SetShowFonCUser(true)
  };

  const closeMenu = (e) => {
    SetShowFonCUser(false);
  };

  const [activeMenu, setactiveMenu] = useState(false),
        [showFonCUser, SetShowFonCUser] = useState(false),
        [activeNav, setActiveNav] = useState(false)

  const { asPath } = useRouter(),
        router = useRouter()

  const { 
    dataUser, 
    userToken, SetUserToken, 
    configAuthHeader ,
    homePage
  } = useContext(dataContext);

  const nav = useRef()
  
  
  
  useEffect(() => 
  {
    if(asPath === "/")
    {   
      const observer = new IntersectionObserver((entrie) => {
          const myEntrie = entrie[0];
      
        
      // console.log(nav.current.offsetParent.offsetHeight == 2478)
          // if (myEntrie.isIntersecting) observer.unobserve(myEntrie.target);
        })
        observer.observe(nav.current.offsetParent.querySelector("#Intersetion"))
    }
  }, [homePage])
    


  const component = (
    <div className={styles.parentBloc}>
      <nav
        className={`${styles.Nav} ${
          asPath === "/" ? styles.My_menu : styles.Other_menu
        } ${activeMenu ? styles.Active_menu : null}`}
        ref={nav}
      >
        <div>
          <Link href={rooter.home.link}>
            <Image src={logo} alt={"Logo Matanga"} className={styles.logo} />
          </Link>
        </div>

        <div className={styles.menu}>
          <div className={styles.title_menu}>
            <h3>Menu</h3>

            <CgClose onClick={handleActiveMenu} className={styles.close_menu} />
          </div>

          <div className={styles.links}>
            <Link href={rooter.home.link} className={styles.link} onClick={handleCloseMenu}>
              <span>{rooter.home.name}</span>
              <AiFillHome className={styles.icon_home} />
            </Link>
            <Link href={rooter.cimetiere.link} className={styles.link} onClick={handleCloseMenu}>
              {rooter.cimetiere.name}
            </Link>
            <Link href={rooter.about.link} className={styles.link} onClick={handleCloseMenu}>
              {rooter.about.name}
            </Link>
            <Link href={rooter.contact.link} className={styles.link} onClick={handleCloseMenu}>
              {rooter.contact.name}
            </Link>
          </div>
          
          {
            userToken ? (
              <div className={styles.bloc_avatar} onClick={handleclick}>
                <Avatar user={dataUser}/>
              </div>
            ) : (
              <div className={styles.btns}>
                <Link href={rooter.login.link} className={styles.btn_login}>
                  {rooter.login.name}
                </Link>
                <Link href={rooter.register.link} className={styles.btn_register}>
                  {rooter.register.name}
                </Link>
              </div>
            )
          }
        </div>

        <div onClick={handleCloseMenu} className={styles.close_nav_menu}></div>

        <div className={styles.bloc_mobile}>
          <FaBars className={styles.bars} onClick={handleActiveMenu} />

          {
            userToken
            ?
              <div className={`${styles.bloc_avatar} ${styles.mobile}`} onClick={handleclick}>
                <Avatar user={dataUser}/>
              </div>
            : null
          }
        </div>
      </nav>

      {
        userToken
        ?
          showFonCUser 
          ?
            <>
              <div className={styles.show_menu}>
                <div className={styles.content_menu}>
                  <div className={styles.contentLinks}>
                    {userToken ? (
                      <div
                        className={styles.contentUser_cnnect1}
                        onClick={handleclick}
                      >
                        <div className={styles.image_style1}>
                          <Avatar user={dataUser}/>
                        </div>
                        <di className={styles.identite_user1}>
                          <div className={styles.names}>
                            <span>{dataUser.nom}</span>
                            <span>{dataUser.prenom} </span>
                          </div>
                          <div className={styles.mails}>
                            <span className={styles.user_mail}>{dataUser.email} </span>
                          </div>
                        </di>
                      </div>
                    ) : null}


                    <div className={styles.links}>
                      <div className={styles.linkOne}>
                        <Link href={rooter.defunt.link} className={styles.link} onClick={closeMenu}>
                          <GiCoffin className={styles.icon} />
                          {rooter.defunt.name}
                        </Link>
                      </div>
                      <div className={styles.linkOne}>
                        <Link href={rooter.user.link} className={styles.link} onClick={closeMenu}>
                          <FaUserEdit className={styles.icon} />
                          Modifier mon compte
                        </Link>
                      </div>
                      <div className={styles.linkOne}>
                        <div className={styles.link} onClick={handleLogout}>
                          <IoLogOut className={styles.icon} />
                          Déconnexion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.close_user_menu} onClick={closeMenu}></div>
            </>
          : null
        :null
      }
    </div>
  );

  return component;
}

export default NavBar;
