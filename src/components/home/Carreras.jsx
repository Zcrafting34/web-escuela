import React from "react";
import { ItemGalery } from "./Galery";

function Carreras() {
  return (
    <section className="py-2 bg-white dark:bg-white">
      <h3 className="text-start  text-4xl font-extrabold text-dark mb-8 mt-8">
        Conoce nuestra extraordinaria oferta académica
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ItemGalery
          img={
            "https://img.freepik.com/foto-gratis/enfermeras-tiro-medio-mascarillas_23-2149484056.jpg?t=st=1713125832~exp=1713129432~hmac=3947883d2961c6183e60d2d57e3cead5c487999cf7c1f0cadfd0135aa83f31a0&w=740"
          }
          texto={"Enfermería"}
        />
        <ItemGalery
          img={
            "https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010138.jpg?t=st=1713126171~exp=1713129771~hmac=c5267d7a9395fe7ee0573d5fd43cb38afc6d3ac1bc3a9cfe22691d53d7c4e15d&w=740"
          }
          texto={"Informática"}
        />
        <ItemGalery
          img={
            "https://img.freepik.com/fotos-premium/joven-trabajador-fabrica-que-usa-tableta-experta-edificio-taller_31965-38244.jpg?w=740"
          }
          texto={"Máquinas y herramientas"}
        />
        <ItemGalery
          img={
            "https://as2.ftcdn.net/v2/jpg/04/51/66/43/1000_F_451664319_TVp2DOZAjjfAQUA7zSz35B4FboL7BRVl.jpg"
          }
          texto={"Puericultura"}
        />
        <ItemGalery
          img={
            "https://img.freepik.com/foto-gratis/estrategia-finanzas-empresa-grafico-analisis-plan-reunion-empresarios_74952-1400.jpg?t=st=1713126361~exp=1713129961~hmac=8d77eee7deb829d9ddf627bec868c0ed9a1a6f34ffa99d5332846bf50b27d046&w=900"
          }
          texto={"Mercadotecnia"}
        />
        <ItemGalery
          img={
            "https://img.freepik.com/foto-gratis/primer-plano-mujer-negocios-ocupada_1098-1687.jpg?t=st=1713126400~exp=1713130000~hmac=e0c4bb1e00fd0b34fbeba506f89e58ad5509ce67d9d9e7a0fb587944ecaeca73&w=740"
          }
          texto={"Contabilidad"}
        />
      </div>
    </section>
  );
}

export default Carreras;
