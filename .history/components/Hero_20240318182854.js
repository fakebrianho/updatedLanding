'use client'
// import scroll from '../utils/scrollAnimation'
import { BrowserView, MobileView } from 'react-device-detect'
import { React, useEffect } from 'react'
export const Hero = () => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
	}, [])
	return (
		<>
			<BrowserView>
				<div className={`${props.mode} hero_container`}>
					<section className='hero_section'>
						<div className='hero_content'>
							<p className='landing_text landing_intro'>
								Welcome to
							</p>
							<div className='landing_title_container'>
								<p className='landing_title'>
									UNCERTAIN UNIVERSE
								</p>
							</div>
							<p className='landing_text landing_end'>
								A place for seekers not finders, for
								edge-explorers <br />
								and voyagers without abode - homesick for places{' '}
								<br /> that never existed
							</p>
						</div>
						<div className='circle_container'>
							<div className='blue_gradient' id='circle_0'></div>
							<div className='circle_orange_halo' id='circle_1'>
								<div className='circle_small_orange'></div>
							</div>
							<div
								className='circle_orange_halo'
								id='circle_2'
							></div>
							<div
								className='circle_orange_halo'
								id='circle_3'
							></div>
							<div
								className='circle_small_orange'
								id='circle_4'
							></div>
						</div>
					</section>
				</div>
			</BrowserView>
			<MobileView>
				<div className='hero_container mobile'>
					<section className='hero_section mobile'>
						<div className='hero_content mobile'>
							<p className='landing_text landing_intro'>
								Welcome to
							</p>
							<div className='landing_title_container'>
								<p className='landing_title'>
									UNCERTAIN <br />
									UNIVERSE
								</p>
							</div>
							<p className='landing_text landing_end'>
								A place for seekers not finders, <br />
								for edge-explorers and voyagers without abode{' '}
								<br /> - <br />
								homesick for places that never existed
							</p>
						</div>
						<div className='circle_container mobile'>
							<div className='blue_gradient' id='circle_0'></div>
							<div className='circle_orange_halo' id='circle_1'>
								<div className='circle_small_orange'></div>
							</div>
							<div
								className='circle_orange_halo'
								id='circle_2'
							></div>
							<div
								className='circle_orange_halo'
								id='circle_3'
							></div>
							<div
								className='circle_small_orange'
								id='circle_4'
							></div>
						</div>
					</section>
				</div>
			</MobileView>
		</>
	)
}
