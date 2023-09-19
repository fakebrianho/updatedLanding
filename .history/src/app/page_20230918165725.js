'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import { NavigationBar } from '../../components/NavigationBar'

export default function Home() {
	;<>
		<h1>Hello World</h1>
		<NavigationBar />
	</>
}
