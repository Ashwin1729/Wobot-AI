import React from "react";
import styles from "./BackBox.module.css";
import BackgroundBarLeft from "./BackgroundBarLeft";
import BackgroundBarRight from "./BackgroundBarRight";

const BackBox = () => {
  return (
    <div className={styles.box}>
      <BackgroundBarLeft />
      <div className={styles.fade_box}></div>
      <BackgroundBarRight />
    </div>
  );
};

export default BackBox;
