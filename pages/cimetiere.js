import Image from "next/image";
import React from "react";
import styles from "../styles/cimetiere.module.css";
import mortFemme from "../public/img/femmEM.jpg";

const cimetiere = () => {
  const renduCimetiere = (
    <>
      <div className={styles.contentCimet}>
        <h1 className={styles.cimetTitle}>Notre cimetière</h1>
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
      </div>

      {/* SECTION CARDE MORT AUX CIMETIERES */}
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
          </div>
        </div>

        {/* Carde 1*********************************** */}

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
          </div>
        </div>

        {/* Carde 1*********************************** */}

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
          </div>
        </div>

        {/* Carde 1*********************************** */}

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
          </div>
        </div>

        {/* Carde 1*********************************** */}

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
          </div>
        </div>

        {/* Carde 1*********************************** */}

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
          </div>
        </div>
        {/* Carde 1*********************************** */}
      </div>

      <div className={styles.vuDefunt}>
        <div>
          <p>Vous avez vu 12 défunts sur 23</p>
        </div>

        <div className={styles.progresseBar}>
          <div className={styles.timeLine}></div>
        </div>

        <div className={styles.btnVplusGeneral}>
          <button className={styles.btnVplusT}>Voir plus</button>
        </div>
      </div>
    </>
  );

  return renduCimetiere;
};

export default cimetiere;
