import { Avatar, HoverCard, HStack, Icon, Link, Portal, Stack, Text } from '@chakra-ui/react'
import { LuChartLine } from 'react-icons/lu'

export const HoverCardBasic = () => {
  return (
    <HoverCard.Root size="sm">
      <HoverCard.Trigger asChild>
        <Link href="#">@chakra_ui</Link>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow />
            <Stack direction="row" gap="4">
              <Avatar.Root>
                <Avatar.Image src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" />
                <Avatar.Fallback name="Chakra UI" />
              </Avatar.Root>
              <Stack gap="3">
                <Stack gap="1">
                  <Text fontWeight="semibold" textStyle="sm">
                    Chakra UI
                  </Text>
                  <Text color="fg.muted" textStyle="sm">
                    The most powerful toolkit for building modern web applications.
                  </Text>
                </Stack>
                <HStack color="fg.subtle">
                  <Icon size="sm">
                    <LuChartLine />
                  </Icon>
                  <Text textStyle="xs">2.5M Downloads</Text>
                </HStack>
              </Stack>
            </Stack>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
