import Layout from "../hooks/Layouts/Layout";
import { ButtonBlue, ButtonsPurple } from "../styled-components/Buttons/Button";
import Carreras from "../components/home/Carreras";
import Docentes from "../components/home/Docentes";
import QuienesSomos from "../components/home/QuienesSomos";
import SliderImg from "../styled-components/containers/SliderImg";

function Home() {
  return (
    <Layout>
      <header className="pt-0">
        <div className="w-full bg-cover bg-center mt-16 grid grid-cols-1 sm:grid-cols-2">
          <div className="mx-6 sm:mx-24 max-w-full h-auto sm:px-6 lg:py-16 lg:px-8">
            <h1 className="mt-10 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-dark">
              CBT2 Ing Juan Celada
            </h1>
            <h2 className="mt-4 md:mt-10 mx-0 text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-dark">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Formando
              </span>
              Profesionales.
            </h2>
            <div className="mt-4 md:mt-10">
              <ButtonBlue name={"Carreras"} link={"/carreras"} />
              <span className="mx-2 md:mx-4"></span>
              <ButtonsPurple name={"Quienes somos?"} />
            </div>
          </div>
          <div className="hidden sm:block w-full">
            <img
              className="w-full h-full"
              src="https://i.imgur.com/UiP0jYZ.png"
              alt=""
            />
          </div>
        </div>
      </header>

      <main className="mt-2 sm:mt-0">
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="mx-6 md:mx-20 text-4xl font-extrabold text-gray-900 dark:text-dark md:text-6xl lg:text-6xl">
              Eventos recientes
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="md:hidden">
              {/* Este div solo se mostrará en dispositivos móviles */}
              <SliderImg
                images={[
                  "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
                  "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
                  "https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ-1200-80.jpg",
                  "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/cyberpunk-2077.jpg"
                ]}
              />
            </div>
            <div className="hidden md:flex md:flex-col md:justify-center md:items-center items-center justify-center w-full h-full ">
              {/* Este div solo se mostrará en dispositivos de escritorio */}
              <SliderImg images={["https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
                "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
                "https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ-1200-80.jpg",
                "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/cyberpunk-2077.jpg"
                
              ]} />
            </div>
          </div>
        </section>
        <section>
          <Carreras />
        </section>

        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10">
            <div className="w-full h-64 md:w-96 md:h-96 flex justify-center items-center">
              <div className="w-full h-full bg-[url('https://imgur.com/6BrvbXJ')] bg-no-repeat bg-center bg-cover"></div>
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
