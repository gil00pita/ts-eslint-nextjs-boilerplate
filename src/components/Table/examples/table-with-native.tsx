import { Table } from '@chakra-ui/react'

export const TableWithNative = () => {
  return (
    <Table.Root native size="sm">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table.Root>
  )
}

const items = [
  { category: 'Electronics', id: 1, name: 'Laptop', price: '$999.00' },
  { category: 'Home Appliances', id: 2, name: 'Coffee Maker', price: '$49.99' },
  { category: 'Furniture', id: 3, name: 'Desk Chair', price: '$150.00' },
  { category: 'Electronics', id: 4, name: 'Smartphone', price: '$799.99' },
  { category: 'Accessories', id: 5, name: 'Headphones', price: '$199.99' },
]
