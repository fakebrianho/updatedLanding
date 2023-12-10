import styles from './ContactSection.module.css'
export default function ContactSection() {
	return (
		<div className={styles.container}>
			<h1>You can drop the author a line at the address below:</h1>
			<p>info@uncertain-universe.com</p>
			<p>
				or subscribe{' '}
				<span>
					<a href='#'>here</a>
				</span>{' '}
				to get notified when new content is published. You can subscribe
				at any time.
			</p>
		</div>
	)
}
