'use client'

import { Checkbox, For, Span, Stack, useSlotRecipe } from '@chakra-ui/react'

import { PlaygroundTable } from '@/utils/storybook/playground-table'
import { colorPalettes } from '@/utils/storybook/color-palettes'

export const CheckboxSizeTable = () => {
  const recipe = useSlotRecipe({ key: 'checkbox' })
  return (
    <PlaygroundTable>
      <thead>
        <tr>
          <td />
          <For each={recipe.variantMap.size}>{(v) => <td key={v}>{v}</td>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={colorPalettes}>
          {(c) => (
            <tr key={c}>
              <td>
                <Span fontSize="sm" color="fg.muted" minW="8ch">
                  {c}
                </Span>
              </td>
              <For each={recipe.variantMap.size}>
                {(v) => (
                  <td key={v}>
                    <Stack>
                      <DemoCheckbox colorPalette={c} size={v}>
                        Checkbox
                      </DemoCheckbox>
                      <DemoCheckbox colorPalette={c} size={v} defaultChecked>
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
