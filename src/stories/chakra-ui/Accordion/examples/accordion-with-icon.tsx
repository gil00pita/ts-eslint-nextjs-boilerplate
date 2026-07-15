import { Accordion, Heading, Icon, Stack } from '@chakra-ui/react'
import { LuChartBarStacked, LuTags } from 'react-icons/lu'

export const AccordionWithIcon = () => {
  return (
    <Stack maxW="400px" width="full">
      <Heading size="md">Product details</Heading>
      <Accordion.Root collapsible defaultValue={['info']}>
        {items.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              <Icon color="fg.subtle" fontSize="lg">
                {item.icon}
              </Icon>
              {item.title}
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
