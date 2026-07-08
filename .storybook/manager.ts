import { GLOBALS_UPDATED, SET_GLOBALS, UPDATE_GLOBALS } from 'storybook/internal/core-events'
import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

type StorybookThemeMode = 'dark' | 'light'

type StorybookGlobalsPayload = {
  globals?: {
    theme?: unknown
  }
}

const managerTokens = {
  brand700: '#0e4d88',
  fontBody: 'Inter, Arial, sans-serif',
  fontMono: 'monospace',
  gray100: '#cecece',
  gray50: '#f3f3f3',
  gray700: '#303030',
  gray900: '#191b1b',
  gray950: '#0b0c0c',
  white: '#ffffff',
}

const managerThemes = {
  dark: create({
    appBg: managerTokens.gray950,
    appContentBg: managerTokens.gray900,
    appPreviewBg: managerTokens.gray900,
    barBg: managerTokens.gray950,
    barSelectedColor: managerTokens.brand700,
    barTextColor: managerTokens.white,
    colorPrimary: managerTokens.brand700,
    colorSecondary: managerTokens.brand700,
    fontBase: managerTokens.fontBody,
    fontCode: managerTokens.fontMono,
    inputBg: managerTokens.gray900,
    inputBorder: managerTokens.gray700,
    inputTextColor: managerTokens.white,
    textColor: managerTokens.white,
    base: 'dark',
  }),
  light: create({
    appBg: managerTokens.white,
    appContentBg: managerTokens.white,
    appPreviewBg: managerTokens.white,
    barBg: managerTokens.white,
    barSelectedColor: managerTokens.brand700,
    barTextColor: managerTokens.gray950,
    colorPrimary: managerTokens.brand700,
    colorSecondary: managerTokens.brand700,
    fontBase: managerTokens.fontBody,
    fontCode: managerTokens.fontMono,
    inputBg: managerTokens.gray50,
    inputBorder: managerTokens.gray100,
    inputTextColor: managerTokens.gray950,
    textColor: managerTokens.gray950,
    base: 'light',
  }),
}

const getThemeMode = (theme: unknown): StorybookThemeMode => (theme === 'dark' ? 'dark' : 'light')

let currentThemeMode: StorybookThemeMode | undefined

const applyManagerTheme = (themeMode: StorybookThemeMode) => {
  if (themeMode === currentThemeMode) {
    return
  }

  currentThemeMode = themeMode

  addons.setConfig({
    theme: managerThemes[themeMode],
  })
}

const handleFullGlobals = ({ globals }: StorybookGlobalsPayload) => {
  applyManagerTheme(getThemeMode(globals?.theme))
}

const handleThemeUpdate = ({ globals }: StorybookGlobalsPayload) => {
  if (!globals || !('theme' in globals)) {
    return
  }

  applyManagerTheme(getThemeMode(globals.theme))
}

applyManagerTheme('light')

void addons.ready().then((channel) => {
  channel.on(GLOBALS_UPDATED, handleFullGlobals)
  channel.on(SET_GLOBALS, handleFullGlobals)
  channel.on(UPDATE_GLOBALS, handleThemeUpdate)

  const lastGlobals = channel.last(GLOBALS_UPDATED)?.[0] as StorybookGlobalsPayload | undefined

  if (lastGlobals) {
    handleFullGlobals(lastGlobals)
  }
})
