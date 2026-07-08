import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface StoryFrameProps {
  /** Story title shown above the example surface. */
  title: string;
  /** Short docs-oriented description for the example. */
  description?: string;
  /** Width applied to the example surface. */
  width?: string | number;
  /** Maximum width applied to the example surface. */
  maxW?: string | number;
  /** Story content. */
  children: ReactNode;
}

export function StoryFrame({
  title,
  description,
  width = "100%",
  maxW = "760px",
  children,
}: StoryFrameProps) {
  return (
    <Stack gap="4" align="stretch" width={width} maxW={maxW}>
      <Box>
        <Heading as="h2" size="lg" color="text.default">
          {title}
        </Heading>
        {description ? (
          <Text mt="2" color="text.muted">
            {description}
          </Text>
        ) : null}
      </Box>
      <Box
        borderWidth="1px"
        borderColor="border.default"
        bg="bg.surface"
        borderRadius="md"
        p="5"
        boxShadow="sm"
      >
        {children}
      </Box>
    </Stack>
  );
}
