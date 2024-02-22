import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import ClienteDados from './pages/ClienteDados';
import { createContext, useState } from 'react';
import { AuthProvider } from './contexto/AuthContexto';
import ProtectedRoute from './contexto/ProtectedRoute';


export const SaudacaoContexto = createContext()

function App() {
  const [mensagem, setMensagem] = useState("ola")

  return (
    <BrowserRouter >
      <AuthProvider>
        <SaudacaoContexto.Provider value={{ mensagem, setMensagem }}>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="dados-do-cliente" element={
            <ProtectedRoute>
              <ClienteDados />
            </ProtectedRoute>
            } />
          </Routes>
        </SaudacaoContexto.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
