import "./style.css";
import SliderImg from "../../styled-components/containers/SliderImg";
import Email from "../../styled-components/forms/Email";
import { useState } from "react";

function QuienesSomos() {
  const [ventanaVisible, setVentanaVisible] = useState(false);

  const handleAbrirVentana = () => {
    setVentanaVisible(true);
  };

  const cerrarVentana = () => {
    setVentanaVisible(false);
  };

  return (
    <section className="pt-2 mb-10 h-full grid grid-cols-1 md:grid-cols-2 bg-white">
      <div className="md:my-32">
        <h3 className='mx-6 pt-2 py-8 px-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl md:mt-0 lg:text-5xl'>
          Contamos con grandes instalaciones
        </h3>
        <div className="m-6 ">
          <SliderImg
            images={[
              "https://scontent.fmex10-5.fna.fbcdn.net/v/t1.6435-9/130766826_3666290833434872_2063399993878866751_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gYP504O67OwQ7kNvgGPM2nY&_nc_ht=scontent.fmex10-5.fna&oh=00_AYAmCF5oCLO3d3sT2hJWrznA9kaYKmxJnlONKYmAKUeNag&oe=668EDEE6",
              "https://scontent.fmex10-4.fna.fbcdn.net/v/t1.6435-9/45101460_2050428605021111_9130608006050873344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GWMRZpPhK6sQ7kNvgH-cABj&_nc_ht=scontent.fmex10-4.fna&oh=00_AYCnh7SmFUJQwC_MrCgj6uH_cyQr3OvZXh6wDSWiwRAtQw&oe=668ED5DF",
              "https://scontent.fmex10-3.fna.fbcdn.net/v/t1.6435-9/35188982_1850985894965384_5535354087308001280_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gj2sqDd5oW0Q7kNvgEr7dBz&_nc_ht=scontent.fmex10-3.fna&oh=00_AYA-2xpyZd2NQyfxcCEYlV9VidJTuGhbjg0yINwWt4amhQ&oe=668EE06D",
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className='pt-10 md:pt-10 pb-10 px-10 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-5xl dark:text-dark'>
          ¿Quieres más detalles?
        </h3>
        <button
          className="text-white font-extrabold text-xl md:text-3xl bg-sky-400 p-3 rounded-lg shadow-lg hover:shadow-xl hover:transition-transform hover:scale-105"
          onClick={handleAbrirVentana}
        >
          Agenda una cita
        </button>
        <Email mostrar={ventanaVisible} cerrarVentana={cerrarVentana} />
      </div>
    </section>
  );
}

export default QuienesSomos;
