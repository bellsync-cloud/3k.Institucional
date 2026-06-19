# 3KODE - Proyecto Institucional

Este archivo contiene el contexto estratégico, las decisiones de diseño y las tareas pendientes para el desarrollo de la plataforma web de 3KODE.

## 🚀 Propósito del Proyecto
3KODE es una empresa especializada en **Automatización Inteligente**, **IA Aplicada** y **Desarrollo Web**. El sitio web debe funcionar como una carta de presentación profesional y una demostración técnica de sus capacidades.

## 🎨 Identidad Visual
- **Logotipo:** Integrado desde `src/assets/logo.jpg`. Representa tecnología (circuitos) y origen (bandera argentina).
- **Colores:**
  - **Primario (Azul Marino):** `#1B365D` (Autoridad y seriedad).
  - **Acento (Cian/Celeste):** `#00B5E2` (Innovación y tecnología).
- **Tipografía:** Inter (Sans-serif geométrica).
- **Estilo:** Institucional de alta gama, inspirado en `templates.loguei.com/inst01adv/`, con secciones a pantalla completa y formularios de conversión directa.

## 🛠 Arquitectura Técnica
- **Frontend:** React 19 + TypeScript + Vite.
- **Estilos:** CSS Modules + CSS Variables globales.
- **Animaciones:** Framer Motion.
- **Iconografía:** Lucide React.
- **IA Integrada:** Widget de chat flotante diseñado para conectarse con **n8n** (Agente de ventas IA).

## 📋 Estado de Páginas
- [x] **Home:** Rediseñada a pantalla completa con Hero impactante y formulario de contacto.
- [x] **Navbar:** Integrada con logo recortado y diseño flotante.
- [x] **Footer:** Actualizado con identidad 3KODE.
- [x] **Chat IA:** Widget visualmente completo y funcional (simulado).
- [ ] **Quiénes Somos:** Pendiente de rediseño institucional.
- [ ] **Portfolio:** Pendiente de estructurar para mostrar casos de éxito.
- [ ] **Casos de Uso:** Pendiente de contenido real.
- [ ] **Contacto:** Pendiente de mejorar con datos reales y mapa.

## 🤖 Integración de IA (Pendientes Críticos)
Para que el Agente IA vendedor sea funcional, se requiere:
1. **Webhook n8n:** Configurar el endpoint en `src/components/ChatWidget.tsx`.
2. **Knowledge Base:** Definir el documento de contexto para el agente (servicios específicos de 3KODE).
3. **System Prompt:** Definir el tono de voz (vendedor experto, consultivo, argentino/neutro).

## 📝 Instrucciones para Futuros Cambios
- Mantener siempre el enfoque **Full-Width** en secciones principales.
- El logo debe manejarse con la técnica de **recorte virtual CSS** definida en `Navbar.module.css` debido al exceso de blanco en el archivo original.
- Todas las animaciones deben ser sutiles (duración 0.6s - 0.8s).
