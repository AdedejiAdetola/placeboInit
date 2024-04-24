"use client"
import React, { useState } from 'react'
import Image from "next/image"; 
import { useRouter } from 'next/navigation'
import styles from './loginInput.module.css'
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import AuthSwitch from '../components/AuthSwitch/AuthSwitch';
import Popup from '../components/Popup/Popup';

interface FormValues {
    userId: string;
    password: string;
}
  
const validationSchema = Yup.object({
    userId: Yup.string()
      .required('Required'),
    password: Yup.string()
      .required('Required'),
});

const Page = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = (values: FormValues) => {
        console.log(values);
        setShowPopup(true);
    };

    const handleOutsideClick = () => {
        setShowPopup(false);
        
        //if isVerified, navigate to login
        router.push('/dashboard');
    };


  return (
    <div className={styles.container}>
        <div>
            <Image
                src="/loginSideImage.svg"
                alt="Placebo Logo"
                width={1060}
                height={1038}
                priority
            />
        </div>
        
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

            <h1 className={styles.head}>Log In</h1>

            <h2 className={styles.head2}>Welcome Back!</h2>

            <p className={styles.details}>Pick up from where you left off, or start afresh.</p>

            <Formik
                initialValues={{
                userId: '',
                password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid }) => (
                    <Form>
                        <div className={styles.userId}>
                            <label htmlFor="userId" className={styles.title}>User ID</label>
                            <Field type="text" id="userId" name="userId" className={styles.inputGeneral} placeholder='eerst.nagaan233@gmail.com'/>
                            <ErrorMessage name="userId" />
                        </div>
            
            
                        <div className={styles.passwordDiv}>
                            <label htmlFor="password" className={styles.title}>Password</label>
                            <Field type="password" id="password" name="password" className={styles.inputGeneral} />
                            <ErrorMessage name="password" />
                        </div>        

                        <div className={styles.forgotContainer}>
                            <Link href='/' className={styles.forgot}>Forgot Credentials?</Link>
                        </div>
            
                        {isValid && (
                            <button type="submit" className={styles.btn}>Log In</button>
                        )}
                  </Form>
                )}
            </Formik>

            <AuthSwitch 
                mainText='New User?'
                href='/signup'
                linkText='Sign up'
            />

            {
                showPopup && (
                    <Popup 
                        handleOutsideClick={handleOutsideClick}
                        imageParam='/check.svg'
                        text="Success!"
                        text2=''
                    />
                )
            }

          </div>
        </div>
    </div>
  )
}

export default Page