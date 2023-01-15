import React from "react";
import styles from "../styles/cimetiere.module.css";

const cimetiere = () => {
  const renduCimetiere = (
    <>
      <div className={styles.contentCimet}>
        <h1 className={styles.cimetTitle}>Notre cimetière</h1>
        <hr className={styles.cimetBarr} />
      </div>
    </>
  );

  return renduCimetiere;
};

export default cimetiere;
