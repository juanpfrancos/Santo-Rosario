# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a **Santo Rosario**! Este proyecto es de código abierto y las contribuciones son bienvenidas.

---

## 📋 Código de Conducta

Este proyecto sigue un código de conducta basado en el respeto mutuo y la caridad cristiana. Al participar, te comprometes a:

- Ser respetuoso con todos los colaboradores
- Aceptar críticas constructivas con gracia
- Enfocarte en lo que es mejor para la comunidad
- Mostrar empatía hacia otros miembros de la comunidad

---

## 🚀 Cómo Contribuir

### 1. Reportar Bugs

Si encuentras un bug:

1. Verifica que no haya sido reportado antes en [Issues](../../issues)
2. Abre un nuevo issue con:
   - **Título descriptivo**
   - **Descripción detallada** del problema
   - **Pasos para reproducir** el bug
   - **Comportamiento esperado** vs **comportamiento actual**
   - **Capturas de pantalla** (si aplica)
   - **Navegador y versión**
   - **Sistema operativo**

### 2. Sugerir Mejoras

Para sugerir nuevas características:

1. Abre un issue con la etiqueta `enhancement`
2. Describe claramente:
   - **Qué** quieres agregar
   - **Por qué** sería útil
   - **Cómo** podría implementarse (opcional)

### 3. Contribuir con Código

#### Configuración del Entorno

```bash
# 1. Fork el repositorio
# 2. Clona tu fork
git clone https://github.com/TU-USUARIO/santo-rosario.git
cd santo-rosario

# 3. Agrega el repositorio original como upstream
git remote add upstream https://github.com/USUARIO-ORIGINAL/santo-rosario.git

# 4. Instala dependencias
cd frontend
yarn install

# 5. Crea una rama para tu feature
git checkout -b feature/mi-nueva-feature
```

#### Proceso de Desarrollo

1. **Escribe código limpio y legible**
   - Usa nombres descriptivos para variables y funciones
   - Comenta código complejo
   - Sigue las convenciones de estilo del proyecto

2. **Prueba tus cambios**
   - Verifica que la aplicación funcione correctamente
   - Prueba en diferentes navegadores (Chrome, Firefox, Safari)
   - Prueba en diferentes tamaños de pantalla

3. **Commit tus cambios**
   ```bash
   git add .
   git commit -m "feat: descripción breve del cambio"
   ```

4. **Push a tu fork**
   ```bash
   git push origin feature/mi-nueva-feature
   ```

5. **Abre un Pull Request**
   - Ve a tu fork en GitHub
   - Haz clic en "New Pull Request"
   - Describe tus cambios claramente
   - Referencia issues relacionados (si aplica)

---

## 📝 Convenciones de Código

### JavaScript/React

```javascript
// ✅ BIEN: Nombres descriptivos, componentes funcionales
const PrayerCard = ({ prayer, onNext }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div className="prayer-card">
      <p>{prayer.text}</p>
      <button onClick={onNext}>Siguiente</button>
    </div>
  );
};

// ❌ MAL: Nombres poco claros, código difícil de leer
const PC = ({ p, n }) => {
  const [v, sv] = useState(true);
  return <div><p>{p.t}</p><button onClick={n}>Sig</button></div>;
};
```

### CSS/Tailwind

```jsx
// ✅ BIEN: Clases organizadas, legibles
<div className="flex flex-col items-center justify-center gap-4 p-6 bg-card rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold text-primary">Título</h2>
  <p className="text-muted-foreground">Descripción</p>
</div>

// ❌ MAL: Clases desordenadas, difíciles de leer
<div className="p-6 flex shadow-lg bg-card gap-4 rounded-lg items-center flex-col justify-center">
  <h2 className="font-bold text-primary text-2xl">Título</h2>
  <p className="text-muted-foreground">Descripción</p>
</div>
```

### Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Nuevas características
git commit -m "feat: agregar selector manual de misterios"

# Corrección de bugs
git commit -m "fix: corregir error en cálculo de misterio del día"

# Documentación
git commit -m "docs: actualizar README con nuevas instrucciones"

# Estilos (formato, no funcionalidad)
git commit -m "style: mejorar espaciado en tarjeta de oración"

# Refactorización
git commit -m "refactor: simplificar lógica de navegación"

# Tests
git commit -m "test: agregar tests para componente RosaryBeads"

# Tareas de build/configuración
git commit -m "chore: actualizar dependencias"
```

---

## 🎨 Guía de Diseño

### Colores

Mantén la paleta de colores consistente:

```css
/* Colores principales */
--background: #0A0E17;      /* Azul medianoche */
--foreground: #F8F3E6;      /* Crema dorado */
--primary: #D4AF37;         /* Dorado */
--card: #1A1F2E;            /* Gris oscuro */
```

### Tipografías

```css
/* Jerarquía de fuentes */
font-family: "Lora", serif;              /* Texto principal */
font-family: "Cormorant Garamond", serif; /* Títulos */
font-family: "Work Sans", sans-serif;     /* UI/Botones */
```

### Espaciado

Usa el sistema de espaciado de Tailwind (múltiplos de 4px):

```jsx
// ✅ BIEN
<div className="p-4 gap-6 mt-8">

// ❌ MAL (valores arbitrarios sin razón)
<div className="p-[13px] gap-[23px] mt-[37px]">
```

---

## 🧪 Testing

Antes de enviar un PR, verifica:

- [ ] La aplicación inicia sin errores (`yarn start`)
- [ ] El build de producción funciona (`yarn build`)
- [ ] No hay errores en la consola del navegador
- [ ] Los estilos se ven correctamente
- [ ] La funcionalidad principal funciona (avanzar pasos, música, reiniciar)
- [ ] Funciona en móvil (responsive)
- [ ] Funciona en diferentes navegadores

---

## 📚 Áreas de Contribución

### 🌍 Traducciones

Ayuda a traducir la aplicación a otros idiomas:

1. Crea un archivo `rosaryData.[idioma].js` en `src/lib/`
2. Traduce todas las oraciones y textos
3. Actualiza el componente para soportar múltiples idiomas

### 🎵 Música

Agrega más opciones de música de fondo:

1. Asegúrate de que el audio sea de uso libre o tengas los derechos
2. Optimiza el archivo (128-192 kbps MP3)
3. Colócalo en `public/assets/`
4. Agrega selector de música en la UI

### ♿ Accesibilidad

Mejora la accesibilidad:

- Agrega atributos ARIA
- Mejora la navegación por teclado
- Asegura contraste de colores adecuado
- Agrega soporte para lectores de pantalla

### 📱 PWA

Convierte la aplicación en PWA:

- Agrega service worker
- Crea manifest.json
- Implementa caché offline
- Agrega iconos para diferentes plataformas

---

## 🔍 Revisión de Pull Requests

Los PRs serán revisados considerando:

1. **Funcionalidad** - ¿Funciona como se espera?
2. **Código** - ¿Es limpio, legible y mantenible?
3. **Diseño** - ¿Sigue la guía de diseño del proyecto?
4. **Documentación** - ¿Está bien documentado?
5. **Tests** - ¿Se probó adecuadamente?

---

## 💡 Ideas para Contribuir

Si no sabes por dónde empezar, aquí hay algunas ideas:

### Fácil (Good First Issue)
- [ ] Corregir errores tipográficos en oraciones
- [ ] Mejorar mensajes de error
- [ ] Agregar más comentarios al código
- [ ] Actualizar documentación

### Medio
- [ ] Agregar animaciones adicionales
- [ ] Implementar modo oscuro/claro
- [ ] Mejorar responsive en tablets
- [ ] Agregar más opciones de música

### Avanzado
- [ ] Implementar PWA completo
- [ ] Agregar sistema de traducciones
- [ ] Implementar historial de rosarios
- [ ] Crear sistema de notificaciones

---

## 📞 Contacto

Si tienes preguntas sobre cómo contribuir:

- Abre un [Discussion](../../discussions)
- Comenta en un [Issue](../../issues) existente
- Contacta a los mantenedores

---

## 🙏 Agradecimientos

Gracias por considerar contribuir a **Santo Rosario**. Tu ayuda es invaluable para hacer esta herramienta devocional accesible a más personas.

*Este proyecto fue desarrollado con la ayuda de Claude Sonnet 4.5 (Anthropic)*

*"Cada uno ponga al servicio de los demás el don que haya recibido, administrando fielmente la gracia de Dios en sus diversas formas"*  
— 1 Pedro 4:10

---

<div align="center">

**¡Que Dios bendiga tu trabajo! 🙏**

</div>
