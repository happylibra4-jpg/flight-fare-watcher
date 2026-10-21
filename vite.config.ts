import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Plain Vite + React SPA. `vite build` emits a static site to dist/.
// Deep links (e.g. /app) are resolved client-side: Vite's dev/preview servers
// fall back to index.html (appType "spa"), and vercel.json does the same in production.
export default defineConfig({
  appType: "spa",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
  },
});
