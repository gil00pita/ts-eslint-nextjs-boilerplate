'use client'

import { Checkbox, For, Span, Stack, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const CheckboxVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'checkbox' })
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
                    <Stack>
                      <DemoCheckbox colorPalette={c} variant={v}>
                        Checkbox
                      </DemoCheckbox>
                      <DemoCheckbox colorPalette={c} defaultChecked variant={v}>
                        Checkbox
                      </DemoCheckbox>
                      <DemoCheckbox colorPalette={c} defaultChecked disabled variant={v}>
                        Checkbox
                      </DemoCheckbox>
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

const DemoCheckbox = (props: Checkbox.RootProps) => {
  return (
    <Checkbox.Root {...props}>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>{props.children}</Checkbox.Label>
    </Checkbox.Root>
  )
}
