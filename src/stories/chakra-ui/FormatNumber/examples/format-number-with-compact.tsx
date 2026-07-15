import { FormatNumber, Text } from '@chakra-ui/react'

export const FormatNumberWithCompact = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber compactDisplay="short" notation="compact" value={1500000} />
    </Text>
  )
}
