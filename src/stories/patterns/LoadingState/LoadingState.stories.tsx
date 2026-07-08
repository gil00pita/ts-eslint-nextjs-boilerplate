import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { HStack, Spinner, Text } from '@chakra-ui/react'

import { withChakraDocs } from '@/storybook/docs'
import { StoryFrame } from '@/storybook/StoryFrame'

const meta = {
  parameters: {
    docs: {
      description: {
        component: withChakraDocs(
          'Spinner',
          'spinner',
          'App loading pattern with accessible status text.'
        ),
      },
    },
  },
  tags: ['autodocs'],
  title: 'Patterns/LoadingState',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function LoadingExample({ label = 'Loading demand signals' }: { label?: string }) {
  return (
    <HStack aria-live="polite" gap="3" role="status">
      <Spinner colorPalette="brand" size="sm" />
      <Text color="text.muted">{label}</Text>
    </HStack>
  )
}

export const Default: Story = {
  render: () => <LoadingExample />,
}

export const States: Story = {
  render: () => (
    <StoryFrame title="Short loading label">
      <LoadingExample label="Loading" />
    </StoryFrame>
  ),
}

export const Usage: Story = {
  render: () => (
    <StoryFrame title="Table loading">
      <LoadingExample label="Loading demand signals" />
    </StoryFrame>
  ),
}
