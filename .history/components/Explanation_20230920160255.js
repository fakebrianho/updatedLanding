import React from 'react'
import { MagicCard } from './magicui/magic-card'
import { MagicContainer } from './magicui/magic-card'

export const Explanation = () => {
	return (
		<>
			<div className='explanation'>
				<h2 className='title'>How To Navigate:</h2>
				<MagicContainer
					borderWidth={3}
					className={
						'flex mx-auto w-[30px] flex-col gap-4 lg:h-[250px] lg:w-screen lg:flex-row lg:mx-auto lg:flex-wrap'
					}
				>
					<MagicCard className='flex max-w-1/3  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200'>
							Magic
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
						className='flex max-w-1/3 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'
						spotlight
					>
						<p className='z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200'>
							Card
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
					<MagicCard className='flex max-w-1/3 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200'>
							Magic
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
					<MagicCard className='flex max-w-1/3 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl'>
						<p className='z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200'>
							Magic
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
