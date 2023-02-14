import React from "react";
import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import styles from "../../styles/inscription.module.css";
import { useContext, useEffect } from "react";
import { dataContext } from "../../utils/dataContext";

function _UploadImage({ modal, inscription }) {
  const { uploadImage, setUploadImage, preview, setPreview } =
    useContext(dataContext);

  const handleImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (uploadImage) {
      const reader = new FileReader();
      reader.readAsDataURL(uploadImage);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    } else {
    }
  }, [uploadImage]);
  const renduUploadImae = (
    <>
      {!inscription ? (
        <div className={styles.content_image1}>
          <div className={styles.contenteI_input}>
            <input
              type="file"
              className={styles.input_file}
              onChange={handleImage}
            />
          </div>

          {preview ? (
            <Image
              src={preview}
              alt="Image use"
              className={styles.User_img}
              width={200}
              height={200}
            />
          ) : (
            <div className={styles.user_content_icon}>
              <h1 className={styles.User_icon1}>
                <RiUserLine />
              </h1>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.content_image}>
          <input
            type="file"
            multiple
            accept="image/*"
            className={styles.input_file}
            onChange={handleImage}
          />
          {preview ? (
            <Image
              src={preview}
              alt="Image user"
              className={styles.User_img}
              width={200}
              height={200}
            />
          ) : (
            <h1 className={styles.User_icon}>
              <RiUserLine />
            </h1>
          )}
        </div>
      )}
    </>
  );

  return renduUploadImae;
}

export default _UploadImage;
