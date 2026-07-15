import { Collapsible, Stack } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'
import LoremIpsum from 'react-lorem-ipsum'

export const CollapsibleInitialOpen = () => (
  <Collapsible.Root defaultOpen>
    <Collapsible.Trigger alignItems="center" display="flex" gap="2" paddingY="3">
      <Collapsible.Indicator _open={{ transform: 'rotate(90deg)' }} transition="transform 0.2s">
        <LuChevronRight />
      </Collapsible.Indicator>
      Toggle
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Stack borderWidth="1px" padding="4">
        <LoremIpsum p={2} />
      </Stack>
    </Collapsible.Content>
  </Collapsible.Root>
)
