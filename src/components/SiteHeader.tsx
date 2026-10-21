import { Link } from "react-router";
import type { ReactNode } from "react";
import { Plane } from "lucide-react";

export function SiteHeader({ right }: { right?: ReactNode }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Plane className="h-4 w-4 -rotate-45" />
          </span>
          <span className="hidden sm:inline">Flight Price Notifier</span>
        </Link>
        {right ?? (
          <Link
            to="/sign-in"
            className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Sign in / 登入
          </Link>
        )}
      </div>
    </header>
  );
}
