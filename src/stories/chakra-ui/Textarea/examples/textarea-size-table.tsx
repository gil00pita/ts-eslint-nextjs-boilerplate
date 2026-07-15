'use client'

import { For, Span, Stack, Textarea, useRecipe } from '@chakra-ui/react'

import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const TextareaSizeTable = () => {
  const recipe = useRecipe({ key: 'textarea' })
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
                <Stack minW="320px">
                  <Textarea placeholder="Placeholder" size={v} />
                  <Textarea placeholder="Placeholder" size={v} variant="subtle" />
                </Stack>
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </PlaygroundTable>
  )
}
