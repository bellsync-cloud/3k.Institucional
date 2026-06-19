import styles from './Footer.module.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.logoWrapper}>
              <img src={logo} alt="3KODE Logo" className={styles.logoImg} />
            </div>
            <p className={styles.tagline}>Expertos en Desarrollo Web, IA y Servicios de Automatización Inteligente.</p>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/quienes-somos">Quiénes Somos</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/casos-de-uso">Casos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <p><a href="mailto:info@3k.ar" style={{ color: 'inherit' }}>info@3k.ar</a></p>
            <p>Ubicación: Argentina</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} 3KODE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
