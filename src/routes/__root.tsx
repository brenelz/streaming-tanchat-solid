import { Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/solid-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import appCss from '../styles.css?url'
import Header from '../components/Header';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  )
}
