import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES, fetchData } from '../src_config_api';
import SectionContainer from '../components/SectionContainer';

function Catalogo() {
  
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchData(API_ROUTES.productos)
        .then(data => {
          setProductos(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <SectionContainer>
        <h1 className="text-4xl font-bold mb-6">Catálogo de Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <Link to={`/productos/${producto.id}`} key={producto.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={`/${producto.pathImg}`} alt={producto.nombre} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
                <p className="text-gray-600">${producto.precio.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
  );
}

export default Catalogo;