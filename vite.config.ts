import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@slices": path.resolve(__dirname, "src/services/slices"),
      "@selectors": path.resolve(__dirname, "src/services/selectors"),
      "@thunks": path.resolve(__dirname, "src/services/thunks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/services/store/store.ts"),
    },
  },
  plugins: [react()],
});
