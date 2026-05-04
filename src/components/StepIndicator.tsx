interface Props {
  current: number;
  total: number;
  stepTitle: string;
}

export default function StepIndicator({ current, total, stepTitle }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted">Etapa {current + 1} de {total}</span>
        <span className="text-sm font-medium text-purple-light">{stepTitle}</span>
      </div>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              i < current
                ? "bg-gradient-to-r from-purple to-purple-light"
                : i === current
                ? "bg-gradient-to-r from-purple to-purple-light glow-purple"
                : "bg-border/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
