"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./imageanimation.module.css";

const images: string[] = [
  "/imgSlider1.svg",
  // "/imgSlider2.svg",
  "/imgSlider3.svg",
  "/imgSlider4.svg",
  // "/Onboarding2.png",
];

const overlayText: string[] = [
  "Get your meds on time, every time.",
  "Compare prices in real time on your device",
  "Place orders and have them delivered to you...",
  "...or pick them up yourself. Whichever works!",
];

const ImageAnimation = () => {
  return (
    <div className={styles.container}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        transitionTime={1000}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slideContainer}>
            <div className={styles.overlay}>
              <h2 className={styles.overlayText}>{overlayText[index]}</h2>
            </div>

            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageAnimation;
