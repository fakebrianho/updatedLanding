'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import { NavigationBar } from '../../components/NavigationBar'
// import { Hero } from '../../components/Hero'
import { Description } from '../../components/Description'
import { PageProvider } from '../../context/pageContext'
const DynamicComponent = dynamic(() => import('../../components/Hero'), {
	ssr: false,
})
export default function Home() {
	return (
		<PageProvider>
			<NavigationBar />
			{/* <Hero /> */}
			<DynamicComponent />
			<Description />
		</PageProvider>
	)
}
