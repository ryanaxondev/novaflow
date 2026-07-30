import {
  BadgeCheck,
  BookOpenCheck,
  CircleCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SCENARIO_STAGES = [
  {
    owner: "People Operations",
    responsibility: "Collect information",
  },
  {
    owner: "IT",
    responsibility: "Set up access",
  },
  {
    owner: "Hiring Manager",
    responsibility: "Confirm readiness",
  },
] as const;

const OPERATIONAL_SIGNALS = [
  {
    label: "Onboarding guidance",
    icon: BookOpenCheck,
  },
  {
    label: "Workflow visibility",
    icon: BadgeCheck,
  },
  {
    label: "Connected tools",
    icon: CircleCheck,
  },
] as const;

export function SocialProof() {
  return (
    <Section className="bg-surface-base">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeader
            className="mx-0 items-start text-left"
            title="Repeatable operations in practice"
            description="Employee onboarding often spans People Operations, IT, and hiring managers. A structured workflow keeps responsibilities, handoffs, guidance, and progress connected from start to finish."
          />

          <article
            aria-labelledby="social-proof-scenario-title"
            className="overflow-hidden rounded-3xl border border-structural bg-surface-operational"
          >
            <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="flex min-w-0 flex-col justify-between gap-10 border-b border-structural p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
                <div className="flex flex-col items-start gap-5">
                  <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
                    Illustrative operational scenario
                  </p>

                  <div className="flex flex-col gap-3">
                    <h3
                      id="social-proof-scenario-title"
                      className="text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl"
                    >
                      Employee Onboarding
                    </h3>

                    <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                      We needed one clear way to run onboarding across teams. A
                      structured workflow made responsibilities, handoffs, and
                      guidance easier to follow from start to finish.
                    </p>
                  </div>
                </div>

                <p className="border-t border-structural pt-5 text-sm leading-6 text-muted-foreground">
                  Illustrative operational scenario created for this portfolio
                  demonstration.
                </p>
              </div>

              <div className="relative isolate min-w-0 overflow-hidden bg-surface-base p-6 sm:p-8 lg:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-10 top-1/2 hidden h-px bg-flow-line/35 lg:block"
                />

                <div className="relative z-10 flex flex-col gap-8">
                  <div className="flex flex-col gap-3 rounded-2xl border border-structural bg-surface-base p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-primary-foreground">
                        <Workflow
                          aria-hidden="true"
                          className="size-5"
                          strokeWidth={1.75}
                        />
                      </span>

                      <div className="min-w-0">
                        <p className="font-semibold text-foreground">
                          Employee Onboarding
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Current step
                        </p>
                      </div>
                    </div>

                    <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-brand-cyan ring-4 ring-brand-cyan/10"
                      />
                      In progress
                    </p>
                  </div>

                  <ol className="grid gap-px overflow-hidden rounded-2xl border border-structural bg-structural md:grid-cols-3">
                    {SCENARIO_STAGES.map((stage, index) => (
                      <li
                        key={stage.owner}
                        className="relative flex min-w-0 flex-col gap-4 bg-surface-base p-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-blue/30 bg-surface-operational text-xs font-semibold text-brand-blue">
                            {index + 1}
                          </span>
                          <UsersRound
                            aria-hidden="true"
                            className="size-4 text-brand-blue"
                            strokeWidth={1.75}
                          />
                        </div>

                        <div className="flex min-w-0 flex-col gap-1">
                          <p className="text-sm font-semibold text-foreground">
                            {stage.owner}
                          </p>
                          <p className="text-sm leading-6 text-muted-foreground">
                            {stage.responsibility}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <ul className="grid gap-px overflow-hidden rounded-2xl border border-structural bg-structural sm:grid-cols-3">
                    {OPERATIONAL_SIGNALS.map((signal) => {
                      const Icon = signal.icon;

                      return (
                        <li
                          key={signal.label}
                          className="flex min-w-0 items-center gap-3 bg-surface-base p-4"
                        >
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-operational text-brand-blue">
                            <Icon
                              aria-hidden="true"
                              className="size-4"
                              strokeWidth={1.75}
                            />
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {signal.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
