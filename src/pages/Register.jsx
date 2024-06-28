import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';


const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
  
    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return; // Arrêter la soumission du formulaire si les mots de passe ne correspondent pas
    }

    try {
      // Envoyer la requête POST à l'API pour enregistrer l'utilisateur
      const response = await axios.post('http://localhost:3000/register', {
        username: username,
        password: password,
      });
  
      console.log('Réponse de l\'API:', response.data);
      // Réinitialiser les champs après soumission réussie (si nécessaire)
      setPassword('');
      setConfirmPassword('');
      setPasswordsMatch(true);

      navigate('/login'); 

    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      // Gérer les erreurs ici, par exemple afficher un message à l'utilisateur
    }
  };

  return (
    <section>
      <h1 className={styles.LoginTitle}>Register </h1>
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
        <input
          className={styles.inputForm}
          type="password"
          placeholder="Confirmation du mot de passe"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordsMatch && <p style={{ color: 'red' }}>Les mots de passe ne correspondent pas.</p>}
        <button className={styles.buttonForm} type="submit">Créer mon compte</button>
        <a className={styles.registerProut} href='/login'>Déjà inscrit ?</a>
      </form>
    </section>
  );
};

export default Register;
