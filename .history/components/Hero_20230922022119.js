import scroll from '../utils/scrollAnimation'
import { React, useEffect } from 'react'
import usePage from '../context/pageContext'
export const Hero = () => {
	const { lenis } = usePage()
	useEffect(() => {
		if (lenis) {
			window.addEventListener('load', (event) => {
				console.log('hi')
				lenis.start()
				scroll()
			})
		}
	}, [lenis])
	return (
		<>
			<div className='test_container'>
				<section className='hero_section'>
					<div className='hero_content'>
						<p className='landing_text landing_intro'>Welcome to</p>
						<div className='landing_title_container'>
							<p className='landing_title'>UNCERTAIN UNIVERSE</p>
						</div>
						<p className='landing_text landing_end'>
							A place for seekers not finders, for edge-explorers{' '}
							<br />
							and voyagers without abode - homesick for places{' '}
							<br /> that never existed
						</p>
					</div>
					<div className='circle_container'>
						<div className='blue_gradient' id='circle_0'></div>
						<div className='circle_orange_halo' id='circle_1'>
							<div className='circle_small_orange'></div>
						</div>
						<div className='circle_orange_halo' id='circle_2'></div>
						<div className='circle_orange_halo' id='circle_3'></div>
						<div
							className='circle_small_orange'
							id='circle_4'
						></div>
					</div>
				</section>
			</div>
		</>
	)
}
