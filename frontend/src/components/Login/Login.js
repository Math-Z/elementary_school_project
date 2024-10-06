import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('aluno');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
        userType,
      });
      console.log(response.data);
      navigate('/dashboard', { state: { username, userType } });
    } catch (error) {
      console.error('Erro ao fazer login!');
    }
  };

  return (
    <div className='login-div'>
      <form onSubmit={handleLogin} className='login-form'>
        <h1 className='school-title'>Escola</h1>
        <h2 className='login-welcome'>Seja Bem-Vindo!</h2>

        <div>
          <label className='input-label'>Nome de usuário</label>
          <input
            className='username-input'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Seu nome"
            required
          />
        </div>
      
        <div>
          <label className='input-label'>Senha</label>
          <input
            className='password-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
        </div>

        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className='select-option'
        >
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
          <option value="administrador">Administrador</option>
        </select>

        <div>
          <button type="submit" className='login-button'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
