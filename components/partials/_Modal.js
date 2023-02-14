import axios from "axios"
import React,{ useContext, useEffect, useRef, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { dataContext } from "../../contexts/dataContext"
import styles from "../../styles/partials/_modal.module.css"
import {routeApi, configAuthHeader} from "../../datas/webApi"


function Modal({activeModal}) 
{
    function handleCreateDefunt()
    {
        const datas = {
            image: selectedImg,
            nom: nom, 
            prenom: prenom, 
            postnom: postNom, 
            date_naissance: dateNaissance, 
            date_mort: dateMort, 
            maison_funeraire: maisonFuneraire, 
            cimetiere: cimetiere, 
            hommage_famille: dataHommageFamille, 
            description_defunt: dataDescriptionDefunt
        }

        axios.post(routeApi.create_defunt, {
            ...datas
        },
        routeApi
        )
        .then()
        .catch((error) => console.error(error))
    }

    function handleSelectImage()
    {
        img.current.click()
    }

    function handleChangeImage()
    {
        const myImg = img.current.files

        if(myImg.length !== 0)
        {
            const reader = new FileReader()
    
            reader.onload = function(evt) 
            {
                const img = evt.target.result

                setSelectedImg(img)
            }
            reader.readAsDataURL(myImg[0])
        }
    }


    const [errors, setErrors] = useState(false),
          [selectedImg, setSelectedImg]   = useState(null),
          [editorLoaded, setEditorLoaded] = useState(true),
          [nom, setNom] = useState(""),
          [prenom, setPrenom] = useState(""),
          [postNom, setPostNom] = useState(""),
          [dateNaissance, setDateNaissance] = useState(""),
          [dateMort, setDateMort] = useState(""),
          [maisonFuneraire, setMaisonFuneraire] = useState(""),
          [cimetiere, setCimetiere] = useState(""),
          [dataHommageFamille, setDataHommageFamille] = useState(""),
          [dataDescriptionDefunt, setDataDescriptionDefunt] = useState("")

    const { setActiveModalCreate } = useContext(dataContext)

    const img               = useRef(),
          editorRef         = useRef()

    const { CKEditor, ClassicEditor } = editorRef.current || {};


    useEffect(() => 
    {
        editorRef.current = 
        {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        }

        setEditorLoaded(false)
    }, [])


    const component = 
    <>
        <div className={`${styles.Modal} ${activeModal? styles.Active_modal : null}`}>
            <div className={styles.bloc}>
                <div className={styles.top}>
                    <h3>Nouveau défunt</h3>

                    <button onClick={() => setActiveModalCreate(false)} className={styles.btn_close_modal} title={"Fermer le modale"}>
                        <FiPlus className={styles.icon}/>
                    </button>
                </div>

                <div className={styles.content}>
                    {
                        errors
                        ?
                            <div className={styles.errors}>
                                <span className={styles.error}>Error 1</span>
                                <span className={styles.error}>Error 2</span>
                                <span className={styles.error}>Error 3</span>
                            </div>
                        :null
                    }

                    <div className={styles.img_bloc}>
                        <input type="file" 
                               className={styles.input_file} 
                               ref={img}
                               onChange={handleChangeImage}
                        />

                        <div 
                            style={{backgroundImage: `url(${selectedImg})`}}
                            className={styles.img} 
                            onClick={handleSelectImage}
                            title={"Cliquez pour sélectionner l'image"} 
                        >
                            {
                                !selectedImg
                                ?
                                    "Cliquez pour sélectionner une image"
                                : null
                            }
                        </div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.tree_inputs}>
                            <div className={styles.input}>
                                <label htmlFor="Nom">Nom</label>
                                <input type="text" onChange={(e) => setNom(e.target.value)} id="Nom" placeholder="Tapez le nom" required/>
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="Prenom">Prénom</label>
                                <input type="text" onChange={(e) => setPrenom(e.target.value)} id="Prenom" placeholder="Tapez le prénom" required/>
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="PostNom">Post-nom</label>
                                <input type="text" onChange={(e) => setPostNom(e.target.value)} id="PostNom" placeholder="Tapez le post-nom" required/>
                            </div>
                        </div>

                        <div className={styles.two_inputs}>
                            <div className={styles.input}>
                                <label htmlFor="DateNaissance">Date de naissance</label>
                                <input type="date" onChange={(e) => setDateNaissance(e.target.value)} id="DateNaissance" required/>
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="DateMort">Mort le </label>
                                <input type="date" onChange={(e) => setDateMort(e.target.value)} id="DateMort" required/>
                            </div>
                        </div>

                        <div className={styles.two_inputs}>
                            <div className={styles.input}>
                                <label htmlFor="MaisonFuneraire">Maison funéraire</label>
                                <input type="text" onChange={(e) => setMaisonFuneraire(e.target.value)} id="MaisonFuneraire" placeholder="Tapez le nom de la maison funéraire" required/>
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="Cimetiere">Cimetière</label>
                                <select onChange={(e) => setCimetiere(e.target.value)} id="Cimetiere" required>
                                    <option disabled defaultChecked>Choisissez un cimetière</option>
                                    <option value={"Gombe"}>Gombe</option>
                                    <option value={"Gombe"}>Gombe</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.one_input} >
                            <label htmlFor="HommageFamille">Hommage de la famille</label>
                            {
                                !editorLoaded 
                                ?(
                                    <CKEditor 
                                        editor={ClassicEditor}
                                        id={"HommageFamille"}
                                        data={""}
                                        onChange={(event, editor) => setDataHommageFamille(editor.getData())}
                                        className={styles.ckEditor}
                                    />
                                ): null
                            }
                        </div>

                        <div className={styles.one_input} >
                            <label htmlFor="DescriptionDefunt">Description du défunt</label>
                            {
                                !editorLoaded 
                                ?(
                                    <CKEditor 
                                        editor={ClassicEditor}
                                        id={"DescriptionDefunt"}
                                        data={""}
                                        onChange={(event, editor) => setDataDescriptionDefunt(editor.getData())}
                                    />
                                ): null
                            }
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <button onClick={handleCreateDefunt} className={styles.btn_close_modal} title={"Fermer le modale"}>
                        Créer
                    </button>
                </div>
            </div>

            <div onClick={() => setActiveModalCreate(false)} className={styles.close_modal}></div>
        </div>
    </>

    return component
}

export default Modal