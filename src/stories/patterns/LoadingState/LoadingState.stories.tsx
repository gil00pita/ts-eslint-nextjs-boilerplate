import { HStack, Spinner, Text } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { StoryFrame } from "@/storybook/StoryFrame";
import { withChakraDocs } from "@/storybook/docs";

const meta = {
  title: "Patterns/LoadingState",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: withChakraDocs("Spinner", "spinner", "App loading pattern with accessible status text."),
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function LoadingExample({ label = "Loading demand signals" }: { label?: string }) {
  return (
    <HStack gap="3" role="status" aria-live="polite">
      <Spinner size="sm" colorPalette="brand" />
      <Text color="text.muted">{label}</Text>
    </HStack>
  );
}

export const Default: Story = {
  render: () => <LoadingExample />,
};

export const States: Story = {
  render: () => (
    <StoryFrame title="Short loading label">
      <LoadingExample label="Loading" />
    </StoryFrame>
  ),
};

export const Usage: Story = {
  render: () => (
    <StoryFrame title="Table loading">
      <LoadingExample label="Loading demand signals" />
    </StoryFrame>
  ),
};
