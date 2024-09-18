import { EnterButton } from '../../EnterButton/EnterButton'
import ShinyButton from '@/comps/magicui/shiny-button'
import PulsatingButton from '@/comps/magicui/pulsating-button'

import styles from './Enter.module.css'
// function Enter() {
// 	return (
// 		<div
// 			className={styles.enter_button}
// onClick={() => {
// 	if (props.topLevel) {
// 		router.push(`/chapters/${props.chapter}`)
// 	} else {
// 		router.push(`/chapters/${props.chapter}`)
// 	}
// }}
// 		>
// 			Read
// 		</div>
// 	)
// }

// export default Enter
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
		<motion.button
			initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
			animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
			transition={{
				clipPath: { duration, ease: 'easeOut' },
				scale: { duration: duration * 0.5, ease: 'easeOut' },
			}}
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
		>
			{children}
		</motion.button>
	)
}

export default Enter
