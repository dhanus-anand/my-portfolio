interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 w-full">
        <h2
          id={id}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent shrink-0"
        >
          {title}
        </h2>
        <div className="flex-1 h-px min-w-[24px] bg-border" aria-hidden />
      </div>
      {subtitle && (
        <p className="mt-2 text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
