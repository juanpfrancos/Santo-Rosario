import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Volume2, VolumeX, RotateCcw, Info, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../components/ui/dialog";
import { toast } from "sonner";
import RosaryBeads from "../components/RosaryBeads";
import {
  buildRosarySequence,
  getMysteriesForToday,
  mysteries,
} from "../lib/rosaryData";

const BG_URL = process.env.PUBLIC_URL + "/assets/background.png";

// Música de fondo: Ave María de Fátima (Instrumental)
const MUSIC_URL = process.env.PUBLIC_URL + "/assets/fatima-ave-maria.mp3";

const DAY_NAMES = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export default function Rosary() {
  const today = useMemo(() => new Date(), []);
  const todayMysteryKey = useMemo(() => getMysteriesForToday(today), [today]);

  const mysteryKey = todayMysteryKey;
  // const [mysteryKey, setMysteryKey] = useState(todayMysteryKey); // setMysteryKey no usado - selector manual no implementado
  const sequence = useMemo(() => buildRosarySequence(mysteryKey), [mysteryKey]);

  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [fadeKey, setFadeKey] = useState(0); // para re-trigger animación

  const audioRef = useRef(null);

  const currentStep = sequence[stepIndex] || sequence[sequence.length - 1];
  const activeBead = currentStep?.beadIndex;

  // Avanzar al siguiente paso
  const next = useCallback(() => {
    if (!started) {
      setStarted(true);
      return;
    }
    setStepIndex((prev) => {
      if (prev >= sequence.length - 1) {
        setCompleted(true);
        return prev;
      }
      return prev + 1;
    });
    setFadeKey((k) => k + 1);
  }, [started, sequence.length]);

  const restart = useCallback(() => {
    setStepIndex(0);
    setStarted(false);
    setCompleted(false);
    setFadeKey((k) => k + 1);
    toast.success("Rosario reiniciado", {
      description: "Que la Virgen María te acompañe en tu oración.",
    });
  }, []);

  // Listener de tecla Enter (y Space + flecha derecha como apoyo)
  useEffect(() => {
    const handler = (e) => {
      if (showInfo) return;
      if (e.key === "Enter" || e.code === "Space" || e.key === "ArrowRight") {
        e.preventDefault();
        if (completed) return;
        next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, completed, showInfo]);

  // Control de música
  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(() => {
        toast.error("No se pudo reproducir la música", {
          description: "Tu navegador puede haber bloqueado la reproducción.",
        });
        setMusicOn(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const progress = Math.round((stepIndex / (sequence.length - 1)) * 100);
  const mysteryInfo = mysteries[mysteryKey];

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden text-[#F8F3E6]"
      data-testid="rosary-app"
    >
      {/* Background imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${BG_URL})` }}
        aria-hidden="true"
      />
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/85 via-[#0A0E17]/75 to-[#0A0E17]/90"
        aria-hidden="true"
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10,14,23,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        preload="none"
        data-testid="bg-audio"
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-10 py-3 sm:py-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#F3E5AB] to-[#997A15] shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
            <div className="flex flex-col">
              <h1
                className="font-serif text-base sm:text-2xl tracking-wide text-[#F8F3E6]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Santo Rosario
              </h1>
              <span
                className="text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#D4AF37]"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {DAY_NAMES[today.getDay()]} · {mysteryInfo.name}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMusicOn((m) => !m)}
              className="text-[#A1A7B3] hover:text-[#D4AF37] hover:bg-white/5 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              data-testid="music-toggle-btn"
              title={musicOn ? "Silenciar música" : "Activar música"}
            >
              {musicOn ? <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Button>
            <Dialog open={showInfo} onOpenChange={setShowInfo}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#A1A7B3] hover:text-[#D4AF37] hover:bg-white/5 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  data-testid="info-btn"
                  title="Información"
                >
                  <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#0A0E17] border-[#D4AF37]/30 text-[#F8F3E6] max-w-lg">
                <DialogHeader>
                  <DialogTitle
                    className="text-2xl text-[#D4AF37]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Cómo rezar el Santo Rosario
                  </DialogTitle>
                  <DialogDescription className="text-[#A1A7B3]">
                    Guía rápida para acompañar el rezo con esta aplicación.
                  </DialogDescription>
                </DialogHeader>
                <div
                  className="space-y-3 text-sm leading-relaxed text-[#F8F3E6]/90"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <p>
                    Toca en cualquier parte de la pantalla o presiona <kbd className="px-2 py-0.5 bg-[#D4AF37]/20 rounded border border-[#D4AF37]/40 text-[#D4AF37] mx-1">Enter</kbd>
                    para avanzar al siguiente paso del rezo.
                  </p>
                  <p>
                    El rosario se compone de 5 decenas. Hoy es{" "}
                    <span className="text-[#D4AF37]">{DAY_NAMES[today.getDay()]}</span>, día de los{" "}
                    <span className="text-[#D4AF37]">{mysteryInfo.name}</span>.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-[#A1A7B3]">
                    <li>Crucifijo → Señal de la Cruz y Credo</li>
                    <li>Cuenta grande → Padre Nuestro</li>
                    <li>10 cuentas pequeñas → Ave María</li>
                    <li>Final de decena → Gloria + Oración de Fátima</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              variant="ghost"
              size="icon"
              onClick={restart}
              className="text-[#A1A7B3] hover:text-[#D4AF37] hover:bg-white/5 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              data-testid="restart-btn"
              title="Reiniciar"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center px-4 sm:px-6 pb-6 sm:pb-24">
          {!started ? (
            <WelcomeScreen
              mysteryInfo={mysteryInfo}
              dayName={DAY_NAMES[today.getDay()]}
              onStart={next}
            />
          ) : completed ? (
            <CompletedScreen onRestart={restart} />
          ) : (
            <div 
              className="w-full max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,420px)_1fr] gap-6 lg:gap-16 items-start lg:items-center mt-2 sm:mt-4 cursor-pointer"
              onClick={next}
              data-testid="prayer-container"
            >
              {/* Rosario visual */}
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <div className="w-full max-w-[340px] sm:max-w-[380px]">
                  <RosaryBeads
                    activeBead={activeBead}
                    currentStep={stepIndex}
                    sequence={sequence}
                  />
                </div>
              </div>

              {/* Oración + progreso */}
              <div className="order-1 lg:order-2 flex flex-col gap-4 sm:gap-6">
                <ProgressBar
                  step={stepIndex}
                  total={sequence.length}
                  currentStep={currentStep}
                  progress={progress}
                />
                <PrayerCard step={currentStep} fadeKey={fadeKey} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function WelcomeScreen({ mysteryInfo, dayName, onStart }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mt-6 sm:mt-16 px-4 animate-fade-in cursor-pointer"
      onClick={onStart}
      data-testid="welcome-screen"
    >
      <Sparkles className="w-10 h-10 text-[#D4AF37] mb-6 opacity-80" />
      <p
        className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-4"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {dayName} · Día de los misterios {mysteryInfo.name.replace("Misterios ", "")}
      </p>
      <h2
        className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F3E6] mb-6 leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        En el nombre del Padre,
        <br />
        del Hijo y del{" "}
        <span className="italic text-[#D4AF37]">Espíritu Santo</span>.
      </h2>
      <p
        className="text-base sm:text-lg text-[#A1A7B3] mb-10 leading-relaxed max-w-xl"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Hoy meditaremos los{" "}
        <span className="text-[#D4AF37]">{mysteryInfo.name}</span>. Tómate un
        momento de silencio antes de comenzar.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onStart();
          }}
          className="bg-gradient-to-b from-[#D4AF37] to-[#997A15] text-[#0A0E17] hover:from-[#F3E5AB] hover:to-[#D4AF37] font-semibold rounded-full px-10 py-6 text-base shadow-[0_4px_24px_rgba(212,175,55,0.4)] transition-all"
          data-testid="start-btn"
        >
          Comenzar el Rosario
        </Button>
        <div className="w-12 h-1 bg-[#D4AF37]/30 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

function CompletedScreen({ onRestart }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mt-16 px-4 animate-fade-in"
      data-testid="completed-screen"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F3E5AB] to-[#997A15] shadow-[0_0_40px_rgba(212,175,55,0.5)] mb-8 flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-[#0A0E17]" />
      </div>
      <h2
        className="text-4xl sm:text-5xl font-light text-[#F8F3E6] mb-6"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Has terminado el <span className="italic text-[#D4AF37]">Santo Rosario</span>
      </h2>
      <p
        className="text-lg text-[#A1A7B3] mb-10 leading-relaxed"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Que la paz y la bendición de Nuestra Señora te acompañe siempre. Amén.
      </p>
      <Button
        onClick={onRestart}
        className="bg-gradient-to-b from-[#D4AF37] to-[#997A15] text-[#0A0E17] hover:from-[#F3E5AB] hover:to-[#D4AF37] font-semibold rounded-full px-8 py-5 shadow-[0_4px_24px_rgba(212,175,55,0.4)]"
        data-testid="restart-completed-btn"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Rezar de nuevo
      </Button>
    </div>
  );
}

function ProgressBar({ step, total, currentStep, progress }) {
  const decadeLabel =
    currentStep?.decade > 0 && currentStep?.decade <= 5
      ? `Decena ${currentStep.decade} de 5`
      : currentStep?.decade === 6
        ? "Oraciones Finales"
        : "Introducción";

  return (
    <div className="flex flex-col gap-3" data-testid="progress-bar">
      <div className="flex items-center justify-between">
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          {decadeLabel}
        </p>

      </div>
      <div className="h-[2px] w-full bg-[#D4AF37]/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-700 ease-out shadow-[0_0_8px_rgba(212,175,55,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function PrayerCard({ step, fadeKey }) {
  if (!step) return null;
  return (
    <div
      key={fadeKey}
      className="backdrop-blur-xl bg-black/40 border border-[#D4AF37]/20 rounded-2xl p-5 sm:p-10 min-h-[280px] sm:min-h-[300px] flex flex-col justify-center relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] animate-fade-in"
      data-testid="prayer-card"
    >
      {/* Esquinas decoradas */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#D4AF37]/40" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#D4AF37]/40" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#D4AF37]/40" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#D4AF37]/40" />

      <h3
        className="text-lg sm:text-2xl text-[#D4AF37] mb-2 text-center tracking-wide"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        data-testid="prayer-title"
      >
        {step.label}
      </h3>
      {step.subtitle && (
        <p
          className="text-sm sm:text-base text-[#F3E5AB]/80 italic mb-4 sm:mb-5 text-center"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {step.subtitle}
        </p>
      )}
      <p
        className="text-sm sm:text-lg leading-relaxed text-[#F8F3E6]/95 text-center"
        style={{ fontFamily: "'Lora', serif" }}
        data-testid="prayer-text"
      >
        {step.content}
      </p>
      {/* Indicador visual sutil para tap */}
      <div className="mt-4 sm:mt-6 flex justify-center">
        <div className="w-12 h-1 bg-[#D4AF37]/30 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
