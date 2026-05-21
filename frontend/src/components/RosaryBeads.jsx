import React from "react";
import { TOTAL_BEADS } from "../lib/rosaryData";

/**
 * Visualización SVG del rosario con 60 cuentas (1 crucifijo + 1 PN intro + 3 AM intro + 5 PN decena + 50 AM decena).
 * Layout: pendiente vertical inferior + loop circular superior.
 *
 * Mapeo de índices:
 *  - bead 0  : crucifijo (pendiente, parte inferior)
 *  - bead 1  : Padre Nuestro introductorio
 *  - beads 2,3,4 : 3 Ave Marías introductorias
 *  - beads 5..59 : 55 cuentas en el loop circular (5 PN decena + 50 AM)
 *    Cada decena: 1 PN + 10 AM (11 cuentas) en orden:
 *      decena 1 -> beads 5..15
 *      decena 2 -> beads 16..26
 *      decena 3 -> beads 27..37
 *      decena 4 -> beads 38..48
 *      decena 5 -> beads 49..59
 */

const VIEW_W = 360;
const VIEW_H = 580;

const LOOP_CX = 180;
const LOOP_CY = 200;
const LOOP_R = 140;

const PENDANT_X = 180;
const PENDANT_TOP_Y = LOOP_CY + LOOP_R + 10; // donde se conecta al loop

// Ave María (cuenta pequeña): tipo "small"
// Padre Nuestro (cuenta grande): tipo "large"
function getBeadType(index) {
  if (index === 0) return "crucifix";
  if (index === 1) return "large"; // PN intro
  if (index >= 2 && index <= 4) return "small"; // 3 AM intro
  // En el loop: PN están al inicio de cada decena (índices 5, 16, 27, 38, 49)
  const inLoop = index - 5;
  if (inLoop % 11 === 0) return "large";
  return "small";
}

// Calcula posición de cada bead
function getBeadPosition(index) {
  if (index === 0) {
    return { x: PENDANT_X, y: PENDANT_TOP_Y + 140 }; // crucifijo (más abajo)
  }
  if (index === 1) {
    return { x: PENDANT_X, y: PENDANT_TOP_Y + 100 }; // PN intro
  }
  if (index >= 2 && index <= 4) {
    // 3 AM intro
    return { x: PENDANT_X, y: PENDANT_TOP_Y + 30 + (index - 2) * 22 };
  }
  // Loop: 55 beads (índices 5..59) repartidos en circunferencia
  const loopIdx = index - 5;
  const totalInLoop = 55;
  // Empezamos en la parte inferior del loop (90 grados) y vamos en sentido horario
  const angleDeg = 90 + (loopIdx * 360) / totalInLoop;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: LOOP_CX + LOOP_R * Math.cos(angleRad),
    y: LOOP_CY + LOOP_R * Math.sin(angleRad),
  };
}

export const RosaryBeads = ({ activeBead, currentStep, sequence }) => {
  // beads completados: aquellos cuyo último paso ya fue rezado
  // determinamos el último paso completado para cada bead
  const completedBeads = new Set();
  if (sequence && currentStep > 0) {
    for (let i = 0; i < currentStep; i++) {
      const step = sequence[i];
      if (step && step.beadIndex !== null && step.beadIndex !== activeBead) {
        completedBeads.add(step.beadIndex);
      }
    }
  }

  // Generamos el path del cordel para el loop
  const loopPath = `M ${LOOP_CX + LOOP_R} ${LOOP_CY} A ${LOOP_R} ${LOOP_R} 0 1 1 ${LOOP_CX - LOOP_R} ${LOOP_CY} A ${LOOP_R} ${LOOP_R} 0 1 1 ${LOOP_CX + LOOP_R} ${LOOP_CY}`;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="w-full h-full max-h-[55vh] sm:max-h-[65vh] lg:max-h-[70vh] mx-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.15)]"
      data-testid="rosary-svg"
    >
      <defs>
        <radialGradient id="bead-gold" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="40%" stopColor="#E5C158" />
          <stop offset="100%" stopColor="#7A5C0A" />
        </radialGradient>
        <radialGradient id="bead-inactive" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#4A5568" />
          <stop offset="100%" stopColor="#1A2230" />
        </radialGradient>
        <radialGradient id="bead-completed" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#C4A845" />
          <stop offset="100%" stopColor="#5A4810" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="cord" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7A6522" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Loop circular del rosario (cordel) */}
      <path
        d={loopPath}
        fill="none"
        stroke="url(#cord)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Cordel del pendant (línea vertical desde crucifijo hasta loop) */}
      <line
        x1={PENDANT_X}
        y1={PENDANT_TOP_Y}
        x2={PENDANT_X}
        y2={PENDANT_TOP_Y + 140}
        stroke="url(#cord)"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Renderizar cada bead */}
      {Array.from({ length: TOTAL_BEADS }).map((_, i) => {
        const { x, y } = getBeadPosition(i);
        const type = getBeadType(i);
        const isActive = i === activeBead;
        const isCompleted = completedBeads.has(i);

        if (type === "crucifix") {
          // Crucifijo
          const cruxColor = isActive ? "#F3E5AB" : isCompleted ? "#C4A845" : "#6B7280";
          return (
            <g
              key={i}
              transform={`translate(${x}, ${y})`}
              filter={isActive ? "url(#glow)" : undefined}
              data-testid={`bead-${i}`}
              data-active={isActive}
            >
              {/* Vertical bar */}
              <rect x="-3" y="-22" width="6" height="44" fill={cruxColor} rx="1" />
              {/* Horizontal bar */}
              <rect x="-14" y="-8" width="28" height="6" fill={cruxColor} rx="1" />
              {/* Center jewel */}
              <circle cx="0" cy="-5" r="2.5" fill="#F3E5AB" opacity={isActive ? 1 : 0.6} />
            </g>
          );
        }

        const r = type === "large" ? 9 : 6;
        const fill = isActive
          ? "url(#bead-gold)"
          : isCompleted
            ? "url(#bead-completed)"
            : "url(#bead-inactive)";

        return (
          <g key={i} data-testid={`bead-${i}`} data-active={isActive}>
            <circle
              cx={x}
              cy={y}
              r={isActive ? r + 3 : r}
              fill={fill}
              stroke={isActive ? "#F3E5AB" : isCompleted ? "#997A15" : "#3a4658"}
              strokeWidth="0.8"
              filter={isActive ? "url(#glow)" : undefined}
              style={{
                transition: "all 500ms ease-out",
              }}
            />
            {isActive && (
              <circle
                cx={x}
                cy={y}
                r={r + 8}
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
                opacity="0.4"
                className="animate-ping-slow"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default RosaryBeads;
