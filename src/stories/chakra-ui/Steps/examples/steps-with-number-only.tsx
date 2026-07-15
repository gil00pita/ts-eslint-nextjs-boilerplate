import { Button, ButtonGroup, Steps } from '@chakra-ui/react'

export const StepsWithNumberOnly = () => {
  return (
    <Steps.Root count={steps.length} defaultStep={1} size="sm">
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item index={index} key={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content index={index} key={index}>
          {step.description}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    description: 'Step 1 description',
    title: 'Step 1',
  },
  {
    description: 'Step 2 description',
    title: 'Step 2',
  },
  {
    description: 'Step 3 description',
    title: 'Step 3',
  },
]
