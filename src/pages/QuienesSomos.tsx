import { motion } from 'framer-motion';
import styles from '../styles/Pages.module.css';

const QuienesSomos = () => {
  return (
    <div className={styles.page}>
      {/* Header Estilo 3KODE */}
      <header className={styles.pageHeader}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quiénes Somos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Liderando la transformación digital a través de la inteligencia artificial aplicada y la automatización estratégica.
          </motion.p>
        </div>
      </header>

      {/* Contenido Principal */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.content}
            >
              <h2>Nuestra Visión</h2>
              <p>
                En 3KODE, no solo implementamos tecnología; diseñamos el futuro de la eficiencia operativa. Somos un equipo multidisciplinario apasionado por resolver problemas complejos mediante soluciones simples, escalables y orientadas a resultados.
              </p>
              <p>
                Nuestra misión es empoderar a las empresas con herramientas que les permitan liberar su potencial creativo, delegando las tareas repetitivas a sistemas inteligentes.
              </p>
              
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <h4>+100</h4>
                  <p>Flujos Automatizados</p>
                </div>
                <div className={styles.statItem}>
                  <h4>40%</h4>
                  <p>Ahorro Operativo Promedio</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ background: '#f8fafc', padding: '4rem', borderRadius: '12px', border: '1px solid var(--border)' }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Por qué elegirnos</h3>
              <ul style={{ display: 'grid', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>
                  <span>Experiencia comprobada en integraciones n8n de alta complejidad.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>
                  <span>Enfoque personalizado: no creemos en soluciones de "talla única".</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>
                  <span>Soporte técnico continuo y optimización constante.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
