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
		const sectionHead04 = new SplitText('.title_004', {
			type: 'chars',
		})
		const section_title_04 = sectionHead04.chars
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
					return (sectionHead03_length / 2 - factor + 6) * 15
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
					start: 'top bottom',
					end: 'center center',
					: true,
					scrub: true,
				},
			}
		)
		// console.log(section_title_04)
		// gsap.fromTo()
		section_title_04.forEach((word) => {
			const charsTotal = section_title_04.length
			gsap.fromTo(
				word,
				{
					'will-change': 'transform, filter',
					transformOrigin: '50% 100%',
					scale: (position) => {
						const factor =
							position < Math.ceil(charsTotal / 2)
								? position
								: Math.ceil(charsTotal / 2) -
								  Math.abs(
										Math.floor(charsTotal / 2) - position
								  ) -
								  1
						return gsap.utils.mapRange(
							0,
							Math.ceil(charsTotal / 2),
							0.5,
							2.1,
							factor
						)
					},
					y: (position) => {
						const factor =
							position < Math.ceil(charsTotal / 2)
								? position
								: Math.ceil(charsTotal / 2) -
								  Math.abs(
										Math.floor(charsTotal / 2) - position
								  ) -
								  1
						return gsap.utils.mapRange(
							0,
							Math.ceil(charsTotal / 2),
							0,
							60,
							factor
						)
					},
					rotation: (position) => {
						const factor =
							position < Math.ceil(charsTotal / 2)
								? position
								: Math.ceil(charsTotal / 2) -
								  Math.abs(
										Math.floor(charsTotal / 2) - position
								  ) -
								  1
						return position < charsTotal / 2
							? gsap.utils.mapRange(
									0,
									Math.ceil(charsTotal / 2),
									-4,
									0,
									factor
							  )
							: gsap.utils.mapRange(
									0,
									Math.ceil(charsTotal / 2),
									0,
									4,
									factor
							  )
					},
					filter: 'blur(12px) opacity(0)',
				},
				{
					ease: 'power2.inOut',
					y: 0,
					rotation: 0,
					scale: 1,
					filter: 'blur(0px) opacity(1)',
					scrollTrigger: {
						trigger: word,
						start: 'top bottom+=40%',
						end: 'top top+=15%',
						scrub: true,
					},
					stagger: {
						amount: 0.15,
						from: 'center',
					},
				}
			)
		})
	}
}

export default scroll
