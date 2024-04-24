import React from "react";
import styles from "./usercontainer.module.css";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const UserContainer = (props: { children: any; active: string }) => {
  return (
    <div className={styles.userContainer}>
      <NavBar />
      <div className={`${styles.flex} h-full`}>
        <SideBar active={props.active} />
        {props.children}
      </div>
    </div>
  );
};

export default UserContainer;
