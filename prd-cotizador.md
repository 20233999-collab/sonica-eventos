# PRD: Onboarding de Cotización B2B Interactivo — SÓNICA PERÚ

> **Documento de Requerimientos de Producto (PRD)**  
> **Módulo:** Onboarding Wizard de Cotización Paso a Paso (`/cotizar`)  
> **Marca:** SÓNICA PERÚ (Eventos Corporativos, BTL & Experiencias de Marca)  
> **Versión:** 1.0.0  
> **Fecha:** 15 de Septiembre de 2026  
> **Estado:** Especificación para Aprobación del Usuario  

---

## 1. Visión y Objetivos del Producto

### 1.1 El Problema de los Formularios Tradicionales
Los formularios de contacto B2B convencionales (una sola columna con 8 campos estáticos de texto) tienen tasas de abandono superiores al 70%. Para directores de marketing y gerentes de recursos humanos, llenar un bloque denso de inputs se siente como un trámite administrativo pesado.

### 1.2 La Solución: Onboarding Interactivo Tipo Typeform / Linear
Un **asistente de cotización paso a paso ("Onboarding")**, alojado en una ruta dedicada (`/cotizar`), que convierte la solicitud de presupuesto en una conversación guiada, premium y fluida. 

### 1.3 Principios de Experiencia & Comportamiento
1. **Zero-Friction Auto-Advance:** En preguntas de opción única, al hacer clic sobre una tarjeta o ficha, la selección se anima (micro-glow cian) y **avanza automáticamente a la siguiente página sin requerir clic en "Siguiente"** (ahorra clics y acelera el recorrido).
2. **Botón Explícito solo cuando es necesario:** En campos de texto abierto (descripción, nombre, email, teléfono) o selecciones múltiples, se despliega un botón ergonómico *"Continuar (Enter ↵)"*.
3. **Persistencia & Navegabilidad Bidireccional:** El usuario siempre puede retroceder con el botón *"← Atrás"* o la tecla `Escape` / `Flecha Arriba` sin perder los datos previamente seleccionados.
4. **Atmósfera Dark Luxe Coherente:** Misma identidad visual que la landing page (`#090D16`, acento Cyan `#00B2FE`, tipografías Outfit, Plus Jakarta Sans y Geist Mono).

---

## 2. Layout y Estructura Universal de Pantalla

Cada una de las páginas del onboarding comparte una **morfología idéntica, simétrica y limpia**:

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                    [ LOGO SÓNICA ]                     │  <-- Centro superior (con enlace sutil o home)
│                                                        │
│           [ ═══════════▓▓▓▓▓▓▓▓▓▓▓▓▓ 50% ]             │  <-- Barra de progreso con micro-glow cian
│                                                        │
│             ¿Cuál es la escala del evento?             │  <-- Titular de la Pregunta (Outfit Display)
│          Selecciona el aforo estimado de asistentes    │  <-- Bajada descriptiva opcional
│                                                        │
│     ┌──────────────────┐    ┌──────────────────┐       │
│     │  [Icono]         │    │  [Icono]         │       │
│     │  Ficha Opción A  │    │  Ficha Opción B  │       │  <-- Opciones interactivas (Auto-advance al clic)
│     └──────────────────┘    └──────────────────┘       │
│                                                        │
│     ┌──────────────────┐    ┌──────────────────┐       │
│     │  [Icono]         │    │  [Icono]         │       │
│     │  Ficha Opción C  │    │  Ficha Opción D  │       │
│     └──────────────────┘    └──────────────────┘       │
│                                                        │
│      [ ← Atrás ]               Página 3 de 10          │  <-- Footer del wizard: control atrás + contador
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Especificación de Elementos Comunes:
1. **Header Central (Logo):**
   * Logotipo e isotipo vectorial de Sónica Perú centrado en la parte superior.
   * Botón sutil en la esquina derecha `"Salir ✕"` o `"Volver al inicio"` que confirma antes de salir si ya ha avanzado más de 2 pasos.
2. **Barra de Progreso:**
   * Ancho contenido (máximo 600px).
   * Alto de 4px con radio redondeado `9999px`.
   * Relleno animado en degradado cian (`#00B2FE` a `#38C5FF`) con micro-glow.
3. **Bloque Central de Pregunta:**
   * Titular en tipografía `Outfit`, semibold/bold, color blanco `#F8FAFC`, escala responsiva `clamp(1.5rem, 3.5vw, 2.25rem)`.
   * Subtítulo explicativo en `Plus Jakarta Sans`, Slate-400, con tono conversacional.
4. **Zona de Respuestas / Opciones:**
   * Grid simétrico (1 columna en móviles, 2 a 3 columnas en desktop).
   * Tarjetas con elevación, bordes ultrafinos de 1px (`rgba(255,255,255,0.08)`), micro-iluminación al pasar el cursor y estado seleccionado activo (`border-brand-cyan`, sombra cian).
5. **Footer del Wizard:**
   * Lado izquierdo: Botón retroceder `"← Atrás"` (deshabilitado en la Página 1).
   * Centro / Derecha: Contador tipográfico en monospace (`Geist Mono`): `"Página X de 10"`.

---

## 3. Arquitectura del Cuestionario (Secuencia de 10 Páginas)

La secuencia aplica la técnica de **micro-compromisos progresivos**: iniciamos con selecciones táctiles de baja resistencia cognitiva y dejamos los datos de contacto para cuando el usuario ya ha invertido interés en su cotización.

---

### Página 1 de 10: Tipo de Experiencia o Servicio
* **Pregunta:** *"¿Qué tipo de experiencia deseas crear con nosotros?"*
* **Bajada:** *"Selecciona la opción principal que mejor defina tu proyecto."*
* **Mecanismo:** **Auto-avance instantáneo al hacer clic** (sin botón adicional).
* **Opciones (Cards con icono):**
  1. **Convención o Congreso Corporativo:** Lanzamientos anuales, plenarias, jornadas ejecutivas y ferias internas.
  2. **Fiesta de Integración / Gala Anual:** Celebraciones de fin de año, aniversarios, premiaciones VIP y cenas de gala.
  3. **Activación BTL o Stand Comercial:** Puntos de venta, ferias comerciales agro/mineras/médicas, arquitectura efímera.
  4. **Producción Audiovisual & Spots:** Cobertura con multicámara, reels para redes, spots comerciales o transmisiones en streaming.
  5. **Campaña Integral 360°:** Combinación integral de evento, branding, merchandising premium y producción de video.

---

### Página 2 de 10: Sector o Industria de la Empresa
* **Pregunta:** *"¿A qué sector o industria pertenece tu organización?"*
* **Bajada:** *"Nos permite adecuar las normativas, estándares de seguridad y estilo visual."*
* **Mecanismo:** **Auto-avance instantáneo al hacer clic**.
* **Opciones:**
  1. **Farmacéutica, Salud & Belleza** (ej. Megalabs, Siegfried, Natura)
  2. **Banca, Finanzas, Seguros & Fintech** (ej. BBVA, RIMAC, Mercado Pago)
  3. **Consumo Masivo, Retail & Bebidas** (ej. Softys, Roichen, Cervecerías)
  4. **Inmobiliaria, Arquitectura & Construcción** (ej. Urbana Perú, Eficaxx)
  5. **Minería, Energía, Industria & Certificación** (ej. Petroperú, SGS, Triton)
  6. **Tecnología, Telecomunicaciones & Entretenimiento** (ej. DIRECTV, Entel, Osiptel)
  7. **Otro sector empresarial**

---

### Página 3 de 10: Aforo o Cantidad de Asistentes
* **Pregunta:** *"¿Cuántas personas vivirán esta experiencia?"*
* **Bajada:** *"Calcularemos los requerimientos de audio, dimensiones de pantalla LED y acreditación."*
* **Mecanismo:** **Auto-avance instantáneo al hacer clic**.
* **Opciones:**
  1. **Formato Exclusivo / VIP:** Hasta 80 invitados
  2. **Formato Mediano:** De 80 a 300 invitados
  3. **Gran Escala Corporativa:** De 300 a 1,000 asistentes
  4. **Aforo Masivo:** Más de 1,000 personas (estadios, explanadas, maratones)
  5. **Por definir / Requiere asesoría de aforo**

---

### Página 4 de 10: Nivel de Urgencia / Fecha Tentativa
* **Pregunta:** *"¿Para cuándo está planificado el evento o activación?"*
* **Bajada:** *"Evaluaremos disponibilidad de fechas y cronograma de pre-producción."*
* **Mecanismo:** **Auto-avance instantáneo al hacer clic**.
* **Opciones:**
  1. **Inmediato / En menos de 30 días:** Puesta en marcha express con equipo in-house disponible.
  2. **Próximos 1 a 3 meses:** Plazo ideal para diseño escenográfico personalizado.
  3. **En más de 3 meses:** Planificación estratégica anual o licitación corporativa.
  4. **Solo explorando opciones y costos:** Queremos conocer presupuestos de referencia.

---

### Página 5 de 10: Rango de Inversión / Presupuesto Estimado (PEN)
* **Pregunta:** *"¿Cuál es el rango de inversión proyectado para este proyecto?"*
* **Bajada:** *"Nos ayuda a diseñar una propuesta técnica ajustada a tu techo presupuestal sin sorpresas."*
* **Mecanismo:** **Auto-avance instantáneo al hacer clic**.
* **Opciones:**
  1. **S/ 15,000 – S/ 35,000 PEN:** Activaciones BTL puntuales, stands básicos o producciones audiovisuales directas.
  2. **S/ 35,000 – S/ 80,000 PEN:** Eventos medianos, galas ejecutivas y activaciones feriales con tecnología interactiva.
  3. **S/ 80,000 – S/ 200,000 PEN:** Grandes convenciones, fiestas corporativas completas o escenografías LED de alto impacto.
  4. **Más de S/ 200,000 PEN:** Mega-eventos, festivales, activaciones masivas nacionales o campañas 360°.
  5. **Aún por definir / Necesito una propuesta base y asesoría**

---

### Página 6 de 10: Servicios y Elementos Específicos Requeridos
* **Pregunta:** *"¿Qué componentes técnicos o creativos necesitas que resolvamos?"*
* **Bajada:** *"Selecciona todos los que apliquen a tu necesidad."*
* **Mecanismo:** **Selección múltiple (checkboxes interactivos)** + Botón *"Continuar (Enter ↵)"*.
* **Opciones:**
  * [ ] **Escenografía, Estructuras Truss & Pantallas LED gigantes**
  * [ ] **Sistema de Audio, Iluminación Robótica & Microfonía**
  * [ ] **Cobertura Audiovisual en vivo, Dron & Reels verticales para redes**
  * [ ] **Merchandising Premium & Kits Corporativos de bienvenida**
  * [ ] **Catering, Barras de Coctelería o Coffee Break ejecutivo**
  * [ ] **Anfitrionas, Maestros de Ceremonia, Artistas o Shows en vivo**
  * [ ] **Registro digital, Códigos QR & Acreditación de invitados**

---

### Página 7 de 10: Breve Descripción o Reto del Evento
* **Pregunta:** *"Cuéntanos brevemente sobre la temática, lugar o reto principal"*
* **Bajada:** *"Cualquier detalle nos servirá para llegar a la primera llamada con ideas concretas."*
* **Mecanismo:** **Textarea expansible con botón "Continuar"** y botón secundario sutil *"Omitir este paso"*.
* **Placeholder:** *"Ej. Buscamos celebrar los 25 años de la empresa con temática futurista para 400 colaboradores, necesitamos pantalla LED curva y show de apertura..."*

---

### Página 8 de 10: Nombre y Empresa
* **Pregunta:** *"¿A nombre de quién y qué empresa emitimos la propuesta?"*
* **Bajada:** *"Personalizaremos la cotización con la ficha comercial de tu organización."*
* **Mecanismo:** **Campos de texto con botón "Continuar (Enter ↵)"**.
  * Input 1: **Tu Nombre y Apellido** (obligatorio)
  * Input 2: **Nombre de la Empresa u Organización** (obligatorio)

---

### Página 9 de 10: Cargo o Rol en la Empresa
* **Pregunta:** *"¿Cuál es tu rol dentro de la organización?"*
* **Bajada:** *"Nos permite enfocar el dossier en requerimientos técnicos, branding o presupuesto."*
* **Mecanismo:** **Auto-avance instantáneo al hacer clic**.
* **Opciones:**
  1. **Marketing, Marca o Publicidad** (Gerente, Brand Manager, Coordinador)
  2. **Gestión Humana, Clima o RRHH** (Gerente de Personas, Comunicaciones Internas)
  3. **Gerencia General, Directorio o Finanzas** (CEO, COO, CFO)
  4. **Compras, Logística o Adquisiciones**
  5. **Otro rol organizador**

---

### Página 10 de 10: Canales de Contacto Directo
* **Pregunta:** *"¿A dónde te enviamos la propuesta y el contacto del Director de Cuentas?"*
* **Bajada:** *"Promesa Sónica: Cero spam. Te contactaremos en menos de 2 horas hábiles."*
* **Mecanismo:** **Campos de validación con botón final de alta conversión**.
  * Input 1: **Correo Electrónico Corporativo** (`ejemplo@tuempresa.com`)
  * Input 2: **Teléfono / WhatsApp de contacto** (`+51 9XX XXX XXX`)
* **Botón de Envío:**
  * Texto: *"Finalizar Cotización y Solicitar Propuesta ➔"*
  * Estado de carga con micro-animación mientras se procesa el envío.

---

### Pantalla de Confirmación & Éxito (Post-Envío)
* **Visual:** Checkmark animado en cian y partículas lumínicas suaves.
* **Titular:** *"¡Cotización Recibida con Éxito!"*
* **Mensaje:** *"Gracias [Nombre]. Nuestro equipo de producción y cuentas ya está revisando los requerimientos de [Empresa]. Te responderemos en un plazo máximo de 2 horas hábiles."*
* **Resumen de Datos Enviados:** Ficha compacta con lo cotizado (Tipo de evento, Aforo, Rango).
* **Acciones Secundarias:**
  * Botón 1: *"Volver al Sitio Principal"*
  * Botón 2: *"Descargar Credencial Sónica en PDF"* (vinculado a `PRESENTACION SONICA PERU.pdf`)
  * Botón terciario opcional: *"¿Tienes prisa? Escríbenos directamente por WhatsApp"*

---

## 4. Requerimientos Técnicos y de Accesibilidad

1. **Gestión del Estado (State Management):**
   * Almacenamiento reactivo en JavaScript del lado cliente (con respaldo en `sessionStorage` para no perder avance si el usuario recarga la página por accidente).
2. **Navegación por Teclado:**
   * Soporte de atajos de teclado: Las opciones de opción única tendrán letras identificadoras (`[A]`, `[B]`, `[C]`, `[D]`) para permitir contestar pulsando teclas además del ratón/táctil.
   * Tecla `Enter` activa el botón de avanzar en las páginas de texto.
3. **Validaciones en Tiempo Real:**
   * Validación de formato de correo electrónico y longitud mínima de teléfono antes de permitir el envío en la página 10.
4. **Endpoint de Envío (Procesamiento de Leads):**
   * Endpoint de Astro API (`/api/cotizar`) o integración estática segura (Formspree / Webhook / Mailer) que recopila el payload JSON completo con las respuestas de las 10 páginas y envía confirmación sin exponer credenciales.
5. **Rendimiento & Peso:**
   * Cero librerías pesadas externas adicionales; aprovechamiento de Tailwind CSS, GSAP para transiciones entre diapositivas y SVG optimizados.

---

## 5. Criterios de Aceptación

- [ ] La ruta `/cotizar` es accesible independientemente y carga en menos de 1 segundo.
- [ ] La estructura universal (Logo arriba al centro -> Barra de progreso -> Pregunta -> Opciones/Inputs -> Indicador de página) se respeta en las 10 páginas.
- [ ] Las páginas 1, 2, 3, 4, 5 y 9 avanzan de inmediato al pulsar una opción.
- [ ] Las páginas 6 (selección múltiple), 7 (texto libre), 8 (nombre/empresa) y 10 (email/teléfono) muestran un botón ergonómico para continuar.
- [ ] El botón *"← Atrás"* permite volver a la página previa manteniendo las respuestas ya seleccionadas.
- [ ] En la página 10, al enviar, se muestra la pantalla de agradecimiento y confirmación sin abrir WhatsApp forzosamente.
- [ ] Se incluye enlace en el header de la landing page ([`Navbar.astro`](file:///home/laptop/Documentos/sonica-eventos/src/components/Navbar.astro)) y en los botones CTA de [`Hero.astro`](file:///home/laptop/Documentos/sonica-eventos/src/components/Hero.astro) y [`BentoServices.astro`](file:///home/laptop/Documentos/sonica-eventos/src/components/BentoServices.astro) que lleven a `/cotizar`.
