import styles from './BackButton.module.css'
import { useRouter } from 'next/navigation'
export default function BackButton() {
	const router = useRouter()

	const goBack = () => {
		router.back()
	}

	return (
		<div className={styles.container}>
			<ul>
				<li>
					<a
						className={styles.animatedArrow}
						href='https://google.com'
					>
						<span className={`${styles.theArrow} ${styles.left}`}>
							{/* <div className={`${styles.yourModuleClass} ${styles.anotherModuleClass} global-class`}> */}

							<span className={styles.shaft}></span>
						</span>
						<span className='main'>
							<span class='text'>Discover the Agency</span>
							<span
								className={`${styles.theArrow} ${styles.right}`}
							>
								<span className={styles.shaft}></span>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a
						className={styles.animatedArrow}
						href='https://google.com'
					>
						<span className={`${styles.theArrow} ${styles.left}`}>
							<span className={styles.shaft}></span>
						</span>
						<span class='main'>
							<span class='text'>View Projects</span>
							<span
								className={`${styles.theArrow} ${styles.right}`}
							>
								<span className={styles.shaft}></span>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a
						className={styles.animatedArrow}
						href='https://google.com'
					>
						<span className={`${styles.theArrow} ${styles.left}`}>
							{' '}
							<span className={styles.shaft}></span>{' '}
						</span>
						<span class='main'>
							<span class='text'>Get in Touch</span>
							<span
								className={`${styles.theArrow} ${styles.right}`}
							>
								<span className={styles.shaft}></span>
							</span>
						</span>
					</a>
				</li>
				<button onClick={goBack}>Back</button>
			</ul>
		</div>
	)
}
