import styles from './Subscribe.module.css'
export default function Subscribe() {
	return (
		<div>
			<div className={styles.subscribeContainer}>
				<p>Subscribe to know when new chapters are published!</p>
				<input className={styles.name} defaultValue={'Name'}></input>
				<input className={styles.name} defaultValue={'Email'}></input>
			</div>
		</div>
	)
}
