import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? "bg-slate-900 transition-all w-full py-3 my-3 fixed top-0 left-0 right-0 z-50 rounded-3xl"
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
              <img src="" alt="" />
            </NavLink>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <div className="sm:flex hidden">
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
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {"|||"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/carreras"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
          >
            Carreras
          </NavLink>
          <NavLink
            to="/eventos"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
          >
            Eventos
          </NavLink>
          <NavLink
            to="/micro_empresas"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
          >
            MicroEmpresas
          </NavLink>
          <NavLink
            to="/alumnos"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
          >
            Alumnos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Navbar);
