'use client'

import { Accordion, For, Span, useSlotRecipe } from '@chakra-ui/react'

import type { AccordionRootProps } from '@chakra-ui/react'
import { PlaygroundTable } from '@/utils/storybook/playground-table'
import { colorPalettes } from '@/utils/storybook/color-palettes'

export const AccordionSizeTable = () => {
  const recipe = useSlotRecipe({ key: 'accordion' })
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
                    <AccordionDemo colorPalette={c} size={v} />
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

const AccordionDemo = (props: AccordionRootProps) => {
  return (
    <Accordion.Root collapsible defaultValue={['b']} {...props}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  { text: 'Some value 1...', title: 'First Item', value: 'a' },
  { text: 'Some value 2...', title: 'Second Item', value: 'b' },
  { text: 'Some value 3...', title: 'Third Item', value: 'c' },
]
