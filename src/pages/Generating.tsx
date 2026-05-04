import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RefreshCw } from "lucide-react";

const TIPS = [
  "Analisando as caracteristicas do seu influenciador...",
  "Gerando aparencia hiper-realista com IA...",
  "Aplicando estilo visual e identidade da marca...",
  "Refinando detalhes faciais e iluminacao...",
  "Quase pronto! Finalizando a imagem...",
];

export default function Generating() {
  const nav = useNavigate();
  const started = useRef(false);
  const [progress, setProgress] = useState(0);
  const [tipIdx, setTipIdx] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const raw = localStorage.getItem("quiz_data");
    if (!raw) { nav("/"); return; }

    const data = JSON.parse(raw);

    const progInterval = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 6, 90));
    }, 800);

    const tipInterval = setInterval(() => {
      setTipIdx((i) => (i + 1) % TIPS.length);
    }, 3000);

    (async () => {
      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Erro ao gerar imagem");
        }

        const result = await res.json();
        localStorage.setItem("generated_image", result.image_url);
        setProgress(100);
        setTimeout(() => nav("/resultado"), 600);
      } catch (err: any) {
        clearInterval(progInterval);
        clearInterval(tipInterval);
        setError(err.message || "Erro inesperado ao gerar a imagem.");
      }
    })();

    return () => { clearInterval(progInterval); clearInterval(tipInterval); };
  }, [nav]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5 md:px-6">
        <div className="text-center max-w-md glass-elevated rounded-2xl p-8 md:p-10 shadow-card animate-scale-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            <span className="text-2xl">!</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Algo deu errado</h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">{error}</p>
          <div className="flex gap-3">
            <button
              onClick={() => nav("/quiz")}
              className="flex-1 py-3 rounded-full border border-border/60 text-muted hover:text-text hover:border-purple/40 transition-all cursor-pointer"
            >
              Voltar ao quiz
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 py-3 rounded-full bg-gradient-to-r from-purple-dark to-purple font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Tentar de novo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5 md:px-6">
      <div className="text-center max-w-md animate-fade-up">
        {/* Spinning orb */}
        <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-6 sm:mb-10 relative">
          <div className="absolute inset-0 rounded-full border-2 border-purple/20 border-t-purple" style={{ animation: "spin 2s linear infinite" }} />
          <div className="absolute inset-2 rounded-full border-2 border-purple-light/20 border-b-purple-light" style={{ animation: "spin 3s linear infinite reverse" }} />
          <div className="absolute inset-5 rounded-full bg-gradient-to-br from-purple-dark to-purple pulse-glow" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
          Criando seu Influenciador IA
        </h1>

        <p key={tipIdx} className="text-muted text-sm sm:text-base mb-10 min-h-[48px] sm:min-h-[24px] animate-fade-up">
          {TIPS[tipIdx]}
        </p>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-card/80 rounded-full overflow-hidden border border-border/30">
          <div
            className="h-full bg-gradient-to-r from-purple-dark via-purple to-purple-light rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted mt-3 font-medium tabular-nums">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
