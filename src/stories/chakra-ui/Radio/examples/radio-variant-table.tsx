'use client'

import { For, HStack, RadioGroup, Span, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const RadioVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'radioGroup' })
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
                    <RadioGroup.Root
                      colorPalette={c}
                      defaultValue="1"
                      minWidth="200px"
                      readOnly
                      variant={v}
                    >
                      <HStack gap="4">
                        <DemoRadio value="1">Radio</DemoRadio>
                        <DemoRadio value="2">Radio</DemoRadio>
                      </HStack>
                    </RadioGroup.Root>
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

const DemoRadio = (props: RadioGroup.ItemProps) => {
  return (
    <RadioGroup.Item {...props}>
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>{props.children}</RadioGroup.ItemText>
    </RadioGroup.Item>
  )
}
