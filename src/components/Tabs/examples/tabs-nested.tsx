import { Field, Heading, Input, Tabs, Text } from '@chakra-ui/react'

export const TabsNested = () => {
  return (
    <Tabs.Root aria-label="Custom tabs" defaultValue="one" maxW="xl">
      <Tabs.List>
        <Tabs.Trigger value="one">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="two">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="one">
        <Text mb="6" mt="4" textStyle="md">
          This is a nested tab
        </Text>
        <Tabs.Root defaultValue="one" variant="subtle">
          <Tabs.List>
            <Tabs.Trigger value="one">Tab 1.1</Tabs.Trigger>
            <Tabs.Trigger value="two">Tab 1.2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content py="4" value="one">
            <Field.Root>
              <Field.Label>Tab 1.1</Field.Label>
              <Input />
            </Field.Root>
          </Tabs.Content>
          <Tabs.Content py="4" value="two">
            <Field.Root>
              <Field.Label>Tab 1.2</Field.Label>
              <Input />
            </Field.Root>
          </Tabs.Content>
        </Tabs.Root>
      </Tabs.Content>
      <Tabs.Content value="two">
        <Heading mb="6" mt="4">
          This is a normal tab
        </Heading>
        <Text>Some content to keep you busy.</Text>
      </Tabs.Content>
    </Tabs.Root>
  )
}
