import { FormatNumber, Text } from '@chakra-ui/react'

export const FormatNumberWithCurrency = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber currency="USD" style="currency" value={1234.45} />
    </Text>
  )
}
