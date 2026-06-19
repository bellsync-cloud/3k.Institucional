/**
 * Página de Contacto — 3KODE Institucional
 *
 * Formulario "Enviar un mensaje":
 *  - Llama a EmailJS para entregar el mensaje directamente en info@3k.ar
 *    sin abrir el cliente de correo del visitante.
 *  - Muestra confirmación visual o mensaje de error según el resultado.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Share2, CheckCircle, AlertCircle } from 'lucide-react';
import styles from '../styles/Pages.module.css';
import { sendContactEmail } from '../services/emailService';



const Contacto = () => {
  /* Estado del formulario */
  const [nombre,   setNombre]   = useState('');
  const [email,    setEmail]    = useState('');
  const [mensaje,  setMensaje]  = useState('');
  const [enviado,  setEnviado]  = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error,    setError]    = useState<string | null>(null);

  /**
   * handleSubmit — envía el mensaje directamente a info@3k.ar vía EmailJS.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim()) return;

    setEnviando(true);
    setError(null);

    try {
      await sendContactEmail({ nombre, email, mensaje, origen: 'contacto' });
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
    <div className={styles.page}>

      {/* ── HERO HEADER ─────────────────────────────────── */}
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

      {/* ── CONTENIDO ───────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Columna izquierda: datos de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ color: 'var(--primary)', marginBottom: '2rem', fontSize: '2.5rem' }}>
                Hablemos de su proyecto
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                Ya sea que necesite una automatización puntual o una estrategia completa de IA,
                nuestro equipo de expertos está para asesorarle.
              </p>

              <div style={{ display: 'grid', gap: '2rem' }}>

                {/* Email — clickeable con mailto */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>Email</h4>
                    <a
                      href="mailto:info@3k.ar"
                      style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '1rem' }}
                    >
                      info@3k.ar
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>Ubicación</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>Buenos Aires, Argentina (Remoto para el mundo)</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <Share2 size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>LinkedIn</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>/company/3kode-ar</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Columna derecha: formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ background: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
            >
              <AnimatePresence mode="wait">
                {enviado ? (
                  /* ── Confirmación ── */
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
                    <button className={styles.resetBtnDark} onClick={() => setEnviado(false)}>
                      Enviar otra consulta
                    </button>
                  </motion.div>
                ) : (
                  /* ── Formulario ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    style={{ display: 'grid', gap: '1.5rem' }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Enviar un mensaje</h3>

                    <input
                      id="contacto-nombre"
                      type="text"
                      placeholder="Nombre completo"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                      required
                      style={{ width: '100%', padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                    <input
                      id="contacto-email"
                      type="email"
                      placeholder="Email profesional"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={{ width: '100%', padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                    <textarea
                      id="contacto-mensaje"
                      rows={5}
                      placeholder="¿Cómo podemos ayudarle?"
                      value={mensaje}
                      onChange={e => setMensaje(e.target.value)}
                      style={{ width: '100%', padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}
                    />
                    {error && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontSize: '0.9rem', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #fecaca', marginBottom: '0.5rem' }}>
                        <AlertCircle size={16} />
                        <span>{error}</span>
                      </div>
                    )}
                    <button
                      id="btn-enviar-consulta"
                      type="submit"
                      className="btn btn-primary"
                      disabled={enviando}
                      style={{ padding: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', opacity: enviando ? 0.7 : 1 }}
                    >
                      {enviando ? 'Enviando…' : 'Enviar Consulta'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
