import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import ClienteDados from './pages/ClienteDados';

function App() {

  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dados-do-cliente" element={<ClienteDados />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
