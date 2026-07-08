import { Button, HStack } from '@chakra-ui/react'

import { Checkbox } from '@/ui/checkbox'
import { Slider } from '@/ui/slider'
import { Switch } from '@/ui/switch'
import { TokenDoc } from './token-doc'

export const CursorTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.cursor">
      <HStack gap="4" wrap="wrap">
        <Button size="sm">Button</Button>
        <Button disabled size="sm">
          Disabled
        </Button>
        <Checkbox />
        <Switch />
        <Slider defaultValue={[50]} width="120px" />
      </HStack>
    </TokenDoc>
  )
}
