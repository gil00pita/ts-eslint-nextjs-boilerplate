import LoremIpsum from 'react-lorem-ipsum'

import { ScrollArea } from '@/components/ScrollArea'

export const ScrollAreaBasic = () => (
  <ScrollArea contentProps={{ spaceY: '4', textStyle: 'sm' }} height="32" maxW="lg">
    <LoremIpsum p={3} />
  </ScrollArea>
)
