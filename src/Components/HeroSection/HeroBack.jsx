import React from "react";
import styles from "./HeroBack.module.css";
import Container from "@mui/material/Container";
import image from "../../assets/images/heroImage.webp";

const HeroBack = () => {
  const rightHero = {
    width: `370px`,
    height: `450px`,
    borderRadius: `40px`,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className={styles.heroBack}>
      <Container maxWidth={"lg"}>
        <div className={styles.heroContainer}>
          <div className={styles.leftHero}>
            <p className={styles.heroSubHead}>Experience</p>
            <p className={styles.heroHead}>Adventure</p>
            <p className={styles.heroDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <div className={styles.heroButton}>
              <button className={styles.primaryButton}>Book Now</button>
              <button className={styles.secondaryButton}>Explore More</button>
            </div>
          </div>
          <div style={rightHero} className={styles.rightHero}></div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBack;
