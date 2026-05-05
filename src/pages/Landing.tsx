import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, Image as ImageIcon, MessageCircle, Users, TrendingUp, Clock, ArrowRight, ChevronDown, Star, Heart, MessageSquare, Bookmark, BadgeCheck } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const FEATURES = [
  {
    icon: ImageIcon,
    title: "Fotos Hiper-realistas",
    desc: "Ninguem vai saber que nao e uma pessoa real. Fotos em qualquer cenario, roupa ou pose que voce precisar.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento 24h",
    desc: "Responde clientes no WhatsApp com a personalidade da sua marca. Voce dorme, ele vende.",
  },
  {
    icon: Zap,
    title: "Pronto em Minutos",
    desc: "Responda o quiz, a IA gera tudo. Sem conhecimento tecnico, sem contratar fotografo.",
  },
];

const STEPS_DATA = [
  { num: "01", title: "Personalize o Avatar", desc: "Defina aparencia, estilo e personalidade — tudo atraves de um quiz rapido." },
  { num: "02", title: "IA Gera em Segundos", desc: "Nossa inteligencia artificial cria um avatar hiper-realista sob medida para sua marca." },
  { num: "03", title: "Publique e Venda", desc: "Baixe as imagens, ative videos mensais e comece a gerar conteudo." },
];

const TESTIMONIALS = [
  { name: "Marina Costa", role: "Dona de e-commerce", text: "Triplicou meu engajamento no Instagram. Parece uma modelo real.", stars: 5 },
  { name: "Rafael Duarte", role: "Coach financeiro", text: "Meu influenciador gera conteudo todo dia sem eu precisar filmar nada.", stars: 5 },
  { name: "Camila Rocha", role: "Nutricionista", text: "Investi R$350/mes e parei de gastar R$2.000 com fotografo. Resultado melhor.", stars: 5 },
];

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 px-5 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 text-xs font-semibold tracking-wider uppercase text-purple-light mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Usado por +200 marcas brasileiras
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
              Crie seu{" "}
              <span className="gradient-text">Influenciador IA</span>
              <br />
              em minutos
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mt-6 max-w-lg">
              Seu proximo vendedor nunca dorme, nunca falta, e tem a cara da sua marca.
              Fotos e videos prontos para publicar.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <button
                onClick={() => nav("/quiz")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full gradient-purple font-semibold text-base md:text-lg glow-purple hover:scale-105 active:scale-[0.98] hover:glow-purple-intense transition-all duration-300 cursor-pointer shadow-lg shadow-purple/25"
              >
                Criar meu Influenciador
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-muted hover:text-purple-light transition-colors text-sm cursor-pointer py-4"
              >
                Veja como funciona
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right — Hero mockup: Instagram-style profile card */}
          <div className="relative animate-fade-up stagger-2 mt-10 md:mt-0 max-w-sm mx-auto md:max-w-md md:ml-auto w-full">
            <div className="relative glass-elevated rounded-2xl glow-purple overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border/50">
                <div className="w-11 h-11 rounded-full gradient-purple-br p-[2px]">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-base font-bold">
                    L
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold truncate">luna.ai</span>
                    <BadgeCheck className="w-4 h-4 text-purple-light shrink-0" />
                  </div>
                  <p className="text-xs text-muted">Influenciadora · Sao Paulo</p>
                </div>
                <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple/15 text-purple-light border border-purple/30">
                  Seguir
                </div>
              </div>

              {/* Image area */}
              <div className="relative aspect-[4/5] gradient-card-br overflow-hidden">
                {/* abstract layered "photo" */}
                <div className="absolute inset-0 bg-radial-top opacity-80" />
                <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full gradient-purple-d blur-3xl opacity-40" />
                <div className="absolute -bottom-12 -right-8 w-56 h-56 rounded-full gradient-purple-d blur-3xl opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full gradient-purple-br shadow-2xl shadow-purple/40 ring-4 ring-white/10" />
                </div>

                {/* Floating engagement badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass text-[11px] font-semibold animate-float">
                  <TrendingUp className="w-3 h-3 text-purple-light" />
                  98% engajamento
                </div>
              </div>

              {/* Action row */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-4">
                  <Heart className="w-5 h-5 text-purple-light fill-purple-light/40" />
                  <MessageSquare className="w-5 h-5 text-muted" />
                </div>
                <Bookmark className="w-5 h-5 text-muted" />
              </div>

              {/* Stats */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="font-semibold">42.187</span>
                  <span className="text-muted">curtidas</span>
                </div>
                <p className="text-sm mt-1">
                  <span className="font-semibold mr-1.5">luna.ai</span>
                  <span className="text-muted">Seu novo influenciador trabalhando 24/7 pela sua marca</span>
                </p>
              </div>
            </div>

            {/* Floating side badge */}
            <div
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 glass rounded-xl px-3 py-2.5 shadow-card animate-float items-center gap-2 text-xs"
              style={{ animationDelay: "2s" }}
            >
              <Users className="w-3.5 h-3.5 text-purple" />
              <span className="font-semibold">1.2M seguidores</span>
            </div>
            <div
              className="hidden md:flex absolute -right-4 top-8 glass rounded-xl px-3 py-2.5 shadow-card animate-float items-center gap-2 text-xs"
              style={{ animationDelay: "4s" }}
            >
              <Clock className="w-3.5 h-3.5 text-purple-light" />
              <span className="font-semibold">24h online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 border-y border-border/30">
        <div className="max-w-4xl mx-auto px-5 md:px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-20">
          {[
            { value: "+500", label: "Avatares criados" },
            { value: "98%", label: "Satisfacao" },
            { value: "3 min", label: "Tempo medio" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-xs text-muted uppercase tracking-wider mb-2 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 px-5 md:px-6">
        <SectionHeader
          preTitle="O que muda no seu negocio"
          title="Conteudo profissional sem"
          highlight="contratar ninguem"
          subtitle="Tecnologia de ponta para criar um influenciador digital que representa sua marca, 24 horas por dia."
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-7 md:p-9 group hover:shadow-card-hover hover:border-purple/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mb-6">
                <f.icon className="w-6 h-6 text-purple group-hover:text-purple-light transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 md:py-28 px-5 md:px-6 bg-radial-top">
        <SectionHeader
          preTitle="Como funciona"
          title="Do zero ao seu influenciador em"
          highlight="3 passos"
        />
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-px bg-linear-to-r from-transparent via-purple/30 to-transparent" />
          {STEPS_DATA.map((s, i) => (
            <div key={s.num} className="text-center animate-fade-up" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
              <div className="w-12 h-12 mx-auto rounded-full bg-purple/20 border border-purple/40 flex items-center justify-center text-sm font-bold text-purple-light mb-4 relative z-10">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-5 md:px-6">
        <SectionHeader
          preTitle="Depoimentos"
          title="Quem usa,"
          highlight="recomenda"
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="glass rounded-2xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }, (_, j) => (
                  <Star key={j} className="w-4 h-4 text-purple fill-purple" />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Seu concorrente ja tem um{" "}
            <span className="gradient-text">influenciador IA.</span>
            <br />E voce?
          </h2>
          <p className="text-muted text-base sm:text-lg mb-8">
            Gere sua primeira imagem gratis em menos de 3 minutos. Sem cartao de credito.
          </p>
          <button
            onClick={() => nav("/quiz")}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full gradient-purple font-semibold text-base sm:text-lg glow-purple hover:scale-105 active:scale-[0.98] hover:glow-purple-intense transition-all duration-300 cursor-pointer shadow-lg shadow-purple/25"
          >
            <Sparkles className="w-5 h-5" />
            Comecar agora
          </button>
        </div>
      </section>
    </div>
  );
}
