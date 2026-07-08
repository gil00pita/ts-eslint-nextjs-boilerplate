"use client"

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { LuMoon, LuSun } from "react-icons/lu"

import { useColorMode } from "@/ui/color-mode"

export const ColorModeValueFallback = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	return (
		<ClientOnly fallback={<Skeleton boxSize='8' />}>
			<IconButton onClick={toggleColorMode} variant='outline' size='sm'>
				{colorMode === "light" ? <LuSun /> : <LuMoon />}
			</IconButton>
		</ClientOnly>
	)
}
