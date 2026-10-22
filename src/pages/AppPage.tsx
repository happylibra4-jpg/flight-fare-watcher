import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { useAuthUser } from "@/components/RequireAuth";
import { useDocumentHead } from "@/hooks/use-document-head";

export default function AppPage() {
  useDocumentHead({
    title: "Dashboard 儀表板 — Flight Price Notifier",
    meta: [
      { name: "description", content: "Your Flight Price Notifier dashboard." },
      { property: "og:title", content: "Dashboard — Flight Price Notifier" },
      { property: "og:description", content: "你的航線追蹤儀表板。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  });

  const user = useAuthUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate("/sign-in", { replace: true });
  }

  return (
    <div className="min-h-screen hero-glow">
      <SiteHeader
        right={
          <button
            onClick={signOut}
            className="rounded-full border px-5 py-2 text-sm font-semibold transition hover:bg-secondary"
          >
            Sign out / 登出
          </button>
        }
      />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border bg-card p-8 shadow-card duration-500 sm:p-12">
          <h1 className="break-all text-3xl font-bold sm:text-4xl">Hi {user.email}</h1>
          <p className="mt-6 text-lg">
            你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
          </p>
          <p className="mt-2 text-muted-foreground">
            Your dashboard is coming soon. Route-subscription will be added in the next milestone.
          </p>
        </div>
      </main>
    </div>
  );
}
