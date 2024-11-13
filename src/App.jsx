import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Detalle from './pages/Detalle';

function App() {
  return (
    <Router>
      <h1 className="bg-blue-500 text-white p-4">Hola</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/productos/:id" element={<Detalle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
