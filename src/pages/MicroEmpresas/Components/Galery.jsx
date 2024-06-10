const Galery = ({datos}) => {


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Proyectos de los Estudiantes</h1>
      <div className="grid grid-cols-3 gap-4">
        {datos.map((dato, index) => (
          <div key={index} className="relative group">
            <img
              src={dato.imagen}
              alt={dato.titulo}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <h2 className="text-white text-lg">{dato.titulo}</h2>
              <p className="text-white">{dato.descripcion}</p>
              <a href={dato.saberMasLink} target="_blank" className="bg-blue-500 rounded-lg p-1 text-white m-5">Conoce mas </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
