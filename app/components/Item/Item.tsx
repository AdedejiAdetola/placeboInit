"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./item.module.css";

const Item = (props: {
  imageParam: string;
  drugTitle: string;
  drugName: string;
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick((prevState) => !prevState);
  };
  return (
    <div className={styles.drugItemContainer}>
      <Image
        src={isClick ? "/heartClicked.svg" : "/heart.svg"}
        alt="Placebo Logo"
        width={16}
        height={16}
        priority
        className={styles.like}
        onClick={handleClick}
      />
      <Image
        src={props.imageParam}
        alt="Placebo Logo"
        width={250}
        height={180}
        priority
      />
      <div className={styles.drugContent}>
        <p className={styles.drugName}>{props.drugName}</p>
        <p className={styles.drugTitle}>{props.drugTitle}</p>
      </div>
    </div>
  );
};

export default Item;
