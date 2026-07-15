'use client'

import { For, Span, Tabs, Text, useSlotRecipe } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'
import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const TabsVariantTable = () => {
  const recipe = useSlotRecipe({ key: 'tabs' })
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
                    <Tabs.Root
                      colorPalette={c}
                      defaultValue="settings"
                      minW="300px"
                      mt="3"
                      variant={v}
                    >
                      <Tabs.List>
                        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                        <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
                      </Tabs.List>
                      <Tabs.ContentGroup>
                        <Tabs.Content value="settings">
                          <Text fontSize="sm">
                            Settings - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Text>
                        </Tabs.Content>
                        <Tabs.Content value="billing">
                          <Text fontSize="sm">
                            Billing - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Text>
                        </Tabs.Content>
                      </Tabs.ContentGroup>
                    </Tabs.Root>
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
