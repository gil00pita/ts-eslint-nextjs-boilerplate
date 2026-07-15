import { Badge, Stat as ChakraStat, FormatNumber, Show } from '@chakra-ui/react'
import * as React from 'react'

import { InfoTip } from '@/ui/toggle-tip'

interface StatProps extends ChakraStat.RootProps {
  label?: React.ReactNode
  value?: number
  info?: React.ReactNode
  valueText?: React.ReactNode
  formatOptions?: Intl.NumberFormatOptions
  change?: number
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(function Stat(props, ref) {
  const { change, formatOptions, info, label, value, valueText, ...rest } = props
  return (
    <ChakraStat.Root {...rest}>
      {label && (
        <ChakraStat.Label>
          {label}
          {info && <InfoTip>{info}</InfoTip>}
        </ChakraStat.Label>
      )}
      <ChakraStat.ValueText {...rest} ref={ref}>
        {valueText ||
          (value != null && formatOptions && <FormatNumber value={value} {...formatOptions} />)}
      </ChakraStat.ValueText>
      {change != null && (
        <Badge colorPalette={change > 0 ? 'green' : 'red'} gap="0">
          <Show fallback={<ChakraStat.DownIndicator />} when={change > 0}>
            <ChakraStat.UpIndicator />
          </Show>
          <FormatNumber maximumFractionDigits={2} style="percent" value={Math.abs(change)} />
        </Badge>
      )}
    </ChakraStat.Root>
  )
})
