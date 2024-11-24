import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { API_ROUTES, fetchData } from '../src_config_api';
import DetalleItem from '../components/DetalleItem';
import Separacion from '../components/Separacion';
import ErrorComponent from '../components/ErrorComponent';

function DetalleComponente() {
  const { id } = useParams();
  const [componente, setComponente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComponenteData = useCallback(async () => {
    try {
      const data = await fetchData(API_ROUTES.componente(id));
      setComponente(data);
      setLoading(false);
    } catch {
      setError('Hubo un error al cargar los componentes. Intente nuevamente más tarde.');
      setLoading(false);
    }
  }, [id]); ;

  useEffect(() => {
    fetchComponenteData();
  }, [fetchComponenteData]);

  if (loading) return <p>Cargando detalles del componente...</p>;
  if (error) return <ErrorComponent mensaje={error} />;
  if (!componente) return <p>No se encontró el componente</p>;

  return (
        <DetalleItem item={componente}>
          <h2 className="text-2xl font-semibold mb-2">Detalles técnicos</h2>
          <Separacion />
          <p>Este componente es utilizado en varios productos de nuestra tienda.</p>
        </DetalleItem>

    );
}

export default DetalleComponente;