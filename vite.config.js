import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

function getHtmlEntries() {
  const files = fs.readdirSync(path.resolve(__dirname, "src"));
  return files
    .filter((file) => file.endsWith(".html"))
    .reduce((entries, file) => {
      const name = path.basename(file, ".html");
      entries[name] = path.resolve(__dirname, `src/${file}`);
      return entries;
    }, {});
}

export default defineConfig({
  base: "/amazon.com/", 
  publicDir: "../public",
  root : "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: getHtmlEntries()
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});