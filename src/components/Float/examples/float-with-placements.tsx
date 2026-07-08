import { Box, Circle, Float, HStack, Stack } from '@chakra-ui/react'

export const FloatWithPlacements = () => (
  <HStack gap="14" wrap="wrap">
    {placements.map((placement) => (
      <Stack gap="3" key={placement}>
        <p>{placement}</p>
        <Box bg="bg.emphasized" height="80px" position="relative" width="80px">
          <Float placement={placement}>
            <Circle bg="red" color="white" size="5">
              3
            </Circle>
          </Float>
        </Box>
      </Stack>
    ))}
  </HStack>
)

const placements = [
  'bottom-end',
  'bottom-start',
  'top-end',
  'top-start',
  'bottom-center',
  'top-center',
  'middle-center',
  'middle-end',
  'middle-start',
] as const
