import type { ReactNode } from "react";
import { StudentSidebar } from "@/components/shared/StudentSidebar";
export function StudentShell({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface-soft">
      <StudentSidebar active={active} />
      <main className="min-w-0 flex-1 p-10">{children}</main>
    </div>
  );
}
