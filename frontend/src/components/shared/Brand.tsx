import Link from "next/link";
type BrandProps = {
  subtitle: string;
  href?: string;
  compact?: boolean;
  dark?: boolean;
  className?: string;
};
export function Brand({
  subtitle,
  href = "/",
  compact = false,
  dark = false,
  className = "",
}: BrandProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center gap-3 rounded-md px-3 py-2 ring-1 transition",
        "focus:outline-none focus:ring-2 focus:ring-brand-accent",
        dark
          ? "bg-brand/5 text-brand ring-brand/10 hover:bg-brand/10"
          : "bg-white/10 text-white ring-white/15 hover:bg-white/15",
        className,
      ].join(" ")}
      aria-label="Rota React"
    >
      <span
        className={[
          "grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-accent",
          "font-display text-sm font-black text-brand shadow-sm",
        ].join(" ")}
      >
        RR
      </span>
      <span className="min-w-0">
        <strong className="block font-display text-base font-black leading-tight">
          Rota React
        </strong>
        {!compact && (
          <span
            className={[
              "block truncate text-xs font-semibold",
              dark ? "text-slate-500" : "text-blue-100",
            ].join(" ")}
          >
            {subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}
