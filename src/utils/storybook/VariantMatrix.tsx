import type { ReactNode } from 'react'

import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export interface VariantMatrixProps<T extends string> {
  /** Title shown above the matrix. */
  title?: string
  /** Values rendered across the matrix. */
  values: readonly T[]
  /** Render callback for each value. */
  render: (value: T) => ReactNode
  /** Minimum grid item width. */
  minChildWidth?: string
}

export function VariantMatrix<T extends string>({
  minChildWidth = '150px',
  render,
  title,
  values,
}: VariantMatrixProps<T>) {
  return (
    <Stack gap="3">
      {title ? (
        <Text color="text.default" fontWeight="semibold">
          {title}
        </Text>
      ) : null}
      <SimpleGrid gap="3" minChildWidth={minChildWidth}>
        {values.map((value) => (
          <Box borderColor="border.subtle" borderRadius="md" borderWidth="1px" key={value} p="3">
            <Stack gap="2">
              <Text color="text.muted" fontSize="sm">
                {value}
              </Text>
              {render(value)}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
