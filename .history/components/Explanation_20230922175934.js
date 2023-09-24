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
						'flex mx-auto w-[30px] items-center flex-col lg:h-[250px] lg:w-screen lg:flex-row lg:mx-auto lg:flex-wrap mc'
					}
				>
					<MagicCard className='flex xl:w-4/12 p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200'>
							Opening Sequence
						</p>
						<Image
							src='/images/cover.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard
						className='flex xl:w-4/12  p-4 cursor-pointer flex-col gap-2 items-center justify-center overflow-hidden p-20 shadow-2xl'
						spotlight
					>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200'>
							Navigation
						</p>
						<Image
							src='/images/layer1.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>

						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200'>
							Child Nodes
						</p>
						<Image
							src='/images/layer1-hover.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-whtite-200'>
							Next Layer
						</p>
						<Image
							src='/images/layer1-hover.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200'>
							Reading Page
						</p>
						<Image
							src='/images/layer2.png'
							className='explainer'
							width={250}
							height={150}
							alt='Logo'
						></Image>
						<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
					</MagicCard>
					<MagicCard className='flex xl:w-4/12  p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200'>
							Table of Contents
						</p>
						<Image
							src='/images/layer1-hover.png'
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
