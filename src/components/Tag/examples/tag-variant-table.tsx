'use client'

import { Avatar, For, Span, Stack, Tag, useSlotRecipe } from '@chakra-ui/react'
import { HiCheck, HiOutlineBriefcase } from 'react-icons/hi'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const TagVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'tag' })
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
                    <Stack align="flex-start">
                      <Tag.Root colorPalette={c} variant={v}>
                        <Tag.Label>Gray</Tag.Label>
                      </Tag.Root>

                      <Tag.Root colorPalette={c} variant={v}>
                        <Tag.Label>Gray</Tag.Label>
                        <Tag.EndElement>
                          <Tag.CloseTrigger />
                        </Tag.EndElement>
                      </Tag.Root>

                      <Tag.Root colorPalette={c} variant={v}>
                        <Tag.StartElement>
                          <HiCheck />
                        </Tag.StartElement>
                        <Tag.Label>Gray</Tag.Label>
                      </Tag.Root>

                      <Tag.Root colorPalette={c} variant={v}>
                        <Tag.StartElement>
                          <HiOutlineBriefcase />
                        </Tag.StartElement>
                        <Tag.Label>Projects</Tag.Label>
                      </Tag.Root>

                      <Tag.Root borderRadius="full" colorPalette={c} variant={v}>
                        <Tag.StartElement>
                          <Avatar.Root size="full">
                            <Avatar.Image src="https://i.pravatar.cc/150?img=6" />
                            <Avatar.Fallback name="Sarah Miller" />
                          </Avatar.Root>
                        </Tag.StartElement>
                        <Tag.Label>Sarah Miller</Tag.Label>
                      </Tag.Root>
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
