"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";

const SideBar = (props: { active: string }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isHoverOrder, setIsHoverOrder] = useState<boolean>(false);
  const [isHoverWallet, setIsHoverWallet] = useState<boolean>(false);
  const [isHoverDashboard, setIsHoverDashboard] = useState<boolean>(false);
  const [isHoverPharmacy, setIsHoverPharmacy] = useState<boolean>(false);
  const [isHoverScan, setIsHoverScan] = useState<boolean>(false);
  const [isHoverOtc, setIsHoverOtc] = useState<boolean>(false);
  const [isHoverRequest, setIsHoverRequest] = useState<boolean>(false);

  return (
    <div className={styles.sidebarContainer1}>
      <div
        className={styles.sidebarContainer}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          onMouseEnter={() => setIsHoverDashboard(true)}
          onMouseLeave={() => setIsHoverDashboard(false)}
          className={`${styles.imageContainer} ${
            props.active == "dashboard"
              ? styles.activeContainer
              : styles.notActiveContainer
          } ${
            isHover ? styles.imageContainerHover : styles.imageContainerExtra
          }`}
        >
          <Image
            src={
              props.active == "dashboard"
                ? "/dashboardIcon.svg"
                : isHoverDashboard
                ? "/dashboardIcon.svg"
                : "/dashboardIconColored.svg"
            }
            alt="Placebo Logo"
            width={isHover ? 13 : 25}
            height={isHover ? 16 : 30}
            priority
          />

          <p
            className={`ml-1 flex items-center ${styles.text} ${
              isHover ? "block" : "hidden"
            }`}
          >
            Yours Truly
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHoverPharmacy(true)}
          onMouseLeave={() => setIsHoverPharmacy(false)}
          className={`${styles.imageContainer} ${
            props.active == "pharmacy"
              ? styles.activeContainer
              : styles.notActiveContainer
          } ${
            isHover ? styles.imageContainerHover : styles.imageContainerExtra
          }`}
        >
          <Image
            src={
              props.active == "pharmacy"
                ? "/dashboardIcon.svg"
                : isHoverPharmacy
                ? "/dashboardIcon.svg"
                : "/pharmacyIcon.svg"
            }
            alt="Placebo Logo"
            width={isHover ? 16 : 30}
            height={isHover ? 16 : 30}
            priority
          />

          <p
            className={`ml-1 flex items-center ${styles.text} ${
              isHover ? "block" : "hidden"
            }`}
          >
            Pharmacies
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHoverScan(true)}
          onMouseLeave={() => setIsHoverScan(false)}
          className={`${styles.imageContainer} ${
            props.active == "scan"
              ? styles.activeContainer
              : styles.notActiveContainer
          }  ${
            isHover ? styles.imageContainerHover : styles.imageContainerExtra
          }`}
        >
          <Image
            src={
              props.active == "scan"
                ? "/dashboardIcon.svg"
                : isHoverScan
                ? "dashboardIcon.svg"
                : "/ScanIcon.svg"
            }
            alt="Placebo Logo"
            width={isHover ? 17 : 32}
            height={isHover ? 17 : 32}
            priority
          />

          <p
            className={`ml-1 flex items-center ${styles.text} ${
              isHover ? "block" : "hidden"
            }`}
          >
            Scan
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHoverOrder(true)}
          onMouseLeave={() => setIsHoverOrder(false)}
          className={`${styles.imageContainer} ${
            props.active == "order"
              ? styles.activeContainer
              : styles.notActiveContainer
          } ${
            isHover ? styles.imageContainerHover : styles.imageContainerExtra
          }`}
        >
          <Image
            src={
              props.active == "order"
                ? "/dashboardIcon.svg"
                : isHoverOrder
                ? "/dashboardIcon.svg"
                : "/orderIcon.svg"
            }
            alt="Placebo Logo"
            width={isHover ? 16 : 30}
            height={isHover ? 16 : 30}
            priority
          />

          <p
            className={`ml-1 flex items-center ${styles.text} ${
              isHover ? "block" : "hidden"
            }`}
          >
            Orders & Refills
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHoverWallet(true)}
          onMouseLeave={() => setIsHoverWallet(false)}
          className={`${styles.imageContainer} ${
            props.active == "wallet"
              ? styles.activeContainer
              : styles.notActiveContainer
          } ${
            isHover ? styles.imageContainerHover : styles.imageContainerExtra
          }`}
        >
          <Image
            src={
              props.active == "wallet"
                ? "/dashboardIcon.svg"
                : isHoverWallet
                ? "/dashboardIcon.svg"
                : "/WalletIcon.svg"
            }
            alt="Placebo Logo"
            width={isHover ? 16 : 30}
            height={isHover ? 16 : 30}
            priority
          />

          <p
            className={`ml-1 flex items-center ${styles.text} ${
              isHover ? "block" : "hidden"
            } `}
          >
            Wallet
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHoverRequest(true)}
          onMouseLeave={() => setIsHoverRequest(false)}
          className={`${styles.imageContainer} ${
            props.active == "request"
              ? styles.activeContainer
              : styles.notActiveContainer
          } ${
            isHover ? styles.imageContainerHover : styles.imageContainerExtra
          }`}
        >
          <Image
            src={
              props.active == "request"
                ? "/dashboardIcon.svg"
                : isHoverRequest
                ? "/dashboardIcon.svg"
                : "/RequestIcon.svg"
            }
            alt="Placebo Logo"
            width={isHover ? 20 : 40}
            height={isHover ? 20 : 40}
            priority
          />

          <p
            className={`ml-1 flex items-center ${styles.text} ${
              isHover ? "block" : "hidden"
            }`}
          >
            Requests
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHoverOtc(true)}
          onMouseLeave={() => setIsHoverOtc(false)}
          className={`${styles.imageContainer} ${
            props.active == "otc"
              ? styles.activeContainer
              : styles.notActiveContainer
          } ${
            isHover ? styles.imageContainerHover : styles.imageContainerExtra
          }`}
        >
          <Image
            src={
              props.active == "otc"
                ? "/dashboardIcon.svg"
                : isHoverOtc
                ? "dashboardIcon.svg"
                : "/otcIcon.svg"
            }
            alt="Placebo Logo"
            width={isHover ? 40 : 68}
            height={isHover ? 14 : 24}
            priority
          />

          <p
            className={`ml-1 flex items-center ${styles.text} ${
              isHover ? "block" : "hidden"
            }`}
          >
            Over-The-Counter
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
