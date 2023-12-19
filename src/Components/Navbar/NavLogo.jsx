import React from 'react';
import logo from '../../assets/logo/WhiteBG_NavLogo.png'
import styles from './NavLogo.module.css'


const NavLogo = () => {
  return (
    <a href="">
      <img src={logo} alt="brandLogo" className={styles.logo}/>
    </a>
  )
}

export default NavLogo