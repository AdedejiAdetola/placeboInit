import React, { useState } from "react";
import styles from "./guestbutton.module.css";
import Image from "next/image";
import GuestPopup from "../GuestPopup/GuestPopup";
import { useRouter } from "next/navigation";

const GuestButton = () => {
  const [guestInfo, setGuestInfo] = useState<boolean>(false);
  const [isGuest, setIsGuest] = useState<boolean>(false);
  const router = useRouter();

  const handleGuest = () => {
    setIsGuest((prevGuest) => !prevGuest);
  };

  const handleGuestInfo = () => {
    setGuestInfo((prevGuestInfo) => !prevGuestInfo);
  };

  const handleOutsideClick = () => {
    setIsGuest(false);

    //if isVerified, navigate to login
  };

  const handleYes = () => {
    router.push("/dashboard");
  };
  return (
    <div className={styles.gbContainer}>
      <button className={styles.guestButton} onClick={handleGuest}>
        <Image
          src={"/guest_icon.svg"}
          alt="Guest Icon"
          width={16}
          height={16}
          priority
        />
        <p className={styles.guestText}>Use as a Guest</p>
      </button>

      <button onClick={handleGuestInfo}>
        <Image
          src={"/question-icon.svg"}
          alt="Question Icon"
          width={10}
          height={10}
          priority
        />
      </button>

      {guestInfo && (
        <div className={styles.info}>
          <p>Explore Placebo’s functionalities without an account.</p>

          <p>For those who like to taste before biting.</p>
        </div>
      )}

      {isGuest && (
        <GuestPopup
          handleOutsideClick={handleOutsideClick}
          handleNo={handleOutsideClick}
          handleYes={handleYes}
        />
      )}
    </div>
  );
};

export default GuestButton;
