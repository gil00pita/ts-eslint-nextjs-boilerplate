'use client'

import { Box, Spinner, Stack, useSlotRecipe } from '@chakra-ui/react'
import { HiCheckCircle, HiExclamationCircle, HiX, HiXCircle } from 'react-icons/hi'

export const ToasterStatic = () => {
  const recipe = useSlotRecipe({ key: 'toast' })
  const styles = recipe()

  return (
    <Stack gap="8">
      <Box css={styles.root} width="420px">
        <Spinner color="red" size="sm" />
        <Stack flex="1" gap="1" maxWidth="100%">
          <Box css={styles.title}>Loading...</Box>
          <Box css={styles.description}>Some description of the loading.</Box>
        </Stack>
        <Box as="button" css={styles.actionTrigger}>
          Retry
        </Box>
        <Box as="button" className="chakra-toast__closeTrigger" css={styles.closeTrigger}>
          <HiX />
        </Box>
      </Box>

      <Box css={styles.root} data-type="error" width="420px">
        <Box asChild css={styles.indicator}>
          <HiXCircle />
        </Box>
        <Stack flex="1" gap="1" maxWidth="100%">
          <Box css={styles.title}>Error</Box>
          <Box css={styles.description}>Some description of the error</Box>
        </Stack>
        <Box as="button" css={styles.actionTrigger}>
          Retry
        </Box>
        <Box as="button" className="chakra-toast__closeTrigger" css={styles.closeTrigger}>
          <HiX />
        </Box>
      </Box>

      <Box css={styles.root} data-type="success" width="420px">
        <Box asChild css={styles.indicator}>
          <HiCheckCircle />
        </Box>
        <Stack flex="1" gap="1" maxWidth="100%">
          <Box css={styles.title}>Success</Box>
          <Box css={styles.description}>Some description of the success</Box>
        </Stack>
        <Box as="button" css={styles.actionTrigger}>
          Retry
        </Box>
        <Box as="button" className="chakra-toast__closeTrigger" css={styles.closeTrigger}>
          <HiX />
        </Box>
      </Box>

      <Box css={styles.root} data-type="warning" width="420px">
        <Box asChild css={styles.indicator}>
          <HiExclamationCircle />
        </Box>
        <Stack flex="1" gap="1" maxWidth="100%">
          <Box css={styles.title}>Warning</Box>
          <Box css={styles.description}>Some description of the warning</Box>
        </Stack>
        <Box as="button" css={styles.actionTrigger}>
          Retry
        </Box>
        <Box as="button" className="chakra-toast__closeTrigger" css={styles.closeTrigger}>
          <HiX />
        </Box>
      </Box>
    </Stack>
  )
}
