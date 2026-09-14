import { createRequire } from "node:module";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Published `@diy-website-builder/sdk` is a UMD/CJS bundle. Vite must load it
 * as CommonJS (not as native ESM via the package `import` export).
 */
const require = createRequire(import.meta.url);
const sdkEntry = require.resolve("@diy-website-builder/sdk");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@diy-website-builder/sdk": sdkEntry,
    },
  },
  optimizeDeps: {
    include: ["@diy-website-builder/sdk"],
    needsInterop: ["@diy-website-builder/sdk"],
  },
  build: {
    commonjsOptions: {
      include: [/diy-website-builder-editor/, /node_modules/],
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 5174,
  },
});
