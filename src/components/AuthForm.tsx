import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const isUp = mode === "sign-up";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { data, error } = isUp
      ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin } })
      : await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setError(error.message);
    if (data.session) navigate("/app");
    else setError("請到信箱確認後再登入 / Please confirm your email, then sign in.");
  }

  const input = "w-full rounded-lg border bg-input/40 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-ring/40";

  return (
    <div className="min-h-screen hero-glow">
      <SiteHeader right={<span />} />
      <main className="mx-auto max-w-md px-4 py-16 sm:py-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border bg-card p-8 shadow-card duration-500">
          <h1 className="text-2xl font-bold">{isUp ? "Sign up / 註冊" : "Sign in / 登入"}</h1>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input className={input} type="email" required placeholder="Email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className={input} type="password" required minLength={6} placeholder="Password 密碼" autoComplete={isUp ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button disabled={loading} className="w-full rounded-full bg-gradient-primary py-3 font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60">
              {loading ? "…" : isUp ? "建立帳號 Create account" : "登入 Sign in"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isUp ? (
              <>已有帳號？ <Link to="/sign-in" className="text-accent-foreground underline">Sign in / 登入</Link></>
            ) : (
              <>還沒有帳號？ <Link to="/sign-up" className="text-accent-foreground underline">Sign up / 註冊</Link></>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
