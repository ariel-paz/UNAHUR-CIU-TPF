import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Detalle from './pages/Detalle';
import './App.css';

function App() {
  return (
    <Router>
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
