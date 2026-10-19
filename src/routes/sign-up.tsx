import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/AuthForm";

export const Route = createFileRoute("/sign-up")({
  head: () => ({
    meta: [
      { title: "Sign up 註冊 — Flight Price Notifier" },
      { name: "description", content: "Create an account to get flight price drop alerts from Taipei." },
      { property: "og:title", content: "Sign up — Flight Price Notifier" },
      { property: "og:description", content: "註冊帳號，機票降價就通知你。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <AuthForm mode="sign-up" />,
});
