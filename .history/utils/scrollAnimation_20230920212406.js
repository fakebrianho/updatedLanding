import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// const section1 = document.querySelector()

const scroll = () => {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		let mySplitText = new SplitText('.landing_title', { type: 'chars' })
		let chars = mySplitText.chars
		// gsap.from(chars, {
		// 	yPercent: 130,
		// 	// opacity: 1,
		// 	stagger: 0.015,
		// 	ease: 'slow(0.2, 0.2, false)',
		// 	duration: 1,
		// 	scrollTrigger: {
		// 		trigger: '.landing_title',
		// 		start: 'top 30%',
		// 		markers: true,
		// 	},
		// })
		gsap.fromTo(
			chars,
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				stagger: 0.05,
				// scrollTrigger: {
				// 	trigger: chars,
				// 	start: 'top 50%',
				// 	end: 'top 20%',
				// 	scrub: true,
				// 	markers: true,
				// },
			}
		)
	}
}

export default scroll
