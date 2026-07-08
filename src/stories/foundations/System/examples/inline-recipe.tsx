import type { HTMLChakraProps, RecipeVariantProps, UnstyledProp } from '@chakra-ui/react'

import { createRecipeContext, defineRecipe } from '@chakra-ui/react'

const buttonRecipe = defineRecipe({
  className: 'button',
  variants: {
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
  },
  base: {
    backgroundColor: 'red',
    borderRadius: '4px',
    color: 'white',
    padding: '10px',
  },
})

const { withContext } = createRecipeContext({
  recipe: buttonRecipe,
})

interface ButtonProps
  extends HTMLChakraProps<'button', RecipeVariantProps<typeof buttonRecipe>>, UnstyledProp {}

const Button = withContext<HTMLButtonElement, ButtonProps>('button')

export const SystemInlineRecipe = () => {
  return <Button bold>Welcome</Button>
}
