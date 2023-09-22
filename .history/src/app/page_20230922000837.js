'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
import { CallToAction } from '../../components/CallToAction'
import { Loader } from '../../components/Loader'
import usePage from '../../context/pageContext'
export default function Home() {
	const { lenis } = usePage()
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
