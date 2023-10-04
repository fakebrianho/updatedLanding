import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './CentralNode/ChildNodes/ChildNodes'
export const Navigation = () => {
	const CHILD_NODES = 5
	return (
		<section>
			<CentralNode />
			<ChildNodes />
		</section>
	)
}
