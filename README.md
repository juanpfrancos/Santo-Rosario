# 📿 Santo Rosario

<div align="center">

![Santo Rosario](https://img.shields.io/badge/Rosario-Católico-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Aplicación web devocional para el rezo del Santo Rosario en español**

*Desarrollado con la ayuda de Claude Sonnet 4.5*

[Demo en Vivo](#) · [Reportar Bug](../../issues) · [Solicitar Feature](../../issues)

</div>

---

## 📖 Descripción

**Santo Rosario** es una aplicación web interactiva diseñada para acompañar a los fieles católicos en el rezo del Santo Rosario. Con un diseño elegante inspirado en vitrales de iglesia y una interfaz intuitiva, permite rezar el rosario completo con solo presionar la tecla **Enter**.

### ✨ Características Principales

- 🙏 **Rosario completo** - Desde la Señal de la Cruz hasta la oración final
- 📅 **Misterios automáticos** - Detecta el misterio del día
- ⌨️ **Control por teclado** - Avanza con Enter, Espacio o flecha derecha
- 🎵 **Música de fondo** - Ave María de Fátima (opcional)
- 📿 **Visualización SVG** - Rosario interactivo de 50 cuentas con efectos de brillo
- 🎨 **Diseño "Jewel & Luxury"** - Colores dorados sobre azul medianoche
- 📱 **Responsive** - Funciona en desktop, tablet y móvil
- 🌐 **100% en español** - Oraciones tradicionales 
- 🤖 **Desarrollado con IA** - Creado con la ayuda de Claude Sonnet 4.5

---

## 🎯 Misterios por Día

La aplicación selecciona automáticamente el misterio según el día de la semana:

| Día | Misterio |
|-----|----------|
| 🌙 **Lunes** | Misterios Gozosos |
| 🔴 **Martes** | Misterios Dolorosos |
| ⚪ **Miércoles** | Misterios Gloriosos |
| 💛 **Jueves** | Misterios Luminosos |
| 🔴 **Viernes** | Misterios Dolorosos |
| 🌙 **Sábado** | Misterios Gozosos |
| ⚪ **Domingo** | Misterios Gloriosos |

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 14 o superior ([Descargar](https://nodejs.org/))
- **Yarn** o **npm**

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/santo-rosario.git
cd santo-rosario

# 2. Navegar a la carpeta frontend
cd frontend

# 3. Instalar dependencias
yarn install
# o
npm install

# 4. Iniciar el servidor de desarrollo
yarn start
# o
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

---

## 📦 Build para Producción

```bash
# Generar archivos estáticos optimizados
yarn build

# Los archivos estarán en frontend/build/
```

### Despliegue

#### Netlify (Recomendado)
1. Arrastra la carpeta `build/` a [netlify.com](https://www.netlify.com/)
2. ¡Listo! Tu sitio estará en línea en segundos

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### GitHub Pages
```bash
# Agregar a package.json:
"homepage": "https://tu-usuario.github.io/santo-rosario"

# Instalar gh-pages
yarn add -D gh-pages

# Agregar scripts:
"predeploy": "yarn build",
"deploy": "gh-pages -d build"

# Desplegar
yarn deploy
```

---

## 🎮 Uso

### Controles

| Acción | Tecla/Botón |
|--------|-------------|
| Comenzar rosario | `Enter` o botón "Comenzar" |
| Avanzar al siguiente paso | `Enter`, `Espacio` o `→` |
| Activar/desactivar música | Botón 🔊 |
| Ver instrucciones | Botón ℹ️ |
| Reiniciar rosario | Botón ↻ |

### Flujo de Oración

1. **Pantalla de Bienvenida** - Muestra el misterio del día
2. **Rezo del Rosario** - Avanza con Enter a través de:
   - Señal de la Cruz
   - Credo de los Apóstoles
   - Padre Nuestro y 3 Ave Marías introductorias
   - 5 Decenas (cada una con: anuncio del misterio, Padre Nuestro, 10 Ave Marías, Gloria, Oración de Fátima)
   - Salve Regina
   - Oración final
   - Señal de la Cruz final
3. **Pantalla de Completado** - Felicitación y opción de reiniciar

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Framework principal
- **React Router DOM 7** - Enrutamiento
- **Tailwind CSS 3** - Estilos y diseño
- **shadcn/ui** - Componentes UI (Radix UI)
- **lucide-react** - Iconos
- **sonner** - Notificaciones toast

### Build Tools
- **Create React App** - Configuración base
- **CRACO** - Configuración personalizada de CRA
- **PostCSS** - Procesamiento de CSS

### Tipografías
- **Lora** - Texto principal
- **Cormorant Garamond** - Títulos
- **Work Sans** - UI y botones

---

## 📁 Estructura del Proyecto

```
santo-rosario/
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── background.png          # Imagen de fondo (stained glass)
│   │   │   └── fatima-ave-maria.mp3    # Música de fondo
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                     # Componentes shadcn/ui
│   │   │   │   ├── button.jsx
│   │   │   │   ├── dialog.jsx
│   │   │   │   └── sonner.jsx
│   │   │   └── RosaryBeads.jsx         # Visualización SVG del rosario
│   │   ├── lib/
│   │   │   ├── rosaryData.js           # Oraciones, misterios, secuencia
│   │   │   └── utils.js                # Utilidades
│   │   ├── pages/
│   │   │   └── Rosary.jsx              # Página principal
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── craco.config.js
├── docs/                               # Documentación técnica
└── README.md
```

---

## 🎨 Diseño

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Medianoche | `#0A0E17` | Fondo principal |
| Crema Dorado | `#F8F3E6` | Texto principal |
| Dorado | `#D4AF37` | Acentos, botones, cuentas activas |
| Gris Oscuro | `#1A1F2E` | Tarjetas, overlays |

### Animaciones

- **fade-in** - Transición suave al cambiar de paso
- **ping-slow** - Efecto de pulso en la cuenta activa
- **glow** - Brillo dorado en elementos interactivos

---

## 🤝 Contribuir

Las contribuciones son bienvenidas y apreciadas. Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Ideas para Contribuir

- 🌍 Traducciones a otros idiomas
- 🎵 Más opciones de música de fondo
- 📱 Mejoras en la experiencia móvil
- ♿ Mejoras de accesibilidad
- 🎨 Temas alternativos
- 📖 Más oraciones opcionales

---

## 🐛 Reportar Bugs

Si encuentras un bug, por favor [abre un issue](../../issues) con:

- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Capturas de pantalla (si aplica)
- Navegador y versión

---

## 📝 Roadmap

- [ ] Modo oscuro/claro
- [ ] Selector manual de misterios
- [ ] Historial de rosarios rezados
- [ ] Compartir progreso en redes sociales
- [ ] Versión PWA (Progressive Web App)
- [ ] Notificaciones para recordar el rezo diario
- [ ] Más idiomas (inglés, portugués, italiano)
- [ ] Rosario en latín

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2026 Santo Rosario

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
de este software y archivos de documentación asociados (el "Software"), para usar
el Software sin restricciones, incluyendo sin limitación los derechos de usar,
copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias
del Software, y permitir a las personas a las que se les proporcione el Software
hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las
copias o porciones sustanciales del Software.
```

---

## 🙏 Agradecimientos

- **Claude Sonnet 4.5** - IA de Anthropic que ayudó en el desarrollo
- **Comunidad de desarrolladores** - Por las herramientas open source
- **shadcn/ui** - Por los componentes UI elegantes
- **Tailwind CSS** - Por el sistema de diseño
- **React Team** - Por el framework

---

## 📞 Contacto

**Proyecto:** Santo Rosario  
**Repositorio:** [https://github.com/tu-usuario/santo-rosario](https://github.com/tu-usuario/santo-rosario)  
**Issues:** [https://github.com/tu-usuario/santo-rosario/issues](https://github.com/tu-usuario/santo-rosario/issues)

---

## 💖 Apoyo

Si este proyecto te ha sido útil en tu vida espiritual, considera:

- ⭐ Dar una estrella al repositorio
- 🐛 Reportar bugs o sugerir mejoras
- 🤝 Contribuir con código
- 🙏 Compartir con tu comunidad


---

<div align="center">

**Hecho con ❤️**

*Desarrollado con la ayuda de Claude Sonnet 4.5 (Anthropic)*


---

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude%20Sonnet%204.5-8A2BE2?style=flat-square)](https://www.anthropic.com/claude)
[![Powered by Faith](https://img.shields.io/badge/Powered%20by-Faith-gold?style=flat-square)](https://github.com/tu-usuario/santo-rosario)

</div>
