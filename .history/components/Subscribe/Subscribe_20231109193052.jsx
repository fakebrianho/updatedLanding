import styles from './Subscribe.module.css'

export default function Subscribe() {
	return (
		<div>
			{/* <div className={styles.subscribeContainer}> */}
			<p className={styles.header}>Subscribe</p>
			<p className={styles.text}>
				Get notified whenever a new chapter is published!
			</p>

			<div>
				<input className={styles.name} defaultValue={'Name'}></input>
				<input className={styles.name} defaultValue={'Email'}></input>
			</div>
		</div>
		// </div>
	)
}
