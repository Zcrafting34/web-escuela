import React from "react";

export function ItemGalery({ img, texto }) {
  return (
    <div className="relative h-64 mx-2 my-2 dark:bg-gray-950 white:bg-gradient-to-r from-slate-900 to-slate-700 shadow-2xl rounded-xl overflow-hidden transition-transform duration-300 ease-in-out">
      <img
        src={img}
        alt="Descripción de la imagen"
        className="w-full h-48 object-cover"
      />
      <div className="px-4 py-2">
        <h3 className="text-lg font-extrabold text-white">{texto}</h3>
      </div>
    </div>
  );
}
