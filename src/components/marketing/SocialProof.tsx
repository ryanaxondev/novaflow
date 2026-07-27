import { BadgeCheck, Info, Users, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SocialProof() {
  return (
    <Section className="border-y bg-muted/20">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <SectionHeader title="Repeatable operations in practice" />

            <p className="text-lg leading-8 text-muted-foreground">
              Employee onboarding often spans People Operations, IT, and hiring
              managers. A structured workflow keeps responsibilities, handoffs,
              guidance, and progress connected from start to finish.
            </p>
          </div>

          <Card className="[--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]">
            <CardContent>
              <figure className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                <figcaption className="flex min-w-0 flex-col items-start gap-6 lg:col-start-2">
                  <Badge variant="secondary">Employee Onboarding</Badge>

                  <blockquote className="text-2xl leading-9 font-semibold tracking-tight text-foreground sm:text-3xl sm:leading-10">
                    We needed one clear way to run onboarding across teams. A
                    structured workflow made responsibilities, handoffs, and
                    guidance easier to follow from start to finish.
                  </blockquote>

                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground">
                      Operations Lead
                    </span>

                    <span className="text-sm text-muted-foreground">
                      Illustrative growing-team scenario
                    </span>
                  </div>

                  <p className="flex items-start gap-2 border-t pt-5 text-sm leading-6 text-muted-foreground">
                    <Info
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0"
                      strokeWidth={1.5}
                    />

                    <span>
                      Illustrative operational scenario created for this
                      portfolio demonstration.
                    </span>
                  </p>
                </figcaption>

                <div
                  aria-hidden="true"
                  className="flex min-w-0 items-center justify-center rounded-xl border bg-muted/20 px-4 py-12 sm:px-8 lg:col-start-1 lg:row-start-1"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground sm:size-16">
                    <Users className="size-6 sm:size-7" strokeWidth={1.5} />
                  </span>

                  <span className="h-px min-w-4 flex-1 bg-border" />

                  <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground sm:size-20">
                    <Workflow className="size-7 sm:size-8" strokeWidth={1.5} />
                  </span>

                  <span className="h-px min-w-4 flex-1 bg-border" />

                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full border bg-background text-primary sm:size-16">
                    <BadgeCheck
                      className="size-6 sm:size-7"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </figure>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}