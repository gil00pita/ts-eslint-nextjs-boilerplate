import type { ReactNode } from "react"

import { Box } from "@chakra-ui/react"

type StoryComponent = () => ReactNode

export const chartStoryParameters = {
	layout: "fullscreen",
}

export const chartStoryDecorators = [
	(Story: StoryComponent) => (
		<Box
			minW="0"
			w="full"
			maxW="960px"
			mx="auto"
			p={{ base: "4", md: "10" }}
		>
			<Story />
		</Box>
	),
]
