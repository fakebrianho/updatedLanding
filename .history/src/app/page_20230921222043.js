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
