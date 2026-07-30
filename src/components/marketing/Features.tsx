import {
  BadgeCheck,
  BookOpen,
  ChartNoAxesCombined,
  ListChecks,
  Plug,
  Workflow,
} from "lucide-react";

import { FeaturesCapabilityCanvas } from "@/components/marketing/FeaturesCapabilityCanvas";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CAPABILITIES = [
  {
    title: "Workflow Design",
    description:
      "Turn recurring processes into clear, structured workflows teams can follow.",
    icon: Workflow,
  },
  {
    title: "Guided Execution",
    description:
      "Keep steps, ownership, and handoffs clear from start to finish.",
    icon: ListChecks,
  },
  {
    title: "Centralized Knowledge",
    description:
      "Keep instructions, context, and operational guidance connected to the work.",
    icon: BookOpen,
  },
  {
    title: "Automation & Approvals",
    description:
      "Automate repeatable steps, handoffs, and approvals where consistency matters.",
    icon: BadgeCheck,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Give teams shared visibility into workflow progress and operational performance.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Integrations",
    description: "Connect NovaFlow with the tools teams already use.",
    icon: Plug,
  },
] as const;

export function Features() {
  return (
    <Section
      id="features"
      className="bg-surface-subtle"
    >
      <Container>
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          <SectionHeader
            className="mx-0 items-start text-left"
            title="Capabilities built for repeatable operations"
          />

          <FeaturesCapabilityCanvas />

          <ul className="grid gap-px overflow-hidden border-y border-structural bg-structural sm:grid-cols-2 xl:grid-cols-3">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <li
                  key={capability.title}
                  className="flex min-w-0 items-start gap-4 bg-surface-base px-5 py-6 sm:px-6"
                >
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <span className="text-xs font-semibold text-brand-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full bg-surface-operational text-brand-blue">
                      <Icon
                        aria-hidden="true"
                        className="size-4"
                        strokeWidth={1.6}
                      />
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col gap-2">
                    <h3 className="text-base leading-snug font-semibold text-foreground">
                      {capability.title}
                    </h3>
                    <p className="leading-6 text-muted-foreground">
                      {capability.description}
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
