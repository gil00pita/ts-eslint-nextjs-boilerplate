import { avatarAnatomy } from '@ark-ui/react/avatar'
import { defineSlotRecipe } from '@chakra-ui/react'

import { getAccessiblePaletteForeground, resolvePaletteToken } from '@/utils/color-contrast'
import { brandFontSizes } from '@/utils/px-to-rem'

const avatarColorPalettes = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
] as const

const avatarColorPaletteVariants = {
  blue: {},
  cyan: {},
  gray: {},
  green: {},
  orange: {},
  pink: {},
  purple: {},
  red: {},
  teal: {},
  yellow: {},
} as const

function createAvatarCompoundVariants(colorPalette: (typeof avatarColorPalettes)[number]) {
  const paletteToken = resolvePaletteToken(colorPalette)
  const subtleForeground = getAccessiblePaletteForeground(colorPalette, '100')
  const solidForeground = getAccessiblePaletteForeground(colorPalette, '600')
  const outlineForeground = getAccessiblePaletteForeground(colorPalette, '50')
  const subtleForegroundDark = getAccessiblePaletteForeground(colorPalette, '900')
  const solidForegroundDark = getAccessiblePaletteForeground(colorPalette, '950')
  const outlineForegroundDark = getAccessiblePaletteForeground(colorPalette, '950')

  return [
    {
      colorPalette,
      css: {
        root: {
          _dark: {
            bg: `${paletteToken}.950`,
            color: subtleForegroundDark,
          },
          bg: `${paletteToken}.100`,
          color: subtleForeground,
        },
      },
      variant: 'subtle' as const,
    },
    {
      colorPalette,
      css: {
        root: {
          _dark: {
            bg: `${paletteToken}.700`,
            color: solidForegroundDark,
          },
          bg: `${paletteToken}.500`,
          color: solidForeground,
        },
      },
      variant: 'solid' as const,
    },
    {
      colorPalette,
      css: {
        root: {
          _dark: {
            bg: 'transparent',
            border: `2px solid {colors.${paletteToken}.950}`,
            color: outlineForegroundDark,
          },
          bg: 'transparent',
          border: `2px solid {colors.${paletteToken}.300}`,
          color: outlineForeground,
        },
      },
      variant: 'outline' as const,
    },
  ]
}

const avatarCompoundVariants = avatarColorPalettes.flatMap(createAvatarCompoundVariants)

const avatarRecipe = defineSlotRecipe({
  className: 'avatar',
  compoundVariants: avatarCompoundVariants,
  defaultVariants: {
    colorPalette: 'gray',
    shape: 'full',
    size: 'md',
    variant: 'subtle',
  },
  slots: avatarAnatomy.keys(),
  variants: {
    borderless: {
      true: {
        root: {
          '&[data-group-item]': {
            borderWidth: '0',
          },
          borderWidth: '0',
        },
      },
    },
    colorPalette: avatarColorPaletteVariants,
    shape: {
      full: {
        root: { '--avatar-radius': '9999px' },
      },
      rounded: {
        root: { '--avatar-radius': '8px' },
      },
      square: {
        root: { '--avatar-radius': '0' },
      },
    },
    size: {
      '2xs': {
        root: {
          '--avatar-font-size': brandFontSizes[14],
          '--avatar-size': '24px',
        },
      },
      full: {
        root: {
          '--avatar-font-size': '100%',
          '--avatar-size': '100%',
        },
      },
      xs: {
        root: {
          '--avatar-font-size': brandFontSizes[16],
          '--avatar-size': '32px',
        },
      },
      sm: {
        root: {
          '--avatar-font-size': brandFontSizes[16],
          '--avatar-size': '36px',
        },
      },
      md: {
        root: {
          '--avatar-font-size': brandFontSizes[19],
          '--avatar-size': '40px',
        },
      },
      lg: {
        root: {
          '--avatar-font-size': brandFontSizes[19],
          '--avatar-size': '44px',
        },
      },
      xl: {
        root: {
          '--avatar-font-size': brandFontSizes[24],
          '--avatar-size': '48px',
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': brandFontSizes[24],
          '--avatar-size': '64px',
        },
      },
    },
    variant: {
      outline: {
        root: {
          bg: 'transparent',
          borderColor: 'colorPalette.muted',
          borderWidth: '2px',
          color: 'colorPalette.fg',
        },
      },
      solid: {
        root: {
          bg: 'colorPalette.solid',
          color: 'colorPalette.contrast',
        },
      },
      subtle: {
        root: {
          bg: 'colorPalette.muted',
          color: 'colorPalette.fg',
        },
      },
    },
  },
  base: {
    fallback: {
      alignItems: 'center',
      bg: 'transparent',
      borderRadius: 'var(--avatar-radius)',
      color: 'inherit',
      display: 'inline-flex',
      fontFamily: 'body',
      fontSize: 'var(--avatar-font-size)',
      fontWeight: 'bold',
      height: '100%',
      justifyContent: 'center',
      lineHeight: '1',
      textTransform: 'uppercase',
      width: '100%',
    },
    image: {
      borderRadius: 'var(--avatar-radius)',
      height: '100%',
      objectFit: 'cover',
      width: '100%',
    },
    root: {
      '&[data-group-item]': {
        borderColor: 'bg',
        borderWidth: '2px',
      },
      alignItems: 'center',
      bg: 'bg.muted',
      borderRadius: 'var(--avatar-radius)',
      color: 'fg',
      display: 'inline-flex',
      flexShrink: '0',
      fontFamily: 'body',
      fontSize: 'var(--avatar-font-size)',
      fontWeight: 'bold',
      height: 'var(--avatar-size)',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      userSelect: 'none',
      verticalAlign: 'top',
      width: 'var(--avatar-size)',
    },
  },
})

export default avatarRecipe
