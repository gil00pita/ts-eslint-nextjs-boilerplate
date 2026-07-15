'use client'

import { For, Kbd, Span, useRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const KbdVariantTable = () => {
  const recipe = useRecipe({ key: 'kbd' })
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
                    <Kbd colorPalette={c} variant={v}>
                      ⌘ C
                    </Kbd>
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
