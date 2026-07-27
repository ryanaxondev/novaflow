import {
  Check,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Network,
} from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Hero() {
  const supportingPoints = [
    "Standardize processes",
    "Reduce manual work",
    "Scale with confidence",
  ] as const;

  const workflowSteps = [
    { label: "Invite", state: "completed" },
    { label: "Collect Info", state: "completed" },
    { label: "Setup", state: "current" },
    { label: "Equip", state: "pending" },
    { label: "Access", state: "pending" },
    { label: "Welcome", state: "pending" },
  ] as const;

  const setupChecklist = [
    { label: "Create accounts", completed: true },
    { label: "Assign licenses", completed: true },
    { label: "Configure workspace", completed: false },
    { label: "Add to groups", completed: false },
  ] as const;

  const workflowDetails = [
    { label: "Owner", value: "People Operations" },
    { label: "Started", value: "May 6" },
    { label: "Due", value: "May 10" },
  ] as const;

  return (
    <Section className="overflow-hidden bg-background">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="max-w-xl text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Build repeatable systems. Scale with confidence.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                NovaFlow helps growing teams standardize how work gets done, so
                collaboration stays consistent, reliable, and ready to
                scale—without adding another task-management tool.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#request-demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                Request a Demo
              </Link>

              <Link
                href="#pricing"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "w-full sm:w-auto",
                )}
              >
                View Pricing
              </Link>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-5">
              {supportingPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <figure
            aria-labelledby="workflow-preview-title"
            className="min-w-0 rounded-2xl border bg-card p-3 text-card-foreground shadow-sm sm:p-5"
          >
            <div className="flex items-center justify-between gap-4 border-b pb-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Network
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.75}
                  />
                </span>
                <h2
                  id="workflow-preview-title"
                  className="truncate text-sm font-semibold sm:text-base"
                >
                  Onboarding New Employee
                </h2>
              </div>
              <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                Active
              </span>
            </div>

            <ol
              aria-label="Workflow sequence"
              className="grid grid-cols-3 gap-x-2 gap-y-5 border-b py-5 sm:grid-cols-6"
            >
              {workflowSteps.map((step) => (
                <li
                  key={step.label}
                  aria-current={step.state === "current" ? "step" : undefined}
                  className="flex min-w-0 flex-col items-center gap-2 text-center"
                >
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-lg border text-muted-foreground",
                      step.state === "completed" &&
                        "border-primary/30 bg-primary/5 text-primary",
                      step.state === "current" &&
                        "border-primary bg-primary text-primary-foreground shadow-sm",
                    )}
                  >
                    {step.state === "completed" ? (
                      <Check
                        aria-hidden="true"
                        className="size-4"
                        strokeWidth={2}
                      />
                    ) : step.state === "current" ? (
                      <ClipboardCheck
                        aria-hidden="true"
                        className="size-4"
                        strokeWidth={1.75}
                      />
                    ) : (
                      <Circle
                        aria-hidden="true"
                        className="size-3"
                        strokeWidth={1.75}
                      />
                    )}
                  </span>
                  <span className="text-xs leading-4 font-medium">
                    {step.label}
                  </span>
                  <span className="sr-only">
                    {step.state === "current" ? "Current" : step.state}
                  </span>
                </li>
              ))}
            </ol>

            <div className="grid gap-6 py-5 sm:grid-cols-2 sm:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold">Setup checklist</h3>
                  <span className="text-xs text-muted-foreground">
                    2 of 4 complete
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {setupChecklist.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      {item.completed ? (
                        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check
                            aria-hidden="true"
                            className="size-2.5"
                            strokeWidth={2.5}
                          />
                          <span className="sr-only">Completed:</span>
                        </span>
                      ) : (
                        <span className="size-4 shrink-0 rounded-full border">
                          <span className="sr-only">Pending:</span>
                        </span>
                      )}
                      <span
                        className={cn(
                          !item.completed && "text-muted-foreground",
                        )}
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border bg-muted/30 p-4">
                <h3 className="text-sm font-semibold">Workflow details</h3>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs">
                  {workflowDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="contents"
                    >
                      <dt className="text-muted-foreground">{detail.label}</dt>
                      <dd className="text-right font-medium">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <progress
                    aria-label="Workflow progress"
                    className="h-1.5 w-full overflow-hidden rounded-full bg-muted accent-primary"
                    max={100}
                    value={40}
                  >
                    40%
                  </progress>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
