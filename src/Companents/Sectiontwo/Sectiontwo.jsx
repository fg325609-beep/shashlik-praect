import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sectiontwo.scss";

const Sectiontwo = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="sectiontwo-container">
      <h2>{ t( "hero.title" ) }</h2>

      <Slider { ...settings }>
        <div>
          <h3>{ t( "hero.tagline" ) }</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        <div>
          <h3>Slide 4</h3>
        </div>
      </Slider>
    </section>
  );
};

export default Sectiontwo;