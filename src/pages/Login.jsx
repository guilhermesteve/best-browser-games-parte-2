import React, { useContext, useState } from 'react';
import './login.css';
import { SaudacaoContexto } from '../App';
import { AuthContext, useAuth } from '../contexto/AuthContexto';

function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { mensagem, setMensagem } = useContext(SaudacaoContexto)

  //sem a function
  //const {login } = useContext(AuthContext)
  //com a function
  const { login } = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null)

    console.log('Login submitted', { email: email, password });

    if (!email || !password) {
      return
    }
    console.log(mensagem)

    fetch('https://api-best-browser-games.vercel.app/users/login', {
      method: 'POST', // Define o método da requisição
      headers: {
        'Content-Type': 'application/json', // Indica o tipo de conteúdo que está sendo enviado
      },
      body: JSON.stringify({
        email,
        password
      }),
    }).then(async response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const retorno = await response.json()

      console.log(retorno)

      setMensagem(retorno.name)

      login(retorno.token, { name: retorno.name, email:retorno.email})

      //localStorage.setItem("usuario", retorno)

    }).catch(error => {
      setError("Problema no login ou senha!")
      console.log(error)
    })




  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className='field'>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='field'>
            <label>Senha:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>

    </div>
  );
}

export default Login;