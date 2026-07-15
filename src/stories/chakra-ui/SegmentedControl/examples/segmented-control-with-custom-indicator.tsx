import { SegmentGroup } from '@chakra-ui/react'

export const SegmentedControlWithCustomIndicator = () => {
  return (
    <SegmentGroup.Root
      css={{
        '--segment-indicator-bg': 'colors.teal.500',
        '--segment-indicator-shadow': 'shadows.md',
      }}
      defaultValue="react"
    >
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          { label: 'React', value: 'react' },
          { label: 'Vue', value: 'vue' },
          { label: 'Solid', value: 'solid' },
        ]}
      />
    </SegmentGroup.Root>
  )
}
