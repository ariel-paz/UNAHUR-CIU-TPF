import { Link } from "react-router-dom";
import SectionContainer from "./SectionContainer";


function Header() {
  return (
    <header className="w-full p-3 border-b mb-5 border-orange-500">
      <SectionContainer className="flex justify-between ">
        <img src="/images/logo.png" alt="Logo de TechMakers" />
        <nav className="flex gap-16 my-auto text-2xl font-normal text-gray-600">
          <Link to="/" className="hover:text-orange-500">Inicio</Link>
          <Link to="/catalogo " className="hover:text-orange-500">Catálogo</Link>
          <Link to="/fabricantes" className="hover:text-orange-500">Fabricantes</Link>
        </nav>
        <button>
          <img src="/images/carrito.jpg" alt="Carrito de compras" />
        </button>
      </SectionContainer>
    </header>
  );
}

export default Header;
