import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ROUTES, fetchData } from '../src_config_api';
import Separacion from "../components/Separacion";
import { useCarrito } from "../components/useCarrito";
import DetalleItem from '../components/DetalleItem';
import ErrorComponent from '../components/ErrorComponent';
import { CircleMinus, CirclePlus } from 'lucide-react';

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const {agregarAlCarrito} = useCarrito()
  const fetchProductoData = useCallback(async () => {
    try {
      const productoData = await fetchData(API_ROUTES.producto(id));
      setProducto(productoData);

      const fabricantesData = await fetchData(API_ROUTES.productoFabricantes(id));
      setFabricantes(fabricantesData.Fabricantes);

      const componentesData = await fetchData(API_ROUTES.productoComponentes(id));
      setComponentes(componentesData.Componentes);


      setLoading(false);
    } catch {
      setError('Hubo un error al cargar los datos. Intente nuevamente más tarde.');
      setLoading(false);
    }
  }, [id]); 
  useEffect(() => {
    fetchProductoData();
  }, [fetchProductoData]);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto, cantidad);
  };

  const incrementarCantidad = () => setCantidad(prev => prev + 1);
  const decrementarCantidad = () => setCantidad(prev => prev > 1 ? prev - 1 : 1);

  

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <ErrorComponent mensaje={error} refetch={fetchProductoData} />;
  if (!producto) return <p>No se encontró el producto</p>;

  return (
    <DetalleItem item={producto} >
        <section id="componentes">
            <h2 className="text-2xl font-semibold mb-4">Componentes</h2>
            <Separacion />
            <ul className="list-disc list-inside">
              {componentes.map((componente) => (
                <li key={componente.id} className="mb-2">
                  <Link to={`/componentes/${componente.id}`} className="hover:underline">
                    {componente.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section id="fabricantes" className="mt-4">
            <h2 className="text-2xl font-semibold">Fabricantes</h2>
            <Separacion />
            <ul className="list-disc list-inside ">
              {fabricantes.map((fabricante) => (
                <li key={fabricante.id} className="mb-2">
                  <Link to={`/fabricantes/${fabricante.id}`} className=" hover:underline ">
                    {fabricante.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section id="compra" className="flex flex-col w-full mt-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-2xl font-semibold">${producto.precio.toFixed(2)}</p>
            <div className="flex items-center">
              <button onClick={decrementarCantidad} className="bg-gray-200 text-orange-500 px-3 py-1 rounded-l hover:text-orange-700"><CircleMinus /></button>
              <span className="bg-gray-100 text-gray-800 px-4 py-1">{cantidad}</span>
              <button onClick={incrementarCantidad} className="bg-gray-200 text-orange-500 px-3 py-1 rounded-r hover:text-orange-700"><CirclePlus /></button>
            </div>
          </div>
          <button onClick={handleAgregarAlCarrito} className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-lg" >
            Añadir al carrito
          </button>
        </section>
    </DetalleItem>
  );
}

export default Detalle;
