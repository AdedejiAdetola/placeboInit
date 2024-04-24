"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./signup.module.css";
import UserTypeCard from "../components/UserTypeCard/UserTypeCard";
import userbg from "../../public/userbgsignup.svg";
import userIcon from "../../public/user-icon.svg";

import pharmbg from "../../public/pharmacybgsignup.svg";
import pharmIcon from "../../public/medical-cross.svg";

import hmobg from "../../public/hmobgsignup.svg";
import hmoIcon from "../../public/health-insurance.svg";
import AuthSwitch from "../components/AuthSwitch/AuthSwitch";
import GuestButton from "../components/GuestButton/GuestButton";

const Page = () => {
  let topText,
    bottomText,
    topPharmText,
    bottomPharmText,
    topHmoText,
    bottomHmoText: string;

  topText =
    "Real-time access to medication information, pricing and delivery options.";
  bottomText = "Users";

  topPharmText = "Purchase trends, Increased awareness, Ads and Analytics.";
  bottomPharmText = "Pharmacies";

  topHmoText =
    "Streamlined and effective medication access for improved health outcomes.";
  bottomHmoText = "HMOs";

  const router = useRouter();

  const handleClick = () => {
    router.push("/createAccount");
  };

  return (
    <div>
      <div className={styles.signupBody}>
        <div className={styles.signupImage}>
          <Image
            src="/placebo-logo.svg"
            alt="Placebo Logo"
            width={142}
            height={30}
            priority
          />
        </div>

        <p className={`${styles.signupHead}`}>Sign Up Options</p>

        <div className="flex justify-between">
          <UserTypeCard
            bgImg={userbg.src}
            text="User"
            icon={userIcon}
            topOverlayText={topText}
            bottomOverlayText={bottomText}
            handleClick={handleClick}
          />

          <UserTypeCard
            bgImg={pharmbg.src}
            text="Pharmacy"
            icon={pharmIcon}
            topOverlayText={topPharmText}
            bottomOverlayText={bottomPharmText}
            handleClick={handleClick}
          />

          <UserTypeCard
            bgImg={hmobg.src}
            text="HMO"
            icon={hmoIcon}
            topOverlayText={topHmoText}
            bottomOverlayText={bottomHmoText}
            handleClick={handleClick}
          />
        </div>

        <AuthSwitch
          mainText="Already Registered?"
          href="/login"
          linkText="Log In"
        />

        <GuestButton />
      </div>
    </div>
  );
};

export default Page;
