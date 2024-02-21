import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-first-react-app/",
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
