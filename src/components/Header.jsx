import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import { SaudacaoContexto } from '../App';
import { useAuth } from '../contexto/AuthContexto';
function Header() {

  const { token, name, logout } = useAuth()

  const { mensagem } = useContext(SaudacaoContexto)
  return (
    <header>
      {token && <div className="welcome-message">Bem-vindo {name}</div>}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dados-do-cliente">Dados do Cliente</Link></li>
          {token ?
            <li><button onClick={logout}>Deslogar</button></li>
            : <li><Link to="/login">Login</Link></li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;