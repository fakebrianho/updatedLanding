'use client'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
import { CallToAction } from '../../components/CallToAction'
import { Loader } from '../../components/Loader'
import useTheme from '../../hooks/useThemes'

export default function Home() {
	const [theme, setTheme] = useTheme()
	return (
		<PageProvider>
			<main className='landing_container'>
				<Loader />
				<NavigationBar sub={true} mode={theme} toggle={toggleTheme} />
				<Hero />
				<Description />
				<CallToAction />
			</main>
		</PageProvider>
	)
}
