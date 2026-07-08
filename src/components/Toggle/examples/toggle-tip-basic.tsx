import { Button } from "@chakra-ui/react"
import { LuInfo } from "react-icons/lu"
import { ToggleTip } from "@/ui/toggle-tip"

export const ToggleTipBasic = () => {
	return (
		<ToggleTip content='This is some additional information.'>
			<Button size='xs' variant='ghost'>
				<LuInfo />
			</Button>
		</ToggleTip>
	)
}
