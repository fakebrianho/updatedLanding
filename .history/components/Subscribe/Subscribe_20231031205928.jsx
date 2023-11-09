import styles from './Subscribe.module.css'
export default function Subscribe() {
	return (
		<div className={styles.subscribeContainer}>
			<div className='circle_small_blue' id='circle_10'></div>
			<div className='circle_orange_halo' id='circle_11'></div>
			<div className='circle_small_blue' id='circle_12'></div>
			<input className={styles.name} defaultValue={'Name'}></input>
			<input className={styles.name} defaultValue={'Email'}></input>
		</div>
	)
}
