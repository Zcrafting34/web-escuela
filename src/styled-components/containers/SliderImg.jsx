import Slider from 'react-slick';

const SliderImg = ({ images, h }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="w-full mx-auto">
      <div className="w-full h-96 overflow-hidden rounded-xl">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImg;
