import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SOLUTION_PRINCIPLES = [
  {
    number: "01",
    title: "Standardize",
    description: "Define a clear, shared way to perform recurring work.",
  },
  {
    number: "02",
    title: "Systematize",
    description:
      "Turn that process into a structured workflow that guides execution.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "Keep execution consistent as teams, responsibilities, and operational volume grow.",
  },
] as const;

export function Solution() {
  return (
    <Section className="bg-surface-base">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:items-start lg:gap-16">
          <SectionHeader
            className="mx-0 items-start text-left"
            title="Make consistency part of the process."
            description="NovaFlow turns proven ways of working into structured, repeatable systems that guide teams as they grow."
          />

          <div className="relative isolate overflow-hidden rounded-xl border-y border-structural bg-surface-operational px-5 py-10 sm:px-8 lg:px-6 lg:py-12">
            <span
              aria-hidden="true"
              className="operational-grid pointer-events-none absolute inset-y-0 left-0 z-0 w-20 lg:inset-x-0 lg:top-0 lg:h-24 lg:w-auto"
            />

            <ol className="relative z-10 grid gap-10 before:absolute before:top-5 before:bottom-5 before:left-5 before:w-px before:bg-flow-line lg:grid-cols-3 lg:gap-0 lg:before:top-5 lg:before:right-[16.666%] lg:before:bottom-auto lg:before:left-[16.666%] lg:before:h-px lg:before:w-auto">
              {SOLUTION_PRINCIPLES.map((principle) => (
                <li
                  key={principle.number}
                  className="relative grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-4 lg:grid-cols-1 lg:gap-6 lg:px-6"
                >
                  <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-brand-blue text-xs font-semibold text-primary-foreground">
                    {principle.number}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base leading-snug font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="leading-6 text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
