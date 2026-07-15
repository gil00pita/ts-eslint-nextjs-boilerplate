'use client'

import { For, Input, Span, useRecipe } from '@chakra-ui/react'

import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const InputVariantTable = () => {
  const recipe = useRecipe({ key: 'input' })
  return (
    <PlaygroundTable>
      <tbody>
        <For each={recipe.variantMap.variant}>
          {(v) => (
            <tr key={v}>
              <td>
                <Span color="fg.muted" fontSize="sm" minW="8ch">
                  {v}
                </Span>
              </td>
              <td>
                <Input placeholder="Placeholder" variant={v} />
              </td>
            </tr>
          )}
        </For>
        <tr>
          <td>
            <Span color="fg.muted" fontSize="sm" minW="8ch">
              unstyled
            </Span>
          </td>
          <td>
            <Input placeholder="Placeholder" unstyled />
          </td>
        </tr>
      </tbody>
    </PlaygroundTable>
  )
}
