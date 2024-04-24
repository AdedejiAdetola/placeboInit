import React from "react";
import styles from "./sortby.module.css";

const SortBy = (props: { name: string; local: boolean }) => {
  return (
    <div className={`${styles.sortByBox} ${props.local ? "mx-5" : ""}`}>
      {props.name}
    </div>
  );
};

export default SortBy;
