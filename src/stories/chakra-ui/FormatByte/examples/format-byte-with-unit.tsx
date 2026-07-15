import { FormatByte, Text } from '@chakra-ui/react'

export const FormatByteWithUnit = () => {
  return (
    <Text textStyle="lg">
      File size: <FormatByte unit="bit" value={1450.45} />
    </Text>
  )
}
