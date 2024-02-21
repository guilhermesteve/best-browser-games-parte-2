import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null)
  
    console.log('Login submitted', { email: email, password });


    if (!email || !password) {
      return
    }
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