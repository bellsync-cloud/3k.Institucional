import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section Full-Width */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroContent}
            >
              <h1>Eficiencia <span className={styles.gradient}>Inteligente</span> para su Empresa.</h1>
              <p>Expertos en integración de IA y flujos de automatización n8n. Transformamos la complejidad técnica en resultados de negocio medibles.</p>
              <div className={styles.heroBtns}>
                <Link to="/portfolio" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-blue)', color: 'white', border: 'none' }}>
                  Ver Soluciones
                </Link>
                <Link to="/quienes-somos" className="btn" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Sobre Nosotros <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroForm}
            >
              <h3>Contacto Directo</h3>
              <p>Reciba una propuesta personalizada para su proyecto.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Nombre y Apellido" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Email Profesional" required />
                </div>
                <div className={styles.formGroup}>
                  <textarea placeholder="Descripción breve de su necesidad" rows={3}></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>Solicitar Presupuesto</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Sección con Fondo Completo */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Servicios Especializados</h2>
          </div>
          
          <div className={styles.featureGrid}>
            <motion.div 
              whileHover={{ y: -15 }}
              className={styles.featureCard}
            >
              <div className={styles.iconWrapper}>
                <Bot size={40} />
              </div>
              <h3>Inteligencia Artificial</h3>
              <p>Modelos personalizados y agentes de IA que automatizan la atención y el análisis de datos complejos.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -15 }}
              className={styles.featureCard}
            >
              <div className={styles.iconWrapper}>
                <Zap size={40} />
              </div>
              <h3>Automatización n8n</h3>
              <p>Conectividad total entre sus herramientas favoritas. Eliminamos silos de datos y procesos manuales.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -15 }}
              className={styles.featureCard}
            >
              <div className={styles.iconWrapper}>
                <Cpu size={40} />
              </div>
              <h3>Consultoría Tech</h3>
              <p>Le acompañamos en la transformación digital de su empresa con una hoja de ruta clara y escalable.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
