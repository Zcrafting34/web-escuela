import React from 'react';
import CarrerasP from "../../../styled-components/cards/CarrerasP";
import Card from "../../../styled-components/cards/Card"

function Header() {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-4 md:mx-20">
        <Card
          titulo={"Enfermeria General"}
          descripcion={"Aquí va una descripción de la carrera"}
          imagen={
            "https://img.freepik.com/foto-gratis/enfermeras-tiro-medio-mascarillas_23-2149484056.jpg?t=st=1713125832~exp=1713129432~hmac=3947883d2961c6183e60d2d57e3cead5c487999cf7c1f0cadfd0135aa83f31a0&w=740"
          }
          button={true}
          href={"#enfermeria"}
        />
        <Card
          titulo={"Informatica"}
          descripcion={"Aquí va una descripción de la carrera"}
          imagen={
            "https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010138.jpg?t=st=1713126171~exp=1713129771~hmac=c5267d7a9395fe7ee0573d5fd43cb38afc6d3ac1bc3a9cfe22691d53d7c4e15d&w=740"
          }
          button={true}
          href={"#informatica"}
        />
        <Card
          titulo={"Maquinas y herramientas"}
          descripcion={"Aquí va una descripción de la carrera"}
          imagen={
            "https://img.freepik.com/fotos-premium/joven-trabajador-fabrica-que-usa-tableta-experta-edificio-taller_31965-38244.jpg?w=740"
          }
          button={true}
          href={"#maquinas"}
        />
        <Card
          titulo={"Puericultura"}
          descripcion={"Aquí va una descripción de la carrera"}
          imagen={
            "https://as2.ftcdn.net/v2/jpg/04/51/66/43/1000_F_451664319_TVp2DOZAjjfAQUA7zSz35B4FboL7BRVl.jpg"
          }
          button={true}
          href={"#puericultura"}
        />
        <Card
          titulo={"Mercadotecnia"}
          descripcion={"Aquí va una descripción de la carrera"}
          imagen={
            "https://img.freepik.com/foto-gratis/estrategia-finanzas-empresa-grafico-analisis-plan-reunion-empresarios_74952-1400.jpg?t=st=1713126361~exp=1713129961~hmac=8d77eee7deb829d9ddf627bec868c0ed9a1a6f34ffa99d5332846bf50b27d046&w=900"
          }
          button={true}
          href={"#mercadotecnia"}
        />
        <Card
          titulo={"Contabilidad"}
          descripcion={"Aquí va una descripción de la carrera"}
          imagen={
            "https://img.freepik.com/foto-gratis/primer-plano-mujer-negocios-ocupada_1098-1687.jpg?t=st=1713126400~exp=1713130000~hmac=e0c4bb1e00fd0b34fbeba506f89e58ad5509ce67d9d9e7a0fb587944ecaeca73&w=740"
          }
          button={true}
          href={"#contabilidad"}
        />
      </div>
    </main>
  );
}

export default Header;
