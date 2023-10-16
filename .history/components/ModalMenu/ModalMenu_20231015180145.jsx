import styles from './ModalMenu.module.css'
import { MagicCard } from '../magicui/magic-card'
import { MagicContainer } from '../magicui/magic-card'
export default function ModalMenu() {
	return (
        <MagicCard className='flex flex-col items-center justify-center p-20 shadow-2xl card menu w-[80%] h-[80%] mx-auto my-auto relative'>  // Updated classes for making card larger and centering
        <ol className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 modalList'>
            <li>About</li>
            <li>Table of Contents</li>
            <li>Navigation</li>
            <li>Subscribe</li>
            <li>Contact</li>
        </ol>
        <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
    </MagicCard>
</MagicContainer>
		// <MagicContainer
		// 	borderWidth={3}
		// 	className={
		// 		'flex mx-auto w-[30px] items-center flex-col md:h-[250px] md:w-screen md:flex-row md:mx-auto md:flex-wrap mc'
		// 	}
		// >
		// 	<MagicCard className='flex w-4/12 xl:w-4/12 p-4 cursor-pointer gap-2 flex-col items-center justify-center overflow-hidden p-20 shadow-2xl card menu'>
		// 		<ol className='z-10 whitespace-nowrap text-3xl font-medium text-white-800 dark:text-white-200 modalList'>
		// 			<li>About</li>
		// 			<li>Table of Contents</li>
		// 			<li>Navigation</li>
		// 			<li>Subscribe</li>
		// 			<li>Contact</li>
		// 		</ol>
		// 		<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
		// 	</MagicCard>
		// </MagicContainer>
	)
}
