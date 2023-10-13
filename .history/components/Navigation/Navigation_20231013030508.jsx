'use client'
import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
// import EnterButton from './EnterButton/EnterButton'
import { motion } from 'framer-motion'

const pageTransition = {
	out: {
		opacity: 0,
		// y: 40,
		transition: {
			duration: 1.75,
		},
	},
	in: {
		opacity: 1,
		// y: 0,
		transition: {
			duration: 2.0,
			delay: 1,
		},
	},
}

export const Navigation = (props) => {
	const CHILD_NODES = props.child_nodes.length
	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
		>
			<CentralNode title={props.title} />
			<ChildNodes nodes={props.child_nodes} count={CHILD_NODES} />
		</motion.div>
	)
}
