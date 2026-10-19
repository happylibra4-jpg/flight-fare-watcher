import { Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-ink-foreground">
            <Plane className="h-4 w-4 -rotate-45" />
          </span>
          Flight Price Notifier
        </Link>
        <Link
          to="/sign-in"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Sign in / 登入
        </Link>
      </div>
    </header>
  );
}
