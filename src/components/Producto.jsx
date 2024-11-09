import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Producto({ product }) {
  return (
    <div className="producto">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <Link to={`/productos/${product.id}`}>Ver detalles</Link>
    </div>
  );
}
Producto.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Producto;
