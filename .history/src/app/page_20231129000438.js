'use client'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
import { CallToAction } from '../../components/CallToAction'
import { Loader } from '../../components/Loader'
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

export default function Home() {
	return (
		<PageProvider>
			<main className='landing_container'>
				<Loader />
				<NavigationBar />
				<Hero />
				<Description />
				<CallToAction />
				{/* <Subscribe /> */}
			</main>
		</PageProvider>
	)
}
