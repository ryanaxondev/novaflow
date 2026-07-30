import { Check } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type CanvasStepState = "complete" | "current" | "upcoming";

type CanvasStep = {
  label:
    | "Prepare"
    | "Collect information"
    | "Set up access"
    | "Confirm readiness"
    | "Welcome";
  state: CanvasStepState;
  emphasis: "primary" | "continuation";
};

const WORKFLOW_STEPS = [
  { label: "Prepare", state: "complete", emphasis: "primary" },
  {
    label: "Collect information",
    state: "complete",
    emphasis: "primary",
  },
  { label: "Set up access", state: "current", emphasis: "primary" },
  {
    label: "Confirm readiness",
    state: "upcoming",
    emphasis: "continuation",
  },
  { label: "Welcome", state: "upcoming", emphasis: "continuation" },
] as const satisfies readonly CanvasStep[];

const OWNER_ROLES = [
  "People Operations",
  "IT",
  "Hiring Manager",
] as const;

const APPROVAL_STATES = [
  "Awaiting approval",
  "Approved",
] as const;

function CanvasWorkflowStep({
  step,
  index,
}: {
  step: CanvasStep;
  index: number;
}) {
  const isFirst = index === 0;
  const isLastPrimary = index === 2;
  const isLast = index === WORKFLOW_STEPS.length - 1;

  return (
    <li
      aria-current={step.state === "current" ? "step" : undefined}
      className={cn(
        "relative col-span-2 flex min-w-0 flex-col items-center gap-2 text-center lg:col-span-1",
        step.emphasis === "continuation" &&
          "col-span-3 flex-row justify-center gap-3 pt-2 text-left lg:flex-col lg:justify-start lg:gap-2 lg:pt-0 lg:text-center",
      )}
    >
      {!isFirst && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-4.5 right-1/2 left-0 h-px bg-flow-line/60",
            step.emphasis === "continuation" && "hidden lg:block",
          )}
        />
      )}

      {!isLast && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-4.5 right-0 left-1/2 h-px bg-flow-line/60",
            (step.emphasis === "continuation" || isLastPrimary) &&
              "hidden lg:block",
          )}
        />
      )}

      <span
        className={cn(
          "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border bg-surface-base text-xs font-semibold",
          step.state === "complete" &&
            "border-brand-blue bg-brand-blue text-primary-foreground",
          step.state === "current" &&
            "border-brand-cyan bg-brand-blue text-primary-foreground ring-4 ring-brand-cyan/20",
          step.state === "upcoming" &&
            "border-structural text-muted-foreground",
          step.emphasis === "continuation" && "size-7 lg:size-9",
        )}
      >
        {step.state === "complete" ? (
          <Check
            aria-hidden="true"
            className="size-4"
            strokeWidth={2}
          />
        ) : (
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full bg-current",
              step.state === "current" && "size-2",
            )}
          />
        )}
      </span>

      <span className="relative z-10 flex min-w-0 flex-col gap-0.5">
        <span className="text-xs leading-4 font-semibold text-foreground">
          {step.label}
        </span>
        <span
          className={cn(
            "text-xs leading-4 text-muted-foreground",
            step.state === "current" && "font-medium text-brand-blue",
          )}
        >
          {step.state === "complete"
            ? "Complete"
            : step.state === "current"
              ? "Current"
              : "Upcoming"}
        </span>
      </span>
    </li>
  );
}

export function FeaturesCapabilityCanvas() {
  return (
    <section
      aria-labelledby="features-canvas-title"
      className="relative isolate min-w-0 overflow-hidden rounded-2xl border border-structural bg-surface-operational shadow-sm"
    >
      <span
        aria-hidden="true"
        className="operational-grid pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 border-b border-structural bg-surface-base/80 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Image
              src="/brand/novaflow-mark.svg"
              alt=""
              width={18}
              height={18}
              className="size-[18px] shrink-0"
            />
            <span className="text-xs font-semibold text-foreground">
              NovaFlow
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand-cyan ring-4 ring-brand-cyan/10"
            />
            In progress
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(17rem,0.55fr)] lg:gap-5 lg:p-8">
          <div className="min-w-0 rounded-xl border border-structural bg-surface-base/90 p-4 sm:p-6">
            <header className="flex flex-col gap-1">
              <h3
                id="features-canvas-title"
                className="text-lg leading-tight font-semibold tracking-tight text-foreground sm:text-xl"
              >
                Employee Onboarding
              </h3>
              <p className="text-xs font-medium text-brand-blue">
                Current step
              </p>
            </header>

            <ol
              aria-label="Employee Onboarding workflow stages"
              className="mt-6 grid grid-cols-6 gap-x-2 gap-y-3 lg:grid-cols-5 lg:gap-x-0 lg:gap-y-0"
            >
              {WORKFLOW_STEPS.map((step, index) => (
                <CanvasWorkflowStep
                  key={step.label}
                  step={step}
                  index={index}
                />
              ))}
            </ol>

            <section
              aria-labelledby="features-guidance-title"
              className="mt-6 border-t border-structural pt-5"
            >
              <div className="flex items-center justify-between gap-4">
                <h4
                  id="features-guidance-title"
                  className="text-xs font-semibold text-foreground"
                >
                  Onboarding guidance
                </h4>
                <span className="text-xs font-medium text-muted-foreground">
                  Current
                </span>
              </div>

              <ul className="mt-3 grid grid-cols-2 gap-2 text-xs leading-4 text-muted-foreground sm:gap-3">
                <li className="flex min-w-0 items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-flow-line ring-4 ring-flow-line/10"
                  />
                  <span>Prepare</span>
                </li>
                <li className="flex min-w-0 items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-flow-line ring-4 ring-flow-line/10"
                  />
                  <span>Confirm readiness</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-1">
            <section
              aria-labelledby="features-owners-title"
              className="min-w-0 rounded-xl border border-structural bg-surface-base/90 p-3 sm:p-5"
            >
              <h4
                id="features-owners-title"
                className="text-xs font-semibold text-foreground"
              >
                People Operations
              </h4>
              <ul className="mt-3 grid gap-2">
                {OWNER_ROLES.map((role) => (
                  <li
                    key={role}
                    className="flex items-start gap-2 text-xs leading-4 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-flow-line"
                    />
                    {role}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="features-visibility-title"
              className="min-w-0 rounded-xl border border-structural bg-surface-base/90 p-3 sm:p-5"
            >
              <h4
                id="features-visibility-title"
                className="text-xs font-semibold text-foreground"
              >
                Workflow visibility
              </h4>
              <ul className="mt-3 grid gap-2">
                {APPROVAL_STATES.map((state) => (
                  <li
                    key={state}
                    className="flex items-start gap-2 text-xs leading-4 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-cyan"
                    />
                    {state}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-4 text-brand-blue sm:w-fit sm:rounded-md sm:border sm:border-flow-line/40 sm:bg-brand-blue/5 sm:px-2 sm:py-1">
                Connected tools
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
