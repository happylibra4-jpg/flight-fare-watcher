import { Link } from "react-router";
import { ArrowRight, BellRing, Radar, XCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Reveal } from "@/components/Reveal";
import { useDocumentHead } from "@/hooks/use-document-head";

const features = [
  {
    icon: Radar,
    title: "盯緊熱門航線 (Always-on route watching)",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知 (Target-price email alerts)",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  { icon: XCircle, title: "隨時取消 (Cancel anytime)", body: "月訂閱制，不想用隨時停，沒有綁約。" },
];

export default function Index() {
  useDocumentHead({
    title: "Flight Price Notifier 機票降價通知 — 台北出發航線降價提醒",
    meta: [
      {
        name: "description",
        content: "Set a route and a target price — we email you when the fare from Taipei drops.",
      },
      { property: "og:title", content: "Flight Price Notifier 機票降價通知" },
      { property: "og:description", content: "設定航線與目標價，機票降價就通知你。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-glow">
          <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32">
            <Reveal>
              <span className="inline-block rounded-full border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                機票降價通知 · From Taipei
              </span>
              <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
                <span className="text-gradient">Flight Price Notifier</span>
              </h1>
              <p className="mt-6 text-xl font-semibold sm:text-2xl">
                設定航線與目標價，機票降價就通知你
              </p>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Set a route and a target price — we email you when the fare drops.
              </p>
              <Link
                to="/sign-up"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              >
                免費註冊 Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="h-full rounded-2xl border bg-card p-7 transition hover:border-primary/50">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
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
