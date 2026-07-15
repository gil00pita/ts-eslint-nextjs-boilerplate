'use client'

import { Box, Button, ButtonGroup, Heading, Stack, Steps, Text } from '@chakra-ui/react'

export const StepsExplorerDemo = () => {
  return (
    <Stack gap="8" maxW="md">
      <Heading size="md">Onboarding Steps</Heading>

      <Steps.Root count={steps.length} defaultStep={1} orientation="vertical">
        <Stack gap="8">
          <Steps.List gap="6">
            {steps.map((step, index) => (
              <Box key={index} position="relative">
                <Steps.Item index={index}>
                  <Steps.Indicator />
                  <Steps.Title fontWeight="semibold">{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>

                <Box mt="2" pl="10">
                  <Steps.Content index={index}>
                    <Text color="gray.500">{step.description}</Text>
                  </Steps.Content>
                </Box>
              </Box>
            ))}
          </Steps.List>

          <Steps.CompletedContent>
            <Text color="green.600" fontWeight="medium" mt="2">
              ✅ All steps are complete! You're ready to go.
            </Text>
          </Steps.CompletedContent>

          <Box>
            <ButtonGroup justifyContent="space-between" size="sm" variant="outline" width="full">
              <Steps.PrevTrigger asChild>
                <Button>Previous</Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Box>
        </Stack>
      </Steps.Root>
    </Stack>
  )
}

const steps = [
  {
    description:
      'Sign up with your email and create a secure password. Make sure to verify your email address.',
    title: 'Create Account',
  },
  {
    description:
      'Add your personal details, profile picture, and preferences so we can tailor your experience.',
    title: 'Profile Setup',
  },
  {
    description:
      'Explore the dashboard, connect with others, and start using the features immediately.',
    title: 'Get Started',
  },
]
