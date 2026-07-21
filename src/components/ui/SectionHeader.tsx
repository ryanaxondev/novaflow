import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}