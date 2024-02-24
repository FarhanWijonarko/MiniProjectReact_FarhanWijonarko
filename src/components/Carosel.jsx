import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carosel.css';

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="slider" alt="" src="../public/img/Marvel.jpg" height={600} width={1000} />
        </div>
        <div>
          <img className="slider" src="../public/img/marvel2.png" alt="" height={600} width={1000} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
