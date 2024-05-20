import { useState } from "react";
import emailjs from "emailjs-com";

function Email({ mostrar, cerrarVentana }) {
  const [mensaje, setMensaje] = useState("");
  
    const enviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("a", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          setMensaje("¡Email enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          setMensaje(
            "Error al enviar el email. Por favor, inténtalo de nuevo."
          );
        }
      );
    cerrarVentana();
  };

  return mostrar ? (
    <div className="contenido p-5 mt-5 rounded-xl bg-cyan-500 z-50">
      <form onSubmit={enviarEmail} className="w-72">
        <div className="grid grid-cols-1">
            <input className="rounded-md mt-2 p-2" type="text" name="nombre" placeholder="Nombre" required />
            <input className="rounded-md mt-2 p-2"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={"cristian.gon.bek@gmail.com"}
          />
          <textarea className="mt-2 mb-4 h-64" name="mensaje" placeholder="Mensaje" required></textarea>
        </div>
        <button onClick={cerrarVentana} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cerrar</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Enviar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  ) : (
    <div></div>
  );
}
export default Email;
