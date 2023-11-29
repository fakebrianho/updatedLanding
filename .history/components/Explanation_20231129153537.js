import React from 'react'
import { MagicCard } from './magicui/magic-card'
import { MagicContainer } from './magicui/magic-card'
import Image from 'next/image'

export const Explanation = () => {
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
					<MagicCard className='flex w-4/12 xl:w-4/12 p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Navigation
						</p>
						<Image
							src='/images/navigation.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard
						className='flex w-4/12 xl:w-4/12  p-4 cursor-pointer flex-col gap-2 items-center justify-center overflow-hidden p-20 shadow-2xl card'
						spotlight
					>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Child Nodes
						</p>
						<Image
							src='/images/child.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>

						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Parent Nodes
						</p>
						<Image
							src='/images/parent.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-whtite-200 txt'>
							Reading Page
						</p>
						<Image
							src='/images/reading.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Marginalia
						</p>
						<Image
							src='/images/marginalia.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex w-4/12 xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
							Table of Contents
						</p>
						<Image
							src='/images/toc.png'
							className='explainer'
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
