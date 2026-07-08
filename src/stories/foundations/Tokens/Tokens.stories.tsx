import type { Meta } from '@storybook/react-vite'
import { Box, Center, For, SimpleGrid, Text } from '@/ui'

export default {
  title: 'Foundations / Tokens',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { TokensAnimationStyle as AnimationStyle } from './examples/animation-style'
export { TokensFocusRing as FocusRing } from './examples/focus-ring'
export { TokensLayerStyle as LayerStyle } from './examples/layer-style'
export { TokensTextStyles as TextStyles } from './examples/text-styles'

export { AspectRatioTokenDoc as AspectRatio } from '@/utils/storybook/aspect-ratio-token-doc'
export { BorderRadiusTokenDoc as Radius } from '@/utils/storybook/border-radius-token-doc'
export { BreakpointDoc as Breakpoints } from '@/utils/storybook/breakpoint-doc'
export { EasingTokenDoc as Easings } from '@/utils/storybook/easing-token-doc'
export {
  ColorTokenDoc as Colors,
  ColorSemanticTokenDoc as SemanticColors,
} from '@/utils/storybook/color-token-doc'
export {
  DurationTokenDoc as Durations,
  KeyframeDoc as Keyframes,
} from '@/utils/storybook/keyframe-doc'
export { ShadowTokenDoc as Shadows } from '@/utils/storybook/shadow-token-doc'
export { SizesTokenDoc as Sizes } from '@/utils/storybook/sizes-token-doc'
export { SpacingTokenDoc as Spacing } from '@/utils/storybook/spacing-token-doc'
export {
  FontTokenDoc as Font,
  FontSizeTokenDoc as FontSizes,
  FontWeightTokenDoc as FontWeights,
  LetterSpacingTokenDoc as LetterSpacings,
  LineHeightTokenDoc as LineHeights,
} from '@/utils/storybook/typography-token-doc'
export { ZIndexTokenDoc as ZIndex } from '@/utils/storybook/z-index-token-doc'

export const StatusTokens = () => {
  return (
    <SimpleGrid columns={4} gap="10">
      <For each={['bg.error', 'bg.warning', 'bg.success', 'bg.info']}>
        {(color) => (
          <Center bg={color} height="40px">
            <Text color={color.replace('bg.', 'fg.')}>{color}</Text>
          </Center>
        )}
      </For>

      <For each={['fg.error', 'fg.warning', 'fg.success', 'fg.info']}>
        {(color) => (
          <Center bg={color} height="40px">
            <Text color="fg.inverted">{color}</Text>
          </Center>
        )}
      </For>

      <For each={['border.error', 'border.warning', 'border.success', 'border.info']}>
        {(color) => (
          <Center borderColor={color} height="40px" borderWidth="2px">
            <Text color="fg">{color}</Text>
          </Center>
        )}
      </For>
    </SimpleGrid>
  )
}
