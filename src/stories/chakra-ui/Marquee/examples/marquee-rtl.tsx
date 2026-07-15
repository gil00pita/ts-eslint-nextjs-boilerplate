'use client'

import { Box, Circle, HStack, LocaleProvider, Marquee } from '@chakra-ui/react'

export const MarqueeRtl = () => (
  <LocaleProvider locale="ar-AE">
    <Marquee.Root>
      <Marquee.Viewport>
        <Marquee.Content>
          {items.map((item, i) => (
            <Marquee.Item key={i} ps="8">
              <HStack fontWeight="medium" gap="8" textStyle="xl">
                <Box>{item}</Box>
                <Circle bg="fg.muted" size="1.5" />
              </HStack>
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  </LocaleProvider>
)

const items = [
  'مرحبا بكم',
  'تصميم جميل',
  'سهل الاستخدام',
  'مكونات قابلة للوصول',
  'أداء عالي',
  'تجربة مستخدم رائعة',
]
