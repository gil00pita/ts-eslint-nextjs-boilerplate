import { Button, Center, HStack, Steps } from '@chakra-ui/react'

export const StepsWithLines = () => {
  return (
    <Steps.Root count={steps.length} defaultStep={1}>
      <Steps.List gap="4">
        {steps.map((item, index) => (
          <Steps.Item
            alignItems="flex-start"
            flex="1!"
            flexDir="column"
            gap="2"
            index={index}
            key={index}
          >
            <Steps.Separator display="initial!" flex="unset" h="3px" mx="0!" />
            <Steps.Trigger>
              <Steps.Title>{item.title}</Steps.Title>
            </Steps.Trigger>
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((item, index) => (
        <Steps.Content index={index} key={index}>
          <Center borderWidth="1px" minHeight="20">
            {item.title} - {item.description}
          </Center>
        </Steps.Content>
      ))}

      <Steps.Content index={steps.length}>
        <Center borderWidth="1px" minHeight="20">
          Complete - Thank you!
        </Center>
      </Steps.Content>

      <HStack mt="5">
        <Steps.PrevTrigger asChild>
          <Button size="sm" variant="outline">
            Prev
          </Button>
        </Steps.PrevTrigger>

        <Steps.NextTrigger asChild>
          <Button size="sm" variant="outline">
            Next
          </Button>
        </Steps.NextTrigger>
      </HStack>
    </Steps.Root>
  )
}

const steps = [
  { description: 'Contact Info', title: 'Step One' },
  { description: 'Date & Time', title: 'Step Two' },
  { description: 'Select Rooms', title: 'Step Three' },
]
