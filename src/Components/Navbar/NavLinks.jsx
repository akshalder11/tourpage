import React from "react";
import NavRightSec from "./NavRightSec";
import styles from "./NavLinks.module.css";
import { navData } from "../../assets/data/navbarData";

const NavLinks = ({ menuIcon }) => {
  return (
    <div
      className={menuIcon ? styles.linksContainer : styles.linksContainerActive}
    >
      {navData.map((val, index) => {
        return (
          <a href="" className={styles.links} key={index}>
            {val.title}
          </a>
        );
      })}
      <NavRightSec />
    </div>
  );
};

export default NavLinks;
