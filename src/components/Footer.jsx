import { Link } from "react-router-dom";
import SectionContainer from '../components/SectionContainer';

function Footer() {
  return (
    <footer>
      <div className="w-full p-3 border-b mb-5 border-orange-500">
        <SectionContainer className="flex justify-between">
        <img src="/images/logo.png" alt="Logo de TechMakers" width={45}/>
        <nav className="flex gap-10 my-auto text-xl font-normal text-gray-600">
          <Link to="/" className="hover:text-orange-500">Inicio</Link>
          <Link to="/catalogo " className="hover:text-orange-500">Catálogo</Link>
          <Link to="/fabricantes" className="hover:text-orange-500">Fabricantes</Link>
        </nav>
        </SectionContainer>
      </div>
      <SectionContainer className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <div className="mb-4 md:mb-0">
          <p>Desarrollado por el equipo:</p>
          <ul className="mt-1">
            <li>Alexis Chebeste</li>
            <li>Maximiliano Gomez</li>
            <li>Ariel Paz</li>
          </ul>
        </div>
        <p >© 2024 TechMakers.  Casi todos los derechos reservados </p>
      </SectionContainer>
    </footer>
  );
}

export default Footer;
