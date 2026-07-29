import type { ReactNode } from "react";
export function AuthForm({
  isLogin,
  children,
}: {
  isLogin: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={[
        "flex items-center justify-center px-5 sm:px-8 lg:px-10",
        isLogin ? "py-6 lg:py-5" : "py-4 lg:py-3",
      ].join(" ")}
    >
      {children}
    </section>
  );
}
