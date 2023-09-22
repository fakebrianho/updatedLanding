import gsap from 'gsap'

export const fadeOut = (elem) => {
	gsap.fromTo(
		elem,
		{
			'will-change': 'opacity',
			opacity: 1,
		},
		{
			ease: 'none',
			opacity: 0,
			duration: 1,
		}
	)
}
