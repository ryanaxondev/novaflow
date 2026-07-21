import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function Section({
  children,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}