'use client'

import { For, Input, Span, Stack, useRecipe } from '@chakra-ui/react'

import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const InputSizeTable = () => {
  const recipe = useRecipe({ key: 'input' })
  return (
    <PlaygroundTable>
      <tbody>
        <For each={recipe.variantMap.size}>
          {(v) => (
            <tr key={v}>
              <td>
                <Span color="fg.muted" fontSize="sm" minW="8ch">
                  {v}
                </Span>
              </td>
              <td>
                <Stack>
                  <Input placeholder="Placeholder" size={v} />
                  <Input placeholder="Placeholder" size={v} variant="subtle" />
                </Stack>
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </PlaygroundTable>
  )
}
