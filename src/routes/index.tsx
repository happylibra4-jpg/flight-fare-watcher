import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Mail, Target } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flight Price Notifier 機票降價通知 — 台北出發航線降價提醒" },
      { name: "description", content: "Set a route and a target price — we email you when the fare from Taipei drops." },
      { property: "og:title", content: "Flight Price Notifier 機票降價通知" },
      { property: "og:description", content: "設定航線與目標價，機票降價就通知你。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: Target, zh: "選航線", en: "Pick a route from Taipei" },
  { icon: Bell, zh: "設目標價", en: "Set your budget" },
  { icon: Mail, zh: "收通知", en: "Get an email when it drops" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="dotted-grid">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                機票降價通知 · From TPE
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl">Flight Price Notifier</h1>
              <p className="mt-6 text-2xl font-bold">設定航線與目標價，機票降價就通知你</p>
              <p className="mt-3 text-lg text-muted-foreground">
                Set a route and a target price — we email you when the fare drops.
              </p>
              <Link
                to="/sign-in"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-ink-foreground transition hover:opacity-90"
              >
                開始追蹤 Start watching <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rotate-2 rounded-2xl bg-card shadow-ticket">
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="text-xs text-muted-foreground">FROM</p>
                  <p className="font-display text-4xl font-bold">TPE</p>
                  <p className="text-sm text-muted-foreground">台北</p>
                </div>
                <div className="flex-1 px-4 text-center text-primary">✈ ─ ─ ─ ─</div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">TO</p>
                  <p className="font-display text-4xl font-bold">NRT</p>
                  <p className="text-sm text-muted-foreground">東京</p>
                </div>
              </div>
              <div className="perforation mx-6" />
              <div className="grid grid-cols-2 gap-4 p-6">
                <div>
                  <p className="text-xs text-muted-foreground">目標價 Target</p>
                  <p className="font-display text-2xl font-bold">NT$ 6,000</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">最低價 Lowest now</p>
                  <p className="font-display text-2xl font-bold text-success">NT$ 5,480</p>
                </div>
              </div>
              <div className="rounded-b-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                ✓ 已降到目標價！Email sent.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.zh} className="rounded-2xl border bg-card p-6">
                <s.icon className="h-6 w-6 text-primary" />
                <p className="mt-4 font-mono text-xs text-muted-foreground">0{i + 1}</p>
                <h3 className="text-xl font-bold">{s.zh}</h3>
                <p className="text-muted-foreground">{s.en}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2026 Flight Price Notifier
      </footer>
    </div>
  );
}
