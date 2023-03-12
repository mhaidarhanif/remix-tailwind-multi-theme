import { json, LoaderArgs, MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import LiveReload from '~/components/LiveReload'
import tailwindCss from '~/styles/tailwind.css'
import { getTheme } from '~/utils/theme'

export const links = () => [{ rel: 'stylesheet', href: tailwindCss }]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Tailwind Multi-Theme',
  viewport: 'width=device-width,initial-scale=1',
})

export const loader = async ({ request }: LoaderArgs) => {
  const { theme, darkMode } = await getTheme(request)
  return json({ theme, darkMode })
}

export default function App() {
  const { theme, darkMode } = useLoaderData<typeof loader>()

  return (
    <html
      lang="en"
      data-theme={theme}
      className={darkMode === 'dark' ? 'dark' : ''}
      suppressHydrationWarning={true}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className="bg-multi-base dark:bg-multi-inverted text-multi-base dark:text-multi-inverted"
        suppressHydrationWarning={true}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
