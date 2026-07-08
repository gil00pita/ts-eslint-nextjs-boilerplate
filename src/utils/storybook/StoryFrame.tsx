import type { ReactNode } from 'react'

import { Box, Heading, Stack, Text } from '@chakra-ui/react'

export interface StoryFrameProps {
  /** Story title shown above the example surface. */
  title: string
  /** Short docs-oriented description for the example. */
  description?: string
  /** Width applied to the example surface. */
  width?: string | number
  /** Maximum width applied to the example surface. */
  maxW?: string | number
  /** Story content. */
  children: ReactNode
}

export function StoryFrame({
  children,
  description,
  maxW = '760px',
  title,
  width = '100%',
}: StoryFrameProps) {
  return (
    <Stack align="stretch" gap="4" maxW={maxW} width={width}>
      <Box>
        <Heading as="h2" color="text.default" size="lg">
          {title}
        </Heading>
        {description ? (
          <Text color="text.muted" mt="2">
            {description}
          </Text>
        ) : null}
      </Box>
      <Box
        bg="bg.surface"
        borderColor="border.default"
        borderRadius="md"
        borderWidth="1px"
        boxShadow="sm"
        p="5"
      >
        {children}
      </Box>
    </Stack>
  )
}
