import styles from './Subscribe.module.css'
export default function Subscribe() {
	return (
		<div className={styles.subscribeContainer}>
			<input className={styles.name} defaultValue={'hello'}></input>
			<input className={styles.name} defaultValue={'hello'}></input>
		</div>
	)
}
