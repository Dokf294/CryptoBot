import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/CryptoBot/",
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, "src/styles/utils")],
      },
    },
  },
});