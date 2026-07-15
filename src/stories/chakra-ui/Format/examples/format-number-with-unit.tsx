import { FormatNumber, Text } from '@chakra-ui/react'

export const FormatNumberWithUnit = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber style="unit" unit="kilometer" value={384.4} />
    </Text>
  )
}
