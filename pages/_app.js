import { Fragment } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/Footer.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
