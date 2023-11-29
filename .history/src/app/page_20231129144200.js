'use client'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
import { CallToAction } from '../../components/CallToAction'
import { Loader } from '../../components/Loader'

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
