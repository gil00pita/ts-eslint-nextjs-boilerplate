import { Table } from '@chakra-ui/react'

export const TableWithStickyColumn = () => {
  return (
    <Table.ScrollArea borderWidth="1px" maxW="2xl" rounded="md">
      <Table.Root
        css={{
          '& [data-sticky]': {
            _after: {
              bottom: '-1px',
              content: '""',
              pointerEvents: 'none',
              position: 'absolute',
              top: '0',
              width: '32px',
            },
            bg: 'bg',
            position: 'sticky',

            zIndex: 1,
          },

          '& [data-sticky=end]': {
            _after: {
              insetInlineEnd: '0',
              shadow: 'inset 8px 0px 8px -8px rgba(0, 0, 0, 0.16)',
              translate: '100% 0',
            },
          },

          '& [data-sticky=start]': {
            _after: {
              insetInlineStart: '0',
              shadow: 'inset -8px 0px 8px -8px rgba(0, 0, 0, 0.16)',
              translate: '-100% 0',
            },
          },
        }}
        size="sm"
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader data-sticky="end" left="0" minW="160px">
              Product
            </Table.ColumnHeader>
            <Table.ColumnHeader minW="400px">Category</Table.ColumnHeader>
            <Table.ColumnHeader minW="200px" textAlign="end">
              Price
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell data-sticky="end" left="0">
                {item.name}
              </Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell textAlign="end">{item.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}

const items = [
  { category: 'Electronics', id: 1, name: 'Laptop', price: 999.99 },
  { category: 'Home Appliances', id: 2, name: 'Coffee Maker', price: 49.99 },
  { category: 'Furniture', id: 3, name: 'Desk Chair', price: 150.0 },
  { category: 'Electronics', id: 4, name: 'Smartphone', price: 799.99 },
  { category: 'Accessories', id: 5, name: 'Headphones', price: 199.99 },
]
