import { Check } from "lucide-react";

interface Props {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  columns?: number;
}

export default function OptionGrid({ options, selected, onSelect, columns = 2 }: Props) {
  const colClass = columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2";

  return (
    <div className={`grid ${colClass} gap-3`}>
      {options.map((opt) => {
        const isSelected = selected === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`relative p-3 sm:p-3.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-left active:scale-[0.97] ${
              isSelected
                ? "bg-purple/15 border border-purple/50 text-purple-light shadow-[0_0_0_3px_rgba(168,85,247,0.1),0_0_20px_rgba(168,85,247,0.08)]"
                : "bg-card/60 border border-border/50 hover:border-purple/30 hover:bg-card"
            }`}
          >
            {opt}
            {isSelected && (
              <Check className="absolute top-2 right-2 w-3.5 h-3.5 text-purple-light" />
            )}
          </button>
        );
      })}
    </div>
  );
}
