import styles from './Subscribe.module.css'
import LinearGradient from '../magicui/linear-gradient'
export default function Subscribe() {
	return (
		<div className='relative flex h-full w-full items-center justify-center rounded-lg border bg-background p-20 shadow-2xl'>
			<p className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white'>
				Linear Gradient
			</p>
			<p className={styles.header}>Subscribe</p>{' '}
			<p className={styles.text}>
				Get notified whenever a new chapter is published! //{' '}
			</p>
			<input className={styles.name} defaultValue={'Name'}></input>
			<input className={styles.name} defaultValue={'Email'}></input>
			<LinearGradient />
		</div>
		// <div>
		// 	<div className={styles.subscribeContainer}>
		// 		<p className={styles.header}>Subscribe</p>
		// 		<p className={styles.text}>
		// 			Get notified whenever a new chapter is published!
		// 		</p>
		// 		<input className={styles.name} defaultValue={'Name'}></input>
		// 		<input className={styles.name} defaultValue={'Email'}></input>
		// 	</div>
		// </div>
	)
}
