import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Portfolio from './pages/Portfolio';
import CasosDeUso from './pages/CasosDeUso';
import Contacto from './pages/Contacto';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/casos-de-uso" element={<CasosDeUso />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
