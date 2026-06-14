import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Sectiontwo.scss";

const Sectiontwo = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    { content: t("sectiontwo.slide1") },
    { content: t("sectiontwo.slide2") },
    { content: t("sectiontwo.slide3") },
    { content: t("sectiontwo.slide4") },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="sectiontwo-container">
      <h2>{t("sectiontwo.heading")}</h2>
      <div className="custom-slider">
        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slider-slide">
                <h3>{slide.content}</h3>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="slider-btn slider-btn-next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
