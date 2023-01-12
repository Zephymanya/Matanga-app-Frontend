import Head from "next/head";
import Image from "next/image";
import backImage from "../images/Bg.png";
import { BsArrowDownCircle } from "react-icons/bs";
export default function Home() {
  return (
    <div>
      <div className="BackGroundImage">
        <di className="Content_acueil">
          <h2 className="title">Je ne saurai perdre ton amour</h2>

          <div className="ContentParag">
            <p className="ContentParag">
              Merci de donner les informations aux générations futures
            </p>
          </div>
          <div className="acceuilBtn">
            <button className="btnDefunt">Créer un défunt</button>
          </div>
          <h1 className="ico">
            <BsArrowDownCircle />
          </h1>
        </di>
      </div>
      <div className="Section2">
        <h2>Qui sommes nous?</h2>
        <div className="contentImage"></div>
        <div className="contenteTexte">
          <p className="text">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
