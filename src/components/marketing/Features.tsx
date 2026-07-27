import {
  BadgeCheck,
  BookOpen,
  ChartNoAxesCombined,
  FileText,
  ListChecks,
  Plug,
  UserRound,
  Workflow,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Features() {
  const capabilities = [
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

  return (
    <Section id="features">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeader title="Capabilities built for repeatable operations" />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Card
              aria-hidden="true"
              className="min-w-0 [--card-spacing:--spacing(5)] sm:[--card-spacing:--spacing(6)]"
            >
              <CardHeader className="border-b">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Workflow
                      className="size-4"
                      strokeWidth={1.5}
                    />
                  </span>
                  <CardTitle className="truncate">Workflow builder</CardTitle>
                  <span className="ml-auto shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Draft
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-background text-muted-foreground">
                      <FileText
                        className="size-4"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="truncate font-medium">
                      Purchase request
                    </span>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    3 steps
                  </span>
                </div>

                <div className="rounded-xl border bg-muted/20 p-4 sm:p-5">
                  <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                    <div className="flex min-w-0 flex-1 items-center gap-3 rounded-lg border bg-background p-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold">
                        1
                      </span>
                      <span className="truncate text-sm font-medium">
                        Submit request
                      </span>
                    </div>

                    <span className="mx-auto h-4 w-px shrink-0 bg-border sm:mx-0 sm:h-px sm:w-5" />

                    <div className="flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-primary/40 bg-primary/5 p-3 ring-1 ring-primary/10">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
                        2
                      </span>
                      <span className="truncate text-sm font-medium">
                        Review request
                      </span>
                    </div>

                    <span className="mx-auto h-4 w-px shrink-0 bg-border sm:mx-0 sm:h-px sm:w-5" />

                    <div className="flex min-w-0 flex-1 items-center gap-3 rounded-lg border bg-background p-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold">
                        3
                      </span>
                      <span className="truncate text-sm font-medium">
                        Complete
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <UserRound
                      className="size-4 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground">
                        Owner
                      </span>
                      <span className="truncate text-xs font-medium">
                        Operations
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <BookOpen
                      className="size-4 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground">
                        Guidance
                      </span>
                      <span className="truncate text-xs font-medium">
                        Attached
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <Zap
                      className="size-4 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground">
                        Handoff
                      </span>
                      <span className="truncate text-xs font-medium">
                        Automated
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <li
                    key={capability.title}
                    className="flex min-w-0 items-start gap-4 border-t pt-5"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.5}
                      />
                    </span>

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
        </div>
      </Container>
    </Section>
  );
}
