import { Button, Menu, Portal } from '@chakra-ui/react'

export const MenuWithLinks = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Select Anime
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {links.map((link) => (
              <Menu.Item asChild key={link.href} value={link.title}>
                <a href={link.href} rel="noreferrer" target="_blank">
                  {link.title}
                </a>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const links = [
  {
    href: 'https://www.crunchyroll.com/naruto',
    title: 'Naruto',
  },
  {
    href: 'https://www.crunchyroll.com/one-piece',
    title: 'One Piece',
  },
  {
    href: 'https://www.crunchyroll.com/attack-on-titan',
    title: 'Attack on Titan',
  },
]
