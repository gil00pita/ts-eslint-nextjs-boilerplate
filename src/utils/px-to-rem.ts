/**
 * Convert pixels to rem units
 * GOV.UK Design System uses 16px as the base font size (1rem = 16px)
 * @param pixels - The pixel value to convert
 * @param baseFontSize - The base font size in pixels (default: 16)
 * @returns The rem value as a string with 'rem' suffix
 */
export function pxToRem(pixels: number, baseFontSize: number = 16): string {
  return `max(${pixels}px, ${pixels / baseFontSize}rem)`
}

/**
 * Convert pixels to rem units and return as number
 * @param pixels - The pixel value to convert
 * @param baseFontSize - The base font size in pixels (default: 16)
 * @returns The rem value as a number
 */
export function pxToRemNumber(pixels: number, baseFontSize: number = 16): number {
  return pixels / baseFontSize
}

function roundCssNumber(value: number): string {
  return Number.parseFloat(value.toFixed(5)).toString()
}

/**
 * Create a fluid CSS length that scales smoothly between two viewport widths.
 */
export function fluidPx(
  minPixels: number,
  maxPixels: number,
  minViewport: number = 320,
  maxViewport: number = 640,
  baseFontSize: number = 16
): string {
  if (minPixels === maxPixels) {
    return pxToRem(minPixels, baseFontSize)
  }

  const slope = ((maxPixels - minPixels) / (maxViewport - minViewport)) * 100
  const intercept = minPixels - (slope * minViewport) / 100

  return `clamp(${pxToRem(minPixels, baseFontSize)}, calc(${pxToRem(intercept, baseFontSize)} + ${roundCssNumber(slope)}vw), ${pxToRem(maxPixels, baseFontSize)})`
}

/**
 * Batch convert multiple pixel values to rem
 * @param pixelValues - Array of pixel values to convert
 * @param baseFontSize - The base font size in pixels (default: 16)
 * @returns Array of rem values as strings
 */
export function pxToRemBatch(pixelValues: number[], baseFontSize: number = 16): string[] {
  return pixelValues.map((px) => pxToRem(px, baseFontSize))
}

// Common Brand spacing values converted to rem
export const brandSpacing = {
  xs: pxToRem(4), // 0.25rem
  sm: pxToRem(8), // 0.5rem
  md: pxToRem(16), // 1rem
  lg: pxToRem(24), // 1.5rem
  xl: pxToRem(32), // 2rem
  '2xl': pxToRem(48), // 3rem
  '3xl': pxToRem(64), // 4rem
} as const

// Common Brand font sizes converted to rem
export const brandFontSizes = {
  14: pxToRem(14), // 0.875rem
  16: pxToRem(16), // 1rem      – brand-body-s
  19: pxToRem(19), // 1.1875rem – brand-body, brand-heading-s
  24: pxToRem(24), // 1.5rem    – brand-heading-m, brand-body-l
  27: pxToRem(27), // 1.6875rem – exceptional use
  36: pxToRem(36), // 2.25rem   – brand-heading-l
  48: pxToRem(48), // 3rem      – brand-heading-xl
  80: pxToRem(80), // 5rem      – exceptional use
} as const

/**
 * Brand type scale with responsive font sizes and line heights.
 * Large = screens wider than 640px, small = screens 640px and below.
 * See: https://design-system.service.gov.uk/styles/type-scale/
 */
const brandTypeScalePixels = {
  16: {
    large: { fontSize: 16, lineHeight: 20 },
    small: { fontSize: 16, lineHeight: 20 },
  },
  19: {
    large: { fontSize: 19, lineHeight: 25 },
    small: { fontSize: 19, lineHeight: 25 },
  },
  24: {
    large: { fontSize: 24, lineHeight: 30 },
    small: { fontSize: 21, lineHeight: 25 },
  },
  27: {
    large: { fontSize: 27, lineHeight: 30 },
    small: { fontSize: 21, lineHeight: 25 },
  },
  36: {
    large: { fontSize: 36, lineHeight: 40 },
    small: { fontSize: 27, lineHeight: 30 },
  },
  48: {
    large: { fontSize: 48, lineHeight: 50 },
    small: { fontSize: 32, lineHeight: 35 },
  },
  80: {
    large: { fontSize: 80, lineHeight: 80 },
    small: { fontSize: 53, lineHeight: 55 },
  },
} as const

function createBrandTypeScalePoint(size: BrandTypeScalePoint) {
  const { large, small } = brandTypeScalePixels[size]

  return {
    large: {
      fontSize: pxToRem(large.fontSize),
      lineHeight: pxToRem(large.lineHeight),
    },
    small: {
      fontSize: pxToRem(small.fontSize),
      lineHeight: pxToRem(small.lineHeight),
    },
  }
}

export type BrandTypeScalePoint = keyof typeof brandTypeScalePixels

export const brandTypeScale = {
  16: createBrandTypeScalePoint(16),
  19: createBrandTypeScalePoint(19),
  24: createBrandTypeScalePoint(24),
  27: createBrandTypeScalePoint(27),
  36: createBrandTypeScalePoint(36),
  48: createBrandTypeScalePoint(48),
  80: createBrandTypeScalePoint(80),
} as const

export function getBrandTypeScale(size: unknown) {
  if (typeof size !== 'number') {
    return null
  }

  return size in brandTypeScale ? brandTypeScale[size as BrandTypeScalePoint] : null
}

/**
 * Returns Chakra-ready fluid fontSize and lineHeight props
 * for a given Brand type scale point.
 *
 * Usage:
 *   <Heading {...brandFont(48)}>Page title</Heading>
 *   <Text {...brandFont(19)}>Body text</Text>
 */
export function brandFont(size: BrandTypeScalePoint) {
  const { large, small } = brandTypeScalePixels[size]

  return {
    fontSize: fluidPx(small.fontSize, large.fontSize),
    lineHeight: fluidPx(small.lineHeight, large.lineHeight),
  }
}
