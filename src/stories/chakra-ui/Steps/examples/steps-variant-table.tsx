'use client'

import {
  Button,
  ButtonGroup,
  For,
  Span,
  Steps,
  type StepsRootProps,
  useSlotRecipe,
} from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const StepsVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'steps' })
  return (
    <PlaygroundTable>
      <thead>
        <tr>
          <td />
          <For each={recipe.variantMap.variant}>{(v) => <td key={v}>{v}</td>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={colorPalettes}>
          {(c) => (
            <tr key={c}>
              <td>
                <Span color="fg.muted" fontSize="sm" minW="8ch">
                  {c}
                </Span>
              </td>
              <For each={recipe.variantMap.variant}>
                {(v) => (
                  <td key={v}>
                    <DemoSteps colorPalette={c} defaultStep={1} minW="600px" variant={v} />
                  </td>
                )}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </PlaygroundTable>
  )
}

const DemoSteps = (props: StepsRootProps) => {
  return (
    <Steps.Root count={steps.length} {...props}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item index={index} key={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
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
