import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Button,
  Checkbox,
  createListCollection,
  Fieldset,
  Heading,
  HStack,
  Input,
  Portal,
  RadioGroup,
  Select,
  SelectItemProps,
  Separator,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'

const meta: Meta = {
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Brand X/Patterns/Form Examples',
}

export default meta
type Story = StoryObj<typeof meta>

const contactOptions = createListCollection<SelectItemProps>({
  items: [
    { label: 'Email', value: 'email' },
    { label: 'Post', value: 'post' },
    { label: 'Phone', value: 'phone' },
  ],
})

function ContactMethodRadios() {
  return (
    <VStack align="start" gap={3}>
      <RadioGroup.Item value="england">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText>England</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="scotland">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText>Scotland</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="wales">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText>Wales</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="northern-ireland">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText>Northern Ireland</RadioGroup.ItemText>
      </RadioGroup.Item>
    </VStack>
  )
}

export const CompleteForm: Story = {
  render: () => (
    <VStack align="stretch" gap={8} p={6} width="600px">
      <Heading size="xl">Apply for a provisional driving licence</Heading>

      <Text fontSize="lg">You can apply for a provisional driving licence online.</Text>

      <Separator />

      <VStack align="stretch" gap={6}>
        <Heading size="lg">Personal details</Heading>

        <Fieldset.Root>
          <Fieldset.Legend mb={1}>Full name</Fieldset.Legend>
          <Fieldset.HelperText>
            This must match the name on your identity documents
          </Fieldset.HelperText>
          <Input placeholder="Enter your full name as it appears on your passport" required />
        </Fieldset.Root>

        <HStack gap={4}>
          <Fieldset.Root>
            <Fieldset.Legend mb={3}>Date of birth</Fieldset.Legend>
            <Input required type="date" />
          </Fieldset.Root>

          <Fieldset.Root>
            <Fieldset.Legend mb={3}>Postcode</Fieldset.Legend>
            <Input placeholder="SW1A 1AA" required />
          </Fieldset.Root>
        </HStack>

        <RadioGroup.Root
          defaultValue="england"
          hint="Select one option"
          legend="Where do you live?"
          legendAsHeading
          name="where-do-you-live"
        >
          <RadioGroup.Item value="england">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.ItemIndicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>England</RadioGroup.ItemText>
          </RadioGroup.Item>

          <RadioGroup.Item value="scotland">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.ItemIndicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Scotland</RadioGroup.ItemText>
          </RadioGroup.Item>

          <RadioGroup.Item value="wales">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.ItemIndicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Wales</RadioGroup.ItemText>
          </RadioGroup.Item>

          <RadioGroup.Item value="northern-ireland">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.ItemIndicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Northern Ireland</RadioGroup.ItemText>
          </RadioGroup.Item>
        </RadioGroup.Root>

        <Checkbox.Group
          hint="Select all that apply."
          legend="Which types of waste do you transport?"
          legendAsHeading
        >
          <Checkbox.Root value="waste-animal">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <VStack align="start" gap={0}>
              <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
              <Text color="fg.muted" textStyle="sm">
                Including abattoir waste and dead animals
              </Text>
            </VStack>
          </Checkbox.Root>
          <Checkbox.Root value="waste-mines">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <VStack align="start" gap={0}>
              <Checkbox.Label>Waste from mines or quarries</Checkbox.Label>
              <Text color="fg.muted" textStyle="sm">
                Ite waste and ite tailings
              </Text>
            </VStack>
          </Checkbox.Root>
          <Checkbox.Root value="waste-farm">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <VStack align="start" gap={0}>
              <Checkbox.Label>Farm or agricultural waste</Checkbox.Label>
              <Text color="fg.muted" textStyle="sm">
                For example, slurry
              </Text>
            </VStack>
          </Checkbox.Root>
        </Checkbox.Group>

        <Fieldset.Root>
          <Fieldset.Legend mb={1}>Additional information</Fieldset.Legend>
          <Fieldset.HelperText>
            Do not include personal information like your National Insurance number
          </Fieldset.HelperText>
          <Textarea
            placeholder="Tell us about any medical conditions that might affect your driving"
            rows={4}
          />
        </Fieldset.Root>

        <Separator />

        <Heading size="lg">Contact preferences</Heading>

        <Fieldset.Root>
          <Fieldset.Legend mb={3}>How would you like to be contacted?</Fieldset.Legend>
          <Select.Root collection={contactOptions}>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Choose an option" />
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {contactOptions.items.map((item) => (
                    <Select.Item item={item} key={item.value} />
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Fieldset.Root>

        <Fieldset.Root>
          <Fieldset.Legend mb={3}>Email address</Fieldset.Legend>
          <Input placeholder="name@example.com" required type="email" />
        </Fieldset.Root>

        <Separator />

        <VStack align="start" gap={4}>
          <Checkbox.Root required>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
              I confirm that the information I have provided is true and complete
            </Checkbox.Label>
          </Checkbox.Root>

          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
              I would like to receive updates about driving licence services
            </Checkbox.Label>
          </Checkbox.Root>
        </VStack>

        <HStack gap={4}>
          <Button size="lg" variant="primary">
            Continue
          </Button>
          <Button variant="secondary">Save and continue later</Button>
        </HStack>
      </VStack>
    </VStack>
  ),
}

export const ErrorForm: Story = {
  render: () => (
    <VStack align="stretch" gap={6} p={6} width="600px">
      <Heading size="xl">There is a problem</Heading>
      <Fieldset.Root invalid>
        <Fieldset.Legend mb={1}>Full name</Fieldset.Legend>
        <Fieldset.ErrorText>Enter your full name</Fieldset.ErrorText>
        <Input required variant="subtle" />
      </Fieldset.Root>

      <Fieldset.Root invalid>
        <Fieldset.Legend mb={1}>Email address</Fieldset.Legend>
        <Fieldset.ErrorText>Enter a valid email address</Fieldset.ErrorText>
        <Input type="email" value="invalid-email" variant="subtle" />
      </Fieldset.Root>

      <Fieldset.Root invalid>
        <Fieldset.Legend mb={1}>Where do you live?</Fieldset.Legend>
        <Fieldset.ErrorText>Select where you live</Fieldset.ErrorText>
        <Fieldset.Content>
          <RadioGroup.Root defaultValue="england">
            <ContactMethodRadios />
          </RadioGroup.Root>
        </Fieldset.Content>
      </Fieldset.Root>

      <Checkbox.Group
        error="Select the types of waste you transport"
        hint="Select all that apply."
        legend="Which types of waste do you transport?"
        legendAsHeading
      >
        <Checkbox.Root value="waste-animal">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Waste from animal carcasses</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="waste-mines">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Waste from mines or quarries</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="waste-farm">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Farm or agricultural waste</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <Button variant="primary">Continue</Button>
    </VStack>
  ),
}
