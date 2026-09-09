import { renderToString } from "react-dom/server";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { createAppRouter } from "../src/router";
import { legacyRoutes } from "../src/legacy-routes";

const template = await Bun.file("dist/index.html").text();

// Render a full document so React 19 moves metadata and image preloads into head.
async function renderPage(path: string) {
  const router = createAppRouter(createMemoryHistory({ initialEntries: [path] }));
  await router.load();
  const page = router.state.matches.some((match) => match.routeId === "/") ? "home" : "not-found";
  const document = renderToString(
    <html lang="en"><head /><body><div id="root" data-page={page}><RouterProvider router={router} /></div></body></html>,
  );
  const head = document.match(/<head>([\s\S]*?)<\/head>/)![1];
  const body = document.match(/<body>([\s\S]*?)<\/body>/)![1];
  return template.replace("<!--app-head-->", () => head)
    .replace('<div id="root"></div>', () => body);
}

await Bun.write("dist/index.html", await renderPage("/"));
await Bun.write("dist/404.html", await renderPage("/404.html"));
await Bun.write("dist/.nojekyll", "");

for (const [path, hash] of Object.entries(legacyRoutes)) {
  const url = `/#${hash}`;
  const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>John Zinno</title><link rel="canonical" href="https://jzinno.github.io/${url.slice(1)}"><meta http-equiv="refresh" content="0;url=${url}"></head><body><a href="${url}">Continue to John Zinno’s portfolio</a></body></html>`;
  await Bun.write(`dist/${path}.html`, html);
  await Bun.write(`dist/${path}/index.html`, html);
}

console.log("Prerendered portfolio, 404, and legacy section redirects.");
