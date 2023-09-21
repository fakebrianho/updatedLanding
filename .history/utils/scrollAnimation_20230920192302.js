import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

let mySplitText = new SplitText('.landing_text', { type: 'chars' })
let chars = mySplitText.chars
console.log(chars)
// const section1 = document.querySelector()

const scroll = () => {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		gsap.from(chars, {
			yPercent: 130,
			stagger: 0.05,
			ease: 'back.out',
			duration: 1,
			scrollTrigger: {
				trigger: '.split',
				start: 'top 80%',
				markers: true,
			},
		})
	}
}

export default scroll
