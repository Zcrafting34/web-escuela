import Slider from "../../styled-components/containers/Slider";
import { useEffect, useState } from 'react';  
import { fetchData } from '../../services/ApiService';
import "./style.css";
import SliderImg from "../../styled-components/containers/SliderImg";

function Docentes() {
  console.log('Renderizando componente');
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    console.log("Entra al useEffect");
    const loadData = async () => {
      try {
        console.log("Realizando fetch");
        const data = await fetchData();
        setProfileData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <section className="docentes pt-2 bg-white dark:bg-gradient-to-b from-cyan-800 via-gray-700 to-cyan-800">
      <h3 className='pt-10 pb-10 px-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-3xl lg:text-5xl'>
        Docentes altamente capacitados
      </h3>
      <div className="container mx-auto px-4">
        <Slider teachers={profileData}/>
      </div>
    </section>
  );
}

export default Docentes;
