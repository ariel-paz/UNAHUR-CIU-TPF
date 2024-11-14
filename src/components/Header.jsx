import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="flex my-0 mx-auto justify-between max-w-6xl pt-5 pb-4 px-2 mb-5  border-b border-black">
      <h1 className="text-3xl">Logo</h1>
      <nav className="flex gap-3 my-auto text-xl font-normal">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/fabricantes">Fabricantes y Componentes</Link>
      </nav>
      <button>
        <img src="/images/carrito.jpg" alt="Carrito de compras" width="35px"/>
      </button>
    </header>
  );
}

export default Header;
