import { HStack, SegmentGroup } from '@chakra-ui/react'
import { LuGrid2X2, LuList, LuTable } from 'react-icons/lu'

export const SegmentedControlWithIcon = () => {
  return (
    <SegmentGroup.Root defaultValue="table">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          {
            label: (
              <HStack>
                <LuTable />
                Table
              </HStack>
            ),
            value: 'table',
          },
          {
            label: (
              <HStack>
                <LuGrid2X2 />
                Board
              </HStack>
            ),
            value: 'board',
          },
          {
            label: (
              <HStack>
                <LuList />
                List
              </HStack>
            ),
            value: 'list',
          },
        ]}
      />
    </SegmentGroup.Root>
  )
}
