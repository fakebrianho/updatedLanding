import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// const section1 = document.querySelector()

const scroll = () => {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		let mySplitText = new SplitText('.landing_title', { type: 'chars' })
		let chars = mySplitText.chars
		gsap.fromTo(chars, {
			yPercent: 130,
			// opacity: 1,
			stagger: 0.015,
			ease: 'slow(0.2, 0.2, false)',
			duration: 1,
			scrollTrigger: {
				trigger: '.landing_title',
				start: 'top 30%',
				markers: true,
			},
		})
	}
}

export default scroll
