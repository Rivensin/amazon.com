import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/amazon.com/", 
  publicDir: "../public",
  root : "src",
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});