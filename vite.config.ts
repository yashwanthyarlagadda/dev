import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is a GitHub Pages *project* site served from
// https://yashwanthyarlagadda.github.io/dev/ so the base path must be "/dev/".
export default defineConfig({
  plugins: [react()],
  base: "/dev/",
});
