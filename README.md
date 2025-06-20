# 🏢 Alcalde Mil - Sitio Web Corporativo

## 📋 Descripción del Proyecto

**Alcalde Mil** es un sitio web corporativo para un desarrollo inmobiliario de lujo ubicado en el centro de Guadalajara, México. El proyecto presenta departamentos de 1 y 2 recámaras frente al Parque Agua Azul, con un diseño moderno y responsivo que optimiza la experiencia del usuario.

### 🎯 Características Principales

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Optimización de Imágenes**: Carga progresiva y formatos WebP
- **SEO Optimizado**: Meta tags y estructura semántica
- **Formulario de Contacto**: Integración con FormSubmit para captura de leads
- **Galería Interactiva**: Modal con navegación para visualizar imágenes
- **Botón de WhatsApp**: Contacto directo integrado

## 🏗️ Estructura del Proyecto

```
alcalde-mil/
├── assets/
│   ├── logo_big.png                    # Logo principal
│   ├── logo.png                        # Logo alternativo
│   ├── LOGOS ALCALDE MIL/              # Logos corporativos
│   │   ├── ALCALDE1000_LOGOTIPO.ai
│   │   ├── ALCALDE1000_LOGOTIPO(azul)_Mesa de trabajo 1.png
│   │   ├── ALCALDE1000_LOGOTIPO(BLANCO)_Mesa de trabajo 1.png
│   │   ├── ALCALDE1000_LOGOTIPO(COLOR)_Mesa de trabajo 1.png
│   │   ├── casillas_black.png
│   │   ├── casillas_white.png
│   │   └── favicon.ico
│   ├── pdf/                            # Documentos legales
│   │   ├── aviso-de-privacidad-grupo-casillas.pdf
│   │   ├── carta-derechosconsumidor-grupo-casillas.pdf
│   │   ├── carta-no-discriminacion-grupocasillas.pdf
│   │   └── contrato-profeco-grupo-casillas.pdf
│   └── RENDERS ALCALDE MIL/            # Imágenes del proyecto
│       ├── casillas_color.png
│       ├── casillas.png
│       ├── catedral_gdl.png
│       ├── catedral.jpg
│       ├── COWORKING.jpg
│       ├── COWORKING.webp
│       ├── DPTO 1 REC.png
│       ├── DPTO 2 REC.png
│       ├── FACHADA DESDE 16 DE SEPTIEMBRE.png
│       ├── fachada_opt.webp
│       ├── g_casillas.png
│       ├── GIMNASIO.jpeg
│       ├── GIMNASIO.webp
│       ├── hero.webp
│       ├── icon-coworking.svg
│       ├── icon-gym.svg
│       ├── icon-mall.svg
│       ├── icon-playground.svg
│       ├── icon-reading.svg
│       ├── icon-roof.svg
│       ├── JUEGOS.jpg
│       ├── LOBBY.jpg
│       ├── mapa.png
│       ├── mapa.svg
│       ├── parque.jpg
│       ├── paseo_gdl.png
│       ├── PATIO CENTRAL.jpeg
│       ├── PATIO CENTRAL.webp
│       ├── TERRAZA NOCTURNA_1.jpg
│       ├── TERRAZA NOCTURNA_2.jpg
│       ├── TERRAZA_NOCTURNA_1_OPT.webp
│       ├── VISTA AÉREA 1_DESDE AGUA AZUL.jpg
│       ├── VISTA ROOF.jpeg
│       └── VISTA ROOF.webp
├── css/
│   ├── animations.css                  # Animaciones personalizadas
│   └── styles.css                      # Estilos principales
├── js/
│   ├── gallery.js                      # Funcionalidad de galería
│   ├── main.js                         # JavaScript principal
│   └── progressive-images.js           # Carga progresiva de imágenes
├── index.html                          # Página principal
├── netlify.toml                        # Configuración de Netlify
├── optimize-images.sh                  # Script de optimización
└── README.md                           # Este archivo
```

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript (ES6+)**: Funcionalidad interactiva
- **Tailwind CSS**: Framework de utilidades CSS (CDN)

### Fuentes
- **Libre Baskerville**: Títulos y encabezados
- **Work Sans**: Texto del cuerpo

### Optimización
- **WebP**: Formato de imagen optimizado
- **Lazy Loading**: Carga diferida de imágenes
- **Progressive Images**: Carga progresiva
- **Preload**: Precarga de recursos críticos

### Deployment
- **Netlify**: Hosting y CDN
- **FormSubmit**: Procesamiento de formularios

## 🎨 Paleta de Colores

```css
:root {
    --color-primary: #4c5473;      /* Azul principal */
    --color-accent: #e2da92;       /* Dorado acento */
    --color-background: #f7f5e5;   /* Fondo crema */
    --color-text: #4c4c4c;         /* Texto gris */
}
```

## 📱 Secciones del Sitio

### 1. **Header/Navegación**
- Logo principal de Alcalde Mil
- Menú de navegación responsivo
- Logo de Grupo Casillas (enlace externo)
- Menú móvil con toggle

### 2. **Hero Section**
- Imagen de fondo con animación de zoom
- Títulos animados con delays
- Call-to-action principal

### 3. **Sobre el Proyecto**
- Descripción del desarrollo inmobiliario
- Integración urbana y visión de futuro

### 4. **Galería de Imágenes**
- 6 imágenes principales del proyecto
- Modal interactivo con navegación
- Animaciones de entrada

### 5. **Amenidades**
- 6 amenidades principales con iconos SVG
- Área infantil, coworking, patio central
- Zona comercial, gimnasio, zona de lectura

### 6. **Modelos de Departamentos**
- Modelo 1 recámara: 46 m²
- Modelo 2 recámaras: 70 m²
- Imágenes renderizadas de cada modelo

### 7. **Ubicación**
- Mapa SVG interactivo
- Ubicación estratégica en el centro

### 8. **Contacto y Footer**
- Formulario de captura de leads
- Enlaces a documentos legales
- Información de contacto
- Botón flotante de WhatsApp

## 🔧 Configuración y Personalización

### Enlaces Importantes a Configurar

#### 📞 Información de Contacto
```html
<!-- Teléfono principal -->
<a href="tel:+523327967023">TELÉFONO 332 796 7023</a>

<!-- WhatsApp -->
<a href="https://wa.me/523327967023">Contacto WhatsApp</a>
```

#### 📧 Formulario de Contacto
```html
<!-- Endpoint del formulario -->
action="https://formsubmit.co/ajax/landing@grupo4c.com.mx"

<!-- Redirección después del envío -->
<input type="hidden" name="_next" value="https://grupo4c.com.mx/alcalde-mil-master/">
```

#### 🔗 Enlaces Externos
```html
<!-- Sitio web de Grupo Casillas -->
<a href="https://grupocasillas.mx/" target="_blank" rel="noopener noreferrer">

<!-- Documentos legales -->
<a href="assets/pdf/aviso-de-privacidad-grupo-casillas.pdf">
<a href="assets/pdf/contrato-profeco-grupo-casillas.pdf">
<a href="assets/pdf/carta-derechosconsumidor-grupo-casillas.pdf">
<a href="assets/pdf/carta-no-discriminacion-grupocasillas.pdf">
```

### 🖼️ Imágenes a Personalizar

#### Imágenes Principales
- `assets/RENDERS ALCALDE MIL/hero.webp` - Imagen principal del hero
- `assets/RENDERS ALCALDE MIL/fachada_opt.webp` - Fachada del edificio
- `assets/RENDERS ALCALDE MIL/DPTO 1 REC.png` - Modelo 1 recámara
- `assets/RENDERS ALCALDE MIL/DPTO 2 REC.png` - Modelo 2 recámaras

#### Logos
- `assets/logo_big.png` - Logo principal
- `assets/LOGOS ALCALDE MIL/casillas_black.png` - Logo Grupo Casillas
- `assets/LOGOS ALCALDE MIL/favicon.ico` - Favicon

#### Galería
- `assets/RENDERS ALCALDE MIL/TERRAZA_NOCTURNA_1_OPT.webp`
- `assets/RENDERS ALCALDE MIL/PATIO CENTRAL.webp`
- `assets/RENDERS ALCALDE MIL/COWORKING.webp`
- `assets/RENDERS ALCALDE MIL/VISTA ROOF.webp`
- `assets/RENDERS ALCALDE MIL/GIMNASIO.webp`

### 📝 Contenido a Personalizar

#### Textos Principales
```html
<!-- Título principal -->
<h1>VIVE EN EL CENTRO DE GUADALAJARA.</h1>

<!-- Subtítulo -->
<p>DEPARTAMENTOS DE 1 Y 2 RECÁMARAS</p>

<!-- Descripción del proyecto -->
<h2>Elegir Alcalde Mil es pensar en el futuro.</h2>
```

#### Información de Amenidades
- Área infantil
- Coworking
- Patio central
- Zona comercial
- Gimnasio
- Zona de lectura

#### Especificaciones Técnicas
- Modelo 1 recámara: 46 m²
- Modelo 2 recámaras: 70 m²

## 📧 Configuración de FormSubmit

### Configuración Actual
El formulario está configurado para enviar los leads a través de FormSubmit con las siguientes configuraciones:

```html
<form class="space-y-4" id="leadForm" action="https://formsubmit.co/ajax/landing@grupo4c.com.mx" method="POST" onsubmit="return false;">
    <!-- Redirección después del envío -->
    <input type="hidden" name="_next" value="https://grupo4c.com.mx/alcalde-mil-master/">
    
    <!-- Deshabilitar captcha -->
    <input type="hidden" name="_captcha" value="false">
    
    <!-- Evitar mensaje intermedio -->
    <input type="hidden" name="_autoresponse" value="Gracias por tu interés en Alcalde Mil. Nos pondremos en contacto contigo pronto.">
    <input type="hidden" name="_template" value="table">
</form>
```

### Campos del Formulario
1. **Nombre completo** (`nombre`) - Campo requerido
2. **WhatsApp** (`telefono`) - Campo requerido, formato: 10 dígitos
3. **Correo electrónico** (`email`) - Campo requerido
4. **Interés** (`interes`) - Selector con opciones:
   - Invertir
   - Vivir
   - Más información
5. **Términos y condiciones** (`terminos`) - Checkbox requerido

### Personalización de FormSubmit

#### Cambiar Email de Destino
```html
<!-- Cambiar landing@grupo4c.com.mx por el email deseado -->
action="https://formsubmit.co/ajax/tu-email@dominio.com"
```

#### Cambiar Página de Redirección
```html
<!-- Cambiar la URL de redirección después del envío -->
<input type="hidden" name="_next" value="https://tu-dominio.com/gracias">
```

#### Configurar Respuesta Automática
```html
<!-- Personalizar el mensaje de respuesta automática -->
<input type="hidden" name="_autoresponse" value="Tu mensaje personalizado aquí">
```

#### Habilitar/Deshabilitar Captcha
```html
<!-- Para habilitar captcha -->
<input type="hidden" name="_captcha" value="true">

<!-- Para deshabilitar captcha (actual) -->
<input type="hidden" name="_captcha" value="false">
```

#### Configurar Plantilla de Email
```html
<!-- Usar plantilla de tabla (actual) -->
<input type="hidden" name="_template" value="table">

<!-- O usar plantilla básica -->
<input type="hidden" name="_template" value="basic">
```

### Procesamiento JavaScript
```javascript
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            window.location.href = 'https://grupo4c.com.mx/alcalde-mil-master/';
        }
    })
    .catch(() => {
        submitButton.disabled = false;
    });
});
```

## 🚀 Instalación y Deployment

### Desarrollo Local
1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Para desarrollo con servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```

### Deployment en Netlify
1. Conecta tu repositorio a Netlify
2. Configura el directorio de publicación como `/`
3. El archivo `netlify.toml` ya incluye la configuración optimizada

### Optimización de Imágenes
```bash
# Ejecutar script de optimización
chmod +x optimize-images.sh
./optimize-images.sh
```

## ⚡ Optimizaciones Implementadas

### Performance
- **Lazy Loading**: Todas las imágenes cargan bajo demanda
- **Preload**: Imágenes críticas precargadas
- **WebP**: Formato de imagen optimizado
- **Compresión**: Imágenes comprimidas automáticamente
- **Caché**: Headers de caché configurados

### SEO
- Meta tags completos
- Open Graph tags
- Estructura semántica HTML5
- Alt text en todas las imágenes
- URLs amigables

### Accesibilidad
- ARIA labels
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos

## 📊 Analytics y Tracking

### Formulario de Contacto
- Integración con FormSubmit
- Redirección automática después del envío
- Respuesta automática configurada
- Validación de campos

### WhatsApp Tracking
- Botón flotante con número configurado
- Tooltip informativo al hacer hover

## 🔒 Seguridad

### Headers de Seguridad
```toml
X-Frame-Options = "DENY"
X-XSS-Protection = "1; mode=block"
X-Content-Type-Options = "nosniff"
```

### Formularios
- Validación del lado del cliente
- Sanitización de datos
- Protección CSRF con FormSubmit

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características Responsivas
- Menú hamburguesa en móvil
- Imágenes adaptativas
- Tipografía escalable
- Grid layouts flexibles

## 🎭 Animaciones

### Tipos de Animaciones
- **Fade In**: Elementos que aparecen suavemente
- **Slide Up**: Elementos que se deslizan hacia arriba
- **Scale**: Efectos de escala en hover
- **Zoom**: Animación de zoom en hero
- **Stagger**: Animaciones secuenciales

### Configuración
```css
/* Delays de animación */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
```

## 🐛 Troubleshooting

### Problemas Comunes

#### Imágenes no cargan
- Verificar rutas de archivos
- Comprobar formato WebP en navegador
- Revisar permisos de archivos

#### Formulario no funciona
- Verificar configuración de FormSubmit
- Comprobar email de destino
- Revisar consola del navegador

#### Animaciones no funcionan
- Verificar JavaScript habilitado
- Comprobar Intersection Observer
- Revisar clases CSS

## 📞 Soporte y Contacto

### Información del Proyecto
- **Cliente**: Grupo Casillas
- **Proyecto**: Alcalde Mil
- **Ubicación**: Centro de Guadalajara, México
- **Teléfono**: 332 796 7023
- **WhatsApp**: +52 33 2796 7023

### 👨‍💻 Soporte Técnico - Desarrollador
- **Nombre**: Sergio Pérez Bautista
- **Email**: perez.sergiob@gmail.com
- **Teléfono**: 771 105 6030
- **Especialidad**: Desarrollo Web Frontend, Optimización de Performance, SEO

### Enlaces Importantes
- [Sitio Web Grupo Casillas](https://grupocasillas.mx/)
- [Aviso de Privacidad](assets/pdf/aviso-de-privacidad-grupo-casillas.pdf)
- [Contrato PROFECO](assets/pdf/contrato-profeco-grupo-casillas.pdf)

## 📄 Licencia

© Grupo Casillas | Todos los derechos reservados 2024-2025

---

**Nota**: Este sitio web está optimizado para ofrecer la mejor experiencia de usuario en todos los dispositivos, con un enfoque especial en la conversión de leads y la presentación profesional del desarrollo inmobiliario Alcalde Mil. 