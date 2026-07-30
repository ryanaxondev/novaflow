import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PAIN_POINTS = [
  {
    title: "Inconsistent Processes",
    description:
      "The same work is handled differently across teams, leading to rework, delays, and uneven outcomes.",
    placement: "lg:col-span-8 lg:col-start-1",
  },
  {
    title: "Fragmented Knowledge",
    description:
      "Critical information is scattered across tools and people, making reliable execution harder.",
    placement: "lg:col-span-8 lg:col-start-5",
  },
  {
    title: "Person-Dependent Execution",
    description:
      "Recurring work slows down when key knowledge and decisions depend on a few individuals.",
    placement: "lg:col-span-8 lg:col-start-2",
  },
] as const;

export function Problem() {
  return (
    <Section className="border-y border-structural bg-surface-subtle">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <SectionHeader
            className="mx-0 items-start text-left lg:self-start"
            title="When work isn't repeatable, growth creates friction."
          />

          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[30%] left-[22%] z-0 hidden w-[17%] border-t border-dashed border-flow-line/45 lg:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[30%] left-[44%] z-0 hidden w-[11%] border-t border-dashed border-flow-line/45 lg:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[66%] left-[34%] z-0 hidden w-[12%] border-t border-dashed border-flow-line/45 lg:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[66%] left-[52%] z-0 hidden w-[19%] border-t border-dashed border-flow-line/45 lg:block"
            />

            <ul className="relative z-10 grid gap-0 lg:grid-cols-12 lg:gap-y-4">
              {PAIN_POINTS.map((painPoint) => (
                <li
                  key={painPoint.title}
                  className={`relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-t border-structural py-7 lg:border-0 lg:px-4 lg:py-8 ${painPoint.placement}`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none mt-1 size-5 rounded-full border border-dashed border-flow-line"
                  />
                  <div className="relative min-w-0">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-4 left-0 hidden h-px w-12 bg-flow-line lg:block"
                    />
                    <h3 className="text-base leading-snug font-semibold text-foreground">
                      {painPoint.title}
                    </h3>
                    <p className="mt-2 max-w-xl leading-6 text-muted-foreground">
                      {painPoint.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}