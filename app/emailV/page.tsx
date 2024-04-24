"use client";
import React, { useEffect, useState } from "react";
import styles from "./emailv.module.css";
import Image from "next/image";
import VerificationInput from "react-verification-input";
import AuthSwitch from "../components/AuthSwitch/AuthSwitch";
import Popup from "../components/Popup/Popup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { useRouter } from "next/navigation";

interface Country {
  value: string;
  label: string;
}

const countries: Country[] = [
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+91", label: "+91" },
  { value: "+234", label: "+234" },
  // Add more countries as needed
];

interface PhoneNumberValues {
  countryCode: string;
  phoneNumber: string;
}

const validationSchema = Yup.object({
  countryCode: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required"),
});

const Page = () => {
  const [complete, setIsComplete] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [maxAttempt, setMaxAttempt] = useState<boolean>(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false);
  const [timer, setTimer] = useState(45);

  // let timer: number = 45;
  const router = useRouter();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Start the timer countdown
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Clean up the interval when unmounting or timer reaches 0
    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleSubmit = (values: PhoneNumberValues) => {
    console.log(values);
  };

  const handleOutsideClick = () => {
    setShowPopup(false);
    //if isVerified, navigate to login
    router.push("/login");
  };

  const handleValidate = () => {
    setShowPopup(true);
    if (timer === 0) {
      setIsVerified(false);
    } else {
      //isVerified is dependent on the API; can be true or false
      setIsVerified(true);
    }
  };

  const handleResend = () => {
    setTimer(45);
    setIsVerified(true);
    setMaxAttempt(false);
  };

  const handlePhoneNumber = () => {
    setIsPhoneNumber(true);
  };

  //if 10 minutes elapses, reset verified, timer and maxAttempt;

  return (
    <div className={styles.containerr}>
      <Image
        src="/verticalPlacebo.svg"
        alt="Placebo Logo"
        width={400}
        height={1024}
        priority
      />

      <div className={styles.wrapper}>
        <div className={styles.firstDiv}>
          <Image
            src="/placebo-logo.svg"
            alt="Placebo Logo"
            width={142}
            height={30}
            priority
            className={styles.logo}
          />

          <p className={styles.lgText}>User Verification</p>

          <p className={styles.smallText}>
            {isPhoneNumber
              ? "Enter new phone number"
              : "Enter the code sent to your phone number"}
          </p>
        </div>

        {!isPhoneNumber && (
          <div className={styles.secDiv}>
            <VerificationInput
              classNames={{
                container: styles.container,
                character: styles.character,
                characterInactive: styles.characterInactive,
                characterSelected: styles.characterSelected,
                characterFilled: styles.characterFilled,
              }}
              length={5}
              placeholder=""
              onComplete={(inputValue: string) => {
                // Handle the completed input value
                setIsComplete(true);
                console.log("Verification input completed:", inputValue);
              }}
            />

            {timer !== 0 && !maxAttempt && isVerified && (
              <p className={styles.mid}>
                Resend link in <span className={styles.bold}>{timer}</span>{" "}
                seconds
              </p>
            )}

            {(timer === 0 || !isVerified) && !maxAttempt && (
              <div className={styles.resendContainer}>
                <button className={styles.resend} onClick={handleResend}>
                  Resend link
                </button>
                <p className={styles.mid}>
                  You have <span className={styles.bold}>4</span> more attempts
                </p>
              </div>
            )}

            {maxAttempt && (
              <div>
                <p className={styles.maxRed}>
                  Maximum Number of Attempts Reached
                </p>
                <p className={styles.mid}>
                  Try again in{" "}
                  <span className={styles.bold}>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                  </span>{" "}
                  minutes
                </p>
              </div>
            )}

            <button className={styles.changeNumber} onClick={handlePhoneNumber}>
              Change phone number
            </button>

            {complete && (
              <button onClick={handleValidate} className={styles.btn}>
                Validate
              </button>
            )}

            {isVerified && showPopup && (
              <Popup
                handleOutsideClick={handleOutsideClick}
                imageParam="/check.svg"
                text="Verification Complete"
                text2=""
              />
            )}

            {!isVerified && showPopup && (
              // if maxAttempt is true i.e num of attempts left = 0
              <Popup
                handleOutsideClick={handleOutsideClick}
                imageParam={
                  maxAttempt ? "/verifyFailedMax.svg" : "/verifyFailed.svg"
                }
                text="Verification Failed"
                text2={
                  maxAttempt
                    ? "Maximum Number of Attempts"
                    : "Enter the correct code"
                }
              />
            )}
          </div>
        )}
        {isPhoneNumber && (
          <div className={styles.secDiv}>
            <Formik
              initialValues={{
                countryCode: "",
                phoneNumber: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values, isValid }) => (
                <Form>
                  <div className={styles.phoneNumberDiv}>
                    <div className={styles.flexPhone}>
                      <div>
                        <Image
                          src="/Flag.svg"
                          alt="Country Flag"
                          width={30}
                          height={21}
                          priority
                        />
                      </div>

                      <div className={styles.ccode}>
                        <Select
                          id="countryCode"
                          name="countryCode"
                          options={countries}
                          value={countries.find(
                            (country) => country.value === values.countryCode
                          )}
                          onChange={(newValue: Country | null) =>
                            setFieldValue("countryCode", newValue?.value || "")
                          }
                          placeholder="+234"
                          className={`${styles.inputGeneral} ${styles.extra}`}
                          styles={{
                            control: (provided: any) => ({
                              ...provided,
                              border: "none",
                              boxShadow: "none",
                            }),
                          }}
                        />
                        <div className={styles.errorMessageCcode}>
                          <ErrorMessage name="countryCode" />
                        </div>
                      </div>

                      <div className={styles.number}>
                        <Field
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          className={styles.inputGeneral}
                          placeholder="906-010-9985"
                        />
                        <div className={styles.errorMessagePhone}>
                          <ErrorMessage name="phoneNumber" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {isValid && (
                    <div className={styles.btnContainer}>
                      {/* Onclick this button, we should return to verification */}
                      <button
                        type="submit"
                        className={`${styles.btn} ${styles.mgbottom}`}
                      >
                        Change Phone Number
                      </button>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        )}

        <AuthSwitch
          mainText="Already Registered?"
          href="/login"
          linkText="Log In"
        />
      </div>
    </div>
  );
};

export default Page;
