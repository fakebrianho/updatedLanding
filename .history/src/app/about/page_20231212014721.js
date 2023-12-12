'use client'
// import { ReactP5Wrapper } from '@p5-wrapper/react'
import AboutPage from '../../../components/AboutPage/AboutPage'
import { NavigationBar } from '../../../components/NavigationBar'
import { PageProvider } from '../../../context/pageContext'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import Developers from '../../../components/Developers/Developers'
import ContactSection from '../../../components/ContactSection/ContactSection'
import dynamic from 'next/dynamic'

const ReactP5Wrapper = dynamic(
	() => import('@p5-wrapper/react').then((mod) => mod.ReactP5Wrapper),
	{ ssr: false }
)
function sketch(p5) {
	let count = 20
	let balls = []
	let canvasWidth = 640 // default width
	let canvasHeight = 480 // default height

	class Ball {
		constructor() {
			this.position = [
				p5.constrain(
					p5.random(window.innerWidth),
					33,
					window.innerWidth - 33
				),
				-p5.random(0, 60),
			]
			this.color =
				p5.random() > 0.5
					? p5.color(255, 140, 36)
					: p5.color(49, 118, 199)
			this.velocity = 0.0
			this.acceleration = 0.0
			this.radius = p5.random(20, 66)
			this.dampening = 0.8
			this.resting = false
			this.restingThreshold = 2.5
		}
		update() {
			if (this.resting) return // Stop updating if the ball is resting

			this.velocity += this.acceleration
			this.position[1] += this.velocity
		}
		checkBoundaries() {
			if (this.position[1] >= window.innerHeight - this.radius / 2) {
				this.position[1] = window.innerHeight - this.radius / 2
				this.velocity *= -this.dampening
				if (Math.abs(this.velocity) < this.restingThreshold) {
					this.resting = true // Set the ball to rest
				}
			}

			// Gravity effect
			if (this.position[1] < window.innerHeight - this.radius / 2) {
				this.acceleration = p5.random(0.05, 0.5)
			} else {
				this.acceleration = 0
			}
		}
		show() {
			p5.fill(this.color)
			p5.ellipse(
				this.position[0],
				this.position[1],
				this.radius,
				this.radius
			)
		}
	}
	p5.setup = () => {
		if (typeof window !== 'undefined') {
			canvasWidth = window.innerWidth
			canvasHeight = window.innerHeight
		}
		p5.createCanvas(canvasWidth, canvasHeight)
		p5.noStroke()
		for (let i = 0; i < count; i++) {
			balls[i] = new Ball()
		}
	}
	p5.draw = () => {
		p5.background(0)
		if (typeof window !== 'undefined') {
			for (let i = 0; i < count; i++) {
				balls[i].show()
				balls[i].update()
				balls[i].checkBoundaries()
			}
		}
	}
	p5.windowResized = () => {
		if (typeof window !== 'undefined') {
			p5.resizeCanvas(window.innerWidth, window.innerHeight)
		}
	}
}

export default function About() {
	const arrow = useRef()
	const LRArrow = useRef()
	const [clientReady, setClientReady] = useState(false)
	useEffect(() => {
		setClientReady(true)
		const arrowElement = arrow.current
		const LRArrowElement = LRArrow.current
		const toggleContact = () => {
			LRArrowElement.classList.toggle('active')
			if (LRArrowElement.classList.contains('active')) {
				if (arrowElement.classList.contains('active')) {
					gsap.to('.aboutContainer', {
						bottom: '0px',
						duration: 1,
						ease: 'power1.out',
					})
					gsap.to('.dev_container', {
						opacity: 0,
						duration: 1,
						ease: 'power1.out',
					})
				} else {
					gsap.to('.aboutContainer', {
						right: '300px',
						duration: 1,
						ease: 'power1.out',
					})
					gsap.to('.contactContainer', {
						opacity: 1,
						duration: 1,
						ease: 'power1.out',
					})
				}
			} else {
				gsap.to('.aboutContainer', {
					right: '0px',
					duration: 1,
					ease: 'power1.out',
				})
				gsap.to('.contactContainer', {
					opacity: 0,
					duration: 1,
					ease: 'power1.out',
				})
			}
		}
		const toggleActiveClass = () => {
			arrowElement.classList.toggle('active')
			if (arrowElement.classList.contains('active')) {
				if (LRArrowElement.classList.contains('active')) {
					gsap.to('.aboutContainer', {
						right: '0px',
						duration: 1,
						ease: 'power1.out',
					})
					gsap.to('.contactContainer', {
						opacity: 0,
						duration: 1,
						ease: 'power1.out',
					})
				}
				gsap.to('.aboutContainer', {
					bottom: '100px',
					duration: 1,
					ease: 'power1.out',
				})
				gsap.to('.dev_container', {
					opacity: 1,
					duration: 1,
					ease: 'power1.out',
				})
			} else {
				gsap.to('.aboutContainer', {
					bottom: '0px',
					duration: 1,
					ease: 'power1.out',
				})
				gsap.to('.dev_container', {
					opacity: 0,
					duration: 1,
					ease: 'power1.out',
				})
			}
		}
		if (arrowElement) {
			arrowElement.addEventListener('click', toggleActiveClass)
		}
		if (LRArrowElement) {
			LRArrowElement.addEventListener('click', toggleContact)
		}
		return () => {
			if (arrowElement) {
				arrowElement.removeEventListener('click', toggleActiveClass)
			}
			if (LRArrowElement) {
				LRArrowElement.removeEventListener('click', toggleContact)
			}
		}
	}, [])
	return (
		<PageProvider>
			<div className='aboutContainer'>
				<NavigationBar />
				<AboutPage />
				<div className='p5Container'>
					{clientReady && <ReactP5Wrapper sketch={sketch} />}
				</div>

				<div className='wrap'>
					<span className='arrow' ref={arrow}>
						<span></span>
						<span></span>
					</span>
				</div>
				<div className='contact'>
					<span className='arrowlr' ref={LRArrow}>
						<span></span>
						<span></span>
					</span>
				</div>
				<ContactSection />
				<Developers />
			</div>
		</PageProvider>
	)
}
