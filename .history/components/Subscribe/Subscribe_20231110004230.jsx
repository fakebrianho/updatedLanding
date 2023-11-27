import styles from './Subscribe.module.css'
import ShimmerButton from '../magicui/shimmer-button'
export default function Subscribe() {
	return (
		<div className={styles.container}>
			{/* <div className={styles.subscribeContainer}> */}
			<p className={styles.header}>
				Be the first to know when a new chapter is published.
			</p>
			<p className={styles.text}>
				Subscribe and get the latest news and updates.
			</p>

			<div className={styles.inputs}>
				<input className={styles.name} placeholder={'Name'}></input>
				<input className={styles.email} placeholder={'Email'}></input>
				<button className={styles.}>Subscribe</button>
			</div>
			
		</div>
		// </div>
	)
}
