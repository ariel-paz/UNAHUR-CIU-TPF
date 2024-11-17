const API_BASE_URL = 'http://localhost:5000';

export const API_ROUTES = {
  productos: `${API_BASE_URL}/productos`,
  producto: (id) => `${API_BASE_URL}/productos/${id}`,
  productoFabricantes: (id) => `${API_BASE_URL}/productos/${id}/fabricantes`,
  productoComponentes: (id) => `${API_BASE_URL}/productos/${id}/componentes`,
  fabricantes: `${API_BASE_URL}/fabricantes`,
  componentes: `${API_BASE_URL}/componentes`,
};

export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};