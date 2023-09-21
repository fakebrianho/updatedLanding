import React from 'react'
import scroll from '../utils/scrollAnimation'
import { useEffect } from 'react'
export const Hero = () => {
	useEffect(() => {
		scroll()
	}, [])
	// scroll()
	return (
		<>
			<div className='test_container'>
				<section className='hero_section'>
					<div className='hero_content'>
						<p className='landing_text'>Welcome to</p>
						<p className='landing_title'>UNCERTAIN UNIVERSE</p>
						<p className='landing_text'>
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
