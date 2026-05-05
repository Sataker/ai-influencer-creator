import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, ArrowRight, User, Palette, MessageCircle, Briefcase } from "lucide-react";
import type { QuizData } from "../lib/types";

export default function Result() {
  const nav = useNavigate();
  const [data, setData] = useState<QuizData | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("quiz_data");
    const img = localStorage.getItem("generated_image");
    if (!raw) { nav("/"); return; }
    setData(JSON.parse(raw));
    if (img) setImageUrl(img);
  }, [nav]);

  if (!data) return null;

  const isFemale = data.sex === "Feminino";

  const handleDownload = async () => {
    if (!imageUrl) return;
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.influencer_name || "influenciador"}-ai.png`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const details = [
    { icon: User, label: "Nome", value: data.influencer_name },
    { icon: Palette, label: "Marca", value: data.brand_name },
    { icon: Briefcase, label: "Nicho", value: data.brand_niche },
    { icon: MessageCircle, label: "Tom", value: data.tone_of_voice },
  ];

  return (
    <div className="min-h-screen px-5 md:px-6 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
            Conheca{" "}
            <span className="gradient-text">{data.influencer_name}</span>
          </h1>
          <p className="text-muted mt-3 text-base sm:text-lg">
            {isFemale ? "Sua nova influenciadora IA esta pronta" : "Seu novo influenciador IA esta pronto"}
          </p>
        </div>

        {/* Image */}
        <div className="relative mb-8 animate-scale-in">
          <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-r from-purple-dark/20 via-purple/10 to-purple-light/20 rounded-3xl blur-2xl" />
          <div className="relative glass-elevated rounded-2xl p-3 md:p-5 glow-purple">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-card flex items-center justify-center">
              {imageUrl ? (
                <img src={imageUrl} alt={`Influenciador IA ${data.influencer_name}`} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center">
                  <User className="w-16 h-16 text-muted/30 mx-auto mb-2" />
                  <p className="text-muted text-sm">Imagem nao disponivel</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 animate-fade-up stagger-2">
          {details.map((d) => (
            <div key={d.label} className="glass rounded-xl p-4 flex items-center gap-3 group hover:border-purple/30 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                <d.icon className="w-4 h-4 text-purple" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider">{d.label}</p>
                <p className="font-semibold text-sm truncate mt-0.5">{d.value || "-"}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value anchor */}
        <div className="glass rounded-xl p-5 mb-6 text-center animate-fade-up stagger-3">
          <p className="text-sm text-muted">
            Contratar modelo + fotografo custa em media <span className="text-text font-semibold">R$2.000+/mes</span>.
            Com seu influenciador IA: a partir de <span className="gradient-text font-semibold">R$250/mes</span>.
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-up stagger-4">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2.5 py-3.5 rounded-full border border-purple/30 glass font-semibold hover:border-purple/60 hover:shadow-card active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4" /> Baixar PNG
          </button>
          <button
            onClick={() => nav("/planos")}
            className="flex items-center justify-center gap-2.5 py-3.5 rounded-full gradient-purple font-semibold glow-purple hover:scale-[1.02] active:scale-[0.98] hover:glow-purple-intense transition-all duration-300 cursor-pointer"
          >
            Ver planos <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
