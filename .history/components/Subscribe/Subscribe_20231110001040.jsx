import styles from './Subscribe.module.css'
import ShimmerButton from '../magicui/shimmer-button'
export default function Subscribe() {
	return (
		<div className={styles.container}>
			{/* <div className={styles.subscribeContainer}> */}
			<p className={styles.header}>
				Be the first to know when a new chapter is published
			</p>
			<p className={styles.text}>
				Get notified whenever a new chapter is published!
			</p>

			<div className={styles.inputs}>
				<input className={styles.name} placeholder={'Name'}></input>
				<input className={styles.email} placeholder={'Email'}></input>
				<button>Subscribe</button>
			</div>
			<ShimmerButton
				onClick={() => router.push(`/navigation/uncertain-universe`)}
			>
				<span className='whitespace-pre-wrap bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent lg:text-xl enterButton'>
					Subscribe!
				</span>
			</ShimmerButton>
		</div>
		// </div>
	)
}
