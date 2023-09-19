'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import { NavigationBar } from '../../components/NavigationBar'
import { Hero } from '../../components/Hero'
export default function Home() {
	return (
		<>
			<NavigationBar />
			<Hero />
			<h1>Hello World</h1>
		</>
	)
}
