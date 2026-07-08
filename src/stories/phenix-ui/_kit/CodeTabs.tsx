import { Box, Tabs } from '@chakra-ui/react'

interface CodeTabItem {
  code: string
  label: string
  value: string
}

interface CodeTabsProps {
  tabs: CodeTabItem[]
}

export const CodeTabs = ({ tabs }: CodeTabsProps) => (
  <Tabs.Root defaultValue={tabs[0]?.value} my={6} variant="enclosed">
    <Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Trigger key={tab.value} value={tab.value}>
          {tab.label}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabs.map((tab) => (
      <Tabs.Content key={tab.value} value={tab.value}>
        <Box
          as="pre"
          bg="bg.muted"
          borderColor="border.muted"
          borderRadius="lg"
          borderWidth="1px"
          color="fg"
          fontFamily="mono"
          fontSize="sm"
          overflowX="auto"
          p={4}
        >
          {tab.code}
        </Box>
      </Tabs.Content>
    ))}
  </Tabs.Root>
)
