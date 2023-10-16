import { MagicCard } from '../magicui/magic-card'
import { MagicContainer } from '../magicui/magic-card'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function ModalMenu(props) {
	const modal = useRef()
	useEffect(() => {
		const modalElement = modal.current
		if (!modalElement) return // Exit if modalElement is not defined

		gsap.killTweensOf(modalElement) // Terminate any ongoing animations

		if (props.isOpen) {
			// Animate in
			gsap.fromTo(
				modalElement,
				{
					y: '-100%', // Starting position (off-screen at the top)
					opacity: 0, // Starting opacity
				},
				{
					duration: 0.5, // Animation duration (in seconds)
					y: '-50%', // End position (original position)
					opacity: 1, // End opacity
					ease: 'power3.out', // Easing function for a smooth animation
					display: 'block', // Show the modal
				}
			)
		} else {
			// Animate out
			gsap.to(modalElement, {
				duration: 0.5, // Animation duration (in seconds)
				y: '-100%', // End position (back off-screen at the top)
				opacity: 0, // End opacity
				ease: 'power3.in', // Easing function for a smooth animation
				onComplete: () => {
					gsap.set(modalElement, { display: 'none' }) // Hide the modal after the animation
				},
			})
		}
	}, [props.isOpen])

	return (
		<MagicContainer
			borderWidth={3}
			className={
				'fixed flex items-center justify-center min-h-screen min-w-screen z-50'
			}
		>
			<MagicCard
				className='flex flex-col items-center justify-center p-20 shadow-2xl card menu fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal'
				ref={modal}
				ref={modal}
			>
				{' '}
				<ol className='z-10 whitespace-nowrap text-3xl font-medium relative text-white-800 dark:text-white-200 modalList'>
					<li>About</li>
					<li>Table of Contents</li>
					<li>Navigation</li>
					<li>Subscribe</li>
					<li>Contact</li>
				</ol>
				<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
			</MagicCard>
		</MagicContainer>
	)
}
