import styles from './ModalMenu.module.css'
import { MagicCard } from '../magicui/magic-card'
import { MagicContainer } from '../magicui/magic-card'
export default function ModalMenu() {
	return (
		<div className={styles.modal}>
			<ol>
				<li>About</li>
				<li>Table of Contents</li>
				<li>Navigation</li>
				<li>Subscribe</li>
				<li>Contact</li>
			</ol>
		</div>
	)
}
