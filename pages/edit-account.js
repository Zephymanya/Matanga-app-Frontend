import axios from "axios"
import React,{ useContext, useEffect, useRef, useState } from "react"
import { dataContext } from "../contexts/dataContext"
import styles from "../styles/usermodify.module.css"
import { routeApi } from "../datas/webApi"
import { TokenExpired } from "../components/funtions"
import { rooter } from "../datas/web"
import { BiLoaderAlt } from "react-icons/bi"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import Head from "next/head"

 

function Edit_account() 
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

    function handleEditUser()
    {
        setLoader(true)

        const formData = new FormData()
              formData.append("avatar", oldAvatar === selectedImg ? false : avatar)
              formData.append("nom", nom)
              formData.append("prenom", prenom)
              formData.append("postnom", postNom)
              formData.append("ancien_mot_de_passe", oldPassword)
              formData.append("nouveau_mot_de_passe", newPassword)
              formData.append("password_confirmation", confirmPassword)

        axios.post(
            routeApi.edit_account,
            formData,
            configAuthFormDataHeader
        )
        .then((res) => {
            const response = res.data.data

            if(response)
            {
                Cookies.set("user", JSON.stringify(response), { expires: 7 })

                setSelectedImg(response.avatar)
                setAvatar(response.avatar)
                setNom(response.nom)
                setPrenom(response.prenom)
                setPostNom(response.postnom)

                SetUserToken("")

                setLoader(false)
                setErrors(null)

                setOldPassword("")
                setNewPassword("")
                setConfirmPassword("")
            }
        })
        .catch((err) => {
            if(err.code === "ERR_NETWORK")
            {
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
                    if(error.data.data)
                    {
                        const dataErrors = JSON.parse(error.data.data)
    
                        dataErrors ? setErrors(dataErrors) : setErrors(null)
                        setLoader(false)
                    }
                }
            }
        })
    }


    const [errors, setErrors] = useState(false),
          [loader, setLoader] = useState(false),
          [selectedImg, setSelectedImg] = useState(null),
          [selectedImgError, setSelectedImgError]   = useState(false),
          [avatar, setAvatar] = useState(null),
          [oldAvatar, setOldAvatar] = useState(null),
          [nom, setNom] = useState(""),
          [prenom, setPrenom] = useState(""),
          [postNom, setPostNom] = useState(""),
          [oldPassword, setOldPassword] = useState(""),
          [newPassword, setNewPassword] = useState(""),
          [confirmPassword, setConfirmPassword] = useState("")


    const img = useRef()

    const {
        dataUser, setDataUser,
        SetUserToken,
        configAuthFormDataHeader
    } = useContext(dataContext)

    const router = useRouter()

    useEffect(() => 
    {
        if(dataUser)
        {
            setSelectedImg(dataUser.avatar)
            setOldAvatar(dataUser.avatar)
            setNom(dataUser.nom)
            setPrenom(dataUser.prenom)
            setPostNom(dataUser.postnom)
        }
    }, [dataUser])


    const component = 
    <>
        <Head>
            <meta name="description" content={`Inscrivez-vous sur ${process.env.NEXT_PUBLIC_NAME_SITE} pour accéder à plus des fonctionnalitées`} />
            <title>{ `${rooter.user.name} | ${process.env.NEXT_PUBLIC_NAME_SITE}` }</title>
        </Head>


        <div className={styles.Modal}>
            <div className={styles.bloc}>
                <div className={styles.top}>
                    <h3>Modifiez votre profil</h3>
                </div>

                <div className={styles.content}>
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
                                        :
                                            "L'avatar doit être un fichier de type JPEG, JPG ou PNG"
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
                                    value={nom}
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
                                    value={prenom}
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
                                    value={postNom}
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
                                <label htmlFor="OldPassword">Ancien mot de passe</label>
                                <input 
                                    type="password" 
                                    onChange={(e) => setOldPassword(e.target.value)} 
                                    id="OldPassword" 
                                    className={`${errors ? errors.ancien_mot_de_passe ? styles.error : null : null}`}
                                    placeholder="*********"
                                    required
                                />
                                {
                                    errors
                                    ?
                                        errors.ancien_mot_de_passe
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.ancien_mot_de_passe[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="NewPassword">Nouveau mot de passe</label>
                                <input 
                                    type="password" 
                                    onChange={(e) => setNewPassword(e.target.value)} 
                                    id="NewPassword" 
                                    className={`${errors ? errors.nouveau_mot_de_passe ? styles.error : null : null}`}
                                    required
                                    placeholder="*********"
                                />

                                {
                                    errors
                                    ?
                                        errors.nouveau_mot_de_passe
                                        ?
                                        <div className={styles.errors}>
                                            <span>{errors.nouveau_mot_de_passe[0]}</span>
                                        </div>
                                        : null
                                    :null
                                }
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="Non" style={{visibility: "hidden"}}>Confirmer le mot de passe</label>
                                <input 
                                    type="password" 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    className={`${errors ? errors.mot_de_passe_confirm ? styles.error : null : null}`}
                                    required
                                    placeholder="Confirmer votre mot de passe"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <button onClick={!loader ? handleEditUser : null} className={styles.btn_close_modal} title={"Modifier votre compte"}>
                        <span>Modifier</span>

                        {
                            loader
                            ?
                                <BiLoaderAlt className={styles.icon}/>
                            : null
                        }
                    </button>   
                </div>
            </div>
        </div>
    </>

    return component
}

export default Edit_account