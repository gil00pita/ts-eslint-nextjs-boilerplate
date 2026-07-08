'use client'

import { For, Slider, Span, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const SliderVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'slider' })
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
                    <Slider.Root
                      colorPalette={c}
                      defaultValue={[40]}
                      mb="2"
                      minW="200px"
                      variant={v}
                    >
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                      </Slider.Control>
                    </Slider.Root>

                    <Slider.Root
                      colorPalette={c}
                      defaultValue={[40]}
                      disabled
                      minW="200px"
                      variant={v}
                    >
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                      </Slider.Control>
                    </Slider.Root>
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
