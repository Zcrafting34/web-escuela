import {useState, useEffect} from "react";

import NavBar from "../../components/navigation/NavBar";
import Card from './../../styled-components/cards/Card';
import CardSlider from '../../styled-components/containers/CardSlider';
import {fetchEventos} from '../../services/ApiService'
function Eventos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEventos();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);
  return (
    <body>
      <NavBar />
      <main className="m-6 mt-20">
        <div className="">
          <h3 className="text-start text-2xl md:text-4xl font-extrabold text-gray-900 ">
            Eventos
          </h3>
          <div className="w-full h-8 bg-blue-950"></div>
        </div>
        <section style={{width:"95vw"}}>
          {data ? <CardSlider cards={data}/> : <h2>Cargando Eventos</h2>}
        </section>
      </main>
    </body>
  );
}

export default Eventos;
