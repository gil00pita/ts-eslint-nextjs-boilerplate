import { Box, type BoxProps } from '@chakra-ui/react'
import React from 'react'

interface TokenDocProps extends BoxProps {
  action?: React.ReactNode
}

export const TokenDoc = (props: TokenDocProps) => {
  const { action, children, title, ...rest } = props
  return (
    <Box bg="bg" borderWidth="0.5px" rounded="lg" {...rest}>
      <Box p="6" pb="0">
        {title && (
          <Box as="h2" fontSize="sm" fontWeight="medium">
            {title}
          </Box>
        )}
        {action}
      </Box>
      <Box p="6">{children}</Box>
    </Box>
  )
}
