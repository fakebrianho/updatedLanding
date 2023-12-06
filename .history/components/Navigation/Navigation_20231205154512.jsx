'use client'
import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
// import EnterButton from './EnterButton/EnterButton'
import { useEffect } from 'react'
import usePage from '../../context/pageContext'
import { motion } from 'framer-motion'
import { Cursor } from '../Cursor/Cursor'
import { useState } from 'react'
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
	const [isHovered, setIsHovered] = useState(false)
	const [isClickable, setIsClickable] = useState(null)
	const [parentLicense, setParentLicense] = useState(false)
	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
			className='motionContainer'
		>
			<Cursor hoverState={isHovered} clickState={isClickable} />
			<CentralNode title={props.title} topLevel={props.topLevel} />
			<ChildNodes
				nodes={props.child_nodes}
				count={CHILD_NODES}
				hoverTrigger={setIsHovered}
				clickTrigger={setIsClickable}
				topLevel={props.topLevel}
			/>
		</motion.div>
	)
}
