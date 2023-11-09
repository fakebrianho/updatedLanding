'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import usePage from '../context/pageContext'
import { fadeOut } from '../utils/fadeOut'
import scroll from '../utils/scrollAnimation'
import ModalMenu from '../components/ModalMenu/ModalMenu'
import { useRef } from 'react'
import NavBarFull from './NavBarFull/NavBarFull'

export const NavigationBar = () => {
	const { lenis } = usePage()
	const menu = useRef()
	const [isMenuOpen, setIsMenuOpen] = useState(false) // Define a new state variable
	// const [isMobile, setIsMobile] = useState(window.innerWidth < 667)
	const [isMobile, setIsMobile] = useState(null) // Initialize to null

	const buttonClassName = isMenuOpen
		? 'hamburger nav_menu hamburger--collapse is-active'
		: 'hamburger nav_menu hamburger--collapse'

	useEffect(() => {
		setIsMobile(window.innerWidth < 667)
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768)
		}

		window.addEventListener('resize', handleResize)

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize)
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

	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen) // Toggle the isMenuOpen state variable
	}
	return (
		<>
			{isMobile ? (
				<>
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
					</div>
					<ModalMenu isOpen={isMenuOpen} />{' '}
				</>
			) : (
				<NavBarFull />
			)}
		</>
	)
}
