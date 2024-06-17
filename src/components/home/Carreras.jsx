import React from "react";
import { ItemGalery } from "./Galery";
import SliderGalery from '../../styled-components/containers/SliderGalery';

function Carreras() {
  const galleryItems = [
    {
      img: "https://img.freepik.com/foto-gratis/enfermeras-tiro-medio-mascarillas_23-2149484056.jpg?w=740",
      texto: "Enfermería",
    },
    {
      img: "https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010138.jpg?w=740",
      texto: "Informática",
    },
    {
      img: "https://img.freepik.com/fotos-premium/joven-trabajador-fabrica-que-usa-tableta-experta-edificio-taller_31965-38244.jpg?w=740",
      texto: "Máquinas y herramientas",
    },
    {
      img: "https://as2.ftcdn.net/v2/jpg/04/51/66/43/1000_F_451664319_TVp2DOZAjjfAQUA7zSz35B4FboL7BRVl.jpg",
      texto: "Puericultura",
    },
    {
      img: "https://img.freepik.com/foto-gratis/estrategia-finanzas-empresa-grafico-analisis-plan-reunion-empresarios_74952-1400.jpg?w=900",
      texto: "Mercadotecnia",
    },
    {
      img: "https://img.freepik.com/foto-gratis/primer-plano-mujer-negocios-ocupada_1098-1687.jpg?w=740",
      texto: "Contabilidad"
    }
  ];

  return (
    <section className="bg-white">
      <h3 className="text-start text-2xl md:text-4xl font-extrabold text-gray-900 ">
        Conoce nuestra extraordinaria oferta académica
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <ItemGalery key={index} img={item.img} texto={item.texto} />
        ))}
      </div>
    </section>
  );
}

export default Carreras;
