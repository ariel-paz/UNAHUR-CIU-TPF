import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_ROUTES, fetchData } from '../src_config_api';
import DetalleItem from '../components/DetalleItem';
import Separacion from '../components/Separacion';

function DetalleComponente() {
  const { id } = useParams();
  const [componente, setComponente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComponenteData = async () => {
      try {
        const data = await fetchData(API_ROUTES.componente(id));
        setComponente(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchComponenteData();
  }, [id]);

  if (loading) return <p>Cargando detalles del componente...</p>;
  if (error) return <p>Error: {error}</p>;
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