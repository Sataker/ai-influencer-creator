const COLORS = [
  { name: "Roxo", value: "#a855f7" },
  { name: "Azul", value: "#3b82f6" },
  { name: "Verde", value: "#22c55e" },
  { name: "Vermelho", value: "#ef4444" },
  { name: "Rosa", value: "#ec4899" },
  { name: "Laranja", value: "#f97316" },
  { name: "Amarelo", value: "#eab308" },
  { name: "Ciano", value: "#06b6d4" },
  { name: "Preto", value: "#171717" },
  { name: "Branco", value: "#f5f5f5" },
];

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function ColorPicker({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
      {COLORS.map((c) => {
        const isSelected = selected === c.name;
        return (
          <button
            key={c.value}
            type="button"
            onClick={() => onSelect(c.name)}
            className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.95] ${
              isSelected
                ? "bg-purple/15 border border-purple/40 shadow-[0_0_0_3px_rgba(168,85,247,0.1)]"
                : "border border-transparent hover:bg-white/5"
            }`}
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 ${
                isSelected
                  ? "ring-2 ring-purple ring-offset-2 ring-offset-bg"
                  : "border-2 border-border"
              }`}
              style={{ backgroundColor: c.value }}
            />
            <span className={`text-xs ${isSelected ? "text-purple-light" : "text-muted"}`}>
              {c.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
