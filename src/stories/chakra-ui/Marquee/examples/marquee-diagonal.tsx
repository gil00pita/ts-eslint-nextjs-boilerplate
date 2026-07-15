import { Circle, HStack, Marquee } from '@chakra-ui/react'

export const MarqueeDiagonal = () => {
  return (
    <Marquee.Root
      bg="bg.emphasized"
      overflow="hidden"
      position="relative"
      py="4"
      top="25%"
      transform="rotate(-2deg)"
    >
      <Marquee.Viewport>
        <Marquee.Content>
          {[...Array(10)].map((_, i) => (
            <Marquee.Item key={i} pr="4">
              <HStack fontWeight="medium" gap="8" textStyle="3xl">
                Chakra Conf 2026
                <Circle bg="colorPalette.solid" size="1.5" />
              </HStack>
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  )
}
