import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Separacion from "../components/Separacion"

function Detalle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/productos/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <section className="flex mx-auto  gap-11 max-w-6xl p-8 border" >
      <img src={`/${product.pathImg}`} alt={`${product.nombre}`}  />
      <Separacion />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{product.nombre}</h2>
          <Separacion />
          <p className="text-xl">{product.descripcion}</p>
          
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Componentes</h3>
          <Separacion />
          <ul className="list-disc ml-8">
            <li className="text-xl">Sensor</li>
            <li className="text-xl">Pantalla</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Fabricantes</h3>
          <Separacion />
          <ul className="list-disc ml-8">
            <li className="text-xl">Sensor</li>
            <li className="text-xl">Pantalla</li>
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex w-80 mx-auto justify-between">
            <p className="text-2xl">${product.precio}</p>
            <div className="flex my-auto">
              <button>-</button>  
              <p>1</p>  
              <button>+</button>  
            </div>
          </div>
          <button className="mx-auto bg-zinc-800 box-border w-80 text-white py-2">Añadir al Carrito</button>
        </div>
        {/* <h3>Componentes:</h3>
        <ul>
          {product.components.map((component) => (
            <li key={component.id}>{component.name}</li>
          ))}
        </ul>
        <h3>Fabricantes:</h3>
        <ul>
          {product.manufacturers.map((manufacturer) => (
            <li key={manufacturer.id}>{manufacturer.name}</li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}

export default Detalle;
