'use client'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
import { CallToAction } from '../../components/CallToAction'
import { Loader } from '../../components/Loader'
import useTheme from '../../hooks/useThemes'
import { useEffect } from 'react'
import scroll from '../../utils/scrollAnimation'

export default function Home() {
	const [theme, setTheme] = useTheme()
	useEffect(() => {
		// scroll()
		if (theme === 'light') {
			document.body.style.backgroundColor = 'white'
		} else {
			document.body.style.backgroundColor = 'black'
		}
	}, [theme])
	return (
		<PageProvider>
			<main className='landing_container'>
				<Loader mode={theme} />
				<NavigationBar sub={true} mode={theme} toggle={setTheme} />
				<Hero mode={theme} />
				<Description mode={theme} />
				<CallToAction mode={theme} />
			</main>
		</PageProvider>
	)
}
