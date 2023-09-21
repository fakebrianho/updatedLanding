import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// const section1 = document.querySelector()

const scroll = () => {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		let mySplitText = new SplitText('.landing_title', { type: 'chars' })
		let chars = mySplitText.chars
		gsap.from(chars, {
			yPercent: 130,
			stagger: 0.05,
			ease: 'back.out',
			duration: 1,
			scrollTrigger: {
				trigger: '.landing_title',
				start: 'top 80%',
				markers: true,
			},
		})
	}
}

export default scroll
