# Santo Rosario · PRD

## Problem Statement (original)
Necesito que desarrolles una aplicación web para el rezo del santo rosario, que tenga las 50 cuentas del santo rosario y que a medida que oprimo la tecla Enter siga la cuenta siguiente, hazla atractiva visualmente.

## User Choices
- Mostrar texto completo de cada oración (b)
- Detección automática del misterio por día (a)
- Música de fondo opcional (b)
- Estilo clásico/sacro (a)
- Uso libre, sin cuenta (a)

## Architecture
- Frontend-only experience (React 19 + Tailwind + shadcn/ui)
- Backend FastAPI/Mongo no modificado (no persistencia requerida)
- Datos del rosario en `/app/frontend/src/lib/rosaryData.js`
- Visualización SVG del rosario en `/app/frontend/src/components/RosaryBeads.jsx`
- Página principal en `/app/frontend/src/pages/Rosary.jsx`

## Implementado (2026-02)
- Tipografía sacra (Cormorant Garamond + Lora + Work Sans)
- Background con vitral catedralicio + overlay oscuro + viñeta
- 60 cuentas SVG (1 crucifijo + 1 PN intro + 3 AM intro + 5 PN decena + 50 AM decena)
- Cuenta activa con glow dorado animado + cuentas completadas en oro oscuro
- Secuencia completa de 80 pasos: Señal de la Cruz, Credo, PN intro, 3 AM, Gloria, 5 decenas con anuncio de misterio + PN + 10 AM + Gloria + Oración de Fátima, Salve Regina, oración final
- Mapping automático misterios por día (Gozosos Lun/Sab, Dolorosos Mar/Vie, Gloriosos Mie/Dom, Luminosos Jue)
- Avance con tecla Enter (también Espacio y Flecha derecha)
- Botón "Continuar" como alternativa táctil
- Toggle música de fondo (canto gregoriano)
- Reiniciar rosario
- Modal de información con instrucciones
- Pantalla de bienvenida + pantalla de finalización
- Responsivo (móvil/desktop)
- Toasts con sonner

## Backlog (P1/P2)
- P1: Grabar audio narrado para cada oración (TTS opcional)
- P1: Modo "auto-advance" con temporizador configurable
- P2: Selector manual de misterios (override)
- P2: Modo oscuro/claro toggle
- P2: Compartir intención de oración
- P2: PWA con instalación en móvil para uso offline

## Files
- `/app/frontend/src/App.js`
- `/app/frontend/src/App.css`
- `/app/frontend/src/index.css`
- `/app/frontend/src/lib/rosaryData.js`
- `/app/frontend/src/components/RosaryBeads.jsx`
- `/app/frontend/src/pages/Rosary.jsx`
- `/app/frontend/public/index.html` (fonts + title)
