'use client'
import React, { useEffect } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
import usePage from '../context/pageContext'
import { fadeOut } from '../utils/fadeOut'
import scroll from '../utils/scrollAnimation'
import { useRef } from 'react'

export const NavigationBar = () => {
	const { lenis } = usePage()
	const menu = useRef()
	useEffect(() => {
		if (lenis) {
			const handleLoad = () => {
				const loader = document.querySelector('.loader_container')
				fadeOut(loader)
				scroll()
				lenis.start()
			}

			// If the document is already loaded, call the handler immediately
			if (document.readyState === 'complete') {
				handleLoad()
			} else {
				// Otherwise, add a listener for the 'load' event
				window.addEventListener('load', handleLoad)

				// Cleanup - remove the event listener on unmount
				return () => {
					window.removeEventListener('load', handleLoad)
				}
			}
		}
	}, [lenis])

	useEffect(() => {
		console.log(menu.current)
	}, [menu])
	const handlePlayerClick = () => {
		console.log('hi')
		if (menu.current) {
			menu.current.play() // This triggers the Lottie animation to play
		}
	}
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
			<div className='nav_menu' onClick={handlePlayerClick}>
				<Player
					src='/lottie/orangeMenu.json'
					// autoplay
					ref={menu}
					onClick={handlePlayerClick}
					loop
					className='player'
					onEvent={(event) => {
						if (event === 'load') {
							// lenis.start()
						}
					}}
				/>
			</div>
		</div>
	)
}
