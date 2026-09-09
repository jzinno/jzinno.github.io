import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
  type RouterHistory,
} from "@tanstack/react-router";
import App from "./App";
import NotFound from "./NotFound";
import { legacyRoutes } from "./legacy-routes";

const rootRoute = createRootRoute({ notFoundComponent: NotFound });
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const indexRedirect = createRoute({
  getParentRoute: () => rootRoute,
  path: "/index.html",
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});

const redirects = Object.entries(legacyRoutes).flatMap(([path, hash]) =>
  [`/${path}`, `/${path}.html`, `/${path}/index.html`].map((path) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path,
      beforeLoad: () => { throw redirect({ to: "/", hash, replace: true }); },
    }),
  ),
);

const routeTree = rootRoute.addChildren([homeRoute, indexRedirect, ...redirects]);

export function createAppRouter(history?: RouterHistory) {
  return createRouter({ routeTree, history });
}
