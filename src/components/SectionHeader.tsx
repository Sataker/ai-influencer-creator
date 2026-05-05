interface Props {
  preTitle?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeader({ preTitle, title, highlight, subtitle }: Props) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4">
      {preTitle && (
        <p className="text-sm text-purple-light font-semibold uppercase tracking-wider mb-4">
          {preTitle}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-muted text-base sm:text-lg mt-4 sm:mt-5 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
