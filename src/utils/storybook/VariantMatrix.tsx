import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface VariantMatrixProps<T extends string> {
  /** Title shown above the matrix. */
  title?: string;
  /** Values rendered across the matrix. */
  values: readonly T[];
  /** Render callback for each value. */
  render: (value: T) => ReactNode;
  /** Minimum grid item width. */
  minChildWidth?: string;
}

export function VariantMatrix<T extends string>({
  title,
  values,
  render,
  minChildWidth = "150px",
}: VariantMatrixProps<T>) {
  return (
    <Stack gap="3">
      {title ? (
        <Text fontWeight="semibold" color="text.default">
          {title}
        </Text>
      ) : null}
      <SimpleGrid minChildWidth={minChildWidth} gap="3">
        {values.map((value) => (
          <Box key={value} p="3" borderWidth="1px" borderColor="border.subtle" borderRadius="md">
            <Stack gap="2">
              <Text fontSize="sm" color="text.muted">
                {value}
              </Text>
              {render(value)}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
