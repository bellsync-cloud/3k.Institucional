import { motion } from 'framer-motion';
import styles from '../styles/Pages.module.css';

const Portfolio = () => {
  const projects = [
    { 
      title: "E-commerce Automático", 
      category: "Automatización", 
      desc: "Integración total de stock, facturación y envíos mediante n8n para una tienda líder de indumentaria.",
      results: "Reducción del 60% en errores de stock."
    },
    { 
      title: "Asistente Legal IA", 
      category: "Inteligencia Artificial", 
      desc: "Desarrollo de un agente especializado en análisis documental y jurisprudencia para estudios jurídicos.",
      results: "Optimización del 40% en tiempos de investigación."
    },
    { 
      title: "Dashboard Predictivo", 
      category: "Data Science", 
      desc: "Sistema de visualización de datos con modelos predictivos para optimizar la compra de suministros.",
      results: "Ahorro anual estimado de $50k USD."
    },
    { 
      title: "Omnicanalidad Inteligente", 
      category: "Servicios IA", 
      desc: "Centralización de atención por WhatsApp, Web y Redes sociales con agentes IA coordinados.",
      results: "Atención 24/7 sin intervención humana."
    }
  ];

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Casos de éxito donde la tecnología y la estrategia se unen para generar valor real.
          </motion.p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.cardGrid}>
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={styles.card}
              >
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--accent)', 
                  fontWeight: '700', 
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {project.category}
                </span>
                <h3 style={{ marginTop: '0.8rem' }}>{project.title}</h3>
                <p>{project.desc}</p>
                <div style={{ 
                  marginTop: '1.5rem', 
                  paddingTop: '1rem', 
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--primary)'
                }}>
                  {project.results}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
