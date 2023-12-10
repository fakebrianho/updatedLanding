'use client'
import react from 'react'
import { ReactP5Wrapper } from '@p5-wrapper/react'
import AboutPage from '../../../components/AboutPage/AboutPage'
function sketch(p5) {
	let count = 10
	let balls = []
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
		p5.createCanvas(window.innerWidth, window.innerHeight)
		p5.noStroke()
		for (let i = 0; i < count; i++) {
			balls[i] = new Ball()
		}
	}
	p5.draw = () => {
		p5.background(0)
		for (let i = 0; i < count; i++) {
			balls[i].show()
			balls[i].update()
			balls[i].checkBoundaries()
			// const radius = p5.random(20, 66)
			// const x = p5.random(500)
			// const y = p5.random(500)
			// p5.ellipse(positions[i][0], positions[i][1], radi[i], radi[i])
		}
	}
	p5.windowResized = () => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight)
	}
}

export default function About() {
	return (
		<div className='test'>
			<ReactP5Wrapper sketch={sketch} />
		</div>
	)
}
