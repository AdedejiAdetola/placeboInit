// components/SignupForm.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import styles from "./signupform.module.css";
import AuthSwitch from "../AuthSwitch/AuthSwitch";
import { signUp } from "@/app/api/api";

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

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  countrycode: string;
  phonenumber: string;
  password: string;
}

const validationSchema = Yup.object({
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  countrycode: Yup.string().required("Required"),
  phonenumber: Yup.string()
    .matches(/^\d{8,15}$/, "Invalid phone number")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

const SignupForm: React.FC = () => {
  const router = useRouter();

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  useEffect(() => {
    // This effect will run only once when the component mounts
    setIsEmailFocused(false); // Set initial state to false
    setIsPasswordFocused(false);
  }, []);
  const handleSubmit = async (values: FormValues) => {
    console.log("clciked");
    const formData = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      phonenumber: values.countrycode + values.phonenumber,
      password: values.password,
    };

    try {
      const response = await signUp(formData);
      console.log("Sign up successful:", response);
      // Redirect or show success message
      router.push("/emailV");
    } catch (error) {
      console.error("Sign up error:", error);
      // Handle error, show error message
    }
  };

  const [isHide, setIsHide] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setIsHide((prevIsHide) => !prevIsHide); // Toggle the state
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          countrycode: "",
          phonenumber: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isValid, errors, touched }) => (
          <Form>
            <div className={styles.name}>
              <div className={styles.fname}>
                <label htmlFor="firstname" className={styles.title}>
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstname"
                  name="firstname"
                  className={styles.inputGeneral}
                  placeholder="Eerst"
                />
                {touched.firstname && errors.firstname && (
                  <div className={styles.errorStyle}>{errors.firstname}</div>
                )}
              </div>

              <div className={styles.lname}>
                <label htmlFor="lastname" className={styles.title}>
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastname"
                  name="lastname"
                  className={styles.inputGeneral}
                  placeholder="Nagaan"
                />
                {touched.lastname && errors.lastname && (
                  <div className={styles.errorStyle}>{errors.lastname}</div>
                )}
              </div>
            </div>

            <div className={styles.emailDiv}>
              <label htmlFor="email" className={styles.title}>
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={styles.inputGeneral}
                placeholder="eerst.nagaan233@gmail.com"
                onFocus={() => setIsEmailFocused(true)}
              />
              {isEmailFocused && errors.email ? (
                <>
                  <div className={styles.positionLoad}>
                    <Image
                      src="/loading.svg"
                      alt="Country Flag"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>

                  <div className={styles.errorStyle}>{errors.email}</div>
                </>
              ) : (
                isEmailFocused &&
                !errors.email &&
                values.email && (
                  <div className={styles.positionCheck}>
                    <Image
                      src="/check.svg"
                      alt="Country Flag"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                )
              )}
            </div>

            <div className={styles.phoneNumberDiv}>
              <label htmlFor="phonenumber" className={styles.title}>
                Phone Number
              </label>

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
                    id="countrycode"
                    name="countrycode"
                    options={countries}
                    value={countries.find(
                      (country) => country.value === values.countrycode
                    )}
                    onChange={(newValue: Country | null) =>
                      setFieldValue("countrycode", newValue?.value || "")
                    }
                    placeholder="+234"
                    className={`${styles.inputGeneral} ${styles.extra}`}
                    styles={{
                      control: (provided: any) => ({
                        ...provided,
                        border: "none",
                        boxShadow: "none",
                        position: "relative",
                        top: "5px",
                      }),
                    }}
                  />
                  <div className={styles.errorMessageCcode}>
                    {errors.countrycode && (
                      <div className={styles.errorStyle}>
                        {errors.countrycode}
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.number}>
                  <Field
                    type="text"
                    id="phonenumber"
                    name="phonenumber"
                    className={styles.inputGeneral}
                    placeholder="906-010-9985"
                  />
                  <div className={styles.errorMessagePhone}>
                    {touched.phonenumber && errors.phonenumber && (
                      <div className={styles.errorStyle}>
                        {errors.phonenumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.passwordDiv}>
              <label htmlFor="password" className={styles.title}>
                Password
              </label>
              <Field
                type={isHide ? "password" : "text"}
                id="password"
                name="password"
                className={styles.inputGeneral}
                onFocus={() => setIsPasswordFocused(true)}
              />

              <div
                className={styles.positionPassword}
                onClick={togglePasswordVisibility}
              >
                <Image
                  src={isHide ? "/Hide.svg" : "/show.svg"}
                  alt={isHide ? "Hide" : "Show"}
                  width={15}
                  height={15}
                  priority
                />
              </div>

              {isPasswordFocused && errors.password ? (
                <>
                  <div className={styles.positionLoad}>
                    <Image
                      src="/loading.svg"
                      alt="Country Flag"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>

                  <div className={styles.errorStyle}>{errors.password}</div>
                </>
              ) : (
                isPasswordFocused &&
                !errors.password &&
                values.password && (
                  <div className={styles.positionCheck}>
                    <Image
                      src="/check.svg"
                      alt="Country Flag"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                )
              )}
            </div>

            {values.email && isValid && (
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            )}
          </Form>
        )}
      </Formik>

      <AuthSwitch
        mainText="Already Registered?"
        href="/login"
        linkText="Log In"
      />
    </div>
  );
};

export default SignupForm;
