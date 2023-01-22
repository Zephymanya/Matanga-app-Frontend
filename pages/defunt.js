import React, { useState } from "react";
import styles from "../styles/defunt.module.css";
import mortFemme from "../public/img/femmEM.jpg";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import FMimage from "../public/img/femme.jpg";

const defunt = () => {
  const [showModale, setShowModale] = useState(false);
  const [imageDefunt, setImageDefunt] = useState(false);

  const handleImage = (e) => {
    setImageDefunt(e.target.files[0]);
  };

  // console.log(imageDefunt);

  const RenduDefunt = (
    <div className={styles.contentGlobale}>
      <div className={styles.contentCimet}>
        <h1 className={styles.cimetTitle}>Mes défunts</h1>
        <hr className={styles.cimetBarr} />
      </div>

      <div className={styles.ContentInputs}>
        <input
          type={"text"}
          className={styles.inputCherCimet}
          placeholder="Qui cherchez-vous?"
        />

        <select className={styles.selectCimetier}>
          <option valeur="fr"> Choisissez le cimetière</option>
          <option valeur="nl">Gombe</option>
          <option valeur="en">Necropol</option>
          <option valeur="other">Mbeseke</option>
        </select>

        <div>
          <button className={styles.btnCimet}>Chercher</button>
        </div>

        <div
          className={styles.content_btnModal}
          onClick={() => setShowModale(true)}
        >
          <AiOutlinePlus className={styles.btnChowMadal} />
        </div>
      </div>

      {/* ***************Carde************************* */}

      <div className={styles.ContentPrincipCard}>
        <div className={styles.contentCardCimet}>
          <div className={styles.titleContentCimet}>
            <h1 className={styles.CardTitle}>Jonh Doé</h1>
            <p className={styles.lieuCimet}>Enterré au cimetière de la Gombe</p>
          </div>

          <div className={styles.CardImage}>
            <Image src={mortFemme} className={styles.ImageCardk} alt="decès" />
          </div>

          <div className={styles.textCard}>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
          </div>
          <div className={styles.btnArr}>
            <button className={styles.voirPlus}>Voir plus</button>
            <button className={styles.voirPlus1}>Modifier</button>
          </div>
        </div>

        {/* Carde next************************ */}

        <div className={styles.contentCardCimet}>
          <div className={styles.titleContentCimet}>
            <h1 className={styles.CardTitle}>Jonh Doé</h1>
            <p className={styles.lieuCimet}>Enterré au cimetière de la Gombe</p>
          </div>

          <div className={styles.CardImage}>
            <Image src={mortFemme} className={styles.ImageCardk} alt="decès" />
          </div>

          <div className={styles.textCard}>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
          </div>
          <div className={styles.btnArr}>
            <button className={styles.voirPlus}>Voir plus</button>
            <button className={styles.voirPlus1}>Modifier</button>
          </div>
        </div>

        {/* Carde next************************ */}

        <div className={styles.contentCardCimet}>
          <div className={styles.titleContentCimet}>
            <h1 className={styles.CardTitle}>Jonh Doé</h1>
            <p className={styles.lieuCimet}>Enterré au cimetière de la Gombe</p>
          </div>

          <div className={styles.CardImage}>
            <Image src={mortFemme} className={styles.ImageCardk} alt="decès" />
          </div>

          <div className={styles.textCard}>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
          </div>
          <div className={styles.btnArr}>
            <button className={styles.voirPlus}>Voir plus</button>
            <button className={styles.voirPlus1}>Modifier</button>
          </div>
        </div>

        {/* Carde next************************ */}

        <div className={styles.contentCardCimet}>
          <div className={styles.titleContentCimet}>
            <h1 className={styles.CardTitle}>Jonh Doé</h1>
            <p className={styles.lieuCimet}>Enterré au cimetière de la Gombe</p>
          </div>

          <div className={styles.CardImage}>
            <Image src={mortFemme} className={styles.ImageCardk} alt="decès" />
          </div>

          <div className={styles.textCard}>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
          </div>
          <div className={styles.btnArr}>
            <button className={styles.voirPlus}>Voir plus</button>
            <button className={styles.voirPlus1}>Modifier</button>
          </div>
        </div>

        {/* Carde next************************ */}

        <div className={styles.contentCardCimet}>
          <div className={styles.titleContentCimet}>
            <h1 className={styles.CardTitle}>Jonh Doé</h1>
            <p className={styles.lieuCimet}>Enterré au cimetière de la Gombe</p>
          </div>

          <div className={styles.CardImage}>
            <Image src={mortFemme} className={styles.ImageCardk} alt="decès" />
          </div>

          <div className={styles.textCard}>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
          </div>
          <div className={styles.btnArr}>
            <button className={styles.voirPlus}>Voir plus</button>
            <button className={styles.voirPlus1}>Modifier</button>
          </div>
        </div>

        {/* Carde next************************ */}

        <div className={styles.contentCardCimet}>
          <div className={styles.titleContentCimet}>
            <h1 className={styles.CardTitle}>Jonh Doé</h1>
            <p className={styles.lieuCimet}>Enterré au cimetière de la Gombe</p>
          </div>

          <div className={styles.CardImage}>
            <Image src={mortFemme} className={styles.ImageCardk} alt="decès" />
          </div>

          <div className={styles.textCard}>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
          </div>
          <div className={styles.btnArr}>
            <button className={styles.voirPlus}>Voir plus</button>
            <button className={styles.voirPlus1}>Modifier</button>
          </div>
        </div>

        {/* Carde next************************ */}
      </div>

      <div className={styles.vuDefunt}>
        <div>
          <p>Vous avez vu 12 défunts sur 23</p>
        </div>

        <div className={styles.progresseBar}>
          <div className={styles.timeLine}></div>
        </div>
      </div>

      {/* ***************** Modale ********************** */}
    </div>
  );
  return RenduDefunt;
};

export default defunt;
