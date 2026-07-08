/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { HTMLChakraProps, RecipeVariantProps } from '@chakra-ui/react'

import { createSlotRecipeContext, defineSlotRecipe } from '@chakra-ui/react'

// 1. Define the recipe

const checkbox = defineSlotRecipe({
  className: 'checkbox',
  slots: ['root', 'label', 'control'],
  variants: {
    colored: {
      true: {
        control: {
          accentColor: 'pink.500',
        },
      },
    },
  },
  base: {
    control: {
      backgroundColor: 'white',
      borderColor: 'gray.300',
      borderRadius: 'md',
      borderWidth: '1px',
      height: '4',
      width: '4',
    },
    label: {
      fontWeight: 'medium',
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      gap: '2',
    },
  },
})

const { withContext, withProvider } = createSlotRecipeContext({
  recipe: checkbox,
})

// 2. Create the components

interface CheckboxRootProps extends HTMLChakraProps<'div', RecipeVariantProps<typeof checkbox>> {}

const CheckboxRoot = withProvider<HTMLDivElement, CheckboxRootProps>('div', 'root')

interface CheckboxLabelProps extends HTMLChakraProps<'label'> {}
const CheckboxLabel = withContext<HTMLLabelElement, CheckboxLabelProps>('label', 'label')

interface CheckboxControlProps extends HTMLChakraProps<'input'> {}
const CheckboxControl = withContext<HTMLInputElement, CheckboxControlProps>('input', 'control')

// 3. Use the components

export const SystemInlineSlotRecipe = () => {
  return (
    <CheckboxRoot colored>
      <CheckboxControl defaultChecked id="checkbox" type="checkbox" />
      <CheckboxLabel htmlFor="checkbox">Checkbox</CheckboxLabel>
    </CheckboxRoot>
  )
}
