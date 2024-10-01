import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setUserType] = useState('aluno');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/registrar', {
        username,
        password,
        type,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registrar</h2>
      <select value={type} onChange={(e) => setUserType(e.target.value)}>
        <option value="aluno">Aluno</option>
        <option value="professor">Professor</option>
        <option valeu="administrador">Administrador</option>
      </select>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuário"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
