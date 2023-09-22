'use client'
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
import usePage from '../context/pageContext'

export const NavigationBar = () => {
	const { lenis } = usePage()
	window.onlo
	return (
		<div className='navbar'>
			<div className='nav_logo'>
				<Image
					src='/uncertain-universe-logo.svg'
					className='logo'
					height={75}
					width={75}
					alt='Logo'
				></Image>
			</div>
			<div className='nav_menu'>
				<Player
					src='/lottie/orangeMenu.json'
					autoplay
					loop
					className='player'
					onEvent={(event) => {
						if (event === 'load') {
							lenis.start()
						}
					}}
				/>
			</div>
		</div>
	)
}
