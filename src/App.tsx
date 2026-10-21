import { useEffect } from "react";
import { Outlet, useRoutes, type RouteObject } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RequireAuth } from "@/components/RequireAuth";
import IndexPage from "@/pages/Index";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUp";
import AppPage from "@/pages/AppPage";
import NotFoundPage from "@/pages/NotFound";

function RootLayout() {
  const queryClient = useQueryClient();

  // Refresh cached data whenever the auth session changes.
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });
    return () => data.subscription.unsubscribe();
  }, [queryClient]);

  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <RequireAuth />,
        children: [{ path: "/app", element: <AppPage /> }],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export function App() {
  return useRoutes(routes);
}
