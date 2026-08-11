import type { ReactNode } from "react";
import {
  CircleAlert,
  CloudOff,
  FileQuestion,
  LoaderCircle,
  LockKeyhole,
  TimerOff,
} from "lucide-react";
type SystemStateVariant =
  "loading" | "error" | "empty" | "locked" | "session" | "not-found";
type SystemStateProps = {
  variant: SystemStateVariant;
  eyebrow: string;
  title: string;
  description: string;
  details?: ReactNode;
  action?: ReactNode;
  headingLevel?: "h1" | "h2";
  compact?: boolean;
};
const icons = {
  loading: LoaderCircle,
  error: CircleAlert,
  empty: CloudOff,
  locked: LockKeyhole,
  session: TimerOff,
  "not-found": FileQuestion,
};
export function SystemState({
  variant,
  eyebrow,
  title,
  description,
  details,
  action,
  headingLevel = "h1",
  compact = false,
}: SystemStateProps) {
  const Icon = icons[variant];
  const Heading = headingLevel;
  return (
    <section
      className={[
        "relative overflow-hidden border-l-8 border-brand-accent bg-white",
        "shadow-panel",
        compact ? "px-6 py-7 lg:px-8 lg:py-8" : "px-7 py-10 lg:px-12 lg:py-14",
      ].join(" ")}
    >
      <div
        className="absolute right-8 top-8 h-32 w-32 rounded-full bg-blue-50"
        aria-hidden="true"
      />
      <div className="relative max-w-3xl">
        <div
          className={[
            "flex items-center justify-center rounded-md bg-brand text-white",
            compact ? "h-11 w-11" : "h-14 w-14",
          ].join(" ")}
        >
          <Icon
            className={[
              compact ? "h-5 w-5" : "h-7 w-7",
              variant === "loading" ? "animate-spin" : "",
            ].join(" ")}
            strokeWidth={2.2}
          />
        </div>
        <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-amber-700">
          {eyebrow}
        </p>
        <Heading
          className={[
            "mt-3 font-display font-black tracking-tight text-brand",
            compact ? "text-3xl" : "text-4xl lg:text-5xl",
          ].join(" ")}
        >
          {title}
        </Heading>
        <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-slate-600">
          {description}
        </p>
        {details && (
          <div className="mt-7 border-y border-line py-5 text-sm leading-7 text-slate-600">
            {details}
          </div>
        )}
        {action && <div className="mt-8 flex flex-wrap gap-3">{action}</div>}
      </div>
    </section>
  );
}
