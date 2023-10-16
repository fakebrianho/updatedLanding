import { MagicCard } from '../magicui/magic-card'
import { MagicContainer } from '../magicui/magic-card'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function ModalMenu(props) {
	const modal = useRef()
	useEffect(() => {
		// Target the modal element
		const modalElement = modal.current

		if (modalElement) {
			// Ensure modalElement is defined
			console.log(props.isOpen)

			if (props.isOpen) {
				console.log('in')
				// Animate in
				gsap.from(modalElement, {
					duration: 0.5,
					y: '100%',
					opacity: 1,
					ease: 'power3.out',
				})
			} else {
				// Optionally, animate out
				gsap.to(modalElement, {
					duration: 0.5,
					y: '-100%',
					opacity: 0,
					ease: 'power3.in',
					display: 'none',
				})
			}
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
				className='flex flex-col items-center justify-center p-20 shadow-2xl card menu w-[80%] h-[80%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal'
				ref={modal}
			>
				{' '}
				<ol className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 modalList'>
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
