import { CheckboxCard, CheckboxGroup, Float, Icon, SimpleGrid } from '@chakra-ui/react'
import { HiGlobeAlt, HiLockClosed, HiShieldCheck, HiUser } from 'react-icons/hi'

export const CheckboxCardWithIcon = () => {
  return (
    <CheckboxGroup defaultValue={['Guest']}>
      <SimpleGrid gap="2" minChildWidth="200px">
        {items.map((item) => (
          <CheckboxCard.Root align="center" key={item.label}>
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
              <CheckboxCard.Content>
                <Icon fontSize="2xl" mb="2">
                  {item.icon}
                </Icon>
                <CheckboxCard.Label>{item.label}</CheckboxCard.Label>
                <CheckboxCard.Description>{item.description}</CheckboxCard.Description>
              </CheckboxCard.Content>
              <Float offset="6" placement="top-end">
                <CheckboxCard.Indicator />
              </Float>
            </CheckboxCard.Control>
          </CheckboxCard.Root>
        ))}
      </SimpleGrid>
    </CheckboxGroup>
  )
}

const items = [
  { description: 'Give full access', icon: <HiShieldCheck />, label: 'Admin' },
  { description: 'Give limited access', icon: <HiUser />, label: 'User' },
  {
    description: 'Give read-only access',
    icon: <HiGlobeAlt />,
    label: 'Guest',
  },
  { description: 'No access', icon: <HiLockClosed />, label: 'Blocked' },
]
