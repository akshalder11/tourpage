import React, { useState } from "react";
import menu from "../../assets/icons/menu.svg";
import menuCollapse from "../../assets/icons/menuCollapse.svg";
import styles from "./MenuHandler.module.css";

const MenuHandler = ({menuIcon, setMenuIcon}) => {

  const menuToggle = () => {
    setMenuIcon(!menuIcon);
  };

  return (
      <div className={styles.menuBox}>
        <img
          src={menuIcon ? menu : menuCollapse}
          alt="menuIcon"
          className={styles.icon}
          onClick={menuToggle}
        />
      </div>
  );
};

export default MenuHandler;
