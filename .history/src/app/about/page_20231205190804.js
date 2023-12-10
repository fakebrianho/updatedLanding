'use client'
import react from 'react'
import { ReactP5Wrapper } from '@p5-wrapper/react'
// --light-text: rgba(255, 140, 36, 1);
// --dark-text: rgba(49, 118, 199, 1);
function sketch(p5) {
	let orange
	let blue
	let initX, initY
	let radius
	let count = 10
	let radi = []
	let positions = []
	let balls = []
	class Ball {
		constructor() {
			this.position = [
				p5.constrain(
					p5.random(window.innerWidth),
					33,
					window.innerWidth - 33
				),
				p5.constrain(
					p5.random(window.innerHeight),
					33,
					window.innerHeight - 33
				),
			]
			this.velocity = p5.random(3, 5)
			this.radius = p5.random(20, 66)
		}
		update() {}
		show() {
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
		orange = p5.color(255, 140, 36)
		blue = p5.color(49, 118, 199)
		initX = p5.random(500)
		initY = p5.random(500)
		for (let i = 0; i < count; i++) {
			// radi.push(p5.random(20, 66))
			// positions.push([
			// 	p5.constrain(
			// 		p5.random(window.innerWidth),
			// 		33,
			// 		window.innerWidth - 33
			// 	),
			// 	p5.constrain(
			// 		p5.random(window.innerHeight),
			// 		33,
			// 		window.innerHeight - 33
			// 	),
			// ])
			balls[i] = new Ball()
		}
	}
	p5.draw = () => {
		p5.background(0)
		p5.fill(blue)
		// p5.fill(255, 140, 36)
		for (let i = 0; i < count; i++) {
			balls[i].show()
			// const radius = p5.random(20, 66)
			// const x = p5.random(500)
			// const y = p5.random(500)
			// p5.ellipse(positions[i][0], positions[i][1], radi[i], radi[i])
		}
	}
}

export default function About() {
	return <ReactP5Wrapper sketch={sketch} />
}
