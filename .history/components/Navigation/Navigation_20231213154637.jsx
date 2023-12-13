'use client'
import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cursor } from '../Cursor/Cursor'
import { useState } from 'react'
import BackButton from '../../components/BackButton/BackButton'
import { isMobile } from 'react-device-detect'

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
			{!isMobile && <BackButton />}
			<Cursor
				hoverState={isHovered}
				clickState={isClickable}
				parentLicence={parentLicense}
				topLevel={props.topLevel}
			/>
			<div className='navLogo'>
				<Image
					src='/uncertain-universe-logo.svg'
					className='logo'
					height={50}
					width={50}
					alt='Logo'
					onClick={() => router.push('/')}
				></Image>
			</div>
			<CentralNode title={props.title} topLevel={props.topLevel} />
			<ChildNodes
				nodes={props.child_nodes}
				titles={props.title}
				count={CHILD_NODES}
				hoverTrigger={setIsHovered}
				clickTrigger={setIsClickable}
				parentLicense={setParentLicense}
				topLevel={props.topLevel}
			/>
		</motion.div>
	)
}
