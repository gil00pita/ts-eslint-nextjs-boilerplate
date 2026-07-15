import { Button, ButtonGroup, Steps } from '@chakra-ui/react'
import { LuCalendar, LuCheck, LuUser, LuWallet } from 'react-icons/lu'

export const StepsWithIcon = () => {
  return (
    <Steps.Root count={steps.length} defaultStep={1} size="sm">
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item index={index} key={index}>
            <Steps.Indicator>
              <Steps.Status complete={<LuCheck />} incomplete={step.icon} />
            </Steps.Indicator>
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
    description: 'Contact Details',
    icon: <LuUser />,
  },
  {
    description: 'Payment',
    icon: <LuWallet />,
  },
  {
    description: 'Book an Appointment',
    icon: <LuCalendar />,
  },
]
