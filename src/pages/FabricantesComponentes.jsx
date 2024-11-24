import CatalogoElementos from '../components/CatalogoElementos';
import SectionContainer from '../components/SectionContainer';
import { API_ROUTES } from '../src_config_api';

export default function FabricantesComponentes() {

    return (
        <>
            <CatalogoElementos rutaDeAPI={API_ROUTES.fabricantes} tipo={'fabricantes'}/>
            <CatalogoElementos rutaDeAPI={API_ROUTES.componentes} tipo={'componentes'}/>
        </>
    )
}
