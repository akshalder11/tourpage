import React from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import styles from "./CardSection.module.css";
import Slider from "react-slick";

const CardSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 0,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container maxWidth={"lg"}>
        <div className={styles.headSection}>
          <p className={styles.cardSectionHead}>Ongoing Events</p>
          <p className={styles.cardSectionDesc}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className={styles.cardContainer}>
          <Slider {...settings}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default CardSection;
