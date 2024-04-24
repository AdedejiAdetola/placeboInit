"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Search from "../Search/Search";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [isNotification, setIsNotification] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <Image
        src="/placebo-logo.svg"
        alt="Placebo Logo"
        width={142}
        height={30}
        priority
      />

      <Search />

      <div className={styles.rightNav}>
        <Image
          src={
            isNotification
              ? "/NotificationIconAvailable.svg"
              : "/NotificationIcon.svg"
          }
          alt="Placebo Logo"
          width={24}
          height={isNotification ? 27 : 24}
          priority
        />

        <div className={styles.userProfile} ref={ref} onClick={togglePopup}>
          <p className={styles.username}>Eernst Nagan</p>
          <Image
            src="/Arrow.svg"
            alt="Placebo Logo"
            width={5.16}
            height={10}
            priority
          />
        </div>

        {isOpen && (
          <div className={styles.popup}>
            {/* Mini popup content */}
            <div className={styles.flexContainer}>
              <div className={styles.flexItems}>
                <Image
                  src="/UserIcon.svg"
                  alt="Placebo Logo"
                  width={10}
                  height={10}
                  priority
                  className="mr-1.5"
                />
                <p>User Profile</p>
              </div>

              <div className={styles.flexItems}>
                <Image
                  src="/MessagesIcon.svg"
                  alt="Placebo Logo"
                  width={10}
                  height={10}
                  priority
                  className="mr-1.5"
                />
                <p>Messages</p>
              </div>

              <div className={styles.flexItems}>
                <Image
                  src="/SettingsIcon.svg"
                  alt="Placebo Logo"
                  width={10}
                  height={10}
                  priority
                  className="mr-1.5"
                />
                <p>Settings</p>
              </div>

              <div className={styles.flexItems}>
                <Image
                  src="/PathwayIcon.svg"
                  alt="Placebo Logo"
                  width={12}
                  height={12}
                  priority
                  className="mr-1.5"
                />
                <p>Walkthrough</p>
              </div>

              <div className={styles.flexItems}>
                <Image
                  src="/ExitIcon.svg"
                  alt="Placebo Logo"
                  width={10}
                  height={10}
                  priority
                  className="mr-1.5"
                />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
