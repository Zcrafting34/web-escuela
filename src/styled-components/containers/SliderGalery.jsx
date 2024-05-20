// SliderGalery.js
import React from "react";
import Slider from "react-slick";
import { ItemGalery } from "../../components/home/Galery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderGalery({ items }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1500, 
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{width:"95vw", margin:"2vw"}}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <ItemGalery key={index} img={item.img} texto={item.texto} />
        ))}
      </Slider>
    </div>
  );
}
