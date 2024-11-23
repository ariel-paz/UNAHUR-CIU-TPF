import { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import SectionContainer from "./SectionContainer";
import CarritoHeader from "./CarritoHeader";
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <header className="relative w-full border-b border-orange-500">
      <SectionContainer className="flex justify-between items-center">
        <Link to="/" >
          <img src="/images/logo.png" alt="Logo de TechMakers" width={48}/>
        </Link>
        <nav className=" hidden md:flex gap-16 my-auto text-2xl font-normal text-gray-600">
          <Link to="/" className="hover:text-orange-500">Inicio</Link>
          <Link to="/catalogo " className="hover:text-orange-500">Catálogo</Link>
          <Link to="/fabricantes" className="hover:text-orange-500">Fabricantes</Link>
        </nav>
        <div className="md:hidden relative" ref={menuRef}>
          <button
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {isMenuOpen && (
            <nav id="mobile-menu" className="absolute -left-20 mt-2 w-48 bg-gray-100 rounded-md shadow-lg py-1 z-50">
              <Link to="/" className="block px-4 py-2 text-center text-lg text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Inicio</Link>
              <Link to="/catalogo " className="block px-4 py-2 text-center  text-lg text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Catálogo</Link>
              <Link to="/fabricantes" className="block px-4 py-2 text-center  text-lg text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Fabricantes</Link>
            </nav>
          )}
        </div>
        <CarritoHeader />
        
      </SectionContainer>
    </header>
  );
}

export default Header;
