import { EnterButton } from '../../EnterButton/EnterButton'
import ShinyButton from '@/comps/magicui/shiny-button'
import PulsatingButton from '@/comps/magicui/pulsating-button'

import styles from './Enter.module.css'
import { useRouter } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

const Enter = ({
	children,
	duration = 0.5,
	backgroundColor = 'orange',
	color = 'white',
	borderRadius = '8px',
	padding = '10px 30px',
	url = null,
	...props
}) => {
	return (
		<div className={styles.enterContainer}>
			<motion.button
				initial={{
					clipPath: 'inset(0% 100% 0% 0%)',
					boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
				}}
				animate={{
					clipPath: 'inset(0% 0% 0% 0%)',
					boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
				}}
				exit={{
					clipPath: 'inset(0% 0% 0% 100%)',
					boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
				}}
				transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
				style={{
					backgroundColor,
					color,
					borderRadius,
					padding,
					border: 'none',
					cursor: url ? 'pointer' : 'default',
					overflow: 'hidden',
					outline: 'none',
				}}
				{...props}
				className={styles.enter}
				onClick={() => {}}
			>
				{children}
			</motion.button>
		</div>
	)
}

export default Enter
