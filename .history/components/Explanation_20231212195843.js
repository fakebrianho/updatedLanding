import React from 'react'
import { MagicCard } from './magicui/magic-card'
import { MagicContainer } from './magicui/magic-card'
import LinearGradient from './magicui/linear-gradient'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

export const Explanation = () => {
	const startingReading = useRef()
	const readingLayout = useRef()
	const marginaliaReading = useRef()
	const menuReading = useRef()
	const graphReading = useRef()
	const tocReading = useRef()
	// const startingReading = useRef()
	// const startingReading = useRef()
	const toggleVisibility = (_index) => {
		switch (_index) {
			case 0:
				if (startingReading.current) {
					if (startingReading.current.classList.contains('active')) {
						startingReading.current.style.zIndex = '0'
					} else {
						startingReading.current.style.zIndex = '2001'
					}
					startingReading.current.classList.toggle('active')
				}
				break
			case 1:
				if (readingLayout.current) {
					if (readingLayout.current.classList.contains('active')) {
						readingLayout.current.style.zIndex = '0'
					} else {
						readingLayout.current.style.zIndex = '2001'
					}
					readingLayout.current.classList.toggle('active')
				}
				break
			case 2:
				if (marginaliaReading.current) {
					if (
						marginaliaReading.current.classList.contains('active')
					) {
						marginaliaReading.current.style.zIndex = '0'
					} else {
						marginaliaReading.current.style.zIndex = '2001'
					}
					marginaliaReading.current.classList.toggle('active')
				}
				break
			case 3:
				if (menuReading.current) {
					if (menuReading.current.classList.contains('active')) {
						menuReading.current.style.zIndex = '0'
					} else {
						menuReading.current.style.zIndex = '2001'
					}
					menuReading.current.classList.toggle('active')
				}
				break
			case 4:
				if (graphReading.current) {
					if (graphReading.current.classList.contains('active')) {
						graphReading.current.style.zIndex = '0'
					} else {
						graphReading.current.style.zIndex = '2001'
					}
					graphReading.current.classList.toggle('active')
				}
				break
			case 5:
				if (tocReading.current) {
					if (tocReading.current.classList.contains('active')) {
						tocReading.current.style.zIndex = '0'
					} else {
						tocReading.current.style.zIndex = '2001'
					}
					tocReading.current.classList.toggle('active')
				}
				break
			// Add other cases if needed
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
						<div
							className='absolute p-12 expTxt startReading cursor-pointer'
							ref={startingReading}
							onClick={() => toggleVisibility(0)}
						>
							<p className='z-2001 font-medium text-white-800 dark:text-white-200 txt exp-text'>
								The easiest way to start is the &quot;Start
								reading&quot; button. Click here and you start
								at the beginning.
							</p>
							<LinearGradient />
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
						<div
							className='absolute p-12 expTxt readingLayout cursor-pointer'
							ref={readingLayout}
							onClick={() => toggleVisibility(1)}
						>
							<LinearGradient />
							<p className='z-2001 font-medium text-white-800 dark:text-white-200 txt exp-text'>
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
							onClick={() => toggleVisibility(1)}
							width={250}
							height={150}
							alt='Logo'
						></Image>

						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div
							className='absolute p-12 expTxt marginaliaExplainer'
							ref={marginaliaReading}
							onClick={() => toggleVisibility(2)}
						>
							<LinearGradient />
							<p className='z-2001 font-medium text-white-800 dark:text-white-200 txt exp-text'>
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
							onClick={() => toggleVisibility(2)}
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div
							className='absolute p-12 expTxt menuExplainer'
							ref={menuReading}
							onClick={() => toggleVisibility(3)}
						>
							<LinearGradient />
							<p className='z-2001 font-medium text-white-800 dark:text-white-200 txt exp-text'>
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
							onClick={() => toggleVisibility(3)}
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div
							className='absolute p-12 expTxt knowledgeGraph'
							ref={graphReading}
							onClick={() => toggleVisibility(4)}
						>
							<LinearGradient />
							<p className='z-2001 font-medium text-white-800 dark:text-white-200 txt exp-text'>
								This is the fractal structure of page nodes that
								make up the book. You enter at the center and
								explore branches by opening nodes and
								discovering the sub-branches. Each node contains
								a page of the book. Just click &quot;Read&quot;
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
							onClick={() => toggleVisibility(4)}
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4  gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<div
							className='absolute p-12 expTxt tocExplainer'
							ref={tocReading}
							onClick={() => toggleVisibility(5)}
						>
							<LinearGradient />
							<p className='z-2001 font-medium text-white-800 dark:text-white-200 txt exp-text'>
								The ToC lists all nodes in sequence. This is the
								order in which pages are displayed when using
								the &quot;Next&quot; buttons in the reading
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
							onClick={() => toggleVisibility(5)}
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
