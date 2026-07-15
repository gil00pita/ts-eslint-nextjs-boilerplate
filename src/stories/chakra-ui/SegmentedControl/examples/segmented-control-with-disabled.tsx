import { SegmentGroup } from '@chakra-ui/react'

export const SegmentedControlWithDisabled = () => {
  return (
    <SegmentGroup.Root defaultValue="React" disabled>
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={['React', 'Vue', 'Solid']} />
    </SegmentGroup.Root>
  )
}
