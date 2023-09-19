import React from 'react'

export const Hero = () => {
	return (
		<>
			<section className='hero_section'>
				<div className='circle_container'>
					<div className='orange_gradient'></div>
					<div className='circle_small_blue'></div>
					{/* <div className='circle_small_blue'></div> */}
					{/* <div className='circle_small_blue'></div> */}
				</div>
				<p className='landing_text'>Welcome to</p>
				<p className='landing_title'>UNCERTAIN UNIVERSE</p>
				<p className='landing_text'>
					A place for seekers not finders, for edge-explorers <br />
					and voyagers without abode - homesick for places <br /> that
					never existed
				</p>
			</section>
		</>
	)
}
