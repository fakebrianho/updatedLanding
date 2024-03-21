'use client'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
import { CallToAction } from '../../components/CallToAction'
import { Loader } from '../../components/Loader'
import useTheme from '../../hooks/useThemes'
import { useEffect } from 'react'

export default function Home() {
	const [theme, setTheme] = useTheme()
	useEffect(() => {
		if (theme === 'light') {
			document.body.style.backgroundColor = 'white'
		}
	}, [theme])
	return (
		<PageProvider>
			<main className='landing_container'>
				<Loader mode={theme} />
				<NavigationBar sub={true} mode={theme} toggle={setTheme} />
				<Hero mode={theme} />
				<Description />
				<CallToAction />
			</main>
		</PageProvider>
	)
}
