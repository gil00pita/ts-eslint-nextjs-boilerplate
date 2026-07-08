import { FormatByte, Stack, Text } from '@chakra-ui/react'

export const FormatByteWithUnitDisplay = () => {
  return (
    <Stack>
      <Text textStyle="lg">
        <FormatByte unitDisplay="narrow" value={50345.53} />
      </Text>
      <Text textStyle="lg">
        <FormatByte unitDisplay="short" value={50345.53} />
      </Text>
      <Text textStyle="lg">
        <FormatByte unitDisplay="long" value={50345.53} />
      </Text>
    </Stack>
  )
}
