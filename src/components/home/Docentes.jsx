import Slider from "../../styled-components/containers/Slider";
import { useEffect, useState } from 'react';  
import { fetchData } from '../../services/ApiService';
import "./style.css";

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
    <section className="docentes pt-2 bg-white">
      <h3 className='pt-10 pb-10 px-10 text-5xl font-extrabold leading-none tracking-tight text-gray-900'>
        Docentes altamente capacitados
      </h3>
      <div className="container mx-auto px-4">
        <div className="max-w-screen-lg mx-auto">
          <Slider teachers={profileData}/>
        </div>
      </div>
    </section>
  );
}

export default Docentes;
