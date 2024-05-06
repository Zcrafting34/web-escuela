import React from "react";

const TeacherCard = ({ teacher }) => {

    const areas = teacher.areas.split(",");
  
  return (
    <div className="bg-white rounded-xl shadow-xl mx-6 my-4 w-80 h-auto">
      <div className="h-40 bg-gray-200 rounded-t-xl overflow-hidden">
        <img
          src={
            teacher
              ? teacher.fotoClase
              : "https://img.freepik.com/vector-gratis/fondo-degradado-lineas-azules-dinamicas_23-2148995756.jpg"
          }
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative -mt-16 px-4 pb-4 flex flex-col items-center">
        <img
          src={
            teacher
              ? teacher.fotoProfesor
              : "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
          }
          alt=""
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        <h3 className="text-xl font-semibold text-center mt-4">
          {teacher.nombre}
        </h3>
        <div className="mt-2 flex flex-wrap justify-center">
          {areas
            ? areas.map((area, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-2 py-1 text-sm font-semibold m-1 rounded"
                >
                  {area}
                </span>
              ))
            : "Hola"}
        </div>
        <p className="text-gray-600 text-center mt-2">
          {teacher
            ? teacher.descripcionPerfil
            : "Descripcion corta del perfil del docente"}
        </p>
        <div className="flex justify-center mt-4">
          {teacher ? (
            <a href={teacher.facebook} className="mx-2">
              <img
                src="../../../src/assets/icons/facebook.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
          ) : (
            <a></a>
          )}
          {teacher ? <a href={teacher.twitter} className="mx-2">
            <img
              src="https://cdn.icon-icons.com/icons2/910/PNG/512/twitter-1_icon-icons.com_71061.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>: <a></a>}

        </div>
      </div>
    </div>
  );
};

export default TeacherCard;