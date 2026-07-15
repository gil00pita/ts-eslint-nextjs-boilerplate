import { Table } from '@chakra-ui/react'

export const TableExplorerDemo = () => {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <Table.Root size="sm">
      <Table.Caption>Product inventory and pricing information</Table.Caption>

      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Stock</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell textAlign="end">${item.price.toFixed(2)}</Table.Cell>
            <Table.Cell textAlign="end">{item.stock}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2} fontWeight="bold" textAlign="end">
            Total
          </Table.Cell>
          <Table.Cell fontWeight="bold" textAlign="end">
            ${total.toFixed(2)}
          </Table.Cell>
          <Table.Cell fontWeight="bold" textAlign="end">
            {items.reduce((sum, item) => sum + item.stock, 0)}
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  )
}

const items = [
  { category: 'Electronics', id: 1, name: 'Laptop', price: 999.99, stock: 12 },
  {
    category: 'Home Appliances',
    id: 2,
    name: 'Coffee Maker',
    price: 49.99,
    stock: 35,
  },
  { category: 'Furniture', id: 3, name: 'Desk Chair', price: 150.0, stock: 8 },
  {
    category: 'Electronics',
    id: 4,
    name: 'Smartphone',
    price: 799.99,
    stock: 20,
  },
  {
    category: 'Accessories',
    id: 5,
    name: 'Headphones',
    price: 199.99,
    stock: 50,
  },
]
