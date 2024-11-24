import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_ROUTES, fetchData } from '../src_config_api';
import DetalleItem from '../components/DetalleItem';
import Separacion from '../components/Separacion';

function DetalleFabricante() {
  const { id } = useParams();
  const [fabricante, setFabricante] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFabricanteData = async () => {
      try {
        const data = await fetchData(API_ROUTES.fabricante(id));
        setFabricante(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFabricanteData();
  }, [id]);

  if (loading) return <p>Cargando detalles del fabricante...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!fabricante) return <p>No se encontró el fabricante</p>;

  return (
    <DetalleItem item={fabricante}>
      <h2 className="text-2xl font-semibold mb-2">Información de contacto</h2>
      <Separacion />
      <p className="mb-2"><strong>Dirección:</strong> {fabricante.direccion}</p>
      <p><strong>Número de contacto:</strong> {fabricante.numeroContacto}</p>        
    </DetalleItem>
  );
}

export default DetalleFabricante;