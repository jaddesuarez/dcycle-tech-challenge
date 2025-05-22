import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/assets": "/src/assets",
      "@/components": "/src/components",
      "@/config": "/src/config",
      "@/consts": "/src/consts",
      "@/hooks": "/src/hooks",
      "@/pages": "/src/pages",
      "@/routes": "/src/routes",
      "@/services": "/src/services",
      "@/types": "/src/types",
      "@/utils": "/src/utils",
    },
  },
});
