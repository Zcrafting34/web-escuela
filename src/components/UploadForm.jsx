import { useState } from "react";
import { sendData } from "../services/ApiService";
import TeacherCard from "../components/home/TeacherCard";
import { Textarea } from "flowbite-react";

function UploadForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    areas: "",
    descripcionPerfil: "",
    fotoProfesor: null,
    fotoClase: null,
    facebook: "",
    twiter: "",
    linkedin: "",
  });

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
      // Verificar si el archivo seleccionado es una imagen
      if (file && file.type.startsWith("image/")) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: file,
        }));

        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Por favor, selecciona un archivo de imagen.");
      }
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
    data.append("twiter", formData.twiter);
    data.append("linkedin", formData.linkedin);

    try {
      const response = await sendData(data);
      if (response.status === 200) {
        alert("¡Datos enviados exitosamente!");
        setFormData({
          nombre: "",
          areas: "",
          descripcionPerfil: "",
          fotoProfesor: null,
          fotoClase: null,
          facebook: "",
          twiter: "",
          linkedin: "",
        });
        setPreviewUrl(null); // Limpiar la vista previa
      } else {
        alert("Error al enviar los datos. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar los datos. Por favor, inténtalo de nuevo.");
    }
  };

  // Estado para almacenar la URL de la vista previa de la imagen
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div className="grid grid-cols-2">
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 bg-indigo-400  w-96 h-full m-8 p-6 rounded-xl"
          enctype="multipart/form-data"
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
            placeholder="Áreas"
            name="areas"
            value={formData.areas}
            onChange={handleChange}
          />
          <Textarea
            className="m-2 rounded-md p-1"
            type="text"
            placeholder="Descripción del perfil"
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
            name="twiter"
            value={formData.twiter}
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
        <TeacherCard teacher={{ ...formData, previewUrl }} />
      </div>
    </div>
  );
}

export default UploadForm;
