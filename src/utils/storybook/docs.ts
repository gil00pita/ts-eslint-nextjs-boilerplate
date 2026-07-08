export function chakraDocs(componentSlug: string): string {
  return `https://chakra-ui.com/docs/components/${componentSlug}`;
}

export function withChakraDocs(
  componentName: string,
  slug: string,
  description: string,
): string {
  return `${description}\n\nRelated Chakra docs: [${componentName}](${chakraDocs(slug)}).`;
}
