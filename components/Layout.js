import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});

function Layout({ children }) {
  const component = (
    <div className={poppins.className}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      
      {children}

      <Footer />
    </div>
  );

  return component;
}

export default Layout;
