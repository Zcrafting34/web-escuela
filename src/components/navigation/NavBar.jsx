import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={
        visible
          ? "bg-slate-900 transition-all w-full py-6 fixed top-0 left-0 right-0 z-50"
          : "bg-white w-full py-9 fixed top-0 left-0 right-0 z-50 hidden"
      }
    >
      <div className="sm:px-6">
        <div className="-ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-4">
          {/* Contenido del Navbar */}
          <div className="ml-4 mt-2">
            <NavLink
              to="/"
              className="text-lg font-medium leading-6 text-gray-900 inline-flex"
            >
              <h1
                className={
                  visible
                    ? "text-white"
                    : "text-black"
                }
              >
                CBT2 Ing Juan Celada
              </h1>
              <img src="" />
            </NavLink>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/carreras"
              className={
                visible
                  ? "text-white inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2"
                  : "text-black inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2 "
              }
            >
              Carreras
            </NavLink>
            <NavLink
              to="/eventos"
              className={
                visible
                  ? "text-white inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2"
                  : "text-black inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2"
              }
            >
              Eventos
            </NavLink>
            <NavLink
              to="/micro_empresas"
              className={
                visible
                  ? "text-white inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2"
                  : "text-black inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2"
              }
            >
              MicroEmpresas
            </NavLink>
            <NavLink
              to="/alumnos"
              className={
                visible
                  ? "text-white inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2"
                  : "text-black inline-flex text-lg font-medium leading-6 mx-8 hover:underline hover:underline-offset-2"
              }
            >
              Alumnos
            </NavLink>
            <NavLink to={"/iniciar_Sesion"}>
            <button
              type="button"
              className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Registrate
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Navbar);
