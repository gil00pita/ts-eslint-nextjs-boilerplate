import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Group } from '@chakra-ui/react'

export const GroupBasic = () => {
  return (
    <Group>
      <DecorativeBox h="20" w="40">
        1
      </DecorativeBox>
      <DecorativeBox h="20" w="40">
        2
      </DecorativeBox>
    </Group>
  )
}
