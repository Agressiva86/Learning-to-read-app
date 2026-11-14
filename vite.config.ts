/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Względne ścieżki: zbudowana strona działa w katalogu głównym i w podkatalogu,
  // na przykład na GitHub Pages.
  base: "./",
  plugins: [react()],
  server: { host: "127.0.0.1", port: 5173 },
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
