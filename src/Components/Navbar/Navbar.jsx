import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MenuHandler from "./MenuHandler";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // const [menuToggle, setMenuToggle] = useState();
  const [menuIcon, setMenuIcon] = useState(true);

  return (
    <div className={styles.navContainer}>
      <NavLogo />
      <MenuHandler menuIcon={menuIcon} setMenuIcon={setMenuIcon}/>
      <NavLinks menuIcon={menuIcon} />
    </div>
  );
};

export default Navbar;
