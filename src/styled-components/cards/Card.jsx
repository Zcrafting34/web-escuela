import React from 'react';

function Card({ titulo, descripcion, imagen, ruta, button, saberMasLink }) {
  return (
    <div id="Card" className="Card mx-10 my-5 max-w-sm border rounded-xl shadow-2xl hover:scale-110 transition-all ease-in-out">
      <div>
        <img className="rounded-t-lg" src={imagen} alt={titulo} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {titulo}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800 text-start">
          {descripcion}
        </p>
        {button ? (
          <a href={saberMasLink}>
            <button
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Saber más
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
