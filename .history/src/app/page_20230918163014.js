import Image from 'next/image'
import styles from './page.module.css'
import { NavigationBar } from '../../components/NavigationBar'

export default function Home() {
	return (
		<>
			<h1>Hello World</h1>
			<NavigationBar />
		</>
	)
}
