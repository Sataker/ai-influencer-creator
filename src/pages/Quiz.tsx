import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { type QuizData, initialQuizData } from "../lib/types";
import StepIndicator from "../components/StepIndicator";
import OptionGrid from "../components/OptionGrid";
import ColorPicker from "../components/ColorPicker";

type Step = {
  title: string;
  subtitle: string;
  fields: {
    key: keyof QuizData;
    label: string;
    type: "text" | "select" | "color" | "textarea";
    options?: string[];
    placeholder?: string;
    columns?: number;
    optional?: boolean;
  }[];
};

const STEPS: Step[] = [
  {
    title: "Sua Marca",
    subtitle: "Conte sobre o seu negocio para personalizarmos tudo",
    fields: [
      { key: "brand_name", label: "Nome da marca", type: "text", placeholder: "Ex: Viteon, Nova Estilo..." },
      { key: "brand_niche", label: "Nicho de atuacao", type: "select", options: [
        "Saude e Bem-estar", "Moda e Beleza", "Fitness", "Educacao",
        "Tecnologia", "Gastronomia", "Financas", "Imoveis",
        "Ecommerce", "Marketing Digital", "Coaching", "Outro",
      ] },
      { key: "brand_color", label: "Cor principal da marca", type: "color" },
      { key: "brand_personality", label: "Personalidade da marca", type: "select", options: [
        "Sofisticada e Premium", "Jovem e Descolada", "Profissional e Confiavel",
        "Divertida e Criativa", "Minimalista e Clean", "Ousada e Disruptiva",
      ] },
    ],
  },
  {
    title: "O Influenciador",
    subtitle: "Defina quem sera o rosto da sua marca",
    fields: [
      { key: "influencer_name", label: "Nome do influenciador", type: "text", placeholder: "Ex: Lara, Diego, Ana..." },
      { key: "sex", label: "Sexo", type: "select", options: ["Feminino", "Masculino"], columns: 2 },
      { key: "age", label: "Faixa etaria", type: "select", options: [
        "18-22 anos", "23-27 anos", "28-33 anos", "34-40 anos", "41-50 anos",
      ], columns: 3 },
      { key: "ethnicity", label: "Etnia / Origem", type: "select", options: [
        "Branca", "Negra", "Parda", "Asiatica", "Indigena", "Latina",
      ], columns: 3 },
    ],
  },
  {
    title: "Aparencia",
    subtitle: "Detalhe o visual do seu influenciador",
    fields: [
      { key: "skin_tone", label: "Tom de pele", type: "select", options: ["Claro", "Medio", "Moreno", "Escuro"] },
      { key: "eye_color", label: "Cor dos olhos", type: "select", options: ["Castanho", "Verde", "Azul", "Mel", "Preto"], columns: 3 },
      { key: "hair_color", label: "Cor do cabelo", type: "select", options: ["Preto", "Castanho", "Loiro", "Ruivo", "Platinado", "Colorido"], columns: 3 },
      { key: "hair_style", label: "Estilo do cabelo", type: "select", options: ["Liso longo", "Liso curto", "Cacheado", "Crespo", "Ondulado", "Raspado"], columns: 3 },
      { key: "body_type", label: "Tipo de corpo", type: "select", options: ["Magro", "Atletico", "Medio", "Plus size"] },
      { key: "face_description", label: "Detalhes adicionais do rosto", type: "textarea", placeholder: "Ex: rosto oval, queixo fino, nariz pequeno, sorriso largo...", optional: true },
    ],
  },
  {
    title: "Estilo e Personalidade",
    subtitle: "Como ele(a) se veste, fala e se comunica",
    fields: [
      { key: "clothing_style", label: "Estilo de roupa", type: "select", options: [
        "Casual chic", "Streetwear", "Social/Formal", "Esportivo",
        "Minimalista", "Glamouroso", "Boho", "Tech/Futurista",
      ] },
      { key: "setting", label: "Cenario / Ambiente", type: "select", options: [
        "Escritorio moderno", "Cafe aconchegante", "Estudio fotografico",
        "Ao ar livre urbano", "Praia tropical", "Fundo neutro/clean",
        "Academia/Gym", "Casa luxuosa",
      ] },
      { key: "communication_style", label: "Estilo de comunicacao", type: "select", options: [
        "Didatico e educativo", "Inspirador e motivacional", "Direto e pratico",
        "Descontraido e humoristico", "Elegante e sofisticado", "Provocador e ousado",
      ] },
      { key: "tone_of_voice", label: "Tom de voz", type: "select", options: [
        "Amigavel e proximo", "Autoritativo e especialista",
        "Empolgado e energetico", "Calmo e confiante",
      ] },
    ],
  },
  {
    title: "Seus Dados",
    subtitle: "Quase la! Preencha para receber seu influenciador",
    fields: [
      { key: "name", label: "Seu nome", type: "text", placeholder: "Ex: Maria Silva" },
      { key: "email", label: "Seu e-mail", type: "text", placeholder: "email@exemplo.com" },
      { key: "whatsapp", label: "WhatsApp", type: "text", placeholder: "(11) 99999-9999" },
    ],
  },
];

export default function Quiz() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>(initialQuizData);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const current = STEPS[step];

  const update = (key: keyof QuizData, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const canAdvance = current.fields.every(
    (f) => f.optional || f.type === "textarea" || data[f.key]
  );

  const goForward = () => {
    setDirection("forward");
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("quiz_data", JSON.stringify(data));
      nav("/gerando");
    }
  };

  const goBack = () => {
    setDirection("back");
    setStep(step - 1);
  };

  const animClass = direction === "forward" ? "animate-slide-right" : "animate-slide-left";

  return (
    <div className="min-h-screen flex items-center justify-center px-5 md:px-6 py-12 md:py-20">
      <div className="w-full max-w-lg">
        <StepIndicator current={step} total={STEPS.length} stepTitle={current.title} />

        <div className="glass-elevated rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-card">
          <h2 className="text-2xl font-bold mb-1 tracking-tight">{current.title}</h2>
          <p className="text-sm text-muted mb-8">{current.subtitle}</p>

          <div key={step} className={`space-y-5 ${animClass}`}>
            {current.fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium mb-2 text-muted tracking-wide">
                  {field.label}
                  {field.optional && <span className="text-muted/50 ml-1">(opcional)</span>}
                </label>

                {field.type === "text" && (
                  <input
                    type="text"
                    value={data[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-card/80 border border-border/60 text-text placeholder:text-muted/40 focus:outline-none focus:border-purple/80 focus:bg-card focus:shadow-[0_0_0_4px_rgba(168,85,247,0.15)] focus:ring-1 focus:ring-purple/30 transition-all duration-200"
                  />
                )}

                {field.type === "textarea" && (
                  <textarea
                    value={data[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-card/80 border border-border/60 text-text placeholder:text-muted/40 focus:outline-none focus:border-purple/80 focus:bg-card focus:shadow-[0_0_0_4px_rgba(168,85,247,0.15)] focus:ring-1 focus:ring-purple/30 transition-all duration-200 resize-none min-h-[100px]"
                  />
                )}

                {field.type === "select" && field.options && (
                  <OptionGrid
                    options={field.options}
                    selected={data[field.key]}
                    onSelect={(v) => update(field.key, v)}
                    columns={field.columns}
                  />
                )}

                {field.type === "color" && (
                  <ColorPicker
                    selected={data[field.key]}
                    onSelect={(v) => update(field.key, v)}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8 md:mt-10">
            {step > 0 && (
              <button
                onClick={goBack}
                className="flex items-center gap-2 px-4 sm:px-6 py-3.5 rounded-full border border-border/60 text-muted hover:border-purple/40 hover:text-text active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar
              </button>
            )}
            <button
              onClick={goForward}
              disabled={!canAdvance}
              className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-dark via-purple to-purple-light font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed cursor-pointer ${
                step === STEPS.length - 1 ? "glow-purple" : ""
              }`}
            >
              {step === STEPS.length - 1 ? (
                <>
                  <Sparkles className="w-4 h-4 animate-pulse" /> Gerar Influenciador
                </>
              ) : (
                <>
                  Proximo <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
