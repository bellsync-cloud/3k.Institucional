/**
 * Página de inicio — 3KODE Institucional
 *
 * Formulario "Solicitar Presupuesto":
 *  - Recopila nombre, email y mensaje.
 *  - Al enviar, llama a EmailJS para entregar el mensaje directamente
 *    en info@3k.ar sin abrir el cliente de correo del visitante.
 *  - Muestra confirmación visual al completarse o error si falla.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Zap, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { sendContactEmail } from '../services/emailService';



const Home = () => {
  /* Estado del formulario */
  const [nombre,   setNombre]   = useState('');
  const [email,    setEmail]    = useState('');
  const [mensaje,  setMensaje]  = useState('');
  const [enviado,  setEnviado]  = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error,    setError]    = useState<string | null>(null);

  /**
   * handleSubmit
   * Envía el mensaje directamente a info@3k.ar vía EmailJS.
   * No abre el cliente de correo del visitante.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim()) return;

    setEnviando(true);
    setError(null);

    try {
      await sendContactEmail({ nombre, email, mensaje, origen: 'home' });
      setEnviado(true);
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('No pudimos enviar tu mensaje. Por favor escribinos directamente a info@3k.ar');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className={styles.home}>

      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroGrid}>

            {/* Columna izquierda: propuesta de valor */}
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

            {/* Columna derecha: formulario de contacto directo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroForm}
            >
              <h3>Contacto Directo</h3>
              <p>Reciba una propuesta personalizada para su proyecto.</p>

              <AnimatePresence mode="wait">
                {enviado ? (
                  /* ── Pantalla de confirmación ── */
                  <motion.div
                    key="success"
                    className={styles.successBox}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle size={48} color="#22c55e" strokeWidth={1.5} />
                     <h4>¡Mensaje enviado!</h4>
                     <p>Tu consulta se envió correctamente a <strong>info@3k.ar</strong>. Te responderemos a la brevedad.</p>
                     <button className={styles.resetBtn} onClick={() => setEnviado(false)}>
                       Enviar otra consulta
                     </button>
                  </motion.div>
                ) : (
                  /* ── Formulario ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.formGroup}>
                      <input
                        id="home-nombre"
                        type="text"
                        placeholder="Nombre y Apellido"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        id="home-email"
                        type="email"
                        placeholder="Email Profesional"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <textarea
                        id="home-mensaje"
                        placeholder="Descripción breve de su necesidad"
                        rows={3}
                        value={mensaje}
                        onChange={e => setMensaje(e.target.value)}
                      />
                    </div>
                    {error && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontSize: '0.9rem', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #fecaca' }}>
                        <AlertCircle size={16} />
                        <span>{error}</span>
                      </div>
                    )}
                     <button
                       id="btn-solicitar-presupuesto"
                       type="submit"
                       className={styles.submitBtn}
                       disabled={enviando}
                     >
                       {enviando ? 'Enviando…' : 'Solicitar Presupuesto'}
                     </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICIOS ───────────────────────────────────── */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Servicios Especializados</h2>
          </div>

          <div className={styles.featureGrid}>
            <motion.div whileHover={{ y: -15 }} className={styles.featureCard}>
              <div className={styles.iconWrapper}><Bot size={40} /></div>
              <h3>Inteligencia Artificial</h3>
              <p>Modelos personalizados y agentes de IA que automatizan la atención y el análisis de datos complejos.</p>
            </motion.div>

            <motion.div whileHover={{ y: -15 }} className={styles.featureCard}>
              <div className={styles.iconWrapper}><Zap size={40} /></div>
              <h3>Automatización n8n</h3>
              <p>Conectividad total entre sus herramientas favoritas. Eliminamos silos de datos y procesos manuales.</p>
            </motion.div>

            <motion.div whileHover={{ y: -15 }} className={styles.featureCard}>
              <div className={styles.iconWrapper}><Cpu size={40} /></div>
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
