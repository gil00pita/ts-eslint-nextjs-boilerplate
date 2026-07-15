import { Button, Menu, Portal, Show } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithMenuItem = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Open
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem title="This is the tooltip content" value="new-txt">
              Open tooltip
            </MenuItem>
            <MenuItem value="new-file">New File...</MenuItem>
            <MenuItem value="new-win">New Window</MenuItem>
            <MenuItem value="export">Export</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const MenuItem = (props: Menu.ItemProps) => {
  const { title, value, ...rest } = props
  return (
    <Show fallback={<Menu.Item value={value} {...rest} />} when={title}>
      <Tooltip
        closeDelay={0}
        content={title}
        ids={{ trigger: value }}
        openDelay={200}
        positioning={{ placement: 'right' }}
      >
        <Menu.Item value={value} {...rest} />
      </Tooltip>
    </Show>
  )
}
