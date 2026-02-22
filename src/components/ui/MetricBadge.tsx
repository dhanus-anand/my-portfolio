interface MetricBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricBadge({ value, label, className = "" }: MetricBadgeProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface-elevated/50 px-3 py-2 ${className}`}
    >
      <span className="block text-base font-bold text-accent-blue leading-tight">{value}</span>
      {label ? <span className="text-xs text-muted-foreground">{label}</span> : null}
    </div>
  );
}
