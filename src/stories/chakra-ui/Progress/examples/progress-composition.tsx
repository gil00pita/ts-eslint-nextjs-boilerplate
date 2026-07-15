import { Heading, HStack, Progress, Span, Square, Stack } from '@chakra-ui/react'
import { HiFolder, HiLockClosed, HiPencil } from 'react-icons/hi'

export const ProgressComposition = () => {
  return (
    <Stack gap="8" maxW="300px">
      <Heading size="sm">Features</Heading>
      <FeatureUsage
        data={{ label: 'Private Users', max: 100, value: 65 }}
        icon={<HiLockClosed />}
      />
      <FeatureUsage data={{ label: 'Editors', max: 100, value: 50 }} icon={<HiPencil />} />
      <FeatureUsage data={{ label: 'Projects', max: 5, value: 1 }} icon={<HiFolder />} />
    </Stack>
  )
}

interface FeatureData {
  min?: number
  max: number
  value: number
  label: string
}

interface FeatureUsageProps {
  icon: React.ReactNode
  data: FeatureData
}

const FeatureUsage = (props: FeatureUsageProps) => {
  const { data, icon } = props
  return (
    <HStack gap="4">
      <Square bg="bg.muted" borderRadius="sm" size="10">
        {icon}
      </Square>
      <Progress.Root flex="1" max={data.max} min={data.min} size="sm" value={data.value}>
        <HStack justify="space-between">
          <Progress.Label>{data.label}</Progress.Label>
          <Progress.ValueText color="inherit">
            {data.value} <Span color="fg.muted">/ {data.max}</Span>
          </Progress.ValueText>
        </HStack>
        <Progress.Track mt="2">
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </HStack>
  )
}
