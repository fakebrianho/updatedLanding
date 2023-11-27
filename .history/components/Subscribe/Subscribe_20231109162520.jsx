import styles from './Subscribe.module.css'
export default function Subscribe() {
	return (
		<div>
			<p>Subscribe to know why</p>
			<div className={styles.subscribeContainer}>
				<input className={styles.name} defaultValue={'Name'}></input>
				<input className={styles.name} defaultValue={'Email'}></input>
			</div>
		</div>
	)
}
