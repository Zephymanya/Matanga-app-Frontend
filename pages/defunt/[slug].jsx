import Image from "next/image"
import styles from "../../styles/defunt/defunt_page.module.css"
import fleur from "../../public/img/fleur.jpg"
import defunt from "../../public/img/defunt.jpg"
import Avatar from "../../components/partials/_Avatar";
import { dataContext } from "../../contexts/dataContext";
import { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import axios from "axios";
import { routeApi } from "../../datas/webApi";
import { configAuthHeaderServer, TokenExpired } from "../../components/funtions";
import moment from "moment/moment";
import { useRouter } from "next/router";
import { rooter } from "../../datas/web";
import { BiLoaderAlt } from "react-icons/bi";
import { NextResponse } from "next/server"
import { head } from "../../datas/webHead";
import Head from "next/head";

function Defunt_page({defunt, comments})
{
  const editorConfig = {
      fontFamily: {
          options: [
              'default',

              'Arial, Helvetica, sans-serif',
              'Courier New, Courier, monospace',
              'Georgia, serif',
              'Lucida Sans Unicode, Lucida Grande, sans-serif',
              'Tahoma, Geneva, sans-serif',
              'Times New Roman, Times, serif',
              'Trebuchet MS, Helvetica, sans-serif',
              'Verdana, Geneva, sans-serif',

              'OpenSans-Light,    openSans-L,sans-serif',
              'OpenSans-Regular,  openSans-R,sans-serif',
              'OpenSans-SemiBold, openSans-M,sans-serif',
              'OpenSans-Bold,     openSans-B,sans-serif',
          ]
      },

      fontSize: {
          options: [
              9,
              10,
              11,
              12,
              13,
              'default',
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              30,
              35,
              40,
              45,
              50,
          ]
      },

      fontColor: {
          colors: [
              {
                  color: '#000000',
                  label: 'Noir'
              },
              {
                  color: '#ffffff',
                  label: 'Blanc',
                  hasBorder: true
              },
              {
                  color: 'rgba(0,0,0,.5)',
                  label: 'Gris',
              },

              {
                  color: 'var(--red)',
                  label: 'Rouge',
              },
              {
                  color: 'var(--red_c)',
                  label: 'Rouge claire',
              },
              {
                  color: 'var(--red_f)',
                  label: 'Rouge foncé',
              },

              {
                  color: 'var(--pink)',
                  label: 'Rose',
              },
              {
                  color: 'var(--pink_c)',
                  label: 'Rose claire',
              },
              {
                  color: 'var(--pink_b)',
                  label: 'Rose foncé',
              },

              {
                  color: 'var(--purple)',
                  label: 'Mauve',
              },
              {
                  color: 'var(--purple_c)',
                  label: 'Mauve claire',
              },
              {
                  color: 'var(--purple_b)',
                  label: 'Mauve foncé',
              },

              {
                  color: 'var(--blue)',
                  label: 'Bleu',
              },
              {
                  color: 'var(--blue_c)',
                  label: 'Bleu claire',
              },
              {
                  color: 'var(--blue_b)',
                  label: 'Bleu foncé',
              },

              {
                  color: 'var(--cyan)',
                  label: 'Cyan',
              },
              {
                  color: 'var(--cyan_c)',
                  label: 'Cyan claire',
              },
              {
                  color: 'var(--cyan_b)',
                  label: 'Cyan foncé',
              },

              {
                  color: 'var(--green)',
                  label: 'Vert',
              },
              {
                  color: 'var(--green_c)',
                  label: 'Vert claire',
              },
              {
                  color: 'var(--green_b)',
                  label: 'Vert foncé',
              },

              {
                  color: 'var(--yellow)',
                  label: 'Jaune',
              },
              {
                  color: 'var(--yellow_c)',
                  label: 'Jaune claire',
              },
              {
                  color: 'var(--yellow_b)',
                  label: 'Jaune foncé',
              },
          ],
          
          columns: 3,
      },

      fontBackgroundColor: {
          colors: [
              {
                  color: '#000000',
                  label: 'Noir'
              },
              {
                  color: '#ffffff',
                  label: 'Blanc',
                  hasBorder: true
              },
              {
                  color: 'rgba(0,0,0,.5)',
                  label: 'Gris',
              },

              {
                  color: 'var(--red)',
                  label: 'Rouge',
              },
              {
                  color: 'var(--red_c)',
                  label: 'Rouge claire',
              },
              {
                  color: 'var(--red_f)',
                  label: 'Rouge foncé',
              },

              {
                  color: 'var(--pink)',
                  label: 'Rose',
              },
              {
                  color: 'var(--pink_c)',
                  label: 'Rose claire',
              },
              {
                  color: 'var(--pink_b)',
                  label: 'Rose foncé',
              },

              {
                  color: 'var(--purple)',
                  label: 'Mauve',
              },
              {
                  color: 'var(--purple_c)',
                  label: 'Mauve claire',
              },
              {
                  color: 'var(--purple_b)',
                  label: 'Mauve foncé',
              },

              {
                  color: 'var(--blue)',
                  label: 'Bleu',
              },
              {
                  color: 'var(--blue_c)',
                  label: 'Bleu claire',
              },
              {
                  color: 'var(--blue_b)',
                  label: 'Bleu foncé',
              },

              {
                  color: 'var(--cyan)',
                  label: 'Cyan',
              },
              {
                  color: 'var(--cyan_c)',
                  label: 'Cyan claire',
              },
              {
                  color: 'var(--cyan_b)',
                  label: 'Cyan foncé',
              },

              {
                  color: 'var(--green)',
                  label: 'Vert',
              },
              {
                  color: 'var(--green_c)',
                  label: 'Vert claire',
              },
              {
                  color: 'var(--green_b)',
                  label: 'Vert foncé',
              },

              {
                  color: 'var(--yellow)',
                  label: 'Jaune',
              },
              {
                  color: 'var(--yellow_c)',
                  label: 'Jaune claire',
              },
              {
                  color: 'var(--yellow_b)',
                  label: 'Jaune foncé',
              },
          ],
          
          columns: 3,
      },

      toolbar: [
          'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|', 
          'bold', 'italic', 'underline', 'strikethrough', '|',
          "Alignment", '|',
          'link',
          'mediaEmbed'
      ]
  }


  function handleRendreHommage()
  {
    setLoader(true)

    const formData = new FormData()
          formData.append("rendre_hommage", hommage)
          formData.append("defunt_id", defunt.id)
        
    axios.post(routeApi.create_comment, 
      formData,
      configAuthFormDataHeader
    )
    .then((res) => {
      const response = res.data.data

      if(response)
      {
        setErrors(null)
        setHommage("")
        setDefuntComments([...response.comments])

        setLoader(false)
      }
    })
    .catch((err) => {
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
  
  function handleDeleteRendreHommage(comment_id)
  {
    const formData = new FormData()
          formData.append("comment_id", comment_id)
        
    axios.post(routeApi.delete_comment, 
      formData,
      configAuthFormDataHeader
    )
    .then((res) => {
      const response = res.data.data

      if(response)
      {
        setDefuntComments([...response])
      }
    })
    .catch((err) => {
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
            }
          }
      }
    })
  }


  const {
    dataUser,
    userToken,
    SetUserToken,
    configAuthFormDataHeader,
  } = useContext(dataContext)

  const [defuntComments, setDefuntComments] = useState([]),
        [editorLoaded, setEditorLoaded] = useState(true),
        [hommage, setHommage] = useState(""),
        [errors, setErrors] = useState(null),
        [loader, setLoader] = useState(false)
  
  const editorRef = useRef()

  const router = useRouter()

  const { CKEditor, ClassicEditor } = editorRef.current || {}


  useEffect(() => 
  {
      editorRef.current = 
      {
          CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
          ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
          // Alignment: require("@ckeditor/ckeditor5-alignment/src/alignment")
      }

      setEditorLoaded(false)
  }, [])

  useEffect(() => 
  {
    setDefuntComments([...comments])
  }, [])


  const component = 
  <div className={styles.Defunt}>
    <Head>
      <meta name="description" content={head.defunt_slug.description} />
      <title>{`${defunt.nom} ${defunt.prenom} ${defunt.postnom} | ${head.defunt_slug.title}`}</title>
    </Head>


    <div className={styles.banner} style={{backgroundImage: `url(${defunt.avatar})`}}>
      <div className={styles.bloc_details}>
        <div className={styles.img}>
          <Image 
            src={defunt.avatar} 
            alt={"Défunt"}
            className={styles.img_defunt}
            layout={"fill"}
            objectFit={"cover"}
            quality={100}
            sizes="100%"
          />
        </div>

        <div className={styles.bloc_name}>
          <strong>
            {
              `${defunt.nom} ${defunt.prenom} ${defunt.postnom}`
            }
          </strong>

          <span>{defunt.cimetiere.nom}</span>
        </div>

        <div className={styles.describe} dangerouslySetInnerHTML={{__html: defunt.description}}>
        </div>

        <div className={styles.dates}>
          <div className={styles.date}>
            <strong>Date de naissance</strong>
            <span>{moment(defunt.date_naissance).format("DD MMM YYYY")}</span>
          </div>

          <div className={styles.date}>
            <strong>Date de décès</strong>
            <span>{moment(defunt.date_deces).format("DD MMM YYYY")}</span>
          </div>

          <div className={styles.date}>
            <strong>Date d'enterrement</strong>
            <span>{moment(defunt.date_enterrement).format("DD MMM YYYY")}</span>
          </div>
        </div>
      </div>

      <div className={styles.name}>
        <strong>
          {
            `${defunt.nom} ${defunt.prenom} ${defunt.postnom}`
          }
        </strong>

        <span>{defunt.cimetiere.nom}</span>
      </div>

      <div className={styles.filter}></div>
    </div>

    <div className={styles.bloc_content}>
      <div className={styles.hommage_comment}>
        <div className={styles.hommage} dangerouslySetInnerHTML={{__html: defunt.hommage_famille}}></div>

        <div className={styles.comments}>
          {
            userToken
            ?
              <div className={`${styles.add_comment} ${errors ? errors.rendre_hommage ? "error" : null : null}`}>
                <h3>Rendre hommage</h3>

                {
                  !editorLoaded 
                  ?(
                      <CKEditor 
                          editor={ClassicEditor}
                          id={"Hommage"}
                          data={hommage}
                          onChange={(event, editor) => setHommage(editor.getData())}
                          className={`${styles.ckEditor}`}
                          config={editorConfig}
                      />
                  ): null
                }

                {
                  errors
                  ?
                      errors.rendre_hommage
                      ?
                      <div className={styles.errors}>
                          <span>{errors.rendre_hommage[0]}</span>
                      </div>
                      : null
                  :null
                }

                <div className={styles.btn}>
                  <button onClick={loader ? null : handleRendreHommage}>
                    <span>Rendre hommage</span>

                    {
                      loader
                      ?
                        <BiLoaderAlt className={styles.icon}/>
                      : null
                    }
                  </button>
                </div>
              </div>
            :null
          }

          <div className={styles.see_comment}>
            {
              defuntComments.length
              ?
                defuntComments.map((comment) => [
                  <div className={styles.comment}>
                    <div className={styles.avatar}>
                      <Image 
                        src={comment.user.avatar} 
                        alt={"Défunt"}
                        className={styles.img}
                        layout={"fill"}
                        objectFit={"cover"}
                        quality={100}
                        sizes="100%"
                      />
                    </div>

                    <div className={styles.comment_content}>
                      <div className={styles.top}>
                        <div className={styles.name}>
                          <span>{comment.user.nom}</span>
                          <span>{comment.user.prenom}</span>
                        </div>

                        <strong>{moment(comment.created_at).format("DD-MM-YYYY H:mm:ss")}</strong>
                      </div>

                      <div className={styles.txt} dangerouslySetInnerHTML={{__html: comment.comment}}/>

                      {
                        userToken
                        ?
                          comment.user.email === dataUser.email
                          ?
                            <div className={styles.bottom}>
                              <button onClick={loader ? null : () => handleDeleteRendreHommage(comment.id)}>Supprimer</button>
                            </div>
                          :null
                        :null
                      }
                    </div>
                  </div>
                ])
              :
                <div className={styles.not_comment}></div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>

  return component
}


export async function getServerSideProps(context) 
{
   const {slug} = context.params;
   let defunt   = null
   let comments = []

  try  
  {
    const Onedefunt = await axios.get(`${routeApi.get_data_defunt}/${slug}`)
    
    if(Onedefunt.data.data)
    {
      defunt = Onedefunt.data.data
    }
  } 
  catch(err) 
  {
    console.error(err)
  }

  try  
  {
    const myComments = await axios.get(`${routeApi.get_comments}`, {
      params: {
        defunt_id: defunt.id
      }
    })
    
    if(myComments.data.data)
    {
      comments = myComments.data.data
    }
  } 
  catch(err) 
  {
    console.error(err)
  }


  if(!defunt)
  {
    return {
      redirect:{
        permanent: false,
        destination: "/cimetiere"
      }
    }
  }
  else
  {
    return {
      props: {defunt, comments}
    }
  }

  
}

export default Defunt_page