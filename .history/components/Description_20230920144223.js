import React from 'react'
import { MagicCard } from './magicui/magic-card'
import { MagicContainer } from './magicui/magic-card'
import Image from 'next/image'
export const Description = () => {
	return (
		<>
			<div className='description work_in_progress'>
				<p>&#8560;</p>
				<h2 className='title'>CHARTING UNCERTAINTY</h2>
				<p className='text'>
					What you are reading is a work-in-progress and an ongoing
					experiment. Part e-book, part digital garden, part
					collaborative project, it explores a pervasive feature of
					our existence: the nature of Uncertainty.
				</p>
			</div>
			<div className='description web_of_uncertainty'>
				<p>&#8561;</p>
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
					It is both <i>playful</i> and{' '}
					<span className='bold_text'>serious</span>,
				</p>
				<p className='text right'>abstract and concrete.</p>
				<p className='text center'>
					Its structure is fractal, but you can read it like a linear
					book,
					<br /> or freely skip around the knowledge graph.
				</p>
				<h2 className='title'>How To Navigate:</h2>
			</div>
			<MagicContainer
				borderWidth={3}
				className={
					'flex h-full w-[1000px] flex-col gap-4 lg:h-[125px] lg:flex-row'
				}
			>
				<MagicCard className='flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
					<p className='z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200'>
						Magic
					</p>
					<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
				</MagicCard>
				<MagicCard
					className='flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'
					spotlight
				>
					<p className='z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200'>
						Card
					</p>
					<Image
						src='/images/cover.png'
						className='why'
						width={250}
						height={150}
						alt='Logo'
					></Image>

					<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
				</MagicCard>
			</MagicContainer>
		</>
	)
}
