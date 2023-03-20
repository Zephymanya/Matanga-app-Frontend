import Image from "next/image"
import style from "../../styles/defunt/defunt_page.module.css"
import fleur from "../../public/img/fleur.jpg"
import defunt from "../../public/img/defunt.jpg"
import Avatar from "../../components/partials/_Avatar";
import { dataContext } from "../../contexts/dataContext";
import { useContext } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import axios from "axios";
import { routeApi } from "../../datas/webApi";
import { configAuthHeaderServer } from "../../components/funtions";

function Defunt_page({defunt})
{
  const { 
    dataUser, 
    setDefuntUser,
    defuntUser,  
  } = useContext(dataContext);


console.log(defunt);

    const component = 
    <>
    <div className={style.content_defun} > 
       
   <div className={style.content_image_backgound} >
        <Image
        src={defunt}
         layout={"fill"}
         objectFit={"cover"}
         alt={"Photo d'une fleure"}
         quality={100}
         sizes="100%"
    
        />
        </div>

<div className={style.content_defunt_homage}>
    <div className={style.content_defunt_information} >
      <div className={style.userImage}>
      <Image
        src={defunt}
         layout={"fill"}
         objectFit={"cover"}
         alt={"Photo du défunt"}
         quality={100}
         sizes="100%"
         className={style.image_defunt}
        />
      </div>
      <div className={style.info_defunt}>
        <div className={style.title_defunt} >
          <p className={style.title} > À propos</p>
        </div>
        <div className={style.description_defunt} >
          
          <div>
          <p className={style.descript}>
              Impossible de se connecter au serveur à l’adresse www.google.com. 
              Si l’adresse saisie était correcte, vous pouvez :
              Réessayer plus tardVeuillez vérifier votre connexion réseau
          </p>
          </div>

          <div className={style.auther_info}>
            <p>Date du decès</p>
            <p>12-05-2015</p>
          </div>
          
          <div className={style.auther_info}>
            <p>Date d'enterrement</p>
            <p>12-05-2015</p>
          </div>
        </div>
      </div>

    </div> 
</div>

<div className={style.content_commentaire}>
<div className={style.espace}>
</div>
    <div className={style.homage_commenetaire} >
      <div className={style.scroll_class}>
     
      <div className={style.homage_Famille}>
      <h1 className={style.hommage_family}>Ici Hommage de la famille</h1>
     </div>

        <div className={style.personne_commentaire}>
        <div className={style.user_image}>
          <div className={style.user}>
          <Avatar  user={dataUser}/>
        </div>
        <div className={style.names_user}>
        <p>{dataUser.nom}</p>
        <p>{dataUser.prenom}</p>
        </div>

        <div className={style.names_user_comment}>
        </div>
        </div>
        <div className={style.commentaire}>
          <p className={style.p_commentaire } >Le lorem ipsum est, en imprimerie, une suite de mots remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin</p>
          <p className={style.date_commentaire} >25 Decembre 2015</p>
        </div>
        </div>

    </div>
      </div>
    
</div>



    </div>
    </>

    return component
}


export async function getServerSideProps(context) 
{
   const {slug} = context.params;
   const {req}  = context;
   let defunt   = []

  try  
  {
    const Onedefunt = await axios.get(`${routeApi.get_defunt}/${slug}}`, configAuthHeaderServer(req.cookies.token))
    
    if(Onedefunt.data.data)
    {
      defunt = Onedefunt.data.data
    }
  } 
  catch(err) 
  {
    console.error(err)
  }


  return {
    props: {defunt}
  }
  
}

export default Defunt_page