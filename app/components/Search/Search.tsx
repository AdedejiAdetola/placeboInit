import React from "react";
import Image from "next/image";
import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.subContainer}>
        <Image
          src="/SearchIcon.svg"
          alt="Placebo Logo"
          width={20}
          height={20}
          priority
        />

        <input
          type={"search"}
          name="search"
          id="search"
          className={styles.searchInput}
          placeholder="Search for any medication here"
        />
      </div>

      <Image
        src="/MicIcon.svg"
        alt="Placebo Logo"
        width={24}
        height={24}
        priority
        className={styles.mic}
      />
    </div>
  );
};

export default Search;
