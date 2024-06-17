import React, { useState, useEffect } from 'react';
import Layout from "../hooks/Layouts/Layout";
import { ButtonBlue, ButtonsPurple } from "../styled-components/Buttons/Button";
import Carreras from "../components/home/Carreras";
import Docentes from "../components/home/Docentes";
import QuienesSomos from "../components/home/QuienesSomos";
import SliderImg from "../styled-components/containers/SliderImg";
import { fetchEventos } from '../services/ApiService';

function Home() {
  const [dato, setDato] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEventos();
        setDato(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  const images = [
    "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
    "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
    "https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ-1200-80.jpg",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/cyberpunk-2077.jpg"
  ];

  const eventoImages = dato ? dato.map(item => item.imagen) : images;

  return (
    <Layout>
      <header className="pt-10">
        <div className="w-full bg-cover bg-center mt-16 md:grid md:grid-cols-2">
          <div className="mx-6 sm:mx-24 max-w-full h-auto sm:px-6 lg:py-16 lg:px-8 md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="mt-10 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-dark text-center md:text-left">
              CBT2 Ing Juan Celada
            </h1>
            <h2 className="mt-4 md:mt-10 mx-0 text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-dark text-center md:text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Formando
              </span>
              Profesionales.
            </h2>
            <div className="mt-4 md:mt-10 text-center md:text-left">
              <ButtonBlue name={"Carreras"} link={"/carreras"} />
              <span className="mx-2 md:mx-4"></span>
              <ButtonsPurple name={"Quienes somos?"} />
            </div>
          </div>
          <div className="hidden sm:block">
            <img
              className="w-full h-full"
              src="https://i.imgur.com/UiP0jYZ.png"
              alt=""
            />
          </div>
        </div>
      </header>

      <main className="mt-0 sm:mt-0">
        <section className="eventos md:grid md:grid-cols-2 my-10">
          <div className="flex flex-col justify-center">
            <h3 className="mx-6 md:mx-20 text-4xl font-extrabold text-gray-900 dark:text-dark md:text-6xl lg:text-6xl text-center md:text-left">
              Eventos recientes
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="md:hidden w-3/4">
              {/* Este div solo se mostrará en dispositivos móviles */}
              <SliderImg images={eventoImages} />
            </div>
            <div className="hidden md:flex md:w-3/4 md:justify-center md:items-center">
              {/* Este div solo se mostrará en dispositivos de escritorio */}
              <SliderImg images={eventoImages} />
            </div>
          </div>
        </section>
        <section>
          <Carreras />
        </section>

        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10">
            <div className="w-full h-64 md:w-96 md:h-96 flex justify-center items-center">
              <img src="https://i.imgur.com/fGs8Ufv.png" className="w-full h-full center cover" />
            </div>
            <div className="flex justify-center items-center p-4">
              <p className="text-justify mx-5 text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-dark">
                36 años de historia y crecimiento constante son nuestro motor
                para seguir trabajando con ímpetu, con esmero, con dedicación y
                total compromiso para entregar a la sociedad a los mejores
                profesionales técnicos del Estado de México.
              </p>
            </div>
          </div>
        </section>
        <Docentes />
        <QuienesSomos />
      </main>
    </Layout>
  );
}

export default Home;
