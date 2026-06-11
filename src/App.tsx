import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Affiliates from './pages/Affiliates';
import LogzzLP from './pages/LogzzLP';
import ClareadorLP from './pages/ClareadorLP';

function AdminDashboard() {
  return <div className="p-8"><h1 className="text-2xl font-bold">Admin Dashboard</h1></div>;
}

function AffiliateDashboard() {
  return <div className="p-8"><h1 className="text-2xl font-bold">Painel do Afiliado</h1></div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/afiliados" element={<Affiliates />} />
        <Route path="/logzz" element={<LogzzLP />} />
        <Route path="/clareador" element={<ClareadorLP />} />
        <Route path="/app/admin" element={<AdminDashboard />} />
        <Route path="/app/dashboard" element={<AffiliateDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
