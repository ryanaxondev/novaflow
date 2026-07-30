import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { HeroProductWorkbench } from "@/components/marketing/HeroProductWorkbench";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const SUPPORTING_POINTS = [
  "Standardize processes",
  "Reduce manual work",
  "Scale with confidence",
] as const;

export function Hero() {
  return (
    <Section className="overflow-hidden bg-surface-base py-12 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-x-12 gap-y-7 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-y-8 xl:gap-x-16">
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8 lg:col-start-1 lg:row-start-1">
            <div className="flex flex-col gap-5 sm:gap-6">
              <h1 className="max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-foreground sm:text-6xl sm:leading-[0.98] sm:tracking-[-0.045em] lg:text-7xl">
                Build repeatable systems. Scale with confidence.
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
                NovaFlow helps growing teams standardize how work gets done, so
                collaboration stays consistent, reliable, and ready to
                scale—without adding another task-management tool.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#request-demo"
                className={cn(
                  buttonVariants({ size: "marketing" }),
                  "w-full sm:w-auto",
                )}
              >
                Request a Demo
              </Link>

              <Link
                href="#pricing"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "marketing",
                  }),
                  "w-full sm:w-auto",
                )}
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <HeroProductWorkbench />
          </div>

          <ul className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-5 lg:col-start-1 lg:row-start-2 lg:self-start">
            {SUPPORTING_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}