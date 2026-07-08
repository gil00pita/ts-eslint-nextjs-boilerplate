import { Avatar, For, HStack, Span, useSlotRecipe } from '@chakra-ui/react'

import { PlaygroundTable } from '@/utils/storybook/playground-table'
import { colorPalettes } from '@/utils/storybook/color-palettes'

export const AvatarVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'avatar' })
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
                <Span fontSize="sm" color="fg.muted" minW="8ch">
                  {c}
                </Span>
              </td>
              <For each={recipe.variantMap.variant}>
                {(v) => (
                  <td key={v}>
                    <HStack>
                      <Avatar.Root colorPalette={c} variant={v}>
                        <Avatar.Image src="https://i.pravatar.cc/150?img=4" />
                        <Avatar.Fallback name="Alex Brown" />
                      </Avatar.Root>
                      <Avatar.Root colorPalette={c} variant={v}>
                        <Avatar.Fallback name="Alex Brown" />
                      </Avatar.Root>
                      <Avatar.Root colorPalette={c} variant={v}>
                        <Avatar.Fallback />
                      </Avatar.Root>
                    </HStack>
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
