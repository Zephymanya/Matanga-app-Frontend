import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Poppins } from "@next/font/google";
import { dataContext } from "../contexts/dataContext";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});

function Layout({ children }) {
  const [dataUser, SetDataUser] = useState([]);
  const [userToken, SetUserToken] = useState(null);
  const [showFonCUser, SetShowFonCUser] = useState(false);
  const [activeModalCreate, setActiveModalCreate] = useState(false);
  const [userDefunts, setUserDefunts] = useState([]);
  const [defuntCimetieres, setDefuntCimetieres] = useState([]);
  const [defuntUser, setDefuntUser] = useState([]);
  const [activeModalEdit, setActiveModalEdit] = useState(false);
  const [defuntId, setDefuntId] = useState(false);

  const configAuthHeader = {
    "Content-Type" : "application/json",
    "Authorization": userToken,
  }

  const configAuthFormDataHeader = {
    headers:{
        "Content-Type": "multipart/form-data",
        "Authorization": userToken,
    }
  }


  
  useEffect(() => {
    if(!userToken)
    {
      const token = Cookies.get("token")

      if(token)
      {
        SetDataUser(JSON.parse(Cookies.get("user")));
        SetUserToken(token);
      }
    }
  }, [userToken]);


  const component = (
    <dataContext.Provider
      value={{
        configAuthHeader,
        configAuthFormDataHeader,

        activeModalCreate, setActiveModalCreate,
        dataUser, SetDataUser,
        showFonCUser, SetShowFonCUser,
        userToken, SetUserToken,
        userDefunts, setUserDefunts,
        defuntCimetieres, setDefuntCimetieres,
        defuntUser, setDefuntUser,
        activeModalEdit, setActiveModalEdit,
        defuntId, setDefuntId,
      }}
    >
      <div className={poppins.className} id={"Site"}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />

        <main>
          {children}
        </main>
        <Footer />
      </div>
    </dataContext.Provider>
  );

  return component;
}

export default Layout;


