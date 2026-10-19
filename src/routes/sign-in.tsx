import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign in 登入 — Flight Price Notifier" },
      { name: "description", content: "Sign in to manage your flight price alerts." },
      { property: "og:title", content: "Sign in — Flight Price Notifier" },
      { property: "og:description", content: "登入管理你的機票降價通知。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  return (
    <div className="min-h-screen dotted-grid">
      <SiteHeader />
      <main className="mx-auto max-w-sm px-6 py-20">
        <div className="rounded-2xl border bg-card p-8 shadow-ticket">
          <h1 className="text-2xl font-bold">Sign in / 登入</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            登入功能即將開放 — sign-in will be connected in a later step.
          </p>
          <Link
            to="/app"
            className="mt-6 block rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground hover:opacity-90"
          >
            Preview the app 預覽
          </Link>
        </div>
      </main>
    </div>
  );
}
