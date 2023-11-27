import styles from './Subscribe.module.css'
export default function Subscribe() {
	return (
		<div>
			<div className={styles.subscribeContainer}>
				<p>Subscribe</p>
				<p>Get notified whenever a new chapter is published!</p>
				<input className={styles.name} defaultValue={'Name'}></input>
				<input className={styles.name} defaultValue={'Email'}></input>
			</div>
		</div>
	)
}
