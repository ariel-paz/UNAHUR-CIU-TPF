import { useState, useEffect, useCallback } from 'react';
import { fetchData } from '../src_config_api';
import SectionContainer from '../components/SectionContainer';

import ErrorComponent from './ErrorComponent';
import Elemento from './Elemento';

const CatalogoElementos = ({rutaDeAPI, tipo}) =>{
  const [elementos, setElementos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchElementos = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchData(rutaDeAPI)
      .then(data => {
        setElementos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(`Hubo un error al cargar los elementos. Intente nuevamente más tarde.`);
        setLoading(false);
      });
  }, [rutaDeAPI]);

  useEffect(() => {
    fetchElementos();
  }, [fetchElementos]);

  if (loading) return <p className='text-center'>Cargando ...</p>;
  if (error) return <ErrorComponent mensaje={error} refetch={fetchElementos} />;

  return (
    <SectionContainer>

      <h1 className="text-4xl font-bold mb-6">Catálogo de {tipo}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {elementos.map((elemento) => (

          <Elemento key={elemento.id} elemento={elemento} tipo={tipo}/>
        ))}
      </div>

    </SectionContainer>
  );
}

export default CatalogoElementos;