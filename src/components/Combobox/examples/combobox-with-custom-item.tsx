'use client'

import {
  Combobox,
  HStack,
  Image,
  Portal,
  Span,
  Stack,
  useComboboxContext,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'

function ComboboxValue() {
  const combobox = useComboboxContext()
  const selectedItems = combobox.selectedItems as (typeof items)[number][]
  return (
    <Stack mt="2">
      {selectedItems.map((item) => (
        <HStack borderWidth="1px" key={item.value} p="1" textStyle="sm">
          <Image alt={item.label + ' logo'} boxSize="10" p="2" src={item.logo} />
          <span>{item.label}</span>
        </HStack>
      ))}
    </Stack>
  )
}

export const ComboboxWithCustomItem = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: items,
  })

  return (
    <Combobox.Root
      closeOnSelect
      collection={collection}
      multiple
      onInputValueChange={(e) => filter(e.inputValue)}
      placeholder="Example: Audi"
      width="320px"
    >
      <Combobox.Label>Search and select car brands</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.IndicatorGroup>
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <ComboboxValue />
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                <Image alt={item.label + ' logo'} boxSize="5" src={item.logo} />
                <Span flex="1">{item.label}</Span>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

export const items = [
  {
    label: 'Audi',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/audi-logo.png',
    value: 'audi',
  },
  {
    label: 'BMW',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/bmw-logo.png',
    value: 'bmw',
  },
  {
    label: 'Citroen',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/citroen-logo.png',
    value: 'citroen',
  },
  {
    label: 'Dacia',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/dacia-logo.png',
    value: 'dacia',
  },
  {
    label: 'Fiat',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/fiat-logo.png',
    value: 'fiat',
  },
  {
    label: 'Ford',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/ford-logo.png',
    value: 'ford',
  },
  {
    label: 'Ferrari',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/ferrari-logo.png',
    value: 'ferrari',
  },
  {
    label: 'Honda',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/honda-logo.png',
    value: 'honda',
  },
  {
    label: 'Hyundai',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/hyundai-logo.png',
    value: 'hyundai',
  },
  {
    label: 'Jaguar',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jaguar-logo.png',
    value: 'jaguar',
  },
  {
    label: 'Jeep',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jeep-logo.png',
    value: 'jeep',
  },
  {
    label: 'Kia',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/kia-logo.png',
    value: 'kia',
  },
  {
    label: 'Land Rover',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/land-rover-logo.png',
    value: 'land rover',
  },
  {
    label: 'Mazda',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mazda-logo.png',
    value: 'mazda',
  },
  {
    label: 'Mercedes',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mercedes-logo.png',
    value: 'mercedes',
  },
  {
    label: 'Mini',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mini-logo.png',
    value: 'mini',
  },
  {
    label: 'Mitsubishi',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mitsubishi-logo.png',
    value: 'mitsubishi',
  },
  {
    label: 'Nissan',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/nissan-logo.png',
    value: 'nissan',
  },
  {
    label: 'Opel',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/opel-logo.png',
    value: 'opel',
  },
  {
    label: 'Peugeot',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/peugeot-logo.png',
    value: 'peugeot',
  },
  {
    label: 'Porsche',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/porsche-logo.png',
    value: 'porsche',
  },
  {
    label: 'Renault',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/renault-logo.png',
    value: 'renault',
  },
  {
    label: 'Saab',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/saab-logo.png',
    value: 'saab',
  },
  {
    label: 'Skoda',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/skoda-logo.png',
    value: 'skoda',
  },
  {
    label: 'Subaru',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/subaru-logo.png',
    value: 'subaru',
  },
  {
    label: 'Suzuki',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/suzuki-logo.png',
    value: 'suzuki',
  },
  {
    label: 'Toyota',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/toyota-logo.png',
    value: 'toyota',
  },
  {
    label: 'Volkswagen',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volkswagen-logo.png',
    value: 'volkswagen',
  },
  {
    label: 'Volvo',
    logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volvo-logo.png',
    value: 'volvo',
  },
]
