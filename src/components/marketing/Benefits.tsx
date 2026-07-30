import { Scaling, ShieldCheck, UserPlus, UsersRound } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BENEFITS = [
  {
    title: "Consistent Execution",
    description:
      "Keep recurring work reliable across teams, roles, and changing responsibilities.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Onboarding",
    description:
      "Help new team members understand and follow established processes sooner.",
    icon: UserPlus,
  },
  {
    title: "Better Collaboration",
    description:
      "Give teams clearer processes, responsibilities, and shared operational context.",
    icon: UsersRound,
  },
  {
    title: "Scalable Operations",
    description:
      "Maintain quality and consistency as teams and operational volume grow.",
    icon: Scaling,
  },
] as const;

export function Benefits() {
  return (
    <Section className="bg-surface-base">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-12">
          <SectionHeader
            className="mx-0 items-start text-left"
            title="What repeatable operations make possible"
          />

          <ul className="relative grid overflow-hidden border-y border-structural before:pointer-events-none before:absolute before:top-8 before:bottom-8 before:left-5 before:w-px before:bg-flow-line/50 lg:grid-cols-4 lg:before:top-[3.25rem] lg:before:right-[12.5%] lg:before:bottom-auto lg:before:left-[12.5%] lg:before:h-px lg:before:w-auto">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <li
                  key={benefit.title}
                  className="relative z-10 grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-structural py-6 last:border-b-0 lg:grid-cols-1 lg:gap-5 lg:border-r lg:border-b-0 lg:px-6 lg:py-8 lg:last:border-r-0"
                >
                  <span className="relative z-10 flex size-10 shrink-0 lg:justify-self-center items-center justify-center rounded-full border border-flow-line/45 bg-surface-base text-brand-blue ring-8 ring-surface-base">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div className="flex min-w-0 flex-col gap-2">
                    <h3 className="text-base leading-snug font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="leading-6 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
