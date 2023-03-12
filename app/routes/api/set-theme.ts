import { ActionArgs, json } from '@remix-run/node'
import { getTheme, setTheme } from '~/utils/theme'

export const action = async ({ request }: ActionArgs) => {
  let { theme, darkMode } = await getTheme(request)
  const formData = await request.formData()
  theme = String(formData.get('theme') ?? theme)
  darkMode = String(formData.get('darkMode') ?? darkMode)

  return json(
    {},
    {
      headers: {
        'set-cookie': await setTheme({ theme, darkMode }),
      },
    },
  )
}
