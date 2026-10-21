import { matchRoutes } from "react-router";
import { describe, expect, it } from "vitest";
import { routes } from "@/App";

// Match routes without rendering: pages need a browser + Supabase session the test run lacks.
function leafPath(url: string) {
  return matchRoutes(routes, url)?.at(-1)?.route.path;
}

describe("App routing", () => {
  it.each(["/", "/app", "/sign-in", "/sign-up"])(
    "matches a page for %s instead of the 404 fallback",
    (url) => {
      expect(leafPath(url)).toBe(url);
    },
  );

  it("falls back to the 404 page for unknown paths", () => {
    expect(leafPath("/does-not-exist")).toBe("*");
  });
});
