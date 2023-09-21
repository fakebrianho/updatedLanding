'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
export default function Home() {
	return (
		<PageProvider>
			<NavigationBar />
			<Hero />
			<Description />
		</PageProvider>
	)
}
