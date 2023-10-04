import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'

export const Navigation = () => {
	const CHILD_NODES = 5
	return (
		<section>
			<CentralNode />
			<Children />
		</section>
	)
}
