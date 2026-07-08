'use client'

import { CheckboxCard, For, Span, Stack, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const CheckboxCardVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'checkboxCard' })
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
                    <Stack gap="4">
                      <DemoCheckboxCard colorPalette={c} variant={v} />
                      <DemoCheckboxCard colorPalette={c} defaultChecked variant={v} />
                      <DemoCheckboxCard colorPalette={c} defaultChecked disabled variant={v} />
                    </Stack>
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

const DemoCheckboxCard = (props: CheckboxCard.RootProps) => {
  return (
    <CheckboxCard.Root maxW="240px" {...props}>
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Content>
          <CheckboxCard.Label>Next.js</CheckboxCard.Label>
          <CheckboxCard.Description>Best for apps</CheckboxCard.Description>
        </CheckboxCard.Content>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  )
}
