import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    const token = localStorage.getItem('token')
    if (!token){
        return(<header className={styles.bahOui}>
            {/* <p>rrr</p> */}
            <img className={styles.logoHeader} src='logo_original.svg'/>
        </header>)
    }
    const username = localStorage.getItem('username'); // Récupérer le nom d'utilisateur
  return (
    <header>
      <div className={styles.headerContainer}>
        <img className={styles.avatarProfile} src="avatar.jpg" alt="Profile Avatar" />
        <p>Bonjour <span>{username}</span> !</p>
      </div>
    </header>
  );
};

export default Header;
