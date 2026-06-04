import { type Express } from "express";
import { type Server } from "http";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

export async function setupVite(server: Server, app: Express) {
  const [{ createServer: createViteServer, createLogger }, { default: react }] =
    await Promise.all([
      import("vite"),
      import("@vitejs/plugin-react"),
    ]);
  const { default: runtimeErrorOverlay } = await import(
    "@replit/vite-plugin-runtime-error-modal"
  );

  const viteLogger = createLogger();
  const rootDirectory = path.resolve(import.meta.dirname, "..", "client");

  const plugins = [react(), runtimeErrorOverlay()];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const [{ cartographer }, { devBanner }] = await Promise.all([
      import("@replit/vite-plugin-cartographer"),
      import("@replit/vite-plugin-dev-banner"),
    ]);

    plugins.push(cartographer(), devBanner());
  }

  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "..", "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "..", "shared"),
        "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"),
      },
    },
    root: rootDirectory,
    build: {
      outDir: path.resolve(import.meta.dirname, "..", "dist", "public"),
      emptyOutDir: true,
    },
    server: {
      ...serverOptions,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(rootDirectory, "index.html");

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
