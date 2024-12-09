'use client'
import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cursor } from '../Cursor/Cursor'
import { useState, useEffect } from 'react'
import BackButton from '../../components/BackButton/BackButton'
import { isMobile } from 'react-device-detect'
import { useRouter } from 'next/navigation'
import NavTrace from '../../components/NavTrace/NavTrace'
import NavHistory from '../../components/NavHistory/NavHistory'
import useTheme from '../../hooks/useThemes'
import MobileNavigation from './MobileNavigation/MobileNavigation'

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
	// console.log('pops', props.child_nodes)
	const CHILD_NODES = props.child_nodes.length
	const router = useRouter()
	const [isHovered, setIsHovered] = useState(false)
	const [isClickable, setIsClickable] = useState(null)
	const [parentLicense, setParentLicense] = useState(false)
	const [theme, toggleTheme] = useTheme()
	useEffect(() => {
		if (theme === 'light') {
			document.body.style.backgroundColor = 'white'
		} else {
			document.body.style.backgroundColor = 'black'
		}
	}, [theme])
	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
			className='motionContainer'
		>
			{!isMobile && <BackButton />}
			{!isMobile && (
				<Cursor
					hoverState={isHovered}
					clickState={isClickable}
					parentLicence={parentLicense}
					topLevel={props.topLevel}
					theme={theme}
				/>
			)}
			<Image
				src='/uncertain-universe-logo.svg'
				className='navigation_logo'
				height={100}
				width={100}
				alt='Logo'
				onClick={() => router.push('/')}
			></Image>
			{!isMobile && <NavTrace title={props.title} theme={theme} />}
			{!isMobile && <NavHistory title={props.title} theme={theme} />}
			{isMobile ? (
				<MobileNavigation
					title={props.title}
					topLevel={props.topLevel}
					count={CHILD_NODES}
					data={props.child_nodes}
				/>
			) : (
				<>
					{' '}
					<CentralNode
						title={props.title}
						topLevel={props.topLevel}
					/>
					<ChildNodes
						nodes={props.child_nodes}
						titles={props.title}
						count={CHILD_NODES}
						hoverTrigger={setIsHovered}
						clickTrigger={setIsClickable}
						parentLicense={setParentLicense}
						topLevel={props.topLevel}
						theme={theme}
					/>
				</>
			)}
		</motion.div>
	)
}
