import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="3KODE Logo" className={styles.logoImg} />
        </Link>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/quienes-somos" onClick={() => setIsOpen(false)}>Quiénes Somos</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/casos-de-uso" onClick={() => setIsOpen(false)}>Casos de Uso</Link>
          <Link to="/contacto" className={styles.cta} onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>

        <button className={styles.mobileMenu} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
