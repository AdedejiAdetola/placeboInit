import React from "react";
import Image from "next/image";
import styles from "./actionitemcard.module.css";

const ActionItemCard = (props: { text: string; image: string }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.actionContainer}>
        <p>{props.text}</p>
        <Image
          src={props.image}
          alt="Country Flag"
          width={30}
          height={30}
          priority
        />
      </div>
    </div>
  );
};

export default ActionItemCard;
