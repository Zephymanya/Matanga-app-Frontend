import axios from "axios"
import React,{ useContext, useEffect, useRef, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { dataContext } from "../contexts/dataContext"
import styles from "../styles/usermodify.module.css"
import { routeApi } from "../datas/webApi"
import { TokenExpired } from "../components/funtions"
import { useRouter } from "next/router"
import { rooter } from "../datas/web"
import moment from "moment/moment"

 

function Modal() 
{
    
    function handleSelectImage()
    {
        img.current.click()
    }

    function handleChangeImage()
    {
        const myImg = img.current.files

        if(myImg.length !== 0)
        {
            const imgSelected = myImg[0]

            if(imgSelected.type === "image/png" || imgSelected.type === "image/jpg" || imgSelected.type === "image/jpeg")
            {
                const reader = new FileReader()
        
                reader.onload = function(evt) 
                {
                    const img = evt.target.result

                    setSelectedImg(img)
                    setAvatar(imgSelected)
                    setSelectedImgError(false)
                }
                reader.readAsDataURL(imgSelected)
            }
            else
            {
                setSelectedImg("")
                setSelectedImgError(true)
            }
        }
    }

    function closeModal()
    {
        setActiveModalEdit(false)
        setActiveModalCreate(false)
        setDefuntId(false)
        content_modal.current.scrollTop = 0 
    }


    const [errors, setErrors] = useState(false),
          [editorLoaded, setEditorLoaded] = useState(true),
          [selectedImg, setSelectedImg]   = useState(null),
          [selectedImgError, setSelectedImgError]   = useState(false),
          [avatar, setAvatar] = useState(null),
          [nom, setNom] = useState(""),
          [prenom, setPrenom] = useState(""),
          [postNom, setPostNom] = useState(""),
          [sexe, setSexe] = useState(""),
          [dateNaissance, setDateNaissance] = useState(""),
          [dateMort, setDateMort] = useState(""),
          [maisonFuneraire, setMaisonFuneraire] = useState(""),
          [cimetiere, setCimetiere] = useState(""),
          [dataHommageFamille, setDataHommageFamille] = useState(""),
          [dataDescriptionDefunt, setDataDescriptionDefunt] = useState(""),
          [dateEnterrement, setDateEnterrement] = useState(""),
          [avatarEditNotChange, setAvatarEditNotChange] = useState(false)


          const img           = useRef(),
          editorRef     = useRef(),
          content_modal = useRef()

    const component = 
    <>
    
        <div className={styles.Modal  }>
            <div className={styles.bloc}>

                <div className={styles.top}>
                <h3>Modifiez votre profil</h3>
                </div>

                <div className={styles.content} ref={content_modal}>
                    <div className={styles.img_bloc}>
                        <input type="file" 
                            className={styles.input_file} 
                            ref={img}
                            onChange={handleChangeImage}
                        />

                        <div 
                            style={{backgroundImage: `url(${selectedImg})`}}
                            className={`
                                ${styles.img} 
                                ${selectedImgError? styles.errorImg : null}
                                ${errors ? errors.avatar ? styles.error : null : null}
                            `} 
                            onClick={handleSelectImage}
                            title={"Cliquez pour sélectionner l'image"} 
                        >
                            {
                                !selectedImg
                                ?
                                    !selectedImgError
                                    ?
                                        "Cliquez pour sélectionner une image"
                                    :
                                        errors
                                        ?
                                            errors.avatar
                                            ?
                                                errors.avatar[0]
                                            : 
                                                "L'avatar doit être un fichier de type JPEG, JPG ou PNG"
                                        :null
                                : null
                            }
                        </div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.tree_inputs}>
                            <div className={styles.input}>
                                <label htmlFor="Nom">Nom</label>
                                <input 
                                    type="text" 
                                    onChange={(e) => setNom(e.target.value)} 
                                    id="Nom" 
                                    className={`${errors ? errors.nom ? styles.error : null : null}`}
                                    required
                                    placeholder="Tapez votre nom..."
                                    // defaultValue={activeModalEdit ? nom ? nom : null : null}
                                />

                                {
                                    errors
                                    ?
                                        errors.nom
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.nom[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="Prenom">Prénom</label>
                                <input 
                                    type="text" 
                                    onChange={(e) => setPrenom(e.target.value)} 
                                    id="Prenom" 
                                    className={`${errors ? errors.prenom ? styles.error : null : null}`}
                                    placeholder="Tapez votre prénom..." 
                                    required
                                    // defaultValue={activeModalEdit ? prenom ? prenom : null : null}
                                />

                                {
                                    errors
                                    ?
                                        errors.prenom
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.prenom[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="PostNom">Post-nom</label>
                                <input 
                                    type="text" 
                                    onChange={(e) => setPostNom(e.target.value)} 
                                    id="PostNom" 
                                    placeholder="Tapez votre postnom..." 
                                    className={`${errors ? errors.postnom ? styles.error : null : null}`}
                                    required
                                    // defaultValue={activeModalEdit ? postNom ? postNom : null : null}
                                />

                                {
                                    errors
                                    ?
                                        errors.postnom
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.postnom[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>
                        </div>
                     
                        <div className={styles.tree_inputs}>
                            <div className={styles.input}>
                                <label htmlFor="passwordlater">Ancien mot de passe</label>
                                <input 
                                    type="password" 
                                    onChange={(e) => setDateNaissance(e.target.value)} 
                                    id="passwordlater" 
                                    className={`${errors ? errors.date_naissance ? styles.error : null : null}`}
                                    required
                                  value={""}
                                />
                                {
                                    errors
                                    ?
                                        errors.date_naissance
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.date_naissance[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="passwordnew">Nouveau mot de passe</label>
                                <input 
                                    type="email" 
                                    onChange={(e) => setDateMort(e.target.value)} 
                                    id="passwordnew" 
                                    className={`${errors ? errors.date_deces ? styles.error : null : null}`}
                                    required
                                  value={""}
                                />

                                {
                                    errors
                                    ?
                                        errors.date_deces
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.date_deces[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="pwdconfirm">Confirmer le mot de passe</label>
                                <input 
                                    type="password" 
                                    onChange={(e) => setDateEnterrement(e.target.value)} 
                                    id="pwdconfirm" 
                                    className={`${errors ? errors.date_enterrement ? styles.error : null : null}`}
                                    required
                                    value={""}
                                />

                                {
                                    errors
                                    ?
                                        errors.date_enterrement
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.date_enterrement[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>
                        </div>
                       
                    </div>
                   
                               </div>

                <div className={styles.bottom}>
                    
                            <button onClick={"handleEditDefunt"} className={styles.btn_close_modal} title={"Modifier le defunt"}>
                                Modifier
                            </button>
                        
                </div>

                
            </div>

            <div onClick={closeModal} className={styles.close_modal}></div>
        </div>
    
    </>

    return component
}

export default Modal