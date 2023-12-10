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
	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight)
		orange = p5.color(255, 140, 36)
		blue = p5.color(49, 118, 199)
		initX = p5.random(500)
		initY = p5.random(500)
	}
	p5.draw = () => {
		p5.background(0)
		p5.fill(blue)
		// p5.fill(255, 140, 36)
		for (let i = 0; i < 10; i++) {
			const radius = p5.random(20, 66)
			const x = p5.random(500)
			const y = p5.random(500)
			p5.ellipse(initX, initY, radius, radius)
		}
		// p5.normalMaterial()
		// p5.push()
		// p5.rotateZ(p5.frameCount * 0.01)
		// p5.rotateX(p5.frameCount * 0.01)
		// p5.rotateY(p5.frameCount * 0.01)
		// p5.plane(100)
		// p5.pop()
	}
}

export default function About() {
	return <ReactP5Wrapper sketch={sketch} />
}
