import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// const section1 = document.querySelector()

const scroll = () => {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		let mySplitText = new SplitText('.landing_title', { type: 'chars' })
		let introText = new SplitText('.landing_intro', { type: 'chars' })
		let introEnd = new SplitText('.landing_end', { type: 'chars' })
		const sectionHead01 = new SplitText('.title_001', {
			type: 'words,lines',
		})
		const section_title_01 = sectionHead01.chars
		let introChars = introText.chars
		let chars = mySplitText.chars
		let endChars = introEnd.chars
		const introAnimation = new gsap.timeline()
		introAnimation.fromTo(
			introChars,
			{
				'will-change': 'opacity',
				opacity: 0,
			},
			{
				ease: 'none',
				opacity: 1,
				duration: 1,
			}
		)
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
			},
			'>'
		)
		introAnimation.fromTo(
			endChars,
			{
				'will-change': 'opacity',
				opacity: 0,
			},
			{
				ease: 'none',
				opacity: 1,
				duration: 1,
			},
			'>'
		)
		introAnimation.fromTo(
			'#circle_0',
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				duration: 0.4,
			},
			'>'
		)
		introAnimation.fromTo(
			'#circle_2',
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				duration: 0.3,
			},
			'>'
		)
		introAnimation.fromTo(
			'#circle_1',
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				duration: 0.3,
			},
			'>'
		)
		introAnimation.fromTo(
			'#circle_3',
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				duration: 0.3,
			},
			'>'
		)
		introAnimation.fromTo(
			'#circle_4',
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				duration: 0.3,
			},
			'>'
		)
		gsap.fromTo(
			section_title_01,
			{
				'will-change': 'opacity',
				opacity: 0.1,
			},
			{
				ease: 'none',
				opacity: 1,
				stagger: 0.05,
				scrollTrigger: {
					trigger: section_title_01,
					start: 'top bottom-=20%',
					end: 'center top+=20%',
					scrub: true,
				},
			}
		)
	}
}

export default scroll
