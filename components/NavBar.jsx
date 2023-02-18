import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import logo from "../public/favicon.ico";
import Link from "next/link";
import { rooter } from "../datas/web";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";
import omo from "../public/img/homme.jpg";
import { FiPlus } from "react-icons/fi";
import { dataContext } from "../contexts/dataContext";

function NavBar() {
  function handleActiveMenu() {
    !activeMenu ? setactiveMenu(true) : setactiveMenu(false);
  }

  function handleCloseMenu() {
    setactiveMenu(false);
  }

  const handleclick = (e) => {
    e.preventDefault();
    SetShowFonCUser(true);
  };

  const closeMenu = (e) => {
    SetShowFonCUser(false);
  };

  const [activeMenu, setactiveMenu] = useState(false),
    { asPath } = useRouter(),
    [showFonCUser, SetShowFonCUser] = useState(false),
    { dataUser, userToken } = useContext(dataContext);

  const component = (
    <div className={styles.parentBloc}>
      <nav
        className={`${styles.Nav} ${
          asPath === "/" ? null : styles.Other_menu
        } ${activeMenu ? styles.Active_menu : null}`}
      >
        <div>
          <Image src={logo} alt={"Logo Matanga"} className={styles.logo} />
        </div>

        <div className={styles.menu}>
          <div className={styles.title_menu}>
            <h3>Menu</h3>

            <CgClose onClick={handleActiveMenu} className={styles.close_menu} />
          </div>

          <div className={styles.links}>
            <Link href={rooter.home.link} className={styles.link}>
              <span>{rooter.home.name}</span>
              <AiFillHome className={styles.icon_home} />
            </Link>
            <Link href={rooter.cimetiere.link} className={styles.link}>
              {rooter.cimetiere.name}
            </Link>
            <Link href={rooter.about.link} className={styles.link}>
              {rooter.about.name}
            </Link>
            <Link href={rooter.contact.link} className={styles.link}>
              {rooter.contact.name}
            </Link>
          </div>
          {userToken ? (
            <div className={styles.contentUser_cnnect} onClick={handleclick}>
              <div>
                <Image
                  src={dataUser.avatar}
                  alt={`${dataUser.nom} ${dataUser.prenom}`}
                  className={styles.user_image}
                />
              </div>
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
          )}
        </div>

        <div onClick={handleCloseMenu} className={styles.close_nav_menu}></div>

        <FaBars className={styles.bars} onClick={handleActiveMenu} />
      </nav>

      {showFonCUser ? (
        <>
          <div className={styles.show_menu}>
            <div className={styles.content_menu}>
              <div className={styles.contentLinks}>
                {/*  */}
                {userToken ? (
                  <div
                    className={styles.contentUser_cnnect1}
                    onClick={handleclick}
                  >
                    <div className={styles.image_style1}>
                      <Image
                        src={dataUser.avatar}
                        alt={`${dataUser.nom} ${dataUser.prenom}`}
                        className={styles.user_image}
                      />
                    </div>
                    <di className={styles.identite_user1}>
                      <div className={styles.names}>
                        <span>{user.nom}</span>
                        <span>{user.prenom} </span>
                      </div>
                      <div className={styles.mails}>
                        <span className={styles.user_mail}>{user.email} </span>
                      </div>
                    </di>
                  </div>
                ) : null}

                {/*  */}

                <div className={styles.links}>
                  <div className={styles.linkOne}>
                    {" "}
                    <Link href={rooter.defunt.link} className={styles.link}>
                      <FiPlus className={styles.icon} />
                      {rooter.defunt.name}
                    </Link>
                  </div>
                  <div className={styles.linkOne}>
                    {" "}
                    <Link href={""} className={styles.link}>
                      <FiPlus className={styles.icon} />
                      Modifier mon compte
                    </Link>
                  </div>
                  <div className={styles.linkOne}>
                    <Link href={""} className={styles.link}>
                      <FiPlus className={styles.icon} />
                      Déconnexion
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.close_user_menu} onClick={closeMenu}></div>
        </>
      ) : null}
    </div>
  );

  return component;
}

export default NavBar;
