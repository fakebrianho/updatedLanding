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
			type: 'chars',
		})
		const section_title_01 = sectionHead01.chars
		const sectionHead02 = new SplitText('.title_002', {
			type: 'chars',
		})
		const section_title_02 = sectionHead02.chars
		section_title_02.forEach((char) =>
			gsap.set(char.parentNode, { perspective: 1000 })
		)
		const sectionHead03 = new SplitText('.title_003', {
			type: 'chars',
		})
		const section_title_03 = sectionHead03.chars
		const sectionHead03_length = section_title_03.length
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
		gsap.fromTo(
			section_title_02,
			{
				'will-change': 'opacity, transform',
				opacity: 0,
				rotateX: () => gsap.utils.random(-120, 120),
				z: () => gsap.utils.random(-200, 200),
			},
			{
				ease: 'none',
				opacity: 1,
				rotateX: 0,
				z: 0,
				stagger: 0.02,
				scrollTrigger: {
					trigger: section_title_02,
					start: 'top bottom',
					end: 'center center',
					scrub: true,
				},
			}
		)
		gsap.fromTo(
			section_title_03,
			{
				'will-change': 'transform',
				y: (position) => {
					const factor =
						position < Math.ceil(sectionHead03_length / 2)
							? position
							: Math.ceil(sectionHead03_length / 2) -
							  Math.abs(
									Math.floor(sectionHead03_length / 2) -
										position
							  ) -
							  1
					return (sectionHead03_length / 2 - factor + 6) * 130
				},
			},
			{
				ease: 'elastic.out(.4)',
				y: 0,
				stagger: {
					amount: 0.1,
					from: 'center',
				},
				scrollTrigger: {
					trigger: section_title_03,
					start: 'top 100%',
					end: 'center center',
					markers: true,
					scrub: true,
				},
			}
		)
	}
}

export default scroll
