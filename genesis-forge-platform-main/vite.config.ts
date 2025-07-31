import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { componentTagger } from "lovable-tagger";

const __dirname = new URL('.', import.meta.url).pathname;

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
      "@": `${__dirname}src`,
// }));
