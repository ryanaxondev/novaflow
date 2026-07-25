import { Scaling, ShieldCheck, UserPlus, UsersRound } from "lucide-react";

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Benefits() {
  const benefits = [
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

  return (
    <Section className="border-y bg-muted/20">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeader title="What repeatable operations make possible" />

          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <li key={benefit.title}>
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col items-start gap-5">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon
                          aria-hidden="true"
                          className="size-6"
                          strokeWidth={1.5}
                        />
                      </span>

                      <div className="flex min-w-0 flex-col gap-2">
                        <CardTitle className="leading-snug">
                          <h3>{benefit.title}</h3>
                        </CardTitle>

                        <p className="leading-6 text-muted-foreground">
                          {benefit.description}
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
