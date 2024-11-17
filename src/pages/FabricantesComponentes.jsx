import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES, fetchData } from '../src_config_api';



export default function FabricantesComponentes() {
    const [componentes, setComponentes] = useState([]);
    const [fabricantes, setFabricantes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComponentesFabricantesData = async () => {
            try {
                const [componentesData, fabricantesData] = await Promise.all([
                    fetchData(API_ROUTES.componentes),
                    fetchData(API_ROUTES.fabricantes)
                  ]);
                setComponentes(componentesData);
                setFabricantes(fabricantesData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchComponentesFabricantesData();
    }, []);

    if (loading) return <p>Cargando componentes y fabricantes...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Componentes y Fabricantes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-2xl font-semibold mb-4">Componentes</h2>
                <ul className="bg-white shadow-md rounded-lg overflow-hidden">
                    {componentes.map((componente) => (
                    <li key={componente.id} className="px-4 py-2 border-b last:border-b-0 hover:bg-gray-50">
                        <Link to={`/componente/${componente.id}`} className="text-blue-600 hover:underline">
                        {componente.nombre}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
                <div>
                <h2 className="text-2xl font-semibold mb-4">Fabricantes</h2>
                <ul className="bg-white shadow-md rounded-lg overflow-hidden">
                    {fabricantes.map((fabricante) => (
                    <li key={fabricante.id} className="px-4 py-2 border-b last:border-b-0 hover:bg-gray-50">
                        <Link to={`/fabricante/${fabricante.id}`} className="text-blue-600 hover:underline">
                        {fabricante.nombre}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}
