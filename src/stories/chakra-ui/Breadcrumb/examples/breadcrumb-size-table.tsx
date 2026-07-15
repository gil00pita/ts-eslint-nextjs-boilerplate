'use client'

import { Breadcrumb, For, Span, Stack, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const BreadcrumbSizeTable = () => {
  const recipe = useSlotRecipe({ key: 'breadcrumb' })
  return (
    <PlaygroundTable>
      <thead>
        <tr>
          <td />
          <For each={recipe.variantMap.size}>{(v) => <td key={v}>{v}</td>}</For>
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
              <For each={recipe.variantMap.size}>
                {(v) => (
                  <td key={v}>
                    <Stack>
                      <DemoBreadcrumb colorPalette={c} size={v} />
                      <DemoBreadcrumb colorPalette={c} separator="/" size={v} />
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

const DemoBreadcrumb = (props: Breadcrumb.RootProps & { separator?: string }) => {
  const { separator, ...rest } = props
  return (
    <Breadcrumb.Root {...rest}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>{separator}</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>{separator}</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
