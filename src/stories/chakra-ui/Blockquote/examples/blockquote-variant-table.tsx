'use client'

import { Blockquote, For, Span, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const BlockquoteVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'blockquote' })
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
                    <DemoBlockquote colorPalette={c} variant={v} />
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

const DemoBlockquote = (props: Blockquote.RootProps) => {
  return (
    <Blockquote.Root {...props}>
      <Blockquote.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.
      </Blockquote.Content>
    </Blockquote.Root>
  )
}
