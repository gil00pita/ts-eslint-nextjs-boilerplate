'use client'

import { Button, Card, For, Span, useSlotRecipe } from '@chakra-ui/react'

import { PlaygroundTable } from '@/utils/storybook/playground-table'

export const CardSizeTable = () => {
  const recipe = useSlotRecipe({ key: 'card' })
  return (
    <PlaygroundTable>
      <thead>
        <tr>
          <td />
          <For each={recipe.variantMap.size}>{(v) => <td key={v}>{v}</td>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={recipe.variantMap.variant}>
          {(v) => (
            <tr key={v}>
              <td>
                <Span color="fg.muted" fontSize="sm" minW="8ch">
                  {v}
                </Span>
              </td>
              <For each={recipe.variantMap.size}>
                {(s) => (
                  <td key={s}>
                    <Card.Root size={s} variant={v}>
                      <Card.Body gap="2">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Description>
                      </Card.Body>
                      <Card.Footer>
                        <Button variant="solid">Button</Button>
                      </Card.Footer>
                    </Card.Root>
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
