import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Cards.module.css";
import image from "../../assets/images/cardImage.webp";

const Cards = () => {
  const cardImage = {
    width: `250px`,
    height: `250px`,
    borderRadius: `12px`,
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.cardFlex}>
      <Link to='/details'>
      <div className={styles.cardBlock}>
        <div style={cardImage} className={styles.cardImage}></div>
        <div className={styles.cardDetails}>
          <div className={styles.firstLine}>
            <p className={styles.mainText}>Har Ki Dun Trek</p>
            <p className={styles.subText}>5N/6D</p>
          </div>
          <p className={styles.subText}>Random Name</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Cards;
