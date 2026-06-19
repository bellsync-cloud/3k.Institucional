/**
 * emailService.ts — 3KODE Institucional
 *
 * Centraliza el envío de emails vía EmailJS.
 * Reemplazá los tres valores VITE_EMAILJS_* en el archivo .env
 * con los datos de tu cuenta en https://www.emailjs.com
 *
 * Variables de entorno requeridas (.env):
 *   VITE_EMAILJS_PUBLIC_KEY   → Account > API Keys > Public Key
 *   VITE_EMAILJS_SERVICE_ID   → Email Services > Service ID
 *   VITE_EMAILJS_TEMPLATE_ID  → Email Templates > Template ID
 */
import emailjs from '@emailjs/browser';

/* ─── Credenciales desde variables de entorno ─── */
const PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY   as string;
const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID   as string;
const TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID  as string;

export interface ContactPayload {
  nombre:  string;
  email:   string;
  mensaje: string;
  origen:  'home' | 'contacto';  // Identifica desde qué página se envió
}

/**
 * sendContactEmail
 * Envía un email directamente a info@3k.ar usando EmailJS.
 * Lanza un Error si falla para que el componente pueda manejarlo.
 *
 * Parámetros del template EmailJS esperados:
 *   {{from_name}}    → nombre del visitante
 *   {{reply_to}}     → email del visitante (para responder directo)
 *   {{message}}      → mensaje
 *   {{origin_page}}  → "home" o "contacto"
 *   {{to_email}}     → info@3k.ar (configurado en el template)
 */
export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error(
      'EmailJS no configurado. Completá las variables VITE_EMAILJS_* en el archivo .env'
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name:   payload.nombre,
      reply_to:    payload.email,
      message:     payload.mensaje || '(sin mensaje)',
      origin_page: payload.origen === 'home' ? 'Inicio — Solicitud de Presupuesto' : 'Página de Contacto',
      to_email:    'info@3k.ar',
    },
    { publicKey: PUBLIC_KEY }
  );
}
