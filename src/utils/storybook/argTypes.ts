import type { ArgTypes, InputType } from 'storybook/internal/types'

import {
  alignOptions,
  buttonVariantOptions,
  chakraSizeOptions,
  colorPaletteOptions,
  htmlElementOptions,
  inputVariantOptions,
  orientationOptions,
  placementOptions,
  radiusOptions,
  statusOptions,
  surfaceVariantOptions,
} from './options'

type ReadonlyOptions = readonly string[]

export function optionControl(options: ReadonlyOptions, description?: string): InputType {
  return {
    control: { type: options.length < 6 ? 'inline-radio' : 'select' },
    description,
    options: [...options],
  }
}

export function booleanControl(description?: string): InputType {
  return {
    control: { type: 'boolean' },
    description,
  }
}

export function textControl(description?: string): InputType {
  return {
    control: { type: 'text' },
    description,
  }
}

export function numberControl(description?: string): InputType {
  return {
    control: { type: 'number' },
    description,
  }
}

export function colorPaletteArg() {
  return optionControl(colorPaletteOptions, 'Chakra color palette used for accent styling.')
}

export function sizeArg() {
  return optionControl(chakraSizeOptions, 'Chakra size token.')
}

export function variantArg(options: ReadonlyOptions = buttonVariantOptions) {
  return optionControl(options, 'Chakra component variant.')
}

export function inputVariantArg() {
  return variantArg(inputVariantOptions)
}

export function surfaceVariantArg() {
  return variantArg(surfaceVariantOptions)
}

export function disabledArg() {
  return booleanControl('Disables user interaction.')
}

export function invalidArg() {
  return booleanControl('Marks the component as invalid.')
}

export function readOnlyArg() {
  return booleanControl('Marks the component as read-only.')
}

export function requiredArg() {
  return booleanControl('Marks the component as required.')
}

export function checkedArg() {
  return booleanControl('Sets the checked or selected state.')
}

export function loadingArg() {
  return booleanControl('Shows the loading state.')
}

export function childrenArg() {
  return textControl('Rendered child content.')
}

export function labelArg() {
  return textControl('Accessible label text.')
}

export function placeholderArg() {
  return textControl('Placeholder text.')
}

export function orientationArg() {
  return optionControl(orientationOptions, 'Component orientation.')
}

export function placementArg() {
  return optionControl(placementOptions, 'Floating element placement.')
}

export function statusArg() {
  return optionControl(statusOptions, 'Semantic status.')
}

export function roundedArg() {
  return optionControl(radiusOptions, 'Border radius token.')
}

export function alignArg() {
  return optionControl(alignOptions, 'Alignment option.')
}

export function asArg() {
  return optionControl(
    htmlElementOptions,
    "HTML element rendered by Chakra's polymorphic `as` prop."
  )
}

export function hideArg() {
  return {
    table: {
      disable: true,
    },
  } satisfies InputType
}

export function callbackArg(description = 'Callback prop.') {
  return {
    control: false,
    description,
  } satisfies InputType
}

export const commonArgTypes = {
  children: childrenArg(),
  colorPalette: colorPaletteArg(),
  disabled: disabledArg(),
  isDisabled: disabledArg(),
  size: sizeArg(),
  variant: variantArg(),
} satisfies ArgTypes

export const commonStateArgTypes = {
  checked: checkedArg(),
  disabled: disabledArg(),
  invalid: invalidArg(),
  loading: loadingArg(),
  readOnly: readOnlyArg(),
  required: requiredArg(),
} satisfies ArgTypes

export const commonContentArgTypes = {
  children: childrenArg(),
  label: labelArg(),
  placeholder: placeholderArg(),
} satisfies ArgTypes

export const commonStyleArgTypes = {
  align: alignArg(),
  colorPalette: colorPaletteArg(),
  orientation: orientationArg(),
  placement: placementArg(),
  rounded: roundedArg(),
  size: sizeArg(),
  status: statusArg(),
  variant: variantArg(),
} satisfies ArgTypes

export const hiddenPropArgTypes = {
  asChild: hideArg(),
  className: hideArg(),
  css: hideArg(),
  onCheckedChange: callbackArg('Called when checked state changes.'),
  onClick: callbackArg('Called when the component is clicked.'),
  onOpenChange: callbackArg('Called when open state changes.'),
  onValueChange: callbackArg('Called when value changes.'),
  ref: hideArg(),
  rootRef: hideArg(),
  style: hideArg(),
} satisfies ArgTypes
