import styles from './ModalMenu.module.css'
import { MagicCard } from '../magicui/magic-card'
import { MagicContainer } from '../magicui/magic-card'
export default function ModalMenu() {
	return (
		<MagicContainer
			borderWidth={3}
			className={
				'flex mx-auto w-[30px] items-center flex-col md:h-[250px] md:w-screen md:flex-row md:mx-auto md:flex-wrap mc'
			}
		>
			<MagicCard className='flex w-4/12 xl:w-4/12 p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card'>
				<p className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 txt'>
					Opening Sequence
				</p>
				<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
			</MagicCard>
			<ol>
				<li>About</li>
				<li>Table of Contents</li>
				<li>Navigation</li>
				<li>Subscribe</li>
				<li>Contact</li>
			</ol>
		</MagicContainer>
	)
}
