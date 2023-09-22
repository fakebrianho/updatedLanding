'use client'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
import { CallToAction } from '../../components/CallToAction'
import { Loader } from '../../components/Loader'
import scroll from '../../utils/scrollAnimation'
import usePage from '../../context/pageContext'
import { useEffect } from 'react'

export default function Home() {
	return (
		<PageProvider>
			<Loader />
			<NavigationBar />
			<Hero />
			<Description />
			<CallToAction />
		</PageProvider>
	)
}
