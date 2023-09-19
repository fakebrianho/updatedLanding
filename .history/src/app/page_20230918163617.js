import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
// import { NavigationBar } from '../../components/NavigationBar'
const NavigationBar = dynamic(() => import('../../components/NavigationBar'), {
	ssr: false,
})

export default function Home() {
	return (
		<>
			<h1>Hello World</h1>
			<NavigationBar />
		</>
	)
}
