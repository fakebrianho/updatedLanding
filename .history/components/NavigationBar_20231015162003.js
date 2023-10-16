'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import usePage from '../context/pageContext'
import { fadeOut } from '../utils/fadeOut'
import scroll from '../utils/scrollAnimation'
import { useRef } from 'react'

export const NavigationBar = () => {
	const { lenis } = usePage()
	const menu = useRef()
	const animationRef = useRef() // Create a ref to hold the lottie-web animation instance
	const [isReversed, setIsReversed] = useState(false) // State variable to track play direction
	const [isMenuOpen, setIsMenuOpen] = useState(false) // Define a new state variable
	const buttonClassName = isMenuOpen
		? 'hamburger nav_menu hamburger--collapse is-active'
		: 'hamburger nav_menu hamburger--collapse'

	useEffect(() => {
		// Load the Lottie animation
		// animationRef.current = lottie.loadAnimation({
		// 	container: menu.current, // the DOM element that will contain the animation
		// 	renderer: 'svg',
		// 	loop: false,
		// 	autoplay: false,
		// 	path: '/lottie/orangeMenu.json', // the path to the animation json
		// })
		// return () => {
		// 	// Destroy the Lottie animation instance on component unmount
		// 	animationRef.current.destroy()
		// }
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
		if (animationRef.current) {
			const totalFrames = animationRef.current.totalFrames // Get the total frame count
			const half = totalFrames / 2 // Calculate the halfway point
			const frameRange = isReversed ? [half, totalFrames] : [0, half]

			// Update the play direction for the next click
			setIsReversed(!isReversed)
			animationRef.current.playSegments(frameRange, true)
		}
	}
	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen) // Toggle the isMenuOpen state variable
		console.log(setIsMenuOpen)
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
			<button
				onClick={handleMenuOpen}
				ref={menu}
				className={buttonClassName} // Use the computed class name
				type='button'
			>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>
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
			{/* <div className='nav_menu' onClick={handlePlayerClick} ref={menu}> */}
			{/* The Lottie animation will be rendered here */}
			{/* </div> */}
		</div>
	)
}
