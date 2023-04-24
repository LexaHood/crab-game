import preact from "@preact/preset-vite";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    preact(),
  ],
  build: {
    watch: {},
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "CrabGame",
      fileName: "crab-game",
    },
    cssCodeSplit: true,
    sourcemap: mode === "dev" ? true : false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
  },
  define: { "process.env.NODE_ENV": `"${mode}"` }
}));
