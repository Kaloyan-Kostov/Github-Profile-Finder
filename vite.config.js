import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Github-Profile-Finder/", // Ensure this matches your repo name
  build: {
    outDir: "dist", // This should be the default, but ensure it's set
  },
});
