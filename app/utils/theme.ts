import { createCookie } from '@remix-run/node'

const themeCookie = createCookie('theme', {
  path: '/',
  httpOnly: true,
  maxAge: 31_536_000,
})

const DEFAULT_THEME = 'default'
const DEFAULT_MODE = 'light'

export async function getTheme(request: Request) {
  return (
    (await themeCookie.parse(request.headers.get('cookie'))) ?? {
      theme: DEFAULT_THEME,
      darkMode: DEFAULT_MODE,
    }
  )
}

export async function setTheme({
  theme,
  darkMode,
}: {
  theme: string
  darkMode: string
}) {
  return await themeCookie.serialize({ theme, darkMode })
}
