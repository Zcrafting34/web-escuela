import Layout from "../hooks/Layouts/Layout";
import { ButtonBlue, ButtonsPurple } from "../styled-components/Buttons/Button";
import Carreras from "../components/home/Carreras";
import Docentes from "../components/home/Docentes";
import QuienesSomos from "../components/home/QuienesSomos";
import SliderImg from "../styled-components/containers/SliderImg";

function Home() {
  return (
    <Layout>
      <header className="pt-9">
        <div className="w-full h-full bg-cover bg-center mt-16 bg-hero-pattern ">
          <div className="div1 mx-auto max-w-full max-h-full ml-14 py-18 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h1 className='class="mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl md:mt-0 lg:text-6xl dark:text-dark'>
              CBT2 Juan Celada
            </h1>
            <div className="separador"></div>
            <h2 class="mb-6 text-2md font-bold text-gray-900 dark:text-dark md:text-2xl lg:text-4xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Formando
              </span>{" "}
              Profesionales.
            </h2>
            <div className="mt-30 mb-20"></div>
            <div>
              <ButtonBlue name={"Carreras"} link={"/carreras"} />
              <ButtonsPurple name={"Quienes somos?"} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="grid grid-cols-2 ">
          <div className="flex flex-col justify-center">
            <h3 class="mb-6 mx-20 text-4md font-extrabold text-gray-900 dark:text-dark md:text-4xl lg:text-6xl">
              {" "}
              Eventos recientes <hr />
        
            </h3>
          </div>
          <div className="flex flex-col justify-center ">
            {" "}
            <SliderImg
              images={[
                "https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/439262923_935588625022605_1063857788820502697_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EamC3PyX-NYQ7kNvgFhFz5w&_nc_ht=scontent.fmex31-1.fna&oh=00_AfDKlS7JpNlifQXYhAJ4JqCI8fNStzZrAuaxGPqyfQhQVw&oe=663DC8EF",
                "https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/432127497_919729356608532_5452819635856117104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ubAeiJN2tR4Q7kNvgGqerli&_nc_ht=scontent.fmex27-1.fna&oh=00_AfDETGgi43RAEuo-Hb_40bKvOxzBqwLyfEGPJRYuriKnGQ&oe=663DDF89",
                "https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/434127611_919728853275249_3793479495879320223_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Sn8ww2sITQsQ7kNvgH6gcdg&_nc_ht=scontent.fmex36-1.fna&oh=00_AfD6bVo5K7KPMppAxH7dzBMvCwal0gc3Sr0J58iF3Rl7tQ&oe=663DDBA7",
              ]}
            />
          </div>
        </section>
        <Carreras />
        <section className="dark:bg-white">
          <div className="grid grid-cols-2 place-items-center">
            <div className="w-96 h-96 flex justify-center items-center">
              <div className="w-full h-full bg-[url('src/assets/img/36años.png')] dark:bg-[url('src/assets/img/36años.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>

            <div className="justify-items-center items-center mt-24 py-16">
              <p class="mt-0 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl md:mt-0 lg:text-4xl dark:text-dark ">
                36 años de historia crecimiento constante son nuestro motor para
                seguir trabajndo con ímpetud, con esmero, con dedicacion y total
                compromiso para entregar a la sociedad a los mejores
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
