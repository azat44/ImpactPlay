import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <nav className="footer-menu">
      <Link to="/classement">Classement</Link>
      <Link to="/">Home</Link>
      <Link to="/register">Rank</Link>
      <Link to="/recompenses">Recompenses</Link>
    </nav>
  );
};

export default Footer;
