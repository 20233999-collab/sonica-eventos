# Sistema de Diseño & Especificación UI/UX: SÓNICA PERÚ

> **Documento Rector de Diseño y Arquitectura Web (`desing.md`)**  
> *Versión:* 1.0.0  
> *Objetivo:* Servir como la única fuente de la verdad para el diseño y desarrollo frontend del sitio web oficial de **Sónica Perú**, garantizando una experiencia visual inmersiva, de estándar internacional (calidad Awwwards / Creative Agency), con alta conversión de clientes corporativos.

---

## 1. Concepto Rector & Atmósfera Visual

### 1.1 El Vibe de la Marca
Sónica Perú no es una empresa de logística tradicional; es una **agencia de experiencias vivas** que fusiona la adrenalina del BTL, la escala de las grandes conferencias y la precisión de la producción audiovisual.
* **Tono:** Audaz, enérgico, corporativo de alto nivel, contemporáneo y vibrante.
* **Metáfora visual:** *Energía lumínica y puesta en escena*. Inspirada en las pantallas LED de gran formato, las estructuras metálicas de truss, la iluminación robótica de conciertos y la pulcritud de los eventos corporativos de élite.
* **Densidad:** *Equilibrada y cinematográfica (Escala 4/10)* — Espacios en blanco amplios y respirados, bloques de contenido asimétricos y encuadres limpios que dejan brillar la fotografía y el video real.
* **Nivel de movimiento:** *Dinámico con física de resortes (Escala 7/10)* — Animaciones fluidas al hacer scroll, transiciones elásticas en hover y video-reels sin fricción.

---

## 2. Paleta de Color Calibrada (Design Tokens)

La paleta se extrae fielmente de la identidad corporativa de Sónica Perú (azul cian brillante sobre fondos contrastados y limpios), complementada con una base nocturna / dark-luxe diseñada para pantallas digitales:

```
[ Canvas Dark ]         [ Surface Card ]        [ Cyan Eléctrico ]      [ Cyan Glow ]
   #090D16                 #0F172A                 #00B2FE                 #00E5FF
  Fondos base             Contenedores            Acento Primario         Efectos hover

[ Blanco Puro ]         [ Gris Texto ]          [ Muted Border ]        [ Brand Blue ]
   #F8FAFC                 #94A3B8            rgba(255,255,255,0.08)       #0077B6
  Títulos/Lienzo          Párrafos                Líneas y divisiones     Gradientes
```

### Tabla de Tokens Cromáticos:

| Token Semántico | Valor Hex / RGBA | Uso en Interfaz |
| :--- | :--- | :--- |
| **`--bg-canvas`** | `#090D16` | Fondo principal de la web (azul noche ultra profundo, evita el `#000000` plano). |
| **`--bg-surface`** | `#0E1626` | Superficie de cards, paneles y modales con elevación sutil. |
| **`--bg-surface-elevated`**| `#162035` | Estado hover de tarjetas e inputs activos. |
| **`--accent-primary`** | `#00B2FE` | Color insignia de Sónica Perú: botones CTA principales, acentos de texto, bordes activos. |
| **`--accent-glow`** | `rgba(0, 178, 254, 0.25)` | Halo de iluminación sutil en botones destacados y cards principales. |
| **`--accent-secondary`**| `#0077B6` | Tono de soporte para gradientes y fondos secundarios. |
| **`--text-primary`** | `#F8FAFC` | Titulares y textos de alta jerarquía (Zinc-50). |
| **`--text-secondary`** | `#94A3B8` | Textos de descripción, bajadas y etiquetas secundarias (Slate-400). |
| **`--text-muted`** | `#64748B` | Metadatos, marcas de agua numéricas y pies de página. |
| **`--border-subtle`** | `rgba(255, 255, 255, 0.08)` | Bordes ultrafinos de 1px para tarjetas glassmorphism y divisores. |
| **`--border-focus`** | `rgba(0, 178, 254, 0.5)` | Borde al enfocar inputs o interactuar con componentes. |

---

## 3. Arquitectura Tipográfica

Se descarta la tipografía genérica de sistema y la típica fuente `Inter` para dotar a la web de una voz de agencia moderna, técnica y sofisticada.

* **Tipografía Display (Títulos & Hero):** `Outfit` o `Cabinet Grotesk`
  * *Pesos:* Bold (700) y Black (900).
  * *Tracking:* Ligeramente ajustado (`letter-spacing: -0.03em`).
  * *Estilo:* Mayúsculas para llamados de impacto ("DISEÑAMOS, PRODUCIMOS Y SORPRENDEMOS").
* **Tipografía de Cuerpo (Lectura & UI):** `Plus Jakarta Sans` o `Satoshi`
  * *Pesos:* Regular (400) y Medium (500).
  * *Leading:* Relajado (`line-height: 1.6`).
  * *Máxima longitud:* 60–65 caracteres por línea para lectura descansada.
* **Tipografía Mono (Metadatos & Cifras):** `Geist Mono` o `JetBrains Mono`
  * *Pesos:* Medium (500).
  * *Uso:* Fechas, numeración de secciones (`01 / 06`), estadísticas (`+100`, `98%`).

### Escala Tipográfica Responsiva:
* **Display XXL (Hero):** `clamp(2.5rem, 6vw, 4.5rem)` — Leading `1.05`
* **H1 (Títulos de Sección):** `clamp(2rem, 4vw, 3.25rem)` — Leading `1.15`
* **H2 (Tarjetas de Servicios):** `clamp(1.5rem, 2.5vw, 2rem)` — Leading `1.2`
* **H3 (Subtítulos & Nombres):** `1.25rem` (20px)
* **Body Grande:** `1.125rem` (18px)
* **Body Regular:** `1rem` (16px)
* **Caption / Metadato:** `0.875rem` (14px) / `0.75rem` (12px en mono)

---

## 4. Arquitectura de Información & Wireframe de la Web

La web estará planteada como una **experiencia Landing Page de Alto Impacto** orientada a la conversión de leads corporativos (con posibilidad de páginas interiores o modales dinámicos):

```
┌────────────────────────────────────────────────────────┐
│ 1. NAVBAR: Logo Sónica + Navegación + Botón WhatsApp    │
├────────────────────────────────────────────────────────┤
│ 2. HERO SECTION: Video Showreel en loop + Titular      │
│    "Diseñamos, producimos y sorprendemos" + CTA Cotizar│
├────────────────────────────────────────────────────────┤
│ 3. SOCIAL PROOF BANNER: Infinite Marquee de Logos      │
│    (BBVA, Megalabs, RIMAC, BRECA, Natura, etc.)        │
├────────────────────────────────────────────────────────┤
│ 4. MANIFIESTO: "Nuestra Alma" (Texto editorial en      │
│    scroll-reveal interactivo)                          │
├────────────────────────────────────────────────────────┤
│ 5. LAS 6 LÍNEAS DE SERVICIO (Bento Grid / Tabs)        │
│    Eventos/BTL, Merch, Branding, Digital, AudioV, Exp. │
├────────────────────────────────────────────────────────┤
│ 6. SHOWCASE MULTIMEDIA (Reels 9:16 & Videos 16:9)      │
│    Ladysoft, Urbana Park, Megalabs DAHEA & Fiesta      │
├────────────────────────────────────────────────────────┤
│ 7. INTELIGENCIA DE MARCA & METRICAS (Estudios/Mistery) │
├────────────────────────────────────────────────────────┤
│ 8. NUESTRA ACTITUD / LOS QUE VOLAMOS (Cultura y fotos) │
├────────────────────────────────────────────────────────┤
│ 9. LEAD CONVERSION / FORMULARIO: Cotizador interactivo │
│    + Contacto directo por WhatsApp                    │
├────────────────────────────────────────────────────────┤
│ 10. FOOTER: Datos fiscales, Surquillo, Redes y Legal   │
└────────────────────────────────────────────────────────┘
```

### Detalle de Secciones:

#### 1. Header / Navbar Flotante
* **Diseño:** Barra suspendida tipo cápsula con efecto *glassmorphism* (`backdrop-filter: blur(16px)`), fondo translúcido (`rgba(9, 13, 22, 0.75)`) y borde sutil de 1px.
* **Componentes:**
  * Isotipo/Logotipo Sónica Perú con isotipo 3D.
  * Links con scroll suave: `#servicios`, `#portafolio`, `#clientes`, `#nosotros`.
  * Botón CTA destacado: *"Cotizar Evento"* (con micro-glow en hover).

#### 2. Hero Section Cinematográfico
* **Fondo:** Loop de video sutil y comprimido con máscara de viñeta oscura para asegurar máxima legibilidad de los textos.
* **Titular Principal:** 
  > *"DISEÑAMOS, PRODUCIMOS Y SORPRENDEMOS."*  
  > *Experiencias corporativas y eventos que rompen inercias.*
* **Píldora / Badge Superior:** Indicador interactivo `● Productora Integral en Lima, Perú`.
* **CTAs Principales:**
  1. Botón primario: *"Iniciar Proyecto / Cotizar"* (abre drawer o salta a formulario).
  2. Botón secundario con icono Play: *"Ver Showreel (01:34 min)"* (abre lightbox con video).
* **Métricas de Confianza:** 
  * `+10` Años de trayectoria
  * `+20` Marcas multinacionales y líderes
  * `100%` Producción propia in-house

#### 3. Marquee de Clientes (Validación Inmediata)
* Cinta infinita continua sin saltos (*infinite marquee loop*).
* Logos monocromáticos en blanco atenuado (`opacity: 0.65`, con hover a color y escala `1.05`):
  * *Megalabs, RIMAC, BBVA, Breca, Natura, Urbana Perú, Petroperú, CONMEBOL, SGS, Mercado Pago, EsSalud, etc.*

#### 4. Manifiesto "Nuestra Alma"
* Diseño tipográfico editorial de gran escala.
* Efecto *scroll-scrubbed reveal* (las palabras se iluminan de gris a blanco brillante a medida que el usuario desciende en la página).
* Extracto: *"Donde las ideas no se presentan: Se viven. Conectan. No buscamos llamar la atención. Buscamos dejar huella."*

#### 5. Verticales de Negocio (Bento Grid Interactivo)
Estructura en grid asimétrica de 6 bloques, cada uno con preview fotográfico de los proyectos del PDF:
1. **Eventos & BTL:** Tarjeta grande destacada (fotos de maratón, mega-árbol Larcomar, estadios y conciertos).
2. **Producción & Merchandising:** Detalle de productos premium (sets de coctelería, trofeos de acrílico/madera, kits corporativos).
3. **Branding & Comunicación:** Stands feriales, arcos de meta y presencia de marca.
4. **Marketing Digital:** Estrategia omnicanal, redes y performance de marca.
5. **Producción Audiovisual:** Cámaras de cine, drones, sets de estudio e iluminación.
6. **Inteligencia & Experiencia de Marca:** Focus groups, Mystery Shopper y auditoría de servicio.

#### 6. Showcase de Video & Casos de Éxito
Sección estrella donde se integran los archivos de video del repositorio:
* **Selector de Formato:** Pestañas para alternar entre *"Reels BTL (Formato Vertical 9:16)"* y *"Grandes Producciones (Formato 16:9)"*.
* **Reels Móviles (Mockup Interactivo):**
  * **Caso 1: Ladysoft & Cotidian:** Stand tecnológico ferial, pantallas táctiles y dinámicas BTL.
  * **Caso 2: Urbana Park:** Velada de lanzamiento nocturno con arquitectura lumínica y lounge.
  * *Funcionalidad:* Reproducción con preview muted al pasar el mouse (hover to play) y clic para abrir en pantalla completa con audio.
* **Coberturas Panorámicas (16:9):**
  * **Megalabs DAHEA:** Lanzamiento médico de alta categoría.
  * **Megalabs Fiesta:** Producción de fiesta masiva con escenario LED y show musical.

#### 7. Nuestra Actitud / "Los que Volamos"
* Estilo visual desestructurado con fotos de backstage (cámaras, montaje, equipo en acción).
* Texto protagonista: *"Nos gusta el caos antes del orden, la música antes del guion, la emoción antes del aplauso. Cazadores de momentos, contadores de historias."*

#### 8. Formulario de Cotización de Alta Conversión
* En lugar de un formulario frío, un **cotizador interactivo por pasos**:
  1. *¿Qué tipo de experiencia necesitas?* (Eventos corporativos / BTL y activación / Merchandising / Audiovisual / Estrategia integral).
  2. *Cantidad estimada de asistentes / alcance.*
  3. *Fecha aproximada del evento.*
  4. *Datos de contacto (Nombre, Empresa, Correo, Teléfono).*
* Botón de envío directo con confirmación instantánea.
* Acceso directo lateral: Botón verde con enlace dinámico a WhatsApp (`https://wa.me/51948435104`) con mensaje precargado.

#### 9. Footer Institucional
* Datos de contacto verificados:
  * Dirección: `Calle Manuel Portocarrero 344-A, Surquillo, Lima - Perú`
  * Teléfono: `+51 948 435 104`
  * Correo: `leo.dela.c@gmail.com`
* Enlaces a redes sociales con iconos vectoriales limpios (Instagram, Facebook, Telegram, WhatsApp).
* Copyright legal y sello de agencia.

---

## 5. Especificaciones de Componentes UI

### 5.1 Botones (Buttons)
* **Botón Primario:**
  * Fondo: `#00B2FE` con degradado sutil a `#0090EA`.
  * Texto: `#FFFFFF`, peso `600`, tracking `0.02em`.
  * Border radius: `9999px` (Pill moderno) o `12px` con chamfer sutil.
  * Sombra: `0 8px 24px -4px rgba(0, 178, 254, 0.35)`.
  * Micro-interacción: En hover se escala `1.03` con transición spring (`transform: translateY(-2px)`).
* **Botón Secundario / Ghost:**
  * Fondo: Translúcido `rgba(255, 255, 255, 0.04)`.
  * Borde: 1px sólido `rgba(255, 255, 255, 0.15)`.
  * Hover: Fondo `rgba(255, 255, 255, 0.1)` y borde `rgba(0, 178, 254, 0.6)`.

### 5.2 Tarjetas (Glass Bento Cards)
* Fondo: `rgba(14, 22, 38, 0.7)`.
* Borde: 1px perimetral con gradiente sutil (`linear-gradient(135deg, rgba(255,255,255,0.12), rgba(0,178,254,0.1), transparent)`).
* Backdrop-filter: `blur(20px)`.
* Corner radius: `20px` a `24px`.
* Hover state: Elevación del borde en color cian y ligero zoom en la imagen de fondo (`scale: 1.05` con `overflow: hidden`).

### 5.3 Reproductores de Video (Reel Player)
* Relación de aspecto: `9:16` estricto en mobile/reels y `16:9` en videos estándar.
* Controles: Botón flotante central de Play/Pause con blur y aro cian; control de volumen discreto en la esquina inferior derecha.
* Optimización: Carga diferida (`lazy loading`) con poster JPG estático de alta calidad extraído de los fotogramas para no penalizar el tiempo de carga inicial.

---

## 6. Filosofía de Movimiento y Animación

* **Motor recomendado:** `GSAP` + `ScrollTrigger` o `Framer Motion` (si se usa React/Next.js).
* **Curva de aceleración (Easing):** Resortes cinemáticos (`cubic-bezier(0.16, 1, 0.3, 1)` o spring physics `stiffness: 120, damping: 18`).
* **Microinteracciones continuas:**
  * Puntos de estado pulsantes (*"Live"* indicator).
  * Shimmer sutil en bordes de los CTAs clave.
  * Movimiento parallax leve en las capas fotográficas de los eventos al mover el cursor en escritorio.
* **Accesibilidad:** Soporte estricto para usuarios con `@media (prefers-reduced-motion: reduce)`, desactivando paralajes y manteniendo transiciones directas de opacidad.

---

## 7. Reglas Responsivas y Adaptabilidad Móvil

* **Breakpoints:**
  * Mobile: `< 640px` (Single column obligatoria, reels ocupan ancho completo con bordes redondeados).
  * Tablet: `640px - 1024px` (Grid de 2 columnas).
  * Desktop: `> 1024px` (Grid bento de 3 a 4 columnas asimétricas).
  * Ultra-wide: `max-width: 1440px` centrado con padding perimetral de seguridad (`clamp(1.5rem, 5vw, 4rem)`).
* **Navegación Móvil:** Drawer inferior o menú pantalla completa con desenfoque de fondo y animación escalonada de enlaces.
* **Objetivos táctiles (Touch Targets):** Mínimo `48px x 48px` en todos los elementos interactivos en pantallas móviles.

---

## 8. Anti-Patrones Explícitos (Lo que queda ESTRICTAMENTE PROHIBIDO)

Para asegurar una estética de agencia boutique internacional y evitar el aspecto de plantilla genérica:
1. ❌ **Prohibido el uso de emojis:** Nada de cohetes 🚀, fueguitos 🔥 o caras felices en la interfaz. La marca comunica solidez y madurez corporativa mediante tipografía e iconografía vectorial refinada.
2. ❌ **Prohibido el fondo negro puro (`#000000`):** Toda la oscuridad debe manejarse con tonos noche azulosos (`#090D16` / `#0E1626`) que aportan profundidad y evitan el empaste visual.
3. ❌ **Prohibido el texto "Lorem Ipsum":** Cada bloque de texto debe contener copys reales extraídos de la presentación comercial de Sónica Perú.
4. ❌ **Prohibido fuentes genéricas como Arial, Times New Roman o Inter:** Se deben respetar las familias geométricas modernas seleccionadas.
5. ❌ **Prohibidos los glows de neón saturados al estilo gamer/cripto:** El color cian `#00B2FE` se usa con elegancia y propósito, no como un festival de luces neón desenfocadas.
6. ❌ **Prohibidas las filas de 3 tarjetas idénticas y simétricas:** La composición debe ser variada, asimétrica y rítmica (formato Bento Grid).
