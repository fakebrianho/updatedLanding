import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// const section1 = document.querySelector()

const scroll = () => {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		let mySplitText = new SplitText('.landing_title', { type: 'chars' })
		let introText = new SplitText('.landing_intro', { type: 'chars' })
		let introChars = introText.chars
		let chars = mySplitText.chars
		const introAnimation = new gsap.timeline()
		introAnimation.fromTo(
			chars,
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				stagger: 0.05,
			}
		)
		// gsap.fromTo(
		// 	chars,
		// 	{
		// 		'will-change': 'opacity',
		// 		opacity: 0.1,
		// 	},
		// 	{
		// 		ease: 'none',
		// 		// yPercent: 0,
		// 		opacity: 1,
		// 		stagger: 0.05,
		// 		// scrollTrigger: {
		// 		// 	trigger: chars,
		// 		// 	start: 'top 50%',
		// 		// 	end: 'top 20%',
		// 		// 	scrub: true,
		// 		// 	markers: true,
		// 		// },
		// 	}
		// )
	}
}

export default scroll
