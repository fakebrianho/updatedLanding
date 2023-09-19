'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
// import { NavigationBar } from '../../components/NavigationBar'
// import LottiePlayer from '@alottiefiles/react-lottie-player'
import { Player } from '@lottiefiles/react-lottie-player'

export default function Home() {
	const animationURL =
		'https://lottie.host/c3dc6c0a-d779-4486-948d-29960226435a/XWl2gfnrVO.json'
	return (
		<>
			<h1>Hello World</h1>
		</>
	)
}
