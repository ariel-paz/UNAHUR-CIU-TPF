import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col max-w-6xl mx-auto px-2 ">
      <div className="flex py-5 border-b border-gray-400 flex-col text-center gap-6 md:flex-row md:justify-between">
        <h2 className="text-3xl">Logo</h2>
        <nav className="flex gap-3 my-auto text-lg font-normal text-gray-500 mx-auto md:mx-0">
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/fabricantes">Fabricantes y Componentes</Link>
        </nav>
      </div>
      <div className="flex  text-gray-500 justify-between align-bottom my-5 flex-col gap-6 md:flex-row">
        <section className="text-center md:text-left">
          <h3>Equipo de Desarrollo</h3>
          <ul>
            <li>Alexis Chebeste</li>
            <li>Maximiliano Gomez</li>
            <li>Ariel Paz</li>
          </ul>
        </section>
        <p className="text-center my-auto">© LOGO - 2024 - Casi todos los derechos reservados </p>
      </div>
    </footer>
  );
}

export default Footer;
