import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
/* import Separacion from "../components/Separacion"; */
import { API_ROUTES, fetchData } from '../src_config_api';

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductoData = async () => {
      try {
        const productoData = await fetchData(API_ROUTES.producto(id));
        setProducto(productoData);

        const fabricantesData = await fetchData(API_ROUTES.productoFabricantes(id));
        setFabricantes(fabricantesData.Fabricantes);

        const componentesData = await fetchData(API_ROUTES.productoComponentes(id));
        setComponentes(componentesData.Componentes);


        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductoData();
  }, [id]);


  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>No se encontró el producto</p>;

  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={`/${producto.pathImg}`} alt={producto.nombre} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{producto.nombre}</h1>
          <p className="text-gray-600 mb-4">{producto.descripcion}</p>
          <p className="text-2xl font-semibold mb-4">${producto.precio.toFixed(2)}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Añadir al carrito
          </button>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Componentes</h2>
            <ul className="list-disc list-inside">
              {componentes.map((componente) => (
                <li key={componente.id}>
                  <Link to={`/componente/${componente.id}`} className="text-blue-600 hover:underline">
                    {componente.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Fabricantes</h2>
            <ul className="list-disc list-inside">
              {fabricantes.map((fabricante) => (
                <li key={fabricante.id}>
                  <Link to={`/fabricante/${fabricante.id}`} className="text-blue-600 hover:underline">
                    {fabricante.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Detalle;
