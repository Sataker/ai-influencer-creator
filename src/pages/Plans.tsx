import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, CheckCircle2, ArrowLeft, Shield, Unlock, MessageCircle } from "lucide-react";
import type { QuizData } from "../lib/types";
import SectionHeader from "../components/SectionHeader";

const PLANS = [
  {
    id: "basic",
    name: "Basico",
    price: "R$ 250",
    period: "/mes",
    features: ["2 videos por mes", "5 fotos por mes", "1 revisao por entrega", "Suporte por e-mail"],
  },
  {
    id: "essential",
    name: "Essencial",
    price: "R$ 350",
    period: "/mes",
    popular: true,
    features: ["4 videos por mes", "10 fotos por mes", "2 revisoes por entrega", "Suporte prioritario", "Roteiro incluso"],
  },
  {
    id: "growth",
    name: "Growth",
    price: "R$ 500",
    period: "/mes",
    features: ["6 videos por mes", "15 fotos por mes", "Revisoes ilimitadas", "Suporte VIP WhatsApp", "Roteiro + calendario", "Legendas e hashtags"],
  },
];

const TRUST = [
  { icon: Unlock, text: "Sem fidelidade" },
  { icon: Shield, text: "7 dias de garantia" },
  { icon: MessageCircle, text: "Suporte humano" },
];

const WHATSAPP_NUMBER = "5500000000000"; // trocar pelo seu numero

export default function Plans() {
  const nav = useNavigate();
  const [data, setData] = useState<QuizData | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("quiz_data");
    if (raw) setData(JSON.parse(raw));
  }, []);

  const handleSelect = (planId: string) => {
    const plan = PLANS.find((p) => p.id === planId);
    const msg = `Ola! Acabei de criar meu Influenciador IA e quero ativar o plano ${plan?.name} (${plan?.price}/mes).${
      data ? `\n\nNome: ${data.name}\nMarca: ${data.brand_name}\nInfluenciador: ${data.influencer_name}` : ""
    }`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen px-5 md:px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => nav("/resultado")}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-purple-light mb-6 sm:mb-8 transition-colors cursor-pointer min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao resultado
        </button>

        <SectionHeader
          preTitle="Planos"
          title="Quanto vale ter um influenciador que"
          highlight="nunca para?"
          subtitle="Selecione o plano ideal para escalar o conteudo da sua marca"
        />

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-start animate-fade-up">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`glass rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 relative ${
                plan.popular
                  ? "glass-elevated md:scale-[1.03] glow-purple border-purple/40 ring-2 ring-purple/30 z-10 hover:glow-purple-intense"
                  : "hover:shadow-card-hover hover:border-purple/25"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 gradient-purple-d rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl shadow-purple/30">
                  Mais popular
                </span>
              )}

              <p className="text-sm font-semibold text-purple-light uppercase tracking-wider">{plan.name}</p>

              <div className="mt-5 mb-8 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">{plan.price}</span>
                <span className="text-muted text-base">{plan.period}</span>
              </div>

              <div className="w-full h-px bg-border/40 mb-6" />

              <ul className="space-y-4 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    {plan.popular ? (
                      <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                    )}
                    <span className={plan.popular ? "text-text" : "text-muted"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelect(plan.id)}
                className={`mt-8 w-full py-3.5 rounded-full font-semibold transition-all duration-300 cursor-pointer text-center active:scale-[0.98] ${
                  plan.popular
                    ? "gradient-purple glow-purple hover:scale-[1.02] hover:glow-purple-intense"
                    : "border border-purple/30 hover:border-purple/60 hover:bg-purple/5"
                }`}
              >
                Escolher {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted text-sm animate-fade-up stagger-2">
          {TRUST.map((t) => (
            <div key={t.text} className="flex items-center gap-2 py-2">
              <t.icon className="w-4 h-4" />
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
