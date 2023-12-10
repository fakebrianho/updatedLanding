import react from 'react'
import { ReactP5Wrapper } from '@p5-wrapper/react'

function sketch(p5) {
	p5.setup = () => p5.createCanvas(600, 600, p5.WEBGL)
}
