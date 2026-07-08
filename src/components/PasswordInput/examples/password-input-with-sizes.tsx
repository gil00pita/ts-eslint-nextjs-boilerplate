import { PasswordInput } from "@/ui/password-input"
import { Stack } from "@chakra-ui/react"

export const PasswordInputWithSizes = () => {
	return (
		<Stack maxW='300px'>
			<PasswordInput placeholder='xs' size='xs' />
			<PasswordInput placeholder='sm' size='sm' />
			<PasswordInput placeholder='md' size='md' />
			<PasswordInput placeholder='lg' size='lg' />
		</Stack>
	)
}
