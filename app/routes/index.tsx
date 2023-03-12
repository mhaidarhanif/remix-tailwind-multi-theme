/* eslint-disable @typescript-eslint/no-use-before-define */
import { useFetcher, useMatches } from '@remix-run/react'
import clsx from 'clsx'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function Index() {
  const { theme, darkMode } = useMatches()[0].data
  const fetcher = useFetcher()
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <div className="m-4">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <h1 className="text-2xl font-bold">
            Welcome to Remix Tailwind Multi-Theme!
          </h1>
          <div>
            <fetcher.Form
              method="post"
              action="/api/set-theme"
              className="flex gap-2"
            >
              <DarkModeButton currentDarkMode={darkMode} />
              <ThemeButton
                currentTheme={theme}
                darkMode={darkMode}
                theme="default"
              />
              <ThemeButton
                currentTheme={theme}
                darkMode={darkMode}
                theme="swiss"
              />
              <ThemeButton
                currentTheme={theme}
                darkMode={darkMode}
                theme="forest"
              />
              <ThemeButton
                currentTheme={theme}
                darkMode={darkMode}
                theme="aqua"
              />
            </fetcher.Form>
          </div>
        </div>
        <div className="mt-2">
          <p>Current mode is: {darkMode}</p>
          <p>Current theme is: {theme}</p>
        </div>
      </div>
      <div className="flex-1 bg-white dark:bg-gray-400">
        <div className="mx-auto mt-20 max-w-4xl px-8">
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-multi-base rounded-xl p-8 shadow-xl">
              <p className="text-multi-base">
                <strong>Base</strong> text and background colors.
              </p>
            </div>
            <div className="bg-multi-inverted rounded-xl p-8 shadow-xl">
              <p className="text-multi-inverted">
                <strong>Inverted</strong> text and background colors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DarkModeButton({ currentDarkMode }: { currentDarkMode: string }) {
  return (
    <button
      name="darkMode"
      value={currentDarkMode === 'light' ? 'dark' : 'light'}
    >
      {currentDarkMode === 'light' ? (
        <SunIcon className={clsx('w-6 h-6')} />
      ) : (
        <MoonIcon className={clsx('w-6 h-6')} />
      )}
    </button>
  )
}

function ThemeButton({
  theme,
  darkMode,
  currentTheme,
}: {
  theme: string
  darkMode: string
  currentTheme: string
}) {
  return (
    <button
      name="theme"
      value={theme}
      data-theme={theme}
      className={clsx(
        'rounded px-2 py-1 inline-flex items-center',
        darkMode === 'light' && 'text-multi-inverted bg-multi-inverted',
        darkMode === 'dark' && 'text-multi-base bg-multi-base',
      )}
    >
      {theme === currentTheme && (
        <svg
          className={clsx(
            '-ml-0.5 mr-1.5 h-2 w-2',
            darkMode === 'light' && 'text-multi-inverted bg-multi-inverted',
            darkMode === 'dark' && 'text-multi-base bg-multi-base',
          )}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
      )}
      {theme}
    </button>
  )
}
