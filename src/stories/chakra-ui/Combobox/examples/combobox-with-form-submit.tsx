'use client'

import {
  Button,
  Combobox,
  Field,
  Portal,
  Stack,
  useComboboxContext,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'

// This is a hidden input that is used to store the value of the combobox
const ComboboxHiddenInput = (props: React.ComponentProps<'input'>) => {
  const combobox = useComboboxContext()
  return <input readOnly type="hidden" value={combobox.value[0]} {...props} />
}

export const ComboboxWithFormSubmit = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: countries,
    itemToString: (item) => item.country,
    itemToValue: (item) => item.code,
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const country = formData.get('country')
    console.log('Form submitted with country code:', country)
    alert(`Selected country code: ${country}`)
  }

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack align="flex-start" gap="4">
        <Field.Root width="320px">
          <Field.Label>Country</Field.Label>
          <Combobox.Root collection={collection} onInputValueChange={handleInputChange}>
            <Combobox.Control>
              <Combobox.Input placeholder="Search countries (e.g. United States)" />
              <Combobox.IndicatorGroup>
                <Combobox.ClearTrigger />
                <Combobox.Trigger />
              </Combobox.IndicatorGroup>
            </Combobox.Control>

            <ComboboxHiddenInput name="country" />

            <Portal>
              <Combobox.Positioner>
                <Combobox.Content>
                  <Combobox.Empty>No countries found</Combobox.Empty>
                  {collection.items.map((item) => (
                    <Combobox.Item item={item} key={item.code}>
                      {item.flag} {item.country}
                      <Combobox.ItemIndicator />
                    </Combobox.Item>
                  ))}
                </Combobox.Content>
              </Combobox.Positioner>
            </Portal>
          </Combobox.Root>
          <Field.HelperText>
            The form will submit the country code (e.g. "US"), not the display name
          </Field.HelperText>
        </Field.Root>

        <Button size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}

const countries = [
  { code: 'US', country: 'United States', flag: '🇺🇸' },
  { code: 'CA', country: 'Canada', flag: '🇨🇦' },
  { code: 'AU', country: 'Australia', flag: '🇦🇺' },
  { code: 'GB', country: 'United Kingdom', flag: '🇬🇧' },
  { code: 'NZ', country: 'New Zealand', flag: '🇳🇿' },
  { code: 'ZA', country: 'South Africa', flag: '🇿🇦' },
  { code: 'IN', country: 'India', flag: '🇮🇳' },
  { code: 'CN', country: 'China', flag: '🇨🇳' },
  { code: 'JP', country: 'Japan', flag: '🇯🇵' },
  { code: 'KR', country: 'Korea', flag: '🇰🇷' },
  { code: 'VN', country: 'Vietnam', flag: '🇻🇳' },
  { code: 'TH', country: 'Thailand', flag: '🇹🇭' },
  { code: 'MY', country: 'Malaysia', flag: '🇲🇾' },
  { code: 'ID', country: 'Indonesia', flag: '🇮🇩' },
  { code: 'PH', country: 'Philippines', flag: '🇵🇭' },
  { code: 'SG', country: 'Singapore', flag: '🇸🇬' },
  { code: 'HK', country: 'Hong Kong', flag: '🇭🇰' },
  { code: 'MO', country: 'Macau', flag: '🇲🇴' },
  { code: 'TW', country: 'Taiwan', flag: '🇹🇼' },
]
