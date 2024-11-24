import { useState, useEffect } from 'react';
import {fetchData } from '../src_config_api';
import SectionContainer from '../components/SectionContainer';
import Elemento from './Elemento'

function CatalogoElementos({rutaDeAPI, tipo}) {
  const [elementos, setElementos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(rutaDeAPI)
      .then(data => {
        setElementos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando {tipo}...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>

      <h1 className="text-4xl font-bold mb-6">Catálogo de {tipo}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {elementos.map((elemento) => (

          <Elemento 
            nombre={elemento.nombre} descripcion={elemento.descripcion} 
            rutaImagen={elemento.pathImg} id={elemento.id} 
            tipo={tipo} key={elemento.id}
          />

        ))}
      </div>

    </SectionContainer>
  );
}

export default CatalogoElementos;