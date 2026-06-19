/**
 * Página: Quiénes Somos — 3KODE Institucional
 *
 * Estructura:
 *  1. Header hero de página
 *  2. Sección "Nuestra Visión" con estadísticas
 *  3. Sección "Por qué elegirnos" (checklist)
 *  4. Sección "Nuestro Equipo" → tarjetas de colaboradores con link al CV estático
 *
 * Para agregar nuevos colaboradores: copiar el objeto dentro de `teamMembers`
 * y crear el HTML correspondiente en /team/.
 */

import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Mail } from 'lucide-react';
import styles from '../styles/Pages.module.css';

/* SVG inline del ícono LinkedIn — reemplaza el export 'Linkedin' que no existe
   en la versión actual de lucide-react instalada en el proyecto. */
const LinkedinIcon = ({ size = 13 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─────────────────────────────────────────────
   Datos de colaboradores
   Extender este array para agregar nuevos perfiles.
   El campo `cvPath` debe ser relativo a la raíz del sitio
   (funciona tanto en servidor web como en file://).
───────────────────────────────────────────── */
const teamMembers = [
  {
    id: 'marcelo-restuccio',
    name: 'Marcelo Javier Restuccio',
    role: 'Data & Analytics Leader',
    specialty: 'Data Architecture · Data Engineering · Business Intelligence',
    location: 'Buenos Aires, Argentina',
    email: 'marcelo.restuccio@3k.ar',
    linkedin: 'linkedin.com/in/mrestuccio',
    /* Tags de tecnologías clave para mostrar en la tarjeta */
    tags: ['Microsoft Fabric', 'SQL Server', 'Oracle', 'Python', 'n8n', 'Power BI', 'ETL', 'Data Warehouse'],
    /* Ruta al CV estático HTML — relativa desde la raíz del proyecto */
    cvPath: 'team/Marcelo-Javier-Restuccio.html',
    /* Resumen ejecutivo breve (2-3 líneas) */
    summary:
      'Ingeniero en Informática con +25 años liderando iniciativas de datos, BI y transformación digital en Argentina y Brasil. Co-Founder de 3Kode.',
    /* Iniciales para el avatar generado por CSS cuando no hay foto */
    initials: 'MR',
    /* Color de acento para el avatar (ciclado por CSS, pero útil para futuras fotos) */
    accentColor: '#00B5E2',
  },
  /* ── Plantilla para próximo colaborador ──────────────────────────────────
  {
    id: 'nombre-apellido',
    name: 'Nombre Apellido',
    role: 'Rol Principal',
    specialty: 'Especialidad 1 · Especialidad 2',
    location: 'Ciudad, País',
    email: 'email@dominio.com',
    linkedin: 'linkedin.com/in/perfil',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    cvPath: 'team/Nombre-Apellido.html',
    summary: 'Breve resumen profesional...',
    initials: 'NA',
    accentColor: '#1B365D',
  },
  ────────────────────────────────────────────────────────────────────────── */
];

/* Variantes de animación reutilizables */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

/* ─────────────────────────────────────────────
   Componente principal
───────────────────────────────────────────── */
const QuienesSomos = () => {
  /**
   * Abre el CV estático en una nueva pestaña.
   * Construimos la ruta de forma robusta para que funcione tanto en:
   *  - Servidor web  (http://localhost / dominio)
   *  - Explorador de archivos (file:// — para pruebas unitarias locales)
   */
  const openCv = (cvPath: string) => {
    // En entornos file://, window.location.href termina en index.html o en /
    // Obtenemos la carpeta base y concatenamos la ruta relativa del CV.
    const base = window.location.href.replace(/\/[^/]*$/, '/');
    window.open(base + cvPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.page}>

      {/* ── 1. HERO HEADER ─────────────────────────────── */}
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
            Liderando la transformación digital a través de la inteligencia artificial aplicada
            y la automatización estratégica.
          </motion.p>
        </div>
      </header>

      {/* ── 2. VISIÓN + POR QUÉ ELEGIRNOS ─────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Columna izquierda: Nuestra Visión */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.content}
            >
              <h2>Nuestra Visión</h2>
              <p>
                En 3KODE, no solo implementamos tecnología; diseñamos el futuro de la
                eficiencia operativa. Somos un equipo multidisciplinario apasionado por
                resolver problemas complejos mediante soluciones simples, escalables y
                orientadas a resultados.
              </p>
              <p>
                Nuestra misión es empoderar a las empresas con herramientas que les permitan
                liberar su potencial creativo, delegando las tareas repetitivas a sistemas
                inteligentes.
              </p>

              {/* Estadísticas */}
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

            {/* Columna derecha: Por qué elegirnos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: '#f8fafc',
                padding: '4rem',
                borderRadius: '12px',
                border: '1px solid var(--border)',
              }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                Por qué elegirnos
              </h3>
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

      {/* ── 3. NUESTRO EQUIPO ──────────────────────────── */}
      <section className={styles.teamSection}>
        <div className="container">

          {/* Encabezado de sección */}
          <motion.div
            className={styles.sectionHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.sectionLabel}>Colaboradores</span>
            <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
            <p className={styles.sectionSubtitle}>
              Profesionales especializados que conforman el motor de 3KODE.
              Cada perfil incluye su currículum vitae completo.
            </p>
          </motion.div>

          {/* Grid de tarjetas de colaboradores */}
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.id}
                className={styles.teamCard}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Avatar con iniciales (reemplazar con <img> cuando haya foto) */}
                <div className={styles.teamAvatar} style={{ '--member-accent': member.accentColor } as React.CSSProperties}>
                  <span>{member.initials}</span>
                </div>

                {/* Información del colaborador */}
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamSpecialty}>{member.specialty}</p>

                  {/* Resumen ejecutivo */}
                  <p className={styles.teamSummary}>{member.summary}</p>

                  {/* Datos de contacto rápidos */}
                  <ul className={styles.teamContact}>
                    <li>
                      <MapPin size={13} />
                      <span>{member.location}</span>
                    </li>
                    <li>
                      <Mail size={13} />
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </li>
                    <li>
                      <LinkedinIcon size={13} />
                      <a
                        href={`https://${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {member.linkedin}
                      </a>
                    </li>
                  </ul>

                  {/* Tags de tecnologías */}
                  <div className={styles.teamTags}>
                    {member.tags.map((tag) => (
                      <span key={tag} className={styles.teamTag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* CTA → abrir CV estático */}
                <button
                  id={`btn-cv-${member.id}`}
                  className={styles.teamCvBtn}
                  onClick={() => openCv(member.cvPath)}
                  aria-label={`Ver CV completo de ${member.name}`}
                >
                  <ExternalLink size={16} />
                  Ver CV Completo
                </button>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default QuienesSomos;
