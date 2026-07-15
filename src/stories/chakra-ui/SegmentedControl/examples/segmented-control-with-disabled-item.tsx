import { SegmentGroup } from '@chakra-ui/react'

export const SegmentedControlWithDisabledItem = () => {
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          { label: 'React', value: 'React' },
          { disabled: true, label: 'Vue', value: 'Vue' },
          { label: 'Solid', value: 'Solid' },
        ]}
      />
    </SegmentGroup.Root>
  )
}
