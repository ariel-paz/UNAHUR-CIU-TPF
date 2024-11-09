import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <h3>Componentes:</h3>
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
      </ul>
    </div>
  );
}

export default Detalle;
