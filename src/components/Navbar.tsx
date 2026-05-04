import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const nav = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/50"
          : "glass-subtle border-b border-border/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => nav("/")}
          className="text-xl font-extrabold gradient-text cursor-pointer tracking-tight py-2"
        >
          AI Influencer
        </button>
        <button
          onClick={() => nav("/quiz")}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-dark to-purple text-sm font-semibold hover:scale-105 active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-lg shadow-purple/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Criar agora
        </button>
      </div>
    </nav>
  );
}
