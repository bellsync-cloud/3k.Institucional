import { motion } from 'framer-motion';
import { Mail, MapPin, Share2 } from 'lucide-react';
import styles from '../styles/Pages.module.css';

const Contacto = () => {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Estamos listos para llevar su empresa al siguiente nivel. Contáctenos hoy mismo.
          </motion.p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ color: 'var(--primary)', marginBottom: '2rem', fontSize: '2.5rem' }}>Hablemos de su proyecto</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                Ya sea que necesite una automatización puntual o una estrategia completa de IA, nuestro equipo de expertos está para asesorarle.
              </p>

              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Email</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>contacto@3kode.com.ar</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Ubicación</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>Buenos Aires, Argentina (Remoto para el mundo)</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                    <Share2 size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>LinkedIn</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>/company/3kode-ar</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ background: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
            >
              <h3 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Enviar un mensaje</h3>
              <form style={{ display: 'grid', gap: '1.5rem' }}>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  style={{ width: '100%', padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '1rem' }} 
                />
                <input 
                  type="email" 
                  placeholder="Email profesional" 
                  style={{ width: '100%', padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '1rem' }} 
                />
                <textarea 
                  rows={5} 
                  placeholder="¿Cómo podemos ayudarle?" 
                  style={{ width: '100%', padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '1rem' }}
                ></textarea>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Enviar Consulta
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
