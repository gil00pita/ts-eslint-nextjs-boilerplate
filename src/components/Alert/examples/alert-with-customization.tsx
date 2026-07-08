import { Alert, Link, Stack } from '@chakra-ui/react'
import { LuPercent } from 'react-icons/lu'

export const AlertWithCustomization = () => {
  return (
    <Stack gap="4">
      <Alert.Root status="success" title="Success">
        <Alert.Indicator>
          <LuPercent />
        </Alert.Indicator>
        <Alert.Content color="fg">
          <Alert.Title>Black Friday Sale (20% off)</Alert.Title>
          <Alert.Description>Upgrade your plan to get access to the sale.</Alert.Description>
        </Alert.Content>
        <Link alignSelf="center" fontWeight="medium">
          Upgrade
        </Link>
      </Alert.Root>

      <Alert.Root
        alignItems="center"
        borderStartColor="colorPalette.solid"
        borderStartWidth="3px"
        size="sm"
        status="success"
        title="Success"
      >
        <LuPercent />
        <Alert.Title textStyle="sm">Heads up: Black Friday Sale (20% off)</Alert.Title>
      </Alert.Root>
    </Stack>
  )
}
