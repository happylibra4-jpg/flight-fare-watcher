import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Plus } from "lucide-react";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "My alerts 我的通知 — Flight Price Notifier" },
      { name: "description", content: "Your watched routes and target prices." },
      { property: "og:title", content: "My alerts — Flight Price Notifier" },
      { property: "og:description", content: "你追蹤的航線與目標價。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AppShell,
});

const sample = [
  { to: "NRT", city: "東京", target: 6000, lowest: 5480 },
  { to: "BKK", city: "曼谷", target: 5000, lowest: 5620 },
];

function AppShell() {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-ink text-ink-foreground">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 font-display font-bold">
            <Plane className="h-4 w-4 -rotate-45" /> Flight Price Notifier
          </Link>
          <Link to="/" className="text-sm opacity-80 hover:opacity-100">Sign out / 登出</Link>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">我的通知 My alerts</h1>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
            <Plus className="h-4 w-4" /> 新增 Add
          </button>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">示範資料 Sample data</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sample.map((r) => {
            const hit = r.lowest <= r.target;
            return (
              <div key={r.to} className="rounded-2xl border bg-card p-6">
                <p className="font-display text-2xl font-bold">TPE → {r.to} <span className="text-base text-muted-foreground">{r.city}</span></p>
                <div className="perforation my-4" />
                <div className="flex justify-between text-sm">
                  <span>目標 NT$ {r.target.toLocaleString()}</span>
                  <span className={hit ? "font-bold text-success" : "text-muted-foreground"}>
                    最低 NT$ {r.lowest.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
