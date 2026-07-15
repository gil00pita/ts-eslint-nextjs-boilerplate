import { Table } from '@chakra-ui/react'

export const TableWithStickyHeaderAndColumn = () => {
  return (
    <Table.ScrollArea borderWidth="1px" h="500px" maxW="2xl" rounded="md">
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

          '& thead tr': {
            '&:has(th[data-sticky])': {
              zIndex: 2,
            },
            shadow: '0 1px 0 0 {colors.border}',
          },
        }}
        size="sm"
        stickyHeader
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
  { category: 'Electronics', id: 1, name: 'Headphones', price: 834.12 },
  { category: 'Furniture', id: 2, name: 'Desk Chair', price: 245.88 },
  { category: 'Home Appliances', id: 3, name: 'Microwave', price: 379.26 },
  { category: 'Accessories', id: 4, name: 'Backpack', price: 112.47 },
  { category: 'Sports', id: 5, name: 'Football', price: 95.14 },
  { category: 'Electronics', id: 6, name: 'Smartphone', price: 921.63 },
  { category: 'Accessories', id: 7, name: 'Wrist Watch', price: 418.52 },
  { category: 'Clothing', id: 8, name: 'T-Shirt', price: 35.29 },
  { category: 'Home Appliances', id: 9, name: 'Vacuum Cleaner', price: 601.22 },
  { category: 'Furniture', id: 10, name: 'Lamp', price: 157.88 },
  { category: 'Electronics', id: 11, name: 'Drone', price: 836.15 },
  { category: 'Beauty', id: 12, name: 'Perfume', price: 128.9 },
  { category: 'Outdoors', id: 13, name: 'Camping Tent', price: 458.4 },
  { category: 'Home Appliances', id: 14, name: 'Cookware Set', price: 292.86 },
  { category: 'Electronics', id: 15, name: 'Camera', price: 792.54 },
  { category: 'Clothing', id: 16, name: 'Sneakers', price: 154.61 },
  { category: 'Electronics', id: 17, name: 'Monitor', price: 348.57 },
  { category: 'Electronics', id: 18, name: 'Gaming Console', price: 896.01 },
  { category: 'Electronics', id: 19, name: 'Keyboard', price: 94.71 },
  { category: 'Furniture', id: 20, name: 'Sofa', price: 719.33 },
  { category: 'Electronics', id: 21, name: 'Tablet', price: 612.57 },
  { category: 'Toys', id: 22, name: 'Action Figure', price: 73.49 },
  { category: 'Electronics', id: 23, name: 'Smartwatch', price: 482.46 },
  { category: 'Outdoors', id: 24, name: 'Tent', price: 623.3 },
  { category: 'Home Appliances', id: 25, name: 'Cookware Set', price: 257.38 },
  { category: 'Sports', id: 26, name: 'Helmet', price: 88.26 },
  { category: 'Beauty', id: 27, name: 'Hair Dryer', price: 164.79 },
  { category: 'Furniture', id: 28, name: 'Lamp', price: 122.1 },
  {
    category: 'Home Appliances',
    id: 29,
    name: 'Electric Kettle',
    price: 69.42,
  },
  { category: 'Clothing', id: 30, name: 'Sneakers', price: 182.13 },
  { category: 'Electronics', id: 31, name: 'Drone', price: 934.72 },
  { category: 'Home Appliances', id: 32, name: 'Coffee Maker', price: 148.99 },
  { category: 'Accessories', id: 33, name: 'Backpack', price: 81.22 },
  { category: 'Home Appliances', id: 34, name: 'Microwave', price: 399.53 },
  { category: 'Clothing', id: 35, name: 'T-Shirt', price: 45.33 },
  {
    category: 'Home Appliances',
    id: 36,
    name: 'Vacuum Cleaner',
    price: 552.87,
  },
]
