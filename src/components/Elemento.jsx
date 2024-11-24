import { Link } from "react-router-dom";

function Elemento({ nombre, descripcion, rutaImagen, id, tipo, precio }) {
  return (
    <Link 
      to={`/${tipo}/${id}`} 
      className="bg-white rounded-md border-orange-300 border
      hover:shadow-lg transition-shadow duration-300 
      flex items-center justify-around flex-col
      p-5"
    >
      {
        rutaImagen &&
        <img
        src={rutaImagen} 
        alt={nombre} 
        className="w-44 h-auto m-1" 
        />
      }
       {
        tipo != 'fabricantes' &&
        <h3 className="text-lg font-bold m-1 text-center">
        {nombre}
        </h3>
       }
      

      <p className="text-base m-1 text-center">
        {descripcion}
      </p>
    
      { precio &&
        <h3 className="text-lg font-bold m-1 text-center">
          {`$${precio}`}
        </h3>
      }

      <button 
        className="bg-orange-500  
        text-white font-semibold 
        py-2 px-6 m-1
        rounded-md shadow-lg
        hover:bg-orange-600 transition duration-200
        flex items-center justify-between"
      >
        Más información
      </button>
      
    </Link>
  );
}

export default Elemento;