import { motion } from 'framer-motion';
import { Zap, Database, MessageSquare, ChevronRight } from 'lucide-react';
import styles from '../styles/Pages.module.css';

const CasosDeUso = () => {
  const cases = [
    {
      title: "Atención al Cliente con IA",
      icon: <MessageSquare size={32} />,
      desc: "Implementación de agentes inteligentes que resuelven dudas frecuentes, procesan pedidos y escalan casos complejos de forma autónoma, integrando tu CRM favorito.",
      features: ["Soporte 24/7 multilingüe", "Integración con WhatsApp/Telegram", "Reducción de costos de soporte"],
      tech: "GPT-4, LangChain, n8n"
    },
    {
      title: "Sincronización de Datos en Tiempo Real",
      icon: <Database size={32} />,
      desc: "Automatización de flujos que mantienen sincronizados tu CRM, ERP y herramientas de marketing. Evita la carga manual de datos y los errores humanos.",
      features: ["Consistencia de datos absoluta", "Alertas automáticas de discrepancias", "Escalabilidad ilimitada"],
      tech: "n8n, Webhooks, APIs REST"
    },
    {
      title: "Optimización de Workflows Internos",
      icon: <Zap size={32} />,
      desc: "Digitalizamos y automatizamos procesos internos como aprobación de facturas, gestión de vacaciones o onboarding de empleados.",
      features: ["Trazabilidad completa", "Ahorro de horas hombre", "Eliminación de burocracia papel"],
      tech: "Google Workspace, n8n, Slack/Teams"
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
            Casos de Uso
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Aplicaciones prácticas de nuestra tecnología para resolver problemas de negocio reales.
          </motion.p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div style={{ display: 'grid', gap: '6rem' }}>
            {cases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                  gap: '4rem',
                  alignItems: 'center'
                }}
              >
                {idx % 2 === 0 ? (
                  <>
                    <div style={{ background: '#f8fafc', padding: '4rem', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'white', borderRadius: '4px', fontWeight: '700', border: '1px solid var(--border)' }}>
                        {item.tech}
                      </span>
                    </div>
                    <div className={styles.content}>
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                      <ul style={{ display: 'grid', gap: '1rem' }}>
                        {item.features.map((f, i) => (
                          <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '1rem', color: 'var(--text-muted)' }}>
                            <ChevronRight size={16} color="var(--accent)" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.content}>
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                      <ul style={{ display: 'grid', gap: '1rem' }}>
                        {item.features.map((f, i) => (
                          <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '1rem', color: 'var(--text-muted)' }}>
                            <ChevronRight size={16} color="var(--accent)" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '4rem', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'white', borderRadius: '4px', fontWeight: '700', border: '1px solid var(--border)' }}>
                        {item.tech}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasosDeUso;
