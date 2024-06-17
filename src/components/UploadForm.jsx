import { useState } from "react";
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

  const [file, setFile] = useState({
    fotoProfesor: null,
    fotoClase: null,
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
      setFile((prevState) => ({
        ...prevState,
        [name]: file,
      }));

      // Mostrar previsualización de la imagen
      if (name === "fotoProfesor") {
        setTeacherImagePreview(file);
      } else if (name === "fotoClase") {
        setImagePreview(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("areas", formData.areas);
    data.append("descripcionPerfil", formData.descripcionPerfil);
    data.append("fotoProfesor", file.fotoProfesor);
    data.append("fotoClase", file.fotoClase);
    data.append("facebook", formData.facebook);
    data.append("twitter", formData.twitter);
    data.append("linkedin", formData.linkedin);
    await sendData(data);
    // Limpiar el formulario después del envío exitoso
    setFormData({
      nombre: "",
      areas: "",
      descripcionPerfil: "",
      facebook: "",
      twitter: "",
      linkedin: "",
    });
    setFile({
      fotoProfesor: null,
      fotoClase: null,
    });
    setImagePreview(null);
    setTeacherImagePreview(null);
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 bg-indigo-400 w-96 h-full m-8 p-6 rounded-xl"
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
            placeholder="Linkedin"
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
          imagePreview={imagePreview ? URL.createObjectURL(imagePreview) : null}
          teacherImagePreview={
            teacherImagePreview
              ? URL.createObjectURL(teacherImagePreview)
              : null
          }
        />
      </div>
    </div>
  );
}

export default UploadForm;
