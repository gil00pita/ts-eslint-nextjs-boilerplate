'use client'

import { For, HStack, Span, Switch, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const SwitchVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'switch' })
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
                    <HStack>
                      <Switch.Root colorPalette={c} variant={v}>
                        <Switch.HiddenInput />
                        <Switch.Control />
                        <Switch.Label>Toggle</Switch.Label>
                      </Switch.Root>
                      <Switch.Root colorPalette={c} defaultChecked variant={v}>
                        <Switch.HiddenInput />
                        <Switch.Control />
                        <Switch.Label>Toggle</Switch.Label>
                      </Switch.Root>
                    </HStack>
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
