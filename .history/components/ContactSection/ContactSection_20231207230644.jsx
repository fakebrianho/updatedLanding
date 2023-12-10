import styles from './ContactSection.module.css'
export default function ContactSection() {
	return (
		<div className='.contactContainer'>
			<h1 className={styles.header}>
				You can drop the author a line at the address below:
			</h1>
			<p className={styles.text}>info@uncertain-universe.com</p>
			<p className={styles.text}>
				Subscribe{' '}
				<span>
					<a href='#'>here</a>
				</span>{' '}
				to get notified when new content is published. You can subscribe
				at any time.
			</p>
		</div>
	)
}
