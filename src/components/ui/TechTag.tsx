import { LucideIcon } from "lucide-react";

interface TechTagProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function TechTag({ label, icon: Icon, className = "" }: TechTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-foreground ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden />}
      {label}
    </span>
  );
}
