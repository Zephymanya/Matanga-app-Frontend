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

      {showModale ? (
        <div className={styles.modale}>
          <div className={styles.contentModale}>
            <div className={styles.head_modal}>
              <p className={styles.head_modal_title}>Nouveau défunt</p>

              <div className={styles.head_close_modale}>
                <IoClose className={styles.btn_close_modale} />
              </div>
            </div>
            <form className={styles.modal_form}>
              <div
                className={styles.input_image}
                onclick={() => setImageDefunt(true)}
              >
                <input
                  type="file"
                  id="file"
                  multiple
                  accept="image/*"
                  onChange={handleImage}
                />
                {imageDefunt ? (
                  <Image
                    src={imageDefunt}
                    alt="Profil du defunt"
                    className={styles.imgFromInput}
                  />
                ) : (
                  <Image
                    src={FMimage}
                    alt="Icone du defunt"
                    className={styles.imgFromInput}
                  />
                )}
              </div>

              <div className={styles.form_identite_defunt}>
                <div className={styles.line1}>
                  <div className={styles.name_input}>
                    <label>Nom</label>
                    <input type={"text"} placeholder="Tapez le nom" />
                  </div>

                  <div className={styles.name_input}>
                    <label>Prénom</label>
                    <input type={"text"} placeholder="Tapez le prénom" />
                  </div>

                  <div className={styles.name_input}>
                    <label>Post-nom</label>
                    <input type={"text"} placeholder="Tapez le post-nom" />
                  </div>
                </div>

                <div className={styles.line2}>
                  <div className={styles.content_line2}>
                    <label>Date de naissance</label>
                    <input type={"text"} placeholder="JJ / MM / AAAA" />
                  </div>

                  <div className={styles.content_line2}>
                    <label>Date du decès</label>
                    <input type={"text"} placeholder="JJ / MM / AAAA" />
                  </div>
                </div>

                <div className={styles.line3}>
                  <div className={styles.maison_f}>
                    <label>Maison funéraire</label>
                    <input
                      type={"text"}
                      placeholder="Tapez le nom de la maison funéraire"
                    />
                  </div>

                  <div className={styles.select_option}>
                    <label>Cimetière</label>
                    <select>
                      <option>Choisissez un cimetière</option>
                      <option>Choisissez un cimetière</option>
                      <option>Choisissez un cimetière</option>
                      <option>Choisissez un cimetière</option>
                    </select>
                  </div>
                </div>

                <div className={styles.textArea} >

                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
  return RenduDefunt;
};

export default defunt;
