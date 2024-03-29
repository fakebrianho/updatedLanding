import styles from './Subscribe.module.css'
import ShimmerButton from '../magicui/shimmer-button'
export default function Subscribe(props) {
	return (
		<div className='subscribe-content'>
			{/* <div className={styles.subscribeContainer}> */}
			<p className={`${styles.header} ${props.mode}`}>
				Be the first to know when a new chapter is published.
			</p>
			<p className={`${styles.text} ${props.mode}`}>
				Subscribe and get the latest news and updates.
			</p>

			<div className={styles.inputs}>
				<input className={styles.name} placeholder={'Name'}></input>
				<input className={styles.email} placeholder={'Email'}></input>
				<button className={styles.submit}>Subscribe</button>
			</div>
		</div>
		// </div>
	)
}
