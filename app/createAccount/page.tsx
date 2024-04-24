import React from 'react'
import ImageAnimation from '../components/ImageAnimation/ImageAnimation'
import styles from './createaccount.module.css'
import Image from "next/image";
import SignupForm from '../components/SignupForm/SignupForm';


const page = () => {
  return (
    <div className={styles.container}>
        <ImageAnimation />

        <div className={styles.subContainer}>
          <div className={styles.inputFields}>
            <Image
              src="/placebo-logo.svg"
              alt="Placebo Logo"
              width={142}
              height={30}
              priority
              className={styles.logo}
            />

            <h1 className={styles.head}>Create an account</h1>

            <h2 className={styles.head2}>Basic Info</h2>

            <p className={styles.details}>Enter your name, email and other basic user information.</p>

            <SignupForm />
          </div>
        </div>
    </div>
  )
}

export default page