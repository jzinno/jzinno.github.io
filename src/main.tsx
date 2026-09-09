import { createRoot, hydrateRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { createAppRouter } from "./router";
import "../styles/tailwind.css";
import "../styles/wave.css";

const root = document.getElementById("root")!;
const router = createAppRouter();
if (root.hasChildNodes()) {
  // The static render has no loader data. Preserve SSR boundaries during hydration.
  router.ssr = { manifest: undefined };
}
await router.load();

const app = <RouterProvider router={router} />;
const page = router.state.matches.some((match) => match.routeId === "/") ? "home" : "not-found";

if (root.hasChildNodes() && root.dataset.page === page) {
  hydrateRoot(root, app);
} else {
  // A host with SPA fallback may serve homepage HTML for an unknown URL.
  router.ssr = undefined;
  createRoot(root).render(app);
}
