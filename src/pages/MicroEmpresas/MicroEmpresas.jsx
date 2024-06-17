import Layout from "../../hooks/Layouts/Layout";
import Galery from "./Components/Galery";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { fetchEmpresa } from "../../services/ApiService";

const SliderImg = ({ images, h }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full mx-auto p-10">
      <div className="w-full h-full overflow-hidden rounded-xl">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

function MicroEmpresas() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEmpresa();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <Layout>
      <main className="pt-32">
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:order-2">
            <h2 className="mt-10 mx-10 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900 ">
              Micro Empresas
            </h2>
            <p
              className="m-10
            text-justify mx-5 text-xl md:text-2xl lg:text-2xl font-extrabold leading-tight tracking-tight text-gray-700"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              quae cupiditate deleniti eos laboriosam eum sed repellendus
              temporibus in, doloremque tempora animi consequuntur doloribus
              voluptatum repudiandae assumenda. Deleniti, nesciunt dolores.
            </p>
          </div>
          <div className="md:order-1">
            <SliderImg
              images={[
                "https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/432763830_919209873327147_1479269278591483108_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g0iLZiHC04QQ7kNvgHk1xc9&_nc_ht=scontent.fmex10-1.fna&oh=00_AYDZaAwlaftfGk8TWCx56kVcIrQZ1ecxMkvrKw33vDWwmg&oe=666D0486",
                "https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/432778305_919209859993815_1953053346040310405_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h1DBEgi_EJMQ7kNvgHPw8Vu&_nc_ht=scontent.fmex10-1.fna&oh=00_AYAShfAjdTkzFHQoAnEryVjfbeCxkzTjzELVo6KAyx5yoA&oe=666D0A19",
                "https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/432778305_919209859993815_1953053346040310405_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h1DBEgi_EJMQ7kNvgHPw8Vu&_nc_ht=scontent.fmex10-1.fna&oh=00_AYAShfAjdTkzFHQoAnEryVjfbeCxkzTjzELVo6KAyx5yoA&oe=666D0A19"
              ]}
            />
          </div>
        </section>
        {data ? <Galery datos={data} /> : "cargando datos"}
      </main>
    </Layout>
  );
}

export default MicroEmpresas;
