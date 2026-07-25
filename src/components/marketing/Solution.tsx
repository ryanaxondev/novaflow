import { ArrowRight, ListChecks, TrendingUp, Workflow } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Solution() {
  const solutionPrinciples = [
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

  return (
    <Section>
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="flex min-w-0 flex-col gap-10 lg:order-2">
            <SectionHeader
              className="mx-0 items-start text-left"
              title="Make consistency part of the process."
              description="NovaFlow turns proven ways of working into structured, repeatable systems that guide teams as they grow."
            />

            <ol className="grid gap-8 sm:grid-cols-3 sm:gap-5">
              {solutionPrinciples.map((principle) => (
                <li
                  key={principle.number}
                  className="flex min-w-0 flex-col gap-3 border-t pt-4"
                >
                  <span className="text-sm font-semibold text-primary">
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

          <Card
            aria-hidden="true"
            className="min-w-0 lg:order-1 [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]"
          >
            <CardContent className="flex min-h-64 items-center">
              <div className="flex w-full min-w-0 items-center">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <ListChecks
                    className="size-7"
                    strokeWidth={1.5}
                  />
                </span>

                <span className="flex min-w-5 flex-1 items-center px-2 text-primary sm:px-4">
                  <span className="h-px flex-1 bg-primary/30" />
                  <ArrowRight
                    className="size-4 shrink-0 -translate-x-px"
                    strokeWidth={1.5}
                  />
                </span>

                <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Workflow
                    className="size-7"
                    strokeWidth={1.5}
                  />
                </span>

                <span className="flex min-w-5 flex-1 items-center px-2 text-primary sm:px-4">
                  <span className="h-px flex-1 bg-primary/30" />
                  <ArrowRight
                    className="size-4 shrink-0 -translate-x-px"
                    strokeWidth={1.5}
                  />
                </span>

                <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <TrendingUp
                    className="size-7"
                    strokeWidth={1.5}
                  />
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
