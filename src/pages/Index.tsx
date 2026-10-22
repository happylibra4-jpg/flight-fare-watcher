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
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:py-24">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-card">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                機票降價通知 · From Taipei
              </span>
              <h1 className="mt-7 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                <span className="block">Flight Price</span>
                <span className="text-gradient italic">Notifier</span>
              </h1>
              <div className="mt-8 border-l-4 border-primary pl-5">
                <p className="text-xl font-bold sm:text-2xl">設定航線與目標價，機票降價就通知你</p>
                <p className="mt-2 text-base text-muted-foreground sm:text-lg">
                  Set a route and a target price — we email you when the fare drops.
                </p>
              </div>
              <Link
                to="/sign-up"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-bold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:opacity-95"
              >
                免費註冊 Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mx-auto w-full max-w-sm md:max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-primary-glow/40 blur-2xl"
                />
                <div className="relative -rotate-2 overflow-hidden rounded-[2rem] border-[10px] border-card bg-card shadow-card">
                  <img
                    src="/hero-pumpkin.webp"
                    alt="Pumpkin-shaped car on a misty autumn road"
                    width={900}
                    height={1272}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
                <span className="absolute -left-4 top-10 rotate-[-4deg] rounded-full border bg-card px-3.5 py-1.5 text-xs font-extrabold tracking-wide shadow-card">
                  TPE → NRT
                </span>
                <div className="absolute -bottom-6 -right-3 w-44 rotate-2 rounded-2xl border bg-card p-4 shadow-card sm:-right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Price drop 降價
                  </p>
                  <p className="font-display mt-1 text-3xl font-bold text-primary">−18%</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-4/5 rounded-full bg-gradient-primary" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="h-full rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-primary/50">
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
