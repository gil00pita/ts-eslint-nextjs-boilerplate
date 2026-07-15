import { Accordion, Flex, Heading, Icon, Stack } from '@chakra-ui/react'
import { LuChartBarStacked, LuChevronDown, LuTags } from 'react-icons/lu'

export const AccordionExplorerDemo = () => {
  return (
    <Stack maxW="400px" width="full">
      <Heading size="md">Product details</Heading>
      <Accordion.Root collapsible defaultValue={['info']}>
        {items.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger
              alignItems="center"
              cursor="pointer"
              display="flex"
              justifyContent="space-between"
            >
              <Flex align="center" gap={2}>
                <Icon color="fg.subtle" fontSize="lg">
                  {item.icon}
                </Icon>
                {item.title}
              </Flex>
              <Accordion.ItemIndicator>
                <LuChevronDown />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  )
}

const items = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.',
    icon: <LuTags />,
    title: 'Product Info',
    value: 'info',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.',
    icon: <LuChartBarStacked />,
    title: 'Stats',
    value: 'stats',
  },
]
