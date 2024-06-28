import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: username,
        password: password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username); // Stocker le nom d'utilisateur

      setUsername('');
      setPassword('');

      navigate('/'); // Rediriger vers la page principale après connexion réussie
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // Gérer les erreurs ici
    }
  };

  return (
    <section>
      <h1 className={styles.LoginTitle}>Se connecter</h1>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Pseudo"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className={styles.inputForm}
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className={styles.buttonForm}type="submit">Se connecter</button>
      <a href='/register' className={styles.registerProut}>Pas encore de compte</a>
      </form>
    </section>
  );
};

export default Login;
