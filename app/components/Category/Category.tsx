import React from "react";
import Image from "next/image";
import styles from "./category.module.css";
import Item from "../Item/Item";

const Category = (props: {
  drugCategory: string;
  categorySubtext: string;
  items: Array<{
    imageParam: string;
    drugName: string;
    drugTitle: string;
  }>;
}) => {
  const { drugCategory, categorySubtext, items } = props;
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTop}>
        <div>
          <p className={styles.drugCategory}>{drugCategory}</p>
          <p className={styles.categorySubtext}>{categorySubtext}</p>
        </div>

        <Image
          src="/MoreIcon.svg"
          alt="Placebo Logo"
          width={36}
          height={21}
          priority
        />
      </div>

      <div className={styles.categoryItemFlex}>
        {items.map((item, index) => (
          <Item
            key={index}
            imageParam={item.imageParam}
            drugName={item.drugName}
            drugTitle={item.drugTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
