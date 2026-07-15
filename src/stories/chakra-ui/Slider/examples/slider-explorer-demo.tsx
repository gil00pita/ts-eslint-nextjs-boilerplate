import { Box, Slider, Stack } from '@chakra-ui/react'

export const SliderExplorerDemo = () => {
  return (
    <Stack gap="8" maxW="280px" w="full">
      <Slider.Root defaultValue={[40]} orientation="horizontal">
        <Slider.Label fontWeight="medium" mb="2">
          Volume
        </Slider.Label>

        <Slider.Control alignItems="center" display="flex" height="6">
          <Slider.Track bg="gray.200" height="2" rounded="full">
            <Slider.Range bg="blue.500" rounded="full" />
          </Slider.Track>

          <Slider.Thumb index={0}>
            <Box
              alignItems="center"
              bg="white"
              borderColor="blue.500"
              borderWidth="2px"
              boxSize="5"
              display="flex"
              justifyContent="center"
              rounded="full"
              shadow="sm"
            >
              <Slider.ValueText color="blue.600" fontSize="xs" />
              <Slider.DraggingIndicator />
            </Box>
          </Slider.Thumb>

          <Slider.MarkerGroup mt="4">
            <Slider.Marker value={0}>0</Slider.Marker>
            <Slider.Marker value={50}>50</Slider.Marker>
            <Slider.Marker value={100}>100</Slider.Marker>
          </Slider.MarkerGroup>

          <Slider.MarkerIndicator />
        </Slider.Control>
      </Slider.Root>
    </Stack>
  )
}
