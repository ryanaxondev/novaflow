import { Files, UserRoundCog, Workflow } from "lucide-react";

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Problem() {
  const painPoints = [
    {
      title: "Inconsistent Processes",
      description:
        "The same work is handled differently across teams, leading to rework, delays, and uneven outcomes.",
      icon: Workflow,
    },
    {
      title: "Fragmented Knowledge",
      description:
        "Critical information is scattered across tools and people, making reliable execution harder.",
      icon: Files,
    },
    {
      title: "Person-Dependent Execution",
      description:
        "Recurring work slows down when key knowledge and decisions depend on a few individuals.",
      icon: UserRoundCog,
    },
  ] as const;

  return (
    <Section className="border-y bg-muted/20">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeader title="When work isn't repeatable, growth creates friction." />

          <ul className="grid gap-6 lg:grid-cols-3">
            {painPoints.map((painPoint) => {
              const Icon = painPoint.icon;

              return (
                <li key={painPoint.title}>
                  <Card className="h-full">
                    <CardContent className="flex h-full items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon
                          aria-hidden="true"
                          className="size-6"
                          strokeWidth={1.5}
                        />
                      </span>

                      <div className="flex min-w-0 flex-col gap-2">
                        <CardTitle className="leading-snug">
                          <h3>{painPoint.title}</h3>
                        </CardTitle>

                        <p className="leading-6 text-muted-foreground">
                          {painPoint.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
