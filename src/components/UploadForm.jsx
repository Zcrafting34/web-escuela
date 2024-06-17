import React, { useState } from "react";
import { sendData } from "../services/ApiService";
import TeacherCard from "../components/home/TeacherCard";
import { Textarea } from "flowbite-react";

function UploadForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    areas: "",
    descripcionPerfil: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [teacherImagePreview, setTeacherImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === "fotoClase") {
          setImagePreview(reader.result);
        } else if (name === "fotoProfesor") {
          setTeacherImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("areas", formData.areas);
    data.append("descripcionPerfil", formData.descripcionPerfil);
    data.append("fotoProfesor", formData.fotoProfesor);
    data.append("fotoClase", formData.fotoClase);
    data.append("facebook", formData.facebook);
    data.append("twitter", formData.twitter);
    data.append("linkedin", formData.linkedin);
    await sendData(data);
    setFormData({
      nombre: "",
      areas: "",
      descripcionPerfil: "",
      facebook: "",
      twitter: "",
      linkedin: "",
    });
    setImagePreview(null);
    setTeacherImagePreview(null);
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 bg-indigo-400  w-96 h-full m-8 p-6 rounded-xl"
        >
          <input
            className="m-2 rounded-md p-1"
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            className="m-2 rounded-md p-1"
            type="text"
            placeholder="Areas"
            name="areas"
            value={formData.areas}
            onChange={handleChange}
          />
          <Textarea
            className="m-2 rounded-md p-1"
            type="text"
            placeholder="Descripcion del perfil"
            name="descripcionPerfil"
            value={formData.descripcionPerfil}
            onChange={handleChange}
            color={"black"}
          />
          <label className="text-white font-extrabold" htmlFor="">
            Foto del profesor
          </label>
          <input
            type="file"
            placeholder="Foto Profesor"
            name="fotoProfesor"
            onChange={handleFileChange}
          />
          <label className="text-white font-extrabold" htmlFor="">
            Foto de referencia
          </label>
          <input
            type="file"
            placeholder="Foto Clase"
            name="fotoClase"
            onChange={handleFileChange}
          />
          <input
            className="m-2 rounded-md p-1"
            type="text"
            placeholder="Facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
          />
          <input
            className="m-2 rounded-md p-1"
            type="text"
            placeholder="Twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
          <input
            className="m-2 rounded-md p-1"
            type="text"
            placeholder="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />

          <button
            className="bg-blue-900 rounded-lg w-24 text-white hover:scale-110"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <div>
        <TeacherCard
          teacher={formData}
          imagePreview={imagePreview}
          teacherImagePreview={teacherImagePreview}
        />
      </div>
    </div>
  );
}

export default UploadForm;
