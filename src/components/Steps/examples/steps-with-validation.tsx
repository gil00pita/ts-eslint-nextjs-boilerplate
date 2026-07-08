'use client'

import { Box, Button, ButtonGroup, Input, Steps, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const StepsWithValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    password: '',
  })

  const [error, setError] = useState<string | null>(null)

  return (
    <Steps.Root
      count={stepsData.length}
      isStepValid={(index) => stepsData[index]?.validate(formData) ?? true}
      linear
      onStepInvalid={(details) => {
        setError(`Step ${details.step + 1} is invalid`)
      }}
    >
      <Steps.List>
        {stepsData.map((step, index) => (
          <Steps.Item index={index} key={index}>
            <Steps.Trigger>
              <Steps.Indicator />
              <Box>
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Description>{step.description}</Steps.Description>
              </Box>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {stepsData.map((step, index) => (
        <Steps.Content index={index} key={index} maxW="xl">
          {step.render({ formData, setError, setFormData })}
          {error && (
            <Box color="red.fg" mt="3" textStyle="sm">
              {error}
            </Box>
          )}
        </Steps.Content>
      ))}

      <Steps.CompletedContent>
        <Text>Registration complete!</Text>
      </Steps.CompletedContent>

      <ButtonGroup mt="4" size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Back</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

interface FormData {
  name: string
  email: string
  password: string
}

interface StepRenderContext {
  formData: FormData
  setFormData: (data: FormData) => void
  setError: (error: string | null) => void
}

interface StepData {
  title: string
  description: string
  validate: (data: FormData) => boolean
  render(ctx: StepRenderContext): React.ReactNode
}

const stepsData: StepData[] = [
  {
    description: 'Enter your name',
    render(ctx) {
      return (
        <Input
          onChange={(e) => {
            ctx.setFormData({ ...ctx.formData, name: e.target.value })
            ctx.setError(null)
          }}
          placeholder="Enter your name"
          value={ctx.formData.name}
        />
      )
    },
    title: 'Name',
    validate(data) {
      return data.name.trim().length > 0
    },
  },
  {
    description: 'Enter your email',
    render(ctx) {
      return (
        <Input
          onChange={(e) => {
            ctx.setFormData({ ...ctx.formData, email: e.target.value })
            ctx.setError(null)
          }}
          placeholder="email@example.com"
          type="email"
          value={ctx.formData.email}
        />
      )
    },
    title: 'Email',
    validate(data) {
      return data.email.includes('@')
    },
  },
  {
    description: 'Create a password',
    render(ctx) {
      return (
        <Input
          onChange={(e) => {
            ctx.setFormData({ ...ctx.formData, password: e.target.value })
            ctx.setError(null)
          }}
          placeholder="Enter password"
          type="password"
          value={ctx.formData.password}
        />
      )
    },
    title: 'Password',
    validate(data) {
      return data.password.length >= 8
    },
  },
]
