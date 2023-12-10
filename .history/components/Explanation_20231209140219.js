import React from 'react'
import { MagicCard } from './magicui/magic-card'
import { MagicContainer } from './magicui/magic-card'
import LinearGradient from './magicui/linear-gradient'
import Image from 'next/image'
import gsap from 'gsap'

export const Explanation = () => {
	function toggleVisibility(_index) {
		switch (_index) {
			case 0:
				gsap.to('.startReading', {
					opacity: 1,
					zIndex: 2001,
					duration: 1,
					ease: 'power1.out',
				})
				gsap.to('.startReading', {
					zIndex: 2001,
					duration: 0,
				})
		}
	}
	return (
		<>
			<div className='explanation'>
				<h2 className='title'>How To Navigate:</h2>
				<MagicContainer
					borderWidth={3}
					className={
						'flex mx-auto w-[30px] items-center flex-col md:h-[250px] md:w-screen md:flex-row md:mx-auto md:flex-wrap mc'
					}
				>
					<MagicCard className='flex w-4/12 xl:w-4/12 p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card relative'>
						<div className='absolute p-12 expTxt startReading'>
							<LinearGradient />
							<p className='z-2001 text-xl font-medium text-white-800 dark:text-white-200 txt'>
								The easiest way to start is the &quot;Start
								reading&quot; button. Click here and you start
								at the beginning.
							</p>
						</div>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Start Reading
						</p>
						<Image
							src='/images/read.png'
							className='explainer cursor-pointer'
							id='startReading'
							width={250}
							height={150}
							alt='Logo'
							onClick={() => toggleVisibility(0)}
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard
						className='flex w-4/12 xl:w-4/12  p-4  flex-col gap-2 items-center justify-center overflow-hidden p-20 shadow-2xl card'
						spotlight
					>
						<div className='absolute p-12 expTxt readingLayout'>
							<LinearGradient />
							<p className='z-2001 text-xl font-medium text-white-800 dark:text-white-200 txt'>
								A clean layout for distraction-free reading.
								Just hit &quot;Next&quot; to flip to the next
								page. At the bottom of the page, you can add
								your thoughts and images as marginalia.
							</p>
						</div>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Reading Layout
						</p>
						<Image
							src='/images/readingpage.png'
							className='explainer cursor-pointer'
							id='readingLayout'
							width={250}
							height={150}
							alt='Logo'
						></Image>

						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div className='absolute p-12 expTxt marginaliaExplainer'>
							<LinearGradient />
							<p className='z-2001 text-xl font-medium text-white-800 dark:text-white-200 txt'>
								You can collaborate on this book by submitting
								your thoughts on the topic discussed on each
								page. Just add your name, and contribute in a
								written or visual manner to the book. The most
								thoughtful entries will make it into the print
								version with full credits.
							</p>
						</div>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Marginalia
						</p>
						<Image
							src='/images/marginalia.png'
							className='explainer cursor-pointer'
							id='marginaliaExplainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div className='absolute p-12 expTxt menuExplainer'>
							<LinearGradient />
							<p className='z-2001 text-xl font-medium text-white-800 dark:text-white-200 txt'>
								At any time, you can access the table of
								contents, knowledge graph navigation, contact,
								and about page from the menu on the top right.
							</p>
						</div>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-whtite-200 txt'>
							Menu
						</p>
						<Image
							src='/images/menu.png'
							className='explainer cursor-pointer'
							id='menuExplainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div className='absolute p-12 expTxt knowledgeGraph'>
							<LinearGradient />
							<p className='z-2001 text-xl font-medium text-white-800 dark:text-white-200 txt'>
								This is the fractal structure of page nodes that
								make up the book. You enter at the center and
								explore branches by opening nodes and
								discovering the sub-branches. Each node contains
								a page of the book. Just click &Quot;Read&Quot;
								to enter the reading layout.
							</p>
						</div>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Knowledge Graph
						</p>
						<Image
							src='/images/navigation.png'
							className='explainer cursor-pointer'
							id='knowledgeGraph'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div className='absolute p-12 expTxt tocExplainer'>
							<LinearGradient />
							<p className='z-2001 text-xl font-medium text-white-800 dark:text-white-200 txt'>
								The ToC lists all nodes in sequence. This is the
								order in which pages are displayed when using
								the &Quot;Next&Quot; buttons in the reading
								layout.
							</p>
						</div>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Table of Contents
						</p>
						<Image
							src='/images/toc.png'
							className='explainer cursor-pointer'
							id='tocExplainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
				</MagicContainer>
			</div>
		</>
	)
}
