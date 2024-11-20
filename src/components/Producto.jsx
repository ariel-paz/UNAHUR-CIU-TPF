import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { API_ROUTES, fetchData } from '../src_config_api';


function Producto({ product }) {

  const [productoFabricante, setProductoFabricante] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(API_ROUTES.productoFabricantes(product.id))
    .then(data => {
      setProductoFabricante(data);
      setLoading(false)
    })
    .catch(err => {
      console.error(err)
    });
  }, [])

  return (
    <Link 
      to={`/productos/${productoFabricante.id}`} 
      className="bg-white rounded-md border-orange-300 border
      hover:shadow-lg transition-shadow duration-300 
      flex items-center justify-around flex-col
      p-5"
    >
      <img
        src={`/images/productos/${productoFabricante.pathImg}`} 
        alt={productoFabricante.nombre} 
        className="w-44 h-auto m-1" 
      />
      <h3 className="text-lg font-bold m-1 text-center">
        {productoFabricante.nombre}
      </h3>

      <div className="flex m-1">
        { productoFabricante &&
          productoFabricante.Fabricantes?.map((fabricante, index) => (
            <React.Fragment key={fabricante.id}>
              <h2 className="text-gray-500 p-1">{fabricante.nombre}</h2>
              {index < productoFabricante.Fabricantes.length - 1 && (
                <span className="text-gray-500 p-1">.</span>
              )}
            </React.Fragment>
          ))
        }
      </div>

      <h3 className="text-lg font-bold">
        {`$${productoFabricante.precio}.99`}
      </h3>

      <button 
        className="bg-orange-500  
        text-white font-semibold 
        py-2 px-6 m-1
        rounded-md shadow-lg
        hover:bg-orange-600 transition duration-200
        flex items-center justify-between"
      >
        <img src="/images/carritoBtn.png" alt="Carrito de compras" className="mr-2" />
        Añadir al carrito
      </button>
    </Link>
  );
}

// Producto.propTypes = {
//   product: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   }).isRequired,
// };

export default Producto;
