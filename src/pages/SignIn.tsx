import { AuthForm } from "@/components/AuthForm";
import { useDocumentHead } from "@/hooks/use-document-head";

export default function SignIn() {
  useDocumentHead({
    title: "Sign in 登入 — Flight Price Notifier",
    meta: [
      { name: "description", content: "Sign in to manage your flight price alerts." },
      { property: "og:title", content: "Sign in — Flight Price Notifier" },
      { property: "og:description", content: "登入管理你的機票降價通知。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  });
  return <AuthForm mode="sign-in" />;
}
