import { Outlet, createRootRoute } from "@tanstack/react-router";
import RainbowBanner from "../components/rainbow-banner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <RainbowBanner />
      <Outlet />
    </>
  );
}
