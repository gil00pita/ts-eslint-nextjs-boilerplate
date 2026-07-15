import { Box, Center, Link } from '@chakra-ui/react'
import { LuArrowRight } from 'react-icons/lu'

export const CenterWithInline = () => {
  return (
    <Link href="#">
      <Center gap="4" inline>
        <Box>Visit Chakra UI</Box>
        <LuArrowRight />
      </Center>
    </Link>
  )
}
