import { GLOBALS_UPDATED, SET_GLOBALS, UPDATE_GLOBALS } from 'storybook/internal/core-events'
import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

import { colors } from '../src/theme/colors'
import { fonts } from '../src/theme/fonts'

type StorybookThemeMode = 'dark' | 'light'

type StorybookGlobalsPayload = {
  globals?: {
    theme?: unknown
  }
}

const managerThemes = {
  dark: create({
    appBg: colors.gray[950].value,
    appContentBg: colors.gray[900].value,
    appPreviewBg: colors.gray[900].value,
    barBg: colors.gray[950].value,
    barSelectedColor: colors.brand[400].value,
    barTextColor: colors.common.white.value,
    colorPrimary: colors.brand[400].value,
    colorSecondary: colors.brand[400].value,
    fontBase: fonts.body.value,
    fontCode: fonts.mono.value,
    inputBg: colors.gray[900].value,
    inputBorder: colors.gray[700].value,
    inputTextColor: colors.common.white.value,
    textColor: colors.common.white.value,
    base: 'dark',
  }),
  light: create({
    appBg: colors.common.white.value,
    appContentBg: colors.common.white.value,
    appPreviewBg: colors.common.white.value,
    barBg: colors.common.white.value,
    barSelectedColor: colors.brand[700].value,
    barTextColor: colors.gray[950].value,
    colorPrimary: colors.brand[700].value,
    colorSecondary: colors.brand[700].value,
    fontBase: fonts.body.value,
    fontCode: fonts.mono.value,
    inputBg: colors.gray[50].value,
    inputBorder: colors.gray[100].value,
    inputTextColor: colors.gray[950].value,
    textColor: colors.gray[950].value,
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
