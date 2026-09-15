# PRD: Landing Page Scrollyselling de Alta Conversión — SÓNICA PERÚ

> **Documento de Requerimientos de Producto (PRD)**  
> **Proyecto:** Landing Page Comercial B2B con Scrollyselling Inmersivo  
> **Marca:** SÓNICA PERÚ (Eventos, BTL & Experiencias de Marca)  
> **Versión:** 1.0.0  
> **Fecha de Emisión:** 15 de Septiembre de 2026  
> **Estado:** Listo para Revisión y Correcciones del Usuario  

---

## 1. Resumen Ejecutivo & Visión del Producto

### 1.1 El Problema de Mercado
Las empresas corporativas y multinacionales en Perú enfrentan dos grandes frustraciones al contratar agencias de eventos y marketing experiencial:
1. **La fragmentación de proveedores:** Contratar una productora para el escenario, otra agencia para el BTL, un proveedor externo para el merchandising y un equipo aparte para el video, lo que genera desalineación de marca, sobrecostos y estrés operativo para los gerentes.
2. **Propuestas genéricas y aburridas:** Eventos corporativos rígidos, activaciones predecibles y webinars sin alma que no generan recordación de marca ni orgullo de pertenencia en los colaboradores.

### 1.2 La Solución: Sónica Perú
Sónica Perú se posiciona como el **Socio Estratégico All-in-One de Experiencias Vivas**: una agencia boutique con capacidad de producción propia in-house que fusiona estrategia de marca, escenografía de impacto, adrenalina BTL y producción audiovisual de nivel cinematográfico.

### 1.3 Visión de la Landing Page
Construir una **experiencia web interactiva con scrollyselling cinemático (Astro + Tailwind CSS + GSAP ScrollTrigger)** donde el decisor B2B no lee un catálogo estático, sino que **experimenta una historia visual envolvente**. El recorrido lo guía desde la frustración de la "inercia corporativa" hasta la certeza de que Sónica es la única agencia capaz de ejecutar eventos memorables sin fisuras, culminando en la **reserva de una sesión estratégica de propuesta con el Director de Cuentas**.

---

## 2. Definición de Buyer Personas & Matriz de Decisión B2B

La landing está calibrada para hablarle simultáneamente a los dos perfiles que toman decisiones de contratación en grandes empresas:

### 2.1 Persona A: El Director / Gerente de Marketing (Brand Manager / CMO)
* **Objetivos:** Posicionamiento de marca de alto impacto, generación de PR / cobertura en medios, viralidad en redes sociales (TikTok/Reels), ROI claro de la inversión en eventos y BTL.
* **Dolores:** Agencias que prometen creatividad pero fallan en la ejecución técnica; activaciones feriales vacías o aburridas; falta de contenido audiovisual ágil para redes durante el evento.
* **Qué busca en la web:** Evidencia contundente de casos reales masivos, estética visual de vanguardia (Awwwards level), clientes corporativos respetados (Samsung, Megalabs, Sporting Cristal) y velocidad de respuesta.

### 2.2 Persona B: El Gerente de Gestión Humana / People & Culture
* **Objetivos:** Fiestas corporativas memorables (aniversarios, fiestas de fin de año), integración genuina de equipos multinivel, endomarketing que refuerce el orgullo de pertenencia y clima laboral.
* **Dolores:** La pesadilla logística del día del evento (sonido que falla, comida fría, tiempos muertos); proveedores que dejan al equipo de RRHH haciendo de asistentes de producción.
* **Qué busca en la web:** Seguridad absoluta de que la producción es 100% in-house, testimonios y respaldo de marcas como BBVA, RIMAC o BRECA, y un socio que se haga cargo de la A a la Z sin imprevistos.

---

## 3. Propuesta de Valor & Posicionamiento Central

* **Manifiesto:** *"Donde las ideas no se presentan: Se viven. Conectan. No buscamos llamar la atención. Buscamos dejar huella."*
* **Diferenciadores Clave de Sónica Perú:**
  1. **Capacidad 360° Integral:** De la estrategia creativa y el diseño del stand/escenario hasta el merch premium y el reel final para redes en menos de 24 horas.
  2. **Producción In-House (Cero Intermediarios):** Equipos propios de iluminación, video, sonido y montaje escenográfico.
  3. **Respaldo Corporativo Validado:** Más de 20 marcas líderes (Megalabs, BBVA, Breca, Natura, Urbana Perú, Petroperú, CONMEBOL).
  4. **Adrenalina y Rigor:** Creatividad disruptiva respaldada por precisión de relojero en tiempos y seguridad.

---

## 4. Arquitectura Narrativa de Scrollyselling (El Guion de Conversión)

La página se estructura como una película publicitaria interactiva en **7 actos scrollyselling**:

```
[ ACTO 1: EL IMPACTO ] ──────────► Hero Cinematográfico + Declaración de Postura
         │
[ ACTO 2: LA PRUEBA SOCIAL ] ───► Infinite Marquee de Clientes Corporativos Tier-1
         │
[ ACTO 3: EL MANIFIESTO ] ──────► Scroll-Scrubbed Text Reveal ("Romper Inercias")
         │
[ ACTO 4: LA MÁQUINA 360° ] ────► Bento Grid Interactivo Sticky con las 6 Líneas
         │
[ ACTO 5: LA EVIDENCIA VIVA ] ──► Showcase Multimedia (Reels 9:16 + Escenarios 16:9)
         │
[ ACTO 6: EL BACKSTAGE ] ───────► "Los que Volamos": Cultura, Métricas y Equipo
         │
[ ACTO 7: EL CLÍMAX / CTA ] ────► Formulario B2B para Sesión Estratégica con Cuentas
```

---

## 5. Especificación Detallada Sección por Sección

### Sección 1: Navbar Flotante Glassmorphism
* **Comportamiento:** Suspendido tipo píldora (`top: 1.5rem`), backdrop-blur (`16px`), fondo translúcido `#090D16/80` y borde `rgba(255,255,255,0.08)`.
* **Componentes:**
  * Logotipo vectorial de Sónica Perú con isotipo brillante en acento cian (`#00B2FE`).
  * Enlaces de navegación con scroll suave: `Experiencias`, `Servicios 360°`, `Casos Reales`, `Cultura`.
  * CTA derecho de alta visibilidad: *"Agendar Sesión Estratégica"* (con micro-glow azul cian).

### Sección 2: Hero Section Cinematográfico (Acto 1)
* **Objetivo:** Retener la atención en los primeros 3 segundos y comunicar escala de inmediato.
* **Elementos Visuales:**
  * Video de fondo panorámico en loop (montaje de escenarios LED, luces robóticas y multitudes) con capa de viñeta oscura para garantizar contraste AA.
  * Píldora de estado superior con micro-pulso: `● Producción Integral de Experiencias Corporativas | Lima, Perú`.
* **Copywriting:**
  * **Titular Principal (Display XXL):** *"DISEÑAMOS, PRODUCIMOS Y SORPRENDEMOS."*
  * **Bajada:** *"Transformamos conferencias, galas y activaciones BTL en acontecimientos de marca inolvidables. Sin intermediarios. Con producción 100% propia."*
* **Acciones:**
  * Botón Primario: *"Solicitar Propuesta B2B"* (scroll suave al formulario del Acto 7).
  * Botón Secundario Ghost: *"Ver Showreel (01:34 min)"* (abre un modal interactivo con el video en alta fidelidad).
* **Métricas flotantes de entrada:**
  * `+10 Años` de trayectoria impecable.
  * `+20 Marcas` líderes y multinacionales.
  * `100% In-house` en producción técnica y creativa.

### Sección 3: Validación Instantánea — Infinite Marquee (Acto 2)
* **Objetivo:** Eliminar de inmediato la duda de riesgo en el comprador corporativo.
* **Mecánica:** Franja con movimiento horizontal continuo (marquee sin saltos vía CSS/GSAP).
* **Logos incluidos (Vectoriales monocromáticos en blanco atenuado con hover dinámico):**
  * *BBVA, Megalabs, RIMAC Seguros, Grupo BRECA, Natura & Co, Urbana Perú, Petroperú, CONMEBOL, SGS, Mercado Pago, EsSalud, PromPerú, Clínica Internacional, Línea 1 Metro de Lima.*

### Sección 4: El Manifiesto — Scroll-Scrubbed Reveal (Acto 3)
* **Objetivo:** Establecer la filosofía de la marca y conectar emocionalmente con el usuario.
* **Mecánica GSAP:** Sección anclada (`pin: true`) con revelación de texto palabra por palabra (*scrub* sincronizado al avance del scroll). El texto pasa de gris apagado (`#334155`) a blanco puro brillante (`#F8FAFC`) con resplandor cian al iluminarse.
* **Copywriting:**
  > *"Nacimos para romper inercias. Donde las ideas no se presentan en un PDF aburrido: se viven, vibran y conectan en el mundo real. No buscamos solo llamar la atención por cinco minutos. Diseñamos puestas en escena que se quedan grabadas en la memoria de tu gente para siempre."*

### Sección 5: La Máquina 360° — Bento Grid Interactivo (Acto 4)
* **Objetivo:** Demostrar la solvencia integral all-in-one para responder a la necesidad de Marketing y RRHH sin recurrir a listas aburridas.
* **Diseño:** Cuadrícula Bento asimétrica con tarjetas glassmorphism (`#0E1626/80`) y micro-bordes con gradientes cian sutiles.
* **Las 6 Líneas de Servicio Oficiales:**
  1. **Eventos Corporativos & BTL (Card Principal Destacada):** Convenciones, lanzamientos masivos de marca, galas de fin de año y activaciones en vía pública y ferias.
  2. **Branding & Escenografía:** Arquitectura ferial, módulos interactivos, tótems táctiles, arcos y señalética de gran formato.
  3. **Endomarketing & Cultura Interna:** Team building de impacto, campeonatos deportivos interempresas, celebraciones temáticas y voluntariado corporativo.
  4. **Producción & Merchandising Premium:** Kits de bienvenida VIP, trofeos de madera y acrílico de alta gama, indumentaria técnica y sets personalizados.
  5. **Producción Audiovisual & Contenido:** Cámaras de cine, drones, rodajes chroma key, spots publicitarios y cápsulas para redes en tiempo récord.
  6. **Inteligencia & Experiencia de Marca:** Focus groups, estudios cualitativos, mystery shopper y optimización del customer journey en puntos de contacto.

### Sección 6: Evidencia Viva — Showcase Multimedia Dual (Acto 5)
* **Objetivo:** Mostrar producto real terminado con los videos reales del repositorio.
* **Selector Dinámico con Pestañas:**
  * **Pestaña A: "Reels BTL & Mobile Experience" (Formato Vertical 9:16):**
    * Mockups de smartphones de borde fino con reproducción al hacer hover / tap.
    * *Caso 1: Ladysoft & Cotidian:* Activación ferial con tótems interactivos táctiles, anfitrionas y juegos de premios.
    * *Caso 2: Urbana Park:* Velada inmobiliaria nocturna con iluminación arquitectónica, letras gigantes de luz y barra lounge.
  * **Pestaña B: "Grandes Montajes & Convenciones" (Formato Panorámico 16:9):**
    * Reproductor cinematográfico expansivo.
    * *Caso 1: Megalabs DAHEA:* Lanzamiento farmacéutico de alta categoría con pantallas gigantes y cena de gala.
    * *Caso 2: Megalabs Fiesta Anual:* Producción de integración corporativa masiva con escenario de concierto y show en vivo.

### Sección 7: "Los que Volamos" — Backstage & Seguridad Operativa (Acto 6)
* **Objetivo:** Resolver el miedo del cliente a que las cosas fallen el día del evento.
* **Contenido:**
  * Imágenes de backstage: montajes de estructuras truss, pruebas de consolas de sonido, calibración de luces robóticas y ensayos de equipo.
  * Los 4 pilares de tranquilidad operativa:
    1. *Puntualidad Milimétrica:* Cronogramas de montaje con buffer de seguridad de 4 horas antes de la llegada de invitados.
    2. *Sistemas de Respaldo:* Grupos electrógenos, consolas duplicadas y redundancia técnica en vivo.
    3. *Dirección de Cuentas Dedicada:* Un único punto de contacto senior asignado a tu proyecto 24/7.
    4. *Cobertura Legal y de Seguridad:* Protocolos de seguridad ocupacional, permisos municipales y seguros contra todo riesgo (SCTR/Civil).

### Sección 8: El Clímax de Conversión — Formulario B2B de Sesión Estratégica (Acto 7)
* **Objetivo:** Captar el lead corporativo calificado con alta intención de compra.
* **Estructura del Formulario B2B:**
  * **Cabecera persuasiva:** *"Hablemos de tu próximo evento. Agenda una sesión estratégica de 30 minutos con nuestro Director de Cuentas y recibe una propuesta conceptual personalizada sin costo."*
  * **Selector de Área / Interés (Tabs rápidos):**
    * `[ Marketing & Lanzamientos ]` | `[ Recursos Humanos & Fin de Año ]` | `[ Activación BTL ]` | `[ Producción Integral ]`
  * **Campos estratégicos mínimos:**
    * *Nombre Completo y Cargo* (ej. Brand Manager, Gerente de Gestión Humana).
    * *Empresa / Organización*.
    * *Correo Corporativo* (ej. `nombre@empresa.com`).
    * *Teléfono Móvil / WhatsApp*.
    * *Fecha estimada y aforo aproximado* (desplegable: `<100 personas`, `100 - 500`, `500 - 2000`, `>2000 personas`).
    * *Detalles o visión del proyecto* (campo opcional de texto).
  * **Botón de Envío:** *"Agendar Sesión & Solicitar Propuesta"* (estado loading con spinner sutil y modal de éxito).
  * **Canal Express Alternativo:** Banner o botón verde con llamada directa:  
    *"¿Tienes una fecha urgente o prefieres coordinar de inmediato? Chatea directamente con nuestra dirección comercial vía WhatsApp (+51 948 435 104)"*.

### Sección 9: Footer Institucional & Credenciales
* **Datos Corporativos Verificados:**
  * Dirección: `Calle Manuel Portocarrero 344-A, Surquillo, Lima - Perú`.
  * Teléfono / Central WhatsApp: `+51 948 435 104`.
  * Email Oficial: `leo.dela.c@gmail.com`.
* Enlaces legales, política de privacidad, libro de reclamaciones virtual y copyright de agencia.

---

## 6. Especificación Técnica & Arquitectura Frontend

### 6.1 Stack Tecnológico Seleccionado
* **Framework:** **Astro 5** (Generación de sitios ultra veloces, HTML estático por defecto, islas interactivas de JavaScript para máxima velocidad de carga).
* **Estilos & Utility:** **Tailwind CSS** (configurado con los tokens cromáticos de `desing.md`).
* **Core de Animación:** **GSAP 3 + ScrollTrigger + Lenis** (Smooth scroll nativo que garantiza sincronía perfecta entre el scroll del mouse/touchpad y las animaciones).
* **Iconografía:** Lucide Icons / Iconify (vectoriales limpios sin dependencias pesadas).

### 6.2 Gestión Multimedia & Optimización de Video
* **Videos Locales:** Ubicados en `public/videos/`:
  * `megalabs-dahea-1080.mp4` / clips teaser comprimidos (`webm` / `mp4` H.264 optimizados con Handbrake/ffmpeg).
  * Posters estáticos en formato WebP de alta resolución (`poster.webp`) para carga instantánea antes de la reproducción.
* **Lazy Loading & IntersectionObserver:** Los videos solo cargan su buffer o se reproducen cuando entran en el viewport visible del usuario, liberando memoria y datos en dispositivos móviles.

### 6.3 Desempeño y Accesibilidad (Core Web Vitals)
* **Lighthouse Score Target:**
  * Performance: `> 90`
  * Accessibility: `> 95`
  * Best Practices: `> 95`
  * SEO: `> 95`
* **Accesibilidad:** Detección de `@media (prefers-reduced-motion: reduce)` que desactiva las escenas con pin/scrub de GSAP y muestra el contenido de forma directa y elegante.

---

## 7. Matriz de Skills Especializadas y Aplicación en el Proyecto

A partir del análisis exhaustivo del arsenal de skills disponibles en el entorno de desarrollo, se seleccionan e integran formalmente las siguientes **12 skills clave** para garantizar un estándar visual y técnico de calibre Awwwards:

| # | Skill | Rol & Propósito en Sónica Perú | Sección / Componente Donde Aplica | Patrón de Implementación Técnico |
| :- | :--- | :--- | :--- | :--- |
| **1** | **`cinematic-gsap-lenis-motion-system`** | Orquestador maestro de física de scroll cinemático y sincronización fluida entre Lenis y GSAP. | Global (Toda la página, Navbar, transiciones entre actos). | Lenis RAF atado al `gsap.ticker`, eases `power3.out` / `expo.out`, scrub retrasado `0.8-1.2s`, anticipación de pin `anticipatePin: 1`. |
| **2** | **`gsap-scrolltrigger-storytelling`** | Arquitectura de escenas ancladas y revelación progresiva de narrativa ("Scrollyselling"). | Acto 1 (Hero), Acto 4 (Bento Sticky) y Acto 5 (Showcase Multimedia). | Pinned scenes (`pin: true`), timelines scrubbed sincronizados al scroll del usuario y swaps limpios de contenido sin saltos bruscos. |
| **3** | **`scroll-scrubbed-word-reveal`** | Revelación tipográfica palabra por palabra sincronizada con el scroll del usuario sin perder accesibilidad. | Acto 3 (El Manifiesto: *"Nacimos para romper inercias..."*). | Uso de `TreeWalker` para separar tokens sin destruir el árbol semántico DOM, mapeo de CSS property `--word-progress`, transición de `#334155` a `#F8FAFC` con halo cian. |
| **4** | **`marquee-loop`** | Cinta continua e infinita de logotipos corporativos sin saltos ni tirones. | Acto 2 (Marquee de Clientes Corporativos Tier-1). | Secuencia duplicada idéntica al 50%, animación `translateX` lineal con `will-change: transform`, máscaras laterales de difuminado y pausa sutil en hover. |
| **5** | **`progressive-blur`** | Difuminado progresivo de bordes por capas escalonadas (`backdrop-filter`) sin cortes duros. | Navbar flotante superior y base del Hero/Showcase de video. | Contenedor con 6 capas de gradientes lineales y máscaras escalonadas de desenfoque (`0.5px` a `16px`) para fundir el video con el lienzo oscuro. |
| **6** | **`beautiful-shadows`** | Sistema de elevación neutra multicapa de alta fidelidad, superando las sombras planas de Tailwind por defecto. | Tarjetas del Bento Grid, modal de Showreel y contenedor del Formulario B2B. | Tokens exactos de sombras multicapa (`Beautiful md` para cards estándar y `Beautiful lg` para contenedores focales y modales de video). |
| **7** | **`css-border-gradient`** | Bordes ultrafinos (1px) con gradientes luminosos angulares que definen el estilo *Dark Luxe*. | Tarjetas glassmorphism, cápsula de Navbar y selector de pestañas (Tabs). | Pseudo-elementos con máscara `padding-box` / `border-box` a `135deg` combinando cian `#00B2FE` (`opacity: 0.35`) con blanco translúcido y fade a transparente. |
| **8** | **`beam-glow-states`** | Micro-animación de haz de luz perimetral viajero para estados activos, focos y hover. | Botones de conversión primaria ("Agendar Sesión") y tabs activas de formato de video (9:16 / 16:9). | Luz perimetral animada con CSS variables que recorre los bordes redondeados al interactuar o enfocar un campo clave. |
| **9** | **`landing-page`** | Estrategia de conversión B2B, arquitectura AIDA (Atención, Interés, Deseo, Acción) y copywriting de alto valor. | Estructura global, diseño del Formulario B2B, matriz de objeciones y llamadas a la acción. | Copywriting enfocado en aliviar dolores ejecutivos (ROI, cero estrés logístico, producción 100% in-house) y diseño de funnel de alta intención. |
| **10** | **`design-taste-frontend` & `no-ai-design-slop`** | Filtro de calidad estética contra clichés de diseño genérico de IA y patrones predecibles. | Sistema de diseño, layout, espaciados y jerarquía visual general. | Prohibición estricta de: fondo `#000000` puro, emojis infantiles, filas simétricas aburridas de 3 tarjetas, textos genéricos tipo Lorem Ipsum o animaciones rebotantes. |
| **11** | **`high-end-visual-design` & `emil-design-eng`** | Filosofía de pulido de interfaz, micro-detalles táctiles y física de resortes premium. | Interacciones de botones, modales, drawers, cards hover y transiciones de formularios. | Easing curvo de resorte con damping calibrado, micro-elevaciones en hover (`translateY(-2px)` con `scale: 1.01`), tiempos de respuesta bajo 200ms y sensación física consistente. |
| **12** | **`tailwindcss`** | Motor utilitario de estilos rápido, altamente mantenible y estructurado mediante design tokens. | Toda la arquitectura CSS del proyecto Astro. | Configuración de temas extendida con variables CSS `--bg-canvas`, `--accent-primary`, `--border-subtle`, tipografías Display (`Outfit`) y Body (`Plus Jakarta Sans`). |

---

## 8. Plan de Trabajo & Próximos Pasos

1. **Paso 1 (Actual):** Revisión de este PRD enriquecido con el usuario para afinar detalles, textos, secciones o preferencias específicas.
2. **Paso 2:** Inicialización del proyecto Astro en el repositorio con Tailwind CSS, GSAP, Lenis y configuración de fuentes locales (`Outfit` y `Plus Jakarta Sans`).
3. **Paso 3:** Extracción y optimización de clips/posters de los videos MP4 del repositorio a la carpeta de assets públicos.
4. **Paso 4:** Construcción secuencial de componentes (Navbar, Hero cinemático, Marquee, Manifiesto Scrub, Bento 360°, Showcase de Videos, Backstage y Formulario B2B).
5. **Paso 5:** Calibración fina de ScrollTrigger, verificación de accesibilidad (`prefers-reduced-motion`) y pruebas en navegadores.

---

> **Aprobación Requerida:**  
> Por favor revisa la matriz de skills integrada y las secciones del PRD. ¿Tienes alguna corrección adicional o pasamos a la fase de inicialización del proyecto?
