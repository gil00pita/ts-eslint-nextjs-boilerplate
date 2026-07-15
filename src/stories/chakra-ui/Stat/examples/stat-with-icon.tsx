import { HStack, Icon, Stat } from '@chakra-ui/react'
import { LuDollarSign } from 'react-icons/lu'

export const StatWithIcon = () => {
  return (
    <Stat.Root borderWidth="1px" maxW="240px" p="4" rounded="md">
      <HStack justify="space-between">
        <Stat.Label>Sales</Stat.Label>
        <Icon color="fg.muted">
          <LuDollarSign />
        </Icon>
      </HStack>
      <Stat.ValueText>$4.24k</Stat.ValueText>
    </Stat.Root>
  )
}
