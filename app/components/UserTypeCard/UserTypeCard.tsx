"use client";
import React, { useState } from "react";
import styles from "./usertypecard.module.css";
import Image from "next/image";

const UserTypeCard = (props: {
  bgImg: string;
  icon: string;
  text: string;
  topOverlayText: string;
  bottomOverlayText: string;
  handleClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  // console.log('is', isHovered)

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${props.bgImg})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.handleClick}
    >
      {isHovered && (
        <div className={styles.overlay}>
          <div>
            <p className={styles.topOverlayText}>{props.topOverlayText}</p>
          </div>

          <div className="flex items-center justify-end mb-10 mr-11">
            <Image
              src={"/placeboWhiteLogo.svg"}
              alt="Placebo Logo"
              width={76}
              height={16}
              priority
            />
            <p className={styles.bottomOverlayText}>
              &nbsp; for {props.bottomOverlayText}
            </p>
          </div>
        </div>
      )}

      <div>
        <Image
          src={props.icon}
          alt="User Icon"
          width={240}
          height={240}
          priority
        />
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
};

export default UserTypeCard;
