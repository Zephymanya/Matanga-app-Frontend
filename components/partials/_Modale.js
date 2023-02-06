import React, { useRef } from "react";
import styles from "../../styles/partials/_modale.module.css";
import { BiX } from "react-icons/bi";
import UploadImage from "./_UploadImage";
import { useContext } from "react";
import { dataContext } from "../../utils/dataContext";
import { Editor } from "@tinymce/tinymce-react";

function _Modale({ modal }) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const { setshowModal, showModal } = useContext(dataContext);
  const handleClick = () => {
    setshowModal(false);
  };
  const RenduModal = (
    <>
      <div className={styles.content_modale}>
        <div className={styles.corp_du_modale}>
          <div className={styles.header_modale}>
            <div>
              <p>Nouveau défunt</p>
            </div>

            <div className={styles.btnExit}>
              <button onClick={handleClick}>
                <span className={styles.icon}>
                  <BiX />
                </span>
              </button>
            </div>
          </div>

          <form className={styles.formulaire}>
            <div className={styles.inputImage}>
              <UploadImage modal={modal} />
            </div>

            <div className={styles.lign_one_inputs}>
              <div className={styles.name}>
                <label>Nom</label>
                <input type={"text"} placeholder="Melondo" />
              </div>

              <div className={styles.postnom}>
                <label>Postnom</label>
                <input type={"text"} placeholder="Malelu" />
              </div>

              <div className={styles.prenom}>
                <label>Prénom</label>
                <input type={"text"} placeholder="Dorcas" />
              </div>
            </div>

            <div className={styles.lign_deux_inputs}>
              <div className={styles.naissance_date}>
                <label>Date de naissance</label>
                <input type="datetime-local" />
              </div>

              <div className={styles.mort_date}>
                <label>Mort le</label>
                <input type="date" />
              </div>
            </div>

            <div className={styles.lign_deux_inputs}>
              <div className={styles.naissance_date}>
                <label>Maison funéraire</label>
                <input type="datetime-local" />
              </div>

              <div className={styles.mort_date}>
                <label>Cimetière</label>
                <select>
                  <option>Choisissez un cimetière</option>
                  <option>Gombe</option>
                  <option>Gombe</option>
                  <option>Gombe</option>
                  <option>Gombe</option>
                </select>
              </div>
            </div>

            <div className={styles.hommage_editor}>
              <div className={styles.contentLabel}>
                <label>Hommage de la famille</label>
              </div>
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 200,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
                className={styles.Editor}
              />
            </div>
            <div className={styles.hommage_editorr}>
              <div className={styles.contentLabel}>
                <label>Hommage de la famille</label>
              </div>

              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 200,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
          </form>
          <div className={styles.footer_modale}>
            <button className={styles.footerBtn}>Créer</button>
          </div>
        </div>
      </div>
    </>
  );

  return RenduModal;
}

export default _Modale;
