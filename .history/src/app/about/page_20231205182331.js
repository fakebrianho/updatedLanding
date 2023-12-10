'use client'
import react from 'react'
import { ReactP5Wrapper } from '@p5-wrapper/react'
// --light-text: rgba(255, 140, 36, 1);
// --dark-text: rgba(49, 118, 199, 1);
function sketch(p5) {
	let orange
	let blue
	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight)
	}
	p5.draw = () => {
		p5.background(0)
		p5.fill(255, 140, 36)
		p5.ellipse(56, 46, 66, 66)
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
