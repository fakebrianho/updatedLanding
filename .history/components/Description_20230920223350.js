import React from 'react'
import { MagicCard } from './magicui/magic-card'
import { MagicContainer } from './magicui/magic-card'
import Image from 'next/image'
import { Explanation } from './Explanation'
export const Description = () => {
	return (
		<>
			<div className='description work_in_progress'>
				<p>I</p>
				<h2 className='title title_001'>CHARTING UNCERTAINTY</h2>
				<p className='text'>
					What you are reading is a work-in-progress and an ongoing
					experiment. Part e-book, part digital garden, part
					collaborative project, it explores a pervasive feature of
					our existence: the nature of Uncertainty.
				</p>
			</div>
			<div className='description web_of_uncertainty'>
				<p>I</p>
				<h2 className='title'>
					UNCERTAINTY&apos;S <br></br>WEB
				</h2>
			</div>
			<div className='description trivial_uncertainty'>
				<p className='text'>
					This ambiguous state may appear trivial, but it is nothing
					but. It can trigger anxiety and doubt, affect our
					decision-making, cause market-moves, and shift the
					geo-strategic balance of power.
				</p>
			</div>
			<div className='description shape_uncertainty'>
				<p>III</p>
				<h2 className='title'>SHAPING</h2>
				<p className='text'>
					Our current understanding is fractured and pre-paradigmatic.
					Different disciplines define uncertainty in mutually
					incompatible ways. This is my attempt to re-draw the shape
					of uncertainty.
				</p>
			</div>
			<div className='description exploring_uncertainty'>
				<p>IV</p>
				<h2 className='title'>
					BETWEEN THOUGHT <br></br>AND THEATER
				</h2>
				<p className='text'>
					It is the ongoing diary of my first-principles exploration
					into the unknown. Although I am not a scholar, it is quite
					scholarly in places. Although I am not an artist, it is
					quite artistic in others.
				</p>
			</div>
			<div className='description tangible_abstract'>
				<p className='text left'>
					It is both{' '}
					<span className='italic_text'>
						<i>playful</i>
					</span>{' '}
					and <span className='bold_text'>serious</span>,
				</p>
				<p className='text right'>abstract and concrete.</p>
				<p className='text center'>
					Its structure is fractal, but you can read it like a linear
					book,
					<br /> or freely skip around the knowledge graph.
				</p>
			</div>
			<Explanation />
		</>
	)
}
