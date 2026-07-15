'use client'

import { For, Span, Textarea, useRecipe } from '@chakra-ui/react'

import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const TextareaVariantTable = () => {
  const recipe = useRecipe({ key: 'textarea' })
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
                <Textarea placeholder="Placeholder" variant={v} />
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
            <Textarea minW="320px" placeholder="Placeholder" unstyled />
          </td>
        </tr>
      </tbody>
    </PlaygroundTable>
  )
}
