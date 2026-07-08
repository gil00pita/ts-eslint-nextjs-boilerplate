import { Box, Heading, SkipNavContent, SkipNavLink, Text, VStack } from '@chakra-ui/react'

export const SkipNavWithContent = () => {
  return (
    <Box>
      <SkipNavLink>Skip to Content</SkipNavLink>

      {/* Simulated header with multiple navigation items */}
      <Box bg="gray.100" borderRadius="md" mb="4" p="4">
        <Text fontWeight="medium" mb="2">
          Site Header
        </Text>
        <VStack align="start" gap="1">
          <Text color="gray.600" fontSize="sm">
            • Home
          </Text>
          <Text color="gray.600" fontSize="sm">
            • About
          </Text>
          <Text color="gray.600" fontSize="sm">
            • Services
          </Text>
          <Text color="gray.600" fontSize="sm">
            • Contact
          </Text>
        </VStack>
      </Box>

      {/* SkipNavContent wrapping main content */}
      <SkipNavContent>
        <Box bg="purple.50" borderRadius="md" p="6">
          <Heading mb="4" size="lg">
            Welcome to Our Site
          </Heading>

          <VStack align="start" gap="4">
            <Text>
              This is the main content area. The SkipNavContent component wraps this entire section,
              making it the target for the skip navigation link.
            </Text>

            <Text>
              When keyboard users press Tab to focus the "Skip to Content" link and then press
              Enter, focus will jump directly to this content area, bypassing all the navigation
              items above.
            </Text>

            <Text color="purple.600" fontSize="sm">
              This is especially helpful for users with screen readers or those who navigate
              primarily with keyboards.
            </Text>
          </VStack>
        </Box>
      </SkipNavContent>
    </Box>
  )
}
