import { MagicCard } from '../magicui/magic-card'
import { MagicContainer } from '../magicui/magic-card'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import usePage from '../../context/pageContext'
import LinearGradient from '../magicui/linear-gradient'
import { useRouter } from 'next/navigation'
export default function ModalMenu(props) {
	const modal = useRef()
	const mContainer = useRef()
	const { toggleScrolling, lenis } = usePage()
	const router = useRouter()
	const scrollToSubscribeSection = () => {
		const section = document.querySelector('.subscribe-content')
		lenis.scrollTo(section, {
			duration: 1.8,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		})
	}

	useEffect(() => {
		const modalElement = modal.current
		if (!modalElement) return // Exit if modalElement is not defined

		gsap.killTweensOf(modalElement) // Terminate any ongoing animations

		if (props.isOpen) {
			gsap.to('.modalContainer', {
				zIndex: 2001,
				duration: 0,
			})
			gsap.fromTo(
				modalElement,
				{
					// y: '-100%', // Starting position (off-screen at the top)
					zIndex: 0,
					opacity: 0, // Starting opacity
				},
				{
					duration: 0.5, // Animation duration (in seconds)
					zIndex: 2001,
					opacity: 1, // End opacity
					ease: 'power3.out', // Easing function for a smooth animation
					display: 'block', // Show the modal
				}
			)
			// toggleScrolling(false) // <-- Disable scrolling when the modal opens
		} else {
			gsap.to('.modalContainer', {
				zIndex: 0,
				duration: 0,
			})
			// Animate out
			gsap.to(modalElement, {
				duration: 0.5, // Animation duration (in seconds)
				// y: '-100%', // End position (back off-screen at the top)
				opacity: 0, // End opacity
				ease: 'power3.in', // Easing function for a smooth animation
				onComplete: () => {
					gsap.set(modalElement, { display: 'none' }) // Hide the modal after the animation
					gsap.set(modalElement, { zIndex: 0 })
				},
			})
			// toggleScrolling(true) // <-- Disable scrolling when the modal opens
		}
	}, [props.isOpen])

	return (
		<MagicContainer
			borderWidth={3}
			ref={mContainer}
			className={
				'fixed top-0 left-0 w-full h-full flex items-center justify-center z-2001 pointer-events-auto modalContainer'
			}
		>
			<MagicCard
				background={'rgba(255, 0, 0, 0.2)'}
				className='w-full flex flex-col items-center justify-center p-20 shadow-2xl menu z-2050 modal pointer-events-auto'
				ref={modal}
			>
				<LinearGradient
					from={'#000000'}
					to={'rgba(120,119,198, 1'}
					transitionPoint={'50%'}
				/>{' '}
				<LinearGradient /> <LinearGradient /> <LinearGradient />{' '}
				<ol className='z-10 whitespace-nowrap text-3xl font-medium relative text-white-800 dark:text-white-200 modalList'>
					<li>
						<div onClick={() => router.push('/about')}>About</div>
					</li>
					<li>
						<div onClick={() => router.push('/baseNavigation')}>
							Navigate
						</div>
					</li>
					<li>
						<div onClick={() => router.push('/tableOfContent')}>
							Table of Contents
						</div>
					</li>
					{props.sub && (
						<li>
							<div onClick={() => scrollToSubscribeSection()}>
								Subscribe
							</div>
						</li>
					)}
					<li>
						<div onClick={() => router.push('/baseNavigation')}>
							Read
						</div>
					</li>
				</ol>
				<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
			</MagicCard>
		</MagicContainer>
	)
}
