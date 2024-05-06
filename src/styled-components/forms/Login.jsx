import { useState, useEffect } from "react";
import {authenticateUser} from '../../services/ApiService';
import { connect } from 'react-redux';
import { loginSuccess } from '../../redux/actions';

function Login({ loginSuccess }){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await authenticateUser(username, password);
      console.log("Login exitoso:", data);
      loginSuccess();
    } catch (error) {
      setError(error.message);
      console.error("Error de autenticación:", error.message);
    }
  };

  return (
    <section>
      <div class="text-center mt-24">
        <div class="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            class="w-12 h-12 text-blue-500"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 class="text-4xl tracking-tight">Iniciar sesion</h2>
      </div>
      <div class="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          class="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Usuario
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Contraseña
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p>{error}</p>}
            </div>
            <div class="w-full flex items-center justify-between px-3 mb-3 ">
              <label for="remember" class="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="mr-1 bg-white shadow"
                />
                <span class="text-sm text-gray-700 pt-1">Recordar usuario</span>
              </label>
              <div class="w-1/2 text-right">
                <a href="#" class="text-blue-500 text-sm tracking-tight">
                  Olvidaste la contraseña?
                </a>
              </div>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

const mapDispatchToProps = {
    loginSuccess
};


export default connect(null, mapDispatchToProps)(Login);
