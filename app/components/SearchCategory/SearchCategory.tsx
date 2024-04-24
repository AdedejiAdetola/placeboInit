import React from "react";
import styles from "./searchcategory.module.css";
import Image from "next/image";

const SearchCategory = (props: {
  drugImage: string;
  drugTitle: string;
  drugMiniTitle: string;
  drugRating: number;
  manufacturedBy: string;
  uses: string;
  warning: string;
  prescriptionType: string;
}) => {
  const {
    drugTitle,
    drugImage,
    drugMiniTitle,
    drugRating,
    manufacturedBy,
    uses,
    warning,
    prescriptionType,
  } = props;
  return (
    <div className={styles.searchDrugContainer}>
      <Image
        src={drugImage}
        alt="Placebo Logo"
        width={240}
        height={180}
        priority
        className={styles.image}
      />

      <div>
        <p className={styles.heading}>{drugTitle}</p>
        <div className={styles.miniDetails}>
          <p>{drugMiniTitle} </p>
          <Image
            src="/dot.svg"
            alt="dot"
            width={4}
            height={4}
            priority
            className={styles.dot}
          />
          <div className={styles.rate}>
            {drugRating}
            <Image src="/Star.svg" alt="dot" width={15} height={15} priority />
          </div>
        </div>

        <div className={styles.drugDetails}>
          <div className={styles.side1}>
            <p>Manufactured By:</p>
            <p>Uses:</p>
            <p>Warning:</p>
            <p>Prescription Type:</p>
          </div>

          <div className={styles.side2}>
            <p>{manufacturedBy}</p>
            <p>{uses}</p>
            <p>{warning}</p>
            <p>{prescriptionType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
