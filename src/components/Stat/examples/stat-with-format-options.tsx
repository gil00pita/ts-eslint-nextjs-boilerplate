import { FormatNumber, Stat } from '@chakra-ui/react'

export const StatWithFormatOptions = () => {
  return (
    <Stat.Root>
      <Stat.Label>Revenue</Stat.Label>
      <Stat.ValueText>
        <FormatNumber currency="USD" style="currency" value={935.4} />
      </Stat.ValueText>
    </Stat.Root>
  )
}
