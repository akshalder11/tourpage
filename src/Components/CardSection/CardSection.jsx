import React from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import styles from "./CardSection.module.css";

const CardSection = () => {
  return (
    <div>
      <Container>
          <div className={styles.headSection}>
            <p className={styles.cardSectionHead}>Ongoing Events</p>
            <p className={styles.cardSectionDesc}>
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        <div className={styles.cardContainer}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </Container>
    </div>
  );
};

export default CardSection;
