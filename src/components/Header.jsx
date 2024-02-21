import React   from 'react';
import { Link } from 'react-router-dom';
import './header.css'
function Header() {

  return (
    <header>
      <div className="welcome-message">Bem-vindo</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dados-do-cliente">Dados do Cliente</Link></li>
         <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;