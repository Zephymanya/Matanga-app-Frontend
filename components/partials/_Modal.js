import axios from "axios"
import React,{ useContext, useEffect, useRef, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { dataContext } from "../../contexts/dataContext"
import styles from "../../styles/partials/_modal.module.css"
import {routeApi} from "../../datas/webApi"
import { TokenExpired } from "../funtions"
import { useRouter } from "next/router"
import { rooter } from "../../datas/web"
import moment from "moment/moment"
import { BiLoaderAlt } from "react-icons/bi"
import Loader from "./_Loader"


function Modal({activeModal, cimetieres}) 
{
    function handleCreateDefunt()
    {   
        setLoader(true)

        const formData = new FormData()
              formData.append("avatar", avatar)
              formData.append("nom", nom)
              formData.append("prenom", prenom)
              formData.append("postnom", postNom)
              formData.append("description", dataDescriptionDefunt)
              formData.append("hommage_famille", dataHommageFamille)
              formData.append("maison_funebre", maisonFuneraire)
              formData.append("sexe", sexe)
              formData.append("cimetiere", cimetiere)
              formData.append("date_naissance", dateNaissance)
              formData.append("date_deces", dateMort)
              formData.append("date_enterrement", dateEnterrement)
            
        axios.post(routeApi.create_defunt,
            formData,
            configAuthFormDataHeader
        )
        .then((response) => {
            const myData = response.data.data.defunts

            setDefuntUser([
                ...myData
            ])

            setLoader(false)
            setActiveModalCreate(false)
            setErrors(false)
        })
        .catch((err) => 
        {
            if(err.code === "ERR_NETWORK")
            {
                TokenExpired()
                SetUserToken(null)
                router.push(rooter.login.link)
            }
            else{
                const error = err.response
    
                if(error.status === 498 || error.status === 500 && error.data.message === "The token has been blacklisted")
                {
                    TokenExpired()
                    SetUserToken(null)
                    router.push(rooter.login.link)
                }
                else
                {
                    if(err.response)
                    {
                        const dataErrors = JSON.parse(err.response.data.data)
    
                        dataErrors ? setErrors(dataErrors) : setErrors(null)
                        setLoader(false)
                    }
                }
            }
        })
    }

    function handleEditDefunt()
    {
        setLoader(true)

        const formData = new FormData()
              formData.append("id", defuntId)
              formData.append("nom", nom)
              formData.append("prenom", prenom)
              formData.append("postnom", postNom)
              formData.append("description", dataDescriptionDefunt)
              formData.append("hommage_famille", dataHommageFamille)
              formData.append("maison_funebre", maisonFuneraire)
              formData.append("sexe", sexe)
              formData.append("cimetiere", cimetiere)
              formData.append("date_naissance", dateNaissance)
              formData.append("date_deces", dateMort)
              formData.append("date_enterrement", dateEnterrement)
    
        avatarEditNotChange === avatar
        ?
            formData.append("avatar", false)
        :
            formData.append("avatar", avatar)
            

        axios.post(routeApi.edit_defunt,
            formData,
            configAuthFormDataHeader
        )
        .then((res) => {
            if(res.data.data)
            {
                const myData = res.data.data.defunts
    
                setDefuntUser([
                    ...myData
                ])
            }

            setLoader(false)
            setActiveModalCreate(false)
            setErrors(false)
        })
        .catch((err) => {
            // if(err.code === "ERR_NETWORK")
            // {
            //     TokenExpired()
            //     SetUserToken(null)
            //     router.push(rooter.login.link)
            // }
            // else{
            //     const error = err.response
    
            //     if(error.status === 498 || error.status === 500 && error.data.message === "The token has been blacklisted")
            //     {
            //         TokenExpired()
            //         SetUserToken(null)
            //         router.push(rooter.login.link)
            //     }
            //     else
            //     {
            //         if(err.response)
            //         {
            //             const dataErrors = JSON.parse(err.response.data.data)
    
            //             dataErrors ? setErrors(dataErrors) : setErrors(null)
            //             setLoader(false)
            //         }
            //     }
            // }
        })
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

    
    const [loader, setLoader] = useState(false)

    const { 
        setActiveModalCreate, 
        SetUserToken,
        configAuthFormDataHeader,
        setDefuntUser, defuntUser,
        activeModalEdit, setActiveModalEdit,
        configAuthHeader,
        defuntId, setDefuntId
    } = useContext(dataContext)


    const img           = useRef(),
          editorRef     = useRef(),
          content_modal = useRef()

    const router = useRouter()

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

    useEffect(() => 
    {
        if(activeModalEdit)
        {
            setLoader(true)

            content_modal.current.scrollTop = 0 

            axios.get(
                routeApi.get_defunt+ "/" +defuntId,{
                    headers: configAuthHeader
                }
            )
            .then((res) => {
                const response = res.data.data

                if(response)
                {
                    setSelectedImg(response.avatar)
                    setAvatarEditNotChange(response.avatar)
                    setAvatar(response.avatar)
                    setNom(response.nom)
                    setPrenom(response.prenom)
                    setPostNom(response.postnom)
                    setSexe(response.sexe)
                    setDateNaissance(moment(response.date_naissance).format("YYYY-MM-DD"))
                    setDateMort(moment(response.date_deces).format("YYYY-MM-DD"))
                    setDateEnterrement(moment(response.date_enterrement).format("YYYY-MM-DD"))
                    setMaisonFuneraire(response.maison_funebre)
                    setCimetiere(response.cimetiere)
                    setDataHommageFamille(response.hommage_famille)
                    setDataDescriptionDefunt(response.description)

                    setLoader(false)
                }
            })
            .catch((err) => {
                if(err.code === "ERR_NETWORK")
                {
                    closeModal()
                    TokenExpired()
                    SetUserToken(null)
                    router.push(rooter.login.link)
                }
                else{
                    const error = err.response
        
                    if(error.status === 498 || error.status === 500 && error.data.message === "The token has been blacklisted")
                    {
                        closeModal()
                        TokenExpired()
                        SetUserToken(null)
                        router.push(rooter.login.link)
                    }
                }
            })
        }
    }, [activeModalEdit])


    const component = 
    <>
    {
        !editorLoaded
        ?
            <div className={`${styles.Modal} ${activeModal? styles.Active_modal : null}`}>
                <div className={styles.bloc}>
                    <div className={styles.top}>
                        {
                            activeModalEdit
                            ?
                                <h3>
                                    Modifier le défunt 
                                    <span>{`${prenom} ${nom}`}</span>
                                </h3>
                            :
                                <h3>Nouveau défunt</h3>
                        }

                        <button onClick={closeModal} className={styles.btn_close_modal} title={"Fermer le modale"}>
                            <FiPlus className={styles.icon}/>
                        </button>
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
                                        defaultValue={activeModalEdit ? nom ? nom : null : null}
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
                                        defaultValue={activeModalEdit ? prenom ? prenom : null : null}
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
                                        defaultValue={activeModalEdit ? postNom ? postNom : null : null}
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

                            <div className={styles.one_input}>
                                <label htmlFor="Sexe">Sexe</label>
                                <select 
                                    onChange={(e) => setSexe(e.target.value)} 
                                    id="Sexe" 
                                    className={`${errors ? errors.sexe ? styles.error : null : null}`}
                                    required
                                >
                                    <option disabled selected={activeModalEdit ? false : true}>Choisissez le sexe du défunt</option>
                                    <option defaultValue={"homme"} selected={activeModalEdit ? sexe === "homme"  ? true : false : false}>Homme</option>
                                    <option defaultValue={"femme"} selected={activeModalEdit ? sexe === "femme"  ? true : false : false}>Femme</option>
                                </select>

                                {
                                    errors
                                    ?
                                        errors.sexe
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.sexe[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={styles.tree_inputs}>
                                <div className={styles.input}>
                                    <label htmlFor="DateNaissance">Date de naissance</label>
                                    <input 
                                        type="date" 
                                        onChange={(e) => setDateNaissance(e.target.value)} 
                                        id="DateNaissance" 
                                        className={`${errors ? errors.date_naissance ? styles.error : null : null}`}
                                        required
                                        defaultValue={activeModalEdit ? dateNaissance ? dateNaissance : null : null}
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
                                    <label htmlFor="DateMort">Date décès</label>
                                    <input 
                                        type="date" 
                                        onChange={(e) => setDateMort(e.target.value)} 
                                        id="DateMort" 
                                        className={`${errors ? errors.date_deces ? styles.error : null : null}`}
                                        required
                                        defaultValue={activeModalEdit ? dateMort ? dateMort : null : null}
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
                                    <label htmlFor="DateEnterrement">Date enterrement</label>
                                    <input 
                                        type="date" 
                                        onChange={(e) => setDateEnterrement(e.target.value)} 
                                        id="DateEnterrement" 
                                        className={`${errors ? errors.date_enterrement ? styles.error : null : null}`}
                                        required
                                        defaultValue={activeModalEdit ? dateEnterrement ? dateEnterrement : null : null}
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

                            <div className={styles.two_inputs}>
                                <div className={styles.input}>
                                    <label htmlFor="MaisonFuneraire">Maison funéraire</label>
                                    <input 
                                        type="text" 
                                        onChange={(e) => setMaisonFuneraire(e.target.value)} 
                                        id="MaisonFuneraire" 
                                        placeholder="Tapez le nom de la maison funéraire..." 
                                        className={`${errors ? errors.maison_funebre ? styles.error : null : null}`}
                                        required
                                        defaultValue={activeModalEdit ? maisonFuneraire ? maisonFuneraire : null : null}
                                        />

                                    {
                                        errors
                                        ?
                                            errors.maison_funebre
                                            ?
                                            <div className={styles.errors}>
                                                <span>{errors.maison_funebre[0]}</span>
                                            </div>
                                            : null
                                        :null
                                    }
                                </div>

                                <div className={styles.input}>
                                    <label htmlFor="Cimetiere">Cimetière</label>
                                    <select 
                                        onChange={(e) => setCimetiere(e.target.value)} 
                                        id="Cimetiere" 
                                        className={`${errors ? errors.cimetiere ? styles.error : null : null}`}
                                        required
                                    >
                                        <option 
                                            disabled 
                                            selected={activeModalEdit ? false : true}
                                        >
                                            Choisissez un cimetière
                                        </option>

                                        {
                                            cimetieres.map((myCimetiere) => [
                                                <option 
                                                    value={myCimetiere.id} 
                                                    key={myCimetiere.id} 
                                                    selected={activeModalEdit ? cimetiere ===  myCimetiere.nom ? true : false : false}
                                                >
                                                    {myCimetiere.nom}
                                                </option>
                                            ])
                                        }
                                    </select>

                                    {
                                        errors
                                        ?
                                            errors.cimetiere
                                            ?
                                            <div className={styles.errors}>
                                                <span>{errors.cimetiere[0]}</span>
                                            </div>
                                            : null
                                        :null
                                    }
                                </div>
                            </div>

                            <div className={`${styles.one_input} ${errors ? errors.hommage_famille ? "error" : null : null}`} >
                                <label htmlFor="HommageFamille">Hommage de la famille</label>
                                {
                                    !editorLoaded 
                                    ?(
                                        <CKEditor 
                                            editor={ClassicEditor}
                                            id={"HommageFamille"}
                                            data={dataHommageFamille}
                                            onChange={(event, editor) => setDataHommageFamille(editor.getData())}
                                            className={`${styles.ckEditor}`}
                                        />
                                    ): null
                                }

                                {
                                    errors
                                    ?
                                        errors.hommage_famille
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.hommage_famille[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={`${styles.one_input} ${errors ? errors.description ? "error" : null : null}`} >
                                <label htmlFor="DescriptionDefunt">Description du défunt</label>
                                {
                                    !editorLoaded 
                                    ?(
                                        <CKEditor 
                                            editor={ClassicEditor}
                                            id={"DescriptionDefunt"}
                                            data={dataDescriptionDefunt}
                                            onChange={(event, editor) => setDataDescriptionDefunt(editor.getData())}
                                        />
                                    ): null
                                }

                                {
                                    errors
                                    ?
                                        errors.description
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.description[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottom}>
                        {
                            activeModalEdit
                            ?
                                <button onClick={handleEditDefunt} className={styles.btn_close_modal} title={"Modifier le defunt"}>
                                    Modifier
                                </button>
                            :        
                                <button onClick={handleCreateDefunt} className={styles.btn_close_modal} title={"Créer un defunt"}>
                                    Créer
                                </button>
                        }
                    </div>

                    {
                        loader
                        ?
                            <Loader/>
                        :null
                    }
                </div>

                <div onClick={closeModal} className={styles.close_modal}></div>
            </div>
        : null
    }
    </>

    return component
}

export default Modal