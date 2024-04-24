import React from "react";
import Link from "next/link";
import styles from "./authswitch.module.css";

const AuthSwitch = (props: {
  href: string;
  mainText: string;
  linkText: string;
}) => {
  return (
    <div>
      <div className={styles.link}>
        {props.mainText}{" "}
        <Link href={props.href} className={styles.login}>
          {props.linkText}
        </Link>
      </div>
    </div>
  );
};

export default AuthSwitch;
