import React from "react";
import styles from "./guestpopup.module.css";
import Image from "next/image";

const GuestPopup = (props: {
  handleOutsideClick: () => void;
  handleYes: () => void;
  handleNo: () => void;
}) => {
  return (
    <div className={styles.overlay} onClick={props.handleOutsideClick}>
      <div className={styles.popup}>
        <p className={styles.gpTitle}>
          Would you like to proceed with a Guest profile?
        </p>

        <p className={styles.gpContent}>
          You won’t be able to perform further actions like buying your meds,
          comparing prices and so much more.
        </p>

        <div className={styles.buttons}>
          <button onClick={props.handleNo} className={styles.no}>
            <Image
              src="/CrossIcon.svg"
              alt="Placebo Logo"
              width={12}
              height={12}
              priority
              className={styles.logo}
            />
            <p>No</p>
          </button>

          <button onClick={props.handleYes} className={styles.yes}>
            <Image
              src="/TickIcon.svg"
              alt="Placebo Logo"
              width={9}
              height={9}
              priority
              className={styles.logo}
            />
            <p>Yes</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestPopup;
