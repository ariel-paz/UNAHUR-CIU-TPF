import { useEffect, useState } from 'react';
import Producto from './Producto';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/productos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <Producto key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
