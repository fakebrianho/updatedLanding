'use client'
import Nav from './Nav'
import { motion } from 'framer-motion'

const pageTransition = {
	out: {
		opacity: 0,
		y: 40,
		transition: {
			duration: 2.5,
		},
	},
	in: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 3.5,
			delay: 1,
		},
	},
}

export default function Page() {
	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
		>
			<Nav />
		</motion.div>
	)
}
