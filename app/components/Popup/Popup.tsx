import React from 'react';
import styles from './popup.module.css'
import Image from "next/image";

const Popup = (props: {
    handleOutsideClick: () => void;
    imageParam: string;
    text: string;
    text2: string;
}) => {
  return (
    <div className={styles.overlay} onClick={props.handleOutsideClick}>
        <div className={styles.popup}>
            <Image
                src={props.imageParam}
                alt="Placebo Logo"
                width={120}
                height={120}
                priority
              />
            <p className={styles.verify}>{props.text}</p>
            <p className={styles.text2}>{props.text2}</p>
        </div>
    </div>
  )
}

export default Popup