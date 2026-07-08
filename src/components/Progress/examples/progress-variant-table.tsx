'use client'

import { For, Progress, Span, Stack, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const ProgressVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'progress' })
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
                    <Stack minW="200px">
                      <DemoProgress colorPalette={c} value={65} variant={v} />
                      <DemoProgress colorPalette={c} striped value={65} variant={v} />
                      <DemoProgress animated colorPalette={c} striped value={65} variant={v} />
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

export const DemoProgress = (props: Progress.RootProps) => {
  return (
    <Progress.Root {...props}>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
