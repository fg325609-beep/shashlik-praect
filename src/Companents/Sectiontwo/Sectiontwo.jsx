import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sectiontwo.scss";

const Sectiontwo = () => {
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
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        <div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <h3>THIRD SLIDE</h3>
        </div>
        <div>
          <h3>FORTH SLIDE</h3>
        </div>
      </Slider>
    </section>
  );
};

export default Sectiontwo;