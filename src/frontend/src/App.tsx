import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { BridgePage } from "./pages/BridgePage";
import { OptInPage } from "./pages/OptInPage";
import { PresentationPage } from "./pages/PresentationPage";
import { SalesPage } from "./pages/SalesPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const bridgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: BridgePage,
});

const optInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/opt-in",
  component: OptInPage,
});

const presentationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/presentation",
  component: PresentationPage,
});

const salesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sales",
  component: SalesPage,
});

const routeTree = rootRoute.addChildren([
  bridgeRoute,
  optInRoute,
  presentationRoute,
  salesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
