import { FormatNumber, Text } from '@chakra-ui/react'

export const FormatNumberWithPercentage = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber
        maximumFractionDigits={2}
        minimumFractionDigits={2}
        style="percent"
        value={0.145}
      />
    </Text>
  )
}
