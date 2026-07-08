import { Box, Button, Theme } from '@chakra-ui/react'

export const ThemeNested = () => {
  return (
    <Box>
      <Box borderWidth="1px" p="8">
        Hello Normal <Button>Click me</Button>
        <Theme appearance="dark" colorPalette="red">
          <Box borderWidth="1px" p="8">
            Hello Dark <Button>Click me</Button>
            <Theme appearance="light" colorPalette="pink">
              <Box borderWidth="1px" p="8">
                Hello Light <Button>Click me</Button>
              </Box>
            </Theme>
          </Box>
        </Theme>
      </Box>
    </Box>
  )
}
