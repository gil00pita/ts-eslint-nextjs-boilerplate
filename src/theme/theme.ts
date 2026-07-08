import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { brandFontSizes } from '@/utils/px-to-rem'

import { colors } from './colors'
import { fonts } from './fonts'

// import avatarRecipe from '@/components/Avatar/Avatar.recipe'
// import calendarRecipe from '@/components/Calendar/Calendar.recipe'
// import carouselRecipe from '@/components/Carousel/Carousel.recipe'
// import codeRecipe from '@/components/Code/Code.recipe'
// import colorPickerRecipe from '@/components/ColorPicker/ColorPicker.recipe'
// import colorSwatchRecipe from '@/components/ColorSwatch/ColorSwatch.recipe'
// import comboboxRecipe from '@/components/Combobox/Combobox.recipe'
// import dialogRecipe from '@/components/Dialog/Dialog.recipe'
// import editableRecipe from '@/components/Editable/Editable.recipe'
// import emptyStateRecipe from '@/components/EmptyState/EmptyState.recipe'
// import floatingPanelRecipe from '@/components/FloatingPanel/FloatingPanel.recipe'
// import highlightRecipe from '@/components/Highlight/Highlight.recipe'
// import hoverCardRecipe from '@/components/HoverCard/HoverCard.recipe'
// import kbdRecipe from '@/components/Kbd/Kbd.recipe'
// import listboxRecipe from '@/components/Listbox/Listbox.recipe'
// import menuRecipe from '@/components/Menu/Menu.recipe'
// import pinInputRecipe from '@/components/PinInput/PinInput.recipe'
// import popoverRecipe from '@/components/Popover/Popover.recipe'
// import progressCircleRecipe from '@/components/ProgressCircle/ProgressCircle.recipe'
// import radioCardRecipe from '@/components/RadioCard/RadioCard.recipe'
// import ratingRecipe from '@/components/Rating/Rating.recipe'
// import richTextEditorRecipe from '@/components/RichTextEditor/RichTextEditor.recipe'
// import segmentedControlRecipe from '@/components/SegmentedControl/SegmentedControl.recipe'
// import skeletonRecipe from '@/components/Skeleton/Skeleton.recipe'
// import sliderRecipe from '@/components/Slider/Slider.recipe'
// import spinnerRecipe from '@/components/Spinner/Spinner.recipe'
// import statRecipe from '@/components/Stat/Stat.recipe'
// import statusRecipe from '@/components/Status/Status.recipe'
// import stepsRecipe from '@/components/Steps/Steps.recipe'
// import switchRecipe from '@/components/Switch/Switch.recipe'
// import tagsInputRecipe from '@/components/TagsInput/TagsInput.recipe'
// import timelineRecipe from '@/components/Timeline/Timeline.recipe'
// import toastRecipe from '@/components/Toast/Toast.recipe'
// import toggleTipRecipe from '@/components/ToggleTip/ToggleTip.recipe'
// import tooltipRecipe from '@/components/Tooltip/Tooltip.recipe'
// import treeViewRecipe from '@/components/TreeView/TreeView.recipe'

export const customBrandTheme = {
  cssVarsPrefix: 'change-me', // changes --chakra-* to --customBrand-*
  globalCss: {
    body: {
      bg: 'bg',
      color: 'fg',
      fontSize: brandFontSizes[16],
    },
    html: {
      colorPalette: 'brand', // defines the default color palette for the theme, which is used by semantic tokens and recipes. The default is 'brand', but you can change it to any other color palette defined in your theme.
    },
  },
  preflight: true,
  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px', // default in chakra-ui
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    // recipe: one style object, one component surface.
    recipes: {
      // code: codeRecipe,
      // colorSwatch: colorSwatchRecipe,
      // highlight: highlightRecipe,
      // kbd: kbdRecipe,
      // skeleton: skeletonRecipe,
      // spinner: spinnerRecipe,
    },
    semanticTokens: {
      // semantic tokens are design values that can be used in place of raw design values (like colors, fonts, radii, etc.) and can be referenced in recipes and slotRecipes.
      // Chakra has more semantic tokens like radius, shadows, etc. but we don't need them for now, unless you want to customize them. For now we are just customizing these common colors.
      colors: {
        bg: {
          DEFAULT: {
            value: { _dark: '{colors.black}', base: '{colors.white}' },
          },
          emphasized: {
            value: { _dark: '{colors.gray.800}', base: '{colors.gray.200}' },
          },
          error: {
            value: { _dark: '{colors.red.950}', base: '{colors.red.50}' },
          },
          info: {
            value: { _dark: '{colors.blue.950}', base: '{colors.blue.50}' },
          },
          inverted: {
            value: { _dark: '{colors.white}', base: '{colors.black}' },
          },
          muted: {
            value: { _dark: '{colors.gray.900}', base: '{colors.gray.100}' },
          },
          panel: {
            value: { _dark: '{colors.gray.950}', base: '{colors.white}' },
          },
          subtle: {
            value: { _dark: '{colors.gray.950}', base: '{colors.gray.50}' },
          },
          success: {
            value: { _dark: '{colors.green.950}', base: '{colors.green.50}' },
          },
          warning: {
            value: { _dark: '{colors.orange.950}', base: '{colors.orange.50}' },
          },
        },

        border: {
          DEFAULT: {
            value: { _dark: '{colors.gray.800}', base: '{colors.gray.200}' },
          },
          emphasized: {
            value: { _dark: '{colors.gray.700}', base: '{colors.gray.300}' },
          },
          error: {
            value: { _dark: '{colors.red.400}', base: '{colors.red.500}' },
          },
          info: {
            value: { _dark: '{colors.blue.400}', base: '{colors.blue.500}' },
          },
          inverted: {
            value: { _dark: '{colors.gray.200}', base: '{colors.gray.800}' },
          },
          muted: {
            value: { _dark: '{colors.gray.900}', base: '{colors.gray.100}' },
          },
          subtle: {
            value: { _dark: '{colors.gray.950}', base: '{colors.gray.50}' },
          },
          success: {
            value: { _dark: '{colors.green.400}', base: '{colors.green.500}' },
          },
          warning: {
            value: { _dark: '{colors.orange.400}', base: '{colors.orange.500}' },
          },
        },

        brand: {
          border: {
            value: { _dark: '{colors.brand.400}', base: '{colors.brand.500}' },
          },
          contrast: {
            value: { _dark: '{colors.common.white}', base: '{colors.common.white}' },
          },
          emphasized: {
            value: { _dark: '{colors.brand.700}', base: '{colors.brand.300}' },
          },
          fg: {
            value: { _dark: '{colors.brand.300}', base: '{colors.brand.700}' },
          },
          focusRing: {
            value: { _dark: '{colors.brand.400}', base: '{colors.brand.500}' },
          },
          muted: {
            value: { _dark: '{colors.brand.800}', base: '{colors.brand.200}' },
          },
          solid: {
            value: { _dark: '{colors.brand.500}', base: '{colors.brand.500}' },
          },
          subtle: {
            value: { _dark: '{colors.brand.900}', base: '{colors.brand.100}' },
          },
        },

        fg: {
          DEFAULT: {
            value: { _dark: '{colors.gray.50}', base: '{colors.black}' },
          },
          error: {
            value: { _dark: '{colors.red.400}', base: '{colors.red.500}' },
          },
          info: {
            value: { _dark: '{colors.blue.300}', base: '{colors.blue.600}' },
          },
          inverted: {
            value: { _dark: '{colors.black}', base: '{colors.gray.50}' },
          },
          muted: {
            value: { _dark: '{colors.gray.400}', base: '{colors.gray.600}' },
          },
          subtle: {
            value: { _dark: '{colors.gray.500}', base: '{colors.gray.400}' },
          },
          success: {
            value: { _dark: '{colors.green.300}', base: '{colors.green.600}' },
          },
          warning: {
            value: { _dark: '{colors.orange.300}', base: '{colors.orange.600}' },
          },
        },
        // Chakra has other colors like gray, red, orange, green, blue, yellow, teal, purple, pink & cyan.
      },
    },
    slotRecipes: {
      // slotRecipes: are multiple style objects keyed by slots like root, input, label, item, content.
      // avatar: avatarRecipe,
      // datePicker: calendarRecipe,
      // carousel: carouselRecipe,
      // combobox: comboboxRecipe,
      // colorPicker: colorPickerRecipe,
      // dialog: dialogRecipe,
      // editable: editableRecipe,
      // emptyState: emptyStateRecipe,
      // floatingPanel: floatingPanelRecipe,
      // hoverCard: hoverCardRecipe,
      // listbox: listboxRecipe,
      // menu: menuRecipe,
      // pinInput: pinInputRecipe,
      // popover: popoverRecipe,
      // progressCircle: progressCircleRecipe,
      // radioCard: radioCardRecipe,
      // ratingGroup: ratingRecipe,
      // richTextEditor: richTextEditorRecipe,
      // segmentGroup: segmentedControlRecipe,
      // slider: sliderRecipe,
      // stat: statRecipe,
      // status: statusRecipe,
      // steps: stepsRecipe,
      // switch: switchRecipe,
      // tagsInput: tagsInputRecipe,
      // timeline: timelineRecipe,
      // toast: toastRecipe,
      // toggleTip: toggleTipRecipe,
      // tooltip: tooltipRecipe,
      // treeView: treeViewRecipe,
    },
    tokens: {
      // they are the raw design values
      colors,
      fonts,
      radii: {},
    },
  },
}

const customBrandThemeConfig = defineConfig(customBrandTheme)

export const customBrandThemeSystem = createSystem(defaultConfig, customBrandThemeConfig)
