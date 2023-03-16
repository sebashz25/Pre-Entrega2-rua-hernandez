import { Cartwidget } from "../Cartwidget/Cartwidget";
import { Categorias } from "./Categorias/Categorias";
import { Secciones } from "./Secciones/Secciones";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";


import { useDarkModeContext } from "../../context/DarkModeContext";

export const Navbar = ({ nombre }) => {
  const {darkMode} = useDarkModeContext()
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode? "navbar-dark bg-primary": "bg-light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {nombre}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Secciones />
            <Categorias />
          </ul>
          <Cartwidget cantcarrito={10} />
          <BotonDarkMode/>
        </div>
      </div>
    </nav>
  );
};
