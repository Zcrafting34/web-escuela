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
  console.log(ventanaVisible);

  return (
    <section className="pt-2 mb-10 h-5/6 grid grid-cols-2 bg-white">
      <div className="my-32">
        <h3 className='mx-6 pt-2 py-8 px-5 class=" text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl md:mt-0 lg:text-5xl'>
          Contamos con grandes instalaciones
        </h3>
        <div className="m-6 ">
          <SliderImg
            images={[
              "https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/308075992_583034283611376_5977740656521040246_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YwBx6_JQ018Q7kNvgFAbiJX&_nc_ht=scontent.fmex31-1.fna&oh=00_AfCadSxnWdw55uk6rRd56h28bdR5rl4xCAECUL2R9pw7JA&oe=6634A69F",
              "https://scontent.fmex27-1.fna.fbcdn.net/v/t1.6435-9/130766826_3666290833434872_2063399993878866751_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CSxHgTtbYTUQ7kNvgE0BKfW&_nc_ht=scontent.fmex27-1.fna&oh=00_AfA3QU6PPgANzcJ_dbnRTihVnUVgWeVPxDa_y_E2TA7vEg&oe=665F30A6",
              "https://scontent.fmex36-1.fna.fbcdn.net/v/t1.6435-9/45093863_2055184054545566_7866681091698982912_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PXlGie2DoPQQ7kNvgHX7f2O&_nc_ht=scontent.fmex36-1.fna&oh=00_AfDsufvGa2HigAPFTahrhrBMnUXrNTPdJONQAVApLQZNeg&oe=665F4518",
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className='pt-20 py-20 px-10 class=" mt-0 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl md:mt-0 lg:text-5xl dark:text-dark'>
          ¿Quieres más detalles?
        </h3>
        <button
        className="text-white font-extrabold text-3xl bg-sky-400 p-3 rounded-lg shadow-lg hover:shadow-xl hover:transition-transform hover:scale-105"
        onClick={handleAbrirVentana}
        >
          Agenda una cita
        </button>
        <Email mostrar={ventanaVisible} cerrarVentana={cerrarVentana}/>
      </div>
    </section>
  );
}

export default QuienesSomos;
