import { AbsoluteCenter, Box } from '@chakra-ui/react'
import { LuPhone } from 'react-icons/lu'

export const CenterWithAbsolute = () => {
  return (
    <Box h="100px" position="relative">
      <AbsoluteCenter axis="both" bg="tomato" color="white" p="4">
        <LuPhone />
      </AbsoluteCenter>
    </Box>
  )
}
