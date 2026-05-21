# 📝 Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.0.0] - 2026-05-20

### 🎉 Lanzamiento Inicial

Primera versión pública de **Santo Rosario**.

*Desarrollado con la ayuda de Claude Sonnet 4.5 (Anthropic)*

### ✨ Características

#### Funcionalidad Principal
- **Rosario completo** con todas las oraciones tradicionales
  - Señal de la Cruz inicial
  - Credo de los Apóstoles
  - Padre Nuestro y 3 Ave Marías introductorias
  - 5 Decenas completas (Padre Nuestro + 10 Ave Marías + Gloria + Oración de Fátima)
  - Salve Regina
  - Oración final
  - Señal de la Cruz final

#### Misterios Automáticos
- Detección automática del misterio según el día de la semana:
  - Lunes y Sábado: Misterios Gozosos
  - Martes y Viernes: Misterios Dolorosos
  - Miércoles y Domingo: Misterios Gloriosos
  - Jueves: Misterios Luminosos

#### Interfaz de Usuario
- Diseño "Jewel & Luxury" con colores dorados sobre azul medianoche
- Visualización SVG interactiva del rosario (60 cuentas)
- Efectos de brillo en la cuenta activa
- Animaciones suaves de transición entre pasos
- Barra de progreso visual
- Pantalla de bienvenida con información del misterio
- Pantalla de completado con felicitación

#### Controles
- Avance con tecla `Enter`
- Avance con tecla `Espacio`
- Avance con tecla `Flecha Derecha →`
- Botón visual de "Continuar"
- Botón de reinicio
- Botón de información/instrucciones

#### Multimedia
- Música de fondo opcional (Ave María de Fátima - Instrumental)
- Control de reproducción de música
- Imagen de fondo (stained glass)
- Archivos multimedia locales (sin dependencias externas)

#### Diseño Responsive
- Optimizado para desktop (1920x1080)
- Adaptado para tablets
- Funcional en móviles
- Diseño fluido y adaptable

#### Tipografías
- Lora - Texto principal de oraciones
- Cormorant Garamond - Títulos y encabezados
- Work Sans - UI y botones
- Fuentes cargadas desde Google Fonts

### 🎨 Diseño

#### Paleta de Colores
- Azul Medianoche (#0A0E17) - Fondo principal
- Crema Dorado (#F8F3E6) - Texto principal
- Dorado (#D4AF37) - Acentos y elementos activos
- Gris Oscuro (#1A1F2E) - Tarjetas y overlays

#### Animaciones
- `fade-in` - Transición suave al cambiar de paso
- `ping-slow` - Efecto de pulso en cuenta activa
- Efectos de hover en botones
- Transiciones suaves en todos los elementos interactivos

### 🛠️ Tecnología

#### Stack Principal
- React 19
- React Router DOM 7
- Tailwind CSS 3
- shadcn/ui (Radix UI)
- lucide-react
- sonner

#### Build Tools
- Create React App
- CRACO
- PostCSS
- Autoprefixer

### 📦 Archivos y Estructura
- Configuración completa de Tailwind CSS
- Componentes UI de shadcn/ui
- Estructura modular y mantenible
- Archivos multimedia locales
- Documentación completa

### 📚 Documentación
- README.md completo con instrucciones
- CONTRIBUTING.md con guía de contribución
- LICENSE (MIT)
- .gitignore configurado
- Guías de instalación y despliegue

### 🌐 Idiomas
- Español (es-ES) - Completo

---

## [Unreleased]

### 🚧 En Desarrollo

Características planeadas para futuras versiones:

#### Próxima Versión (1.1.0)
- [ ] Selector manual de misterios
- [ ] Modo oscuro/claro
- [ ] Más opciones de música de fondo
- [ ] Mejoras de accesibilidad (ARIA labels)

#### Futuro (1.2.0)
- [ ] Historial de rosarios rezados
- [ ] Estadísticas de rezo
- [ ] Recordatorios diarios
- [ ] Compartir en redes sociales

#### Futuro (2.0.0)
- [ ] PWA (Progressive Web App)
- [ ] Modo offline completo
- [ ] Notificaciones push
- [ ] Múltiples idiomas (inglés, portugués, italiano)
- [ ] Rosario en latín
- [ ] Temas personalizables

---

## Tipos de Cambios

- **✨ Added** - Nuevas características
- **🔄 Changed** - Cambios en funcionalidad existente
- **🗑️ Deprecated** - Características que serán removidas
- **❌ Removed** - Características removidas
- **🐛 Fixed** - Corrección de bugs
- **🔒 Security** - Correcciones de seguridad

---

## Versionado

Este proyecto usa [Semantic Versioning](https://semver.org/lang/es/):

- **MAJOR** (X.0.0) - Cambios incompatibles con versiones anteriores
- **MINOR** (0.X.0) - Nuevas características compatibles con versiones anteriores
- **PATCH** (0.0.X) - Correcciones de bugs compatibles con versiones anteriores

---

## Enlaces

- [Repositorio](https://github.com/tu-usuario/santo-rosario)
- [Issues](https://github.com/tu-usuario/santo-rosario/issues)
- [Pull Requests](https://github.com/tu-usuario/santo-rosario/pulls)
- [Releases](https://github.com/tu-usuario/santo-rosario/releases)

---

<div align="center">

**Mantenido con ❤️ y 🙏**

*Desarrollado con la ayuda de Claude Sonnet 4.5 (Anthropic)*

</div>
