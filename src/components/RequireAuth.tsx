import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AuthState =
  { status: "loading" } | { status: "signed-out" } | { status: "signed-in"; user: User };

export type AuthContext = { user: User };

/** Guards child routes: unauthenticated visitors are redirected to /sign-in. */
export function RequireAuth() {
  const [state, setState] = useState<AuthState>({ status: "loading" });

  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setState(data.user ? { status: "signed-in", user: data.user } : { status: "signed-out" });
    });
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;
      if (event === "SIGNED_OUT" || !session?.user) setState({ status: "signed-out" });
      else if (event === "SIGNED_IN" || event === "USER_UPDATED")
        setState({ status: "signed-in", user: session.user });
    });
    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  if (state.status === "loading") return null;
  if (state.status === "signed-out") return <Navigate to="/sign-in" replace />;
  return <Outlet context={{ user: state.user } satisfies AuthContext} />;
}

export function useAuthUser(): User {
  return useOutletContext<AuthContext>().user;
}
