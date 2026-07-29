"use client";
import { useState } from "react";
import { Check, Copy, TerminalSquare } from "lucide-react";
type CodeBlockProps = {
  filename: string;
  lines: string[];
  variant?: "light" | "dark" | "terminal";
};
const tokenPattern = new RegExp(
  [
    String.raw`\/\/.*`,
    String.raw`"(?:\\.|[^"\\])*"`,
    String.raw`'(?:\\.|[^'\\])*'`,
    String.raw`\x60(?:\\.|[^\x60\\])*\x60`,
    String.raw`<\/?[A-Za-z][\w.:-]*`,
    String.raw`[A-Za-z_$][\w$]*`,
    String.raw`\d+`,
    String.raw`[{}()\[\].,;:=?<>/+*\-]`,
  ].join("|"),
  "g",
);
const keywords = new Set([
  "const",
  "default",
  "else",
  "export",
  "from",
  "function",
  "if",
  "import",
  "let",
  "return",
  "type",
]);
const literals = new Set([
  "false",
  "null",
  "true",
  "undefined",
  "boolean",
  "number",
  "string",
]);
function tokenClass(token: string, line: string, index: number, dark: boolean) {
  if (token.startsWith("//")) return dark ? "text-slate-400" : "text-slate-500";
  if (keywords.has(token)) return dark ? "text-sky-300" : "text-[#005CC5]";
  if (literals.has(token) || /^\d+$/.test(token))
    return dark ? "text-amber-300" : "text-[#B08800]";
  if (/^["'`]/.test(token)) return dark ? "text-emerald-300" : "text-[#22863A]";
  if (/^<\/?/.test(token)) return dark ? "text-rose-300" : "text-[#D73A49]";
  const before = line.slice(0, index);
  const after = line.slice(index + token.length);
  const isAttribute =
    after.trimStart().startsWith("=") &&
    before.lastIndexOf("<") > before.lastIndexOf(">");
  if (isAttribute) return dark ? "text-violet-300" : "text-[#6F42C1]";
  if (/^[{}()[\].,;:=?<>/+*-]$/.test(token))
    return dark ? "text-slate-400" : "text-slate-500";
  return dark ? "text-blue-50" : "text-slate-950";
}
function HighlightedLine({ line, dark }: { line: string; dark: boolean }) {
  const parts = [];
  let cursor = 0;
  for (const match of line.matchAll(tokenPattern)) {
    const token = match[0];
    const index = match.index ?? 0;
    if (index > cursor)
      parts.push(
        <span key={`${cursor}-text`}>{line.slice(cursor, index)}</span>,
      );
    parts.push(
      <span
        key={`${index}-${token}`}
        className={tokenClass(token, line, index, dark)}
      >
        {token}
      </span>,
    );
    cursor = index + token.length;
  }
  if (cursor < line.length)
    parts.push(<span key={`${cursor}-tail`}>{line.slice(cursor)}</span>);
  return <>{parts.length > 0 ? parts : " "}</>;
}
export function CodeBlock({
  filename,
  lines,
  variant = "light",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const isTerminal = variant === "terminal";
  const isDark = variant === "dark" || isTerminal;
  async function copyContent() {
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return (
    <div
      className={[
        "min-w-0 max-w-full overflow-hidden border",
        isDark
          ? "border-slate-700 bg-[#0B1029] text-blue-50"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center justify-between gap-4 border-b px-4 py-3",
          isDark
            ? "border-white/10 bg-[#111936]"
            : "border-slate-200 bg-slate-50",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          {isTerminal ? (
            <TerminalSquare className="h-4 w-4 shrink-0 text-emerald-300" />
          ) : (
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
          )}
          <span
            className={[
              "truncate font-mono text-xs font-bold",
              isDark ? "text-blue-100" : "text-slate-500",
            ].join(" ")}
          >
            {filename}
          </span>
        </div>
        <button
          type="button"
          onClick={copyContent}
          className={[
            "inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-xs",
            "font-black transition focus:outline-none focus:ring-2",
            "focus:ring-brand-accent",
            isDark
              ? "bg-white/10 text-white hover:bg-white/15"
              : "bg-white text-brand ring-1 ring-slate-200 hover:bg-blue-50",
          ].join(" ")}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? "Copiado" : isTerminal ? "Copiar comando" : "Copiar código"}
        </button>
      </div>
      <pre className="max-w-full overflow-x-auto p-5 font-mono text-[0.93rem] font-semibold leading-7">
        {lines.map((line, index) => (
          <code
            key={`${line}-${index}`}
            className={[
              "grid min-w-max",
              isTerminal
                ? "grid-cols-[1.25rem_minmax(0,1fr)]"
                : "grid-cols-[2rem_minmax(0,1fr)]",
              "gap-4",
            ].join(" ")}
          >
            <span
              className={
                isTerminal
                  ? "select-none text-emerald-400"
                  : isDark
                    ? "select-none text-blue-300/45"
                    : "select-none text-slate-300"
              }
            >
              {isTerminal ? ">" : String(index + 1).padStart(2, "0")}
            </span>
            <span>
              {isTerminal ? (
                line || " "
              ) : (
                <HighlightedLine line={line} dark={isDark} />
              )}
            </span>
          </code>
        ))}
      </pre>
    </div>
  );
}
