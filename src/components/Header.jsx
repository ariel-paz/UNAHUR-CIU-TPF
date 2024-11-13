import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="text-2xl">Empresa de Manufactura</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo de Productos</Link>
        <Link to="/fabricantes">Fabricantes y Componentes</Link>
      </nav>
    </header>
  );
}

export default Header;
