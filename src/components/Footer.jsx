import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col max-w-6xl mx-auto px-2 ">
      <div className="flex justify-between py-5 border-b border-gray-400">
        <h2 className="text-3xl">Logo</h2>
        <nav className="flex gap-3 my-auto text-lg font-normal text-gray-500">
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/fabricantes">Fabricantes y Componentes</Link>
        </nav>
      </div>
      <div className="flex  text-gray-500 justify-between align-bottom my-5">
        <section >
          <h3>Equipo de Desarrollo</h3>
          <ul>
            <li>Alexis Chebeste</li>
            <li>Maximiliano Gomez</li>
            <li>Ariel Paz</li>
          </ul>
        </section>
        <p >© LOGO - 2024 - Casi todos los derechos reservados </p>
      </div>
    </footer>
  );
}

export default Footer;
