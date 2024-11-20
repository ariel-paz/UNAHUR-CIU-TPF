import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES, fetchData } from '../src_config_api';
import SectionContainer from '../components/SectionContainer';
import Producto from '../components/Producto';

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
            <Producto product={producto} key={producto.id}></Producto>
          ))}
        </div>
      </SectionContainer>
  );
}

export default Catalogo;