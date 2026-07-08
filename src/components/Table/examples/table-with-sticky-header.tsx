import { Table } from '@chakra-ui/react'

export const TableWithStickyHeader = () => {
  return (
    <Table.ScrollArea borderWidth="1px" height="160px" rounded="md">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>Product</Table.ColumnHeader>
            <Table.ColumnHeader>Category</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
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
