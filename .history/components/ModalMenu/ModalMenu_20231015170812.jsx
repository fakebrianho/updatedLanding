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
