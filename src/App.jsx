import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { API_ROUTES } from './src_config_api';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatalogoElementos from './components/CatalogoElementos';
import Detalle from './pages/Detalle';
import FabricantesComponentes from './pages/FabricantesComponentes';
import Carrito from './pages/Carrito';

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoElementos rutaDeAPI={API_ROUTES.productos} tipo={'productos'}/>} />
        <Route path="/productos/:id" element={<Detalle />} />
        <Route path="/fabricantes" element={<FabricantesComponentes />} />
        <Route path='/carrito' element={<Carrito />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
