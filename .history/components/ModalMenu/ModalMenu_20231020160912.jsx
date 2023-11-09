import { MagicCard } from '../magicui/magic-card'
import { MagicContainer } from '../magicui/magic-card'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import usePage from '../../context/pageContext'

export default function ModalMenu(props) {
	const modal = useRef()
	const { toggleScrolling } = usePage() // <-- Get the toggleScrolling function from the usePage hook

	console.log(toggleScrolling)
	useEffect(() => {
		const modalElement = modal.current
		if (!modalElement) return // Exit if modalElement is not defined

		gsap.killTweensOf(modalElement) // Terminate any ongoing animations

		if (props.isOpen) {
			// Animate in
			gsap.fromTo(
				modalElement,
				{
					// y: '-100%', // Starting position (off-screen at the top)
					opacity: 0, // Starting opacity
				},
				{
					duration: 0.5, // Animation duration (in seconds)
					// y: '0%', // End position (original position)
					opacity: 1, // End opacity
					ease: 'power3.out', // Easing function for a smooth animation
					display: 'block', // Show the modal
				}
			)
            toggleScrolling();  // <-- Disable scrolling when the modal opens

		} else {
			// Animate out
			gsap.to(modalElement, {
				duration: 0.5, // Animation duration (in seconds)
				// y: '-100%', // End position (back off-screen at the top)
				opacity: 0, // End opacity
				ease: 'power3.in', // Easing function for a smooth animation
				onComplete: () => {
					gsap.set(modalElement, { display: 'none' }) // Hide the modal after the animation
				},
                toggleScrolling();  // <-- Disable scrolling when the modal opens

			})
		}
	}, [props.isOpen])

	return (
		<MagicContainer
			borderWidth={3}
			className={
				'fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none'
			}
		>
			<MagicCard
				background={'rgba(255, 0, 0, 0.2)'}
				className='w-full flex flex-col items-center justify-center p-20 shadow-2xl menu z-50 modal pointer-events-auto'
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
