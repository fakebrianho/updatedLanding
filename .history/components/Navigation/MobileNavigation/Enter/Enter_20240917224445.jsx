import { EnterButton } from '../../EnterButton/EnterButton'
import ShinyButton from '@/comps/magicui/shiny-button'
import PulsatingButton from '@/comps/magicui/pulsating-button'

import styles from './Enter.module.css'

import React from 'react'
import { motion } from 'framer-motion'

const Enter = ({
	children,
	duration = 1,
	backgroundColor = 'orange',
	color = 'white',
	borderRadius = '8px',
	padding = '10px 20px',
	...props
}) => {
	return (
		<div>
			<motion.button
				initial={{
					clipPath: 'inset(0% 100% 0% 0%)',
					boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
				}}
				animate={{
					clipPath: 'inset(0% 0% 0% 0%)',
					boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
				}}
				transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
				style={{
					backgroundColor,
					color,
					borderRadius,
					padding,
					border: 'none',
					cursor: 'pointer',
					overflow: 'hidden',
					outline: 'none',
				}}
				{...props}
				className={styles.enter}
			>
				{children}
			</motion.button>
		</div>
	)
}

export default Enter
