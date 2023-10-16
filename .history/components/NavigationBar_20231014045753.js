'use client'
import React, { useEffect } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
import usePage from '../context/pageContext'
import { fadeOut } from '../utils/fadeOut'
import lottie from 'lottie-web'

import scroll from '../utils/scrollAnimation'
import { useRef } from 'react'

export const NavigationBar = () => {
	const { lenis } = usePage()
	const menu = useRef()
	useEffect(() => {
		// Load the Lottie animation
		const animation = lottie.loadAnimation({
			container: menu.current, // the DOM element that will contain the animation
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/lottie/orangeMenu.json', // the path to the animation json
		})

		// Save the Lottie animation instance to the ref
		menu.current.lottie = animation

		return () => {
			// Destroy the Lottie animation instance on component unmount
			animation.destroy()
		}
	}, [])
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
		const totalFrames = menu.current.totalFrames // Get the total frame count
		const half = totalFrames / 2 // Calculate the halfway point
		menu.current.playSegments([0, half], true) //
	}

	const handleAnimationComplete = () => {
		console.log('hi')
		if (menu.current) {
			menu.current.pause() // Pause the animation when it completes
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
			{/* <div className='nav_menu' onClick={handlePlayerClick}>
				<Player
					src='/lottie/orangeMenu.json'
					// autoplay
					ref={menu}
					className='player'
					onComplete={handleAnimationComplete} // Handle animation complete event
					onEvent={(event) => {
						if (event === 'load') {
							// lenis.start()
						}
					}}
				/>
			</div> */}
			<div className='nav_menu' onClick={handlePlayerClick} ref={menu}>
				{/* The Lottie animation will be rendered here */}
			</div>
		</div>
	)
}
