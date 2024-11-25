import { Link } from "react-router-dom";

function Elemento({ elemento, tipo}) {
  return (
    <Link 
      to={`/${tipo}/${elemento.id}`} 
      className="bg-white rounded-md border-orange-300 border
      hover:shadow-lg hover:scale-105  transition-shadow duration-300 
      flex items-center justify-around flex-col
      p-5 text-gray-700"
    >
      <img
        src={elemento.pathImg} 
        alt={elemento.nombre} 
        loading="lazy"
        className="w-44 h-auto m-1" 
        />
      <h3 className="text-lg font-bold m-1 text-center">
        {elemento.nombre}
      </h3>

      <p className="text-base m-1 text-center">
        {elemento.descripcion}
      </p>
    
      { elemento.precio &&
        <h3 className="text-3xl text-black font-semibold m-1 text-center">
          {`$${elemento.precio}`}
        </h3>
      }

      
      
    </Link>
  );
}

export default Elemento;