import type { ReactNode } from 'react'

import { Box, Heading, HStack, Icon } from '@chakra-ui/react'
import { LuCircleCheck, LuLightbulb, LuShieldAlert, LuTriangleAlert } from 'react-icons/lu'

export type CalloutTone = 'danger' | 'success' | 'tip' | 'warning'

const toneConfig = {
  danger: { colorPalette: 'red', icon: LuShieldAlert },
  success: { colorPalette: 'green', icon: LuCircleCheck },
  tip: { colorPalette: 'brand', icon: LuLightbulb },
  warning: { colorPalette: 'orange', icon: LuTriangleAlert },
} as const

interface CalloutProps {
  children: ReactNode
  title: string
  tone?: CalloutTone
}

export const Callout = ({ children, title, tone = 'tip' }: CalloutProps) => {
  const { colorPalette, icon } = toneConfig[tone]

  return (
    <Box
      bg="colorPalette.subtle"
      borderColor="colorPalette.muted"
      borderRadius="xl"
      borderWidth="1px"
      colorPalette={colorPalette}
      my={6}
      px={5}
      py={4}
    >
      <HStack gap={2} mb={2}>
        <Icon as={icon} boxSize={4} color="colorPalette.fg" />
        <Heading as="h3" color="colorPalette.fg" size="sm">
          {title}
        </Heading>
      </HStack>
      <Box
        color="fg"
        css={{ '& ul': { display: 'grid', gap: '2', paddingInlineStart: '5' } }}
        fontSize="sm"
      >
        {children}
      </Box>
    </Box>
  )
}
