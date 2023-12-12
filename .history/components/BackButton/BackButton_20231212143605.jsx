import styles from './BackButton.module.css'
import { useRouter } from 'next/navigation'
export default function BackButton() {
	const router = useRouter()

	const goBack = () => {
		router.back()
	}

	return (
		<div className={styles.container}>
			{/* <ul> */}
			{/* <li> */}
			<div className={styles.animatedArrow}>
				<span className={`${styles.theArrow} ${styles.left}`}>
					<span className={styles.shaft}></span>
				</span>
				<span className={styles.main}>
					<span className={styles.text}>
						{' '}
						<button onClick={goBack} className={styles.backButton}>
							Back
						</button>
					</span>
					<span className={`${styles.theArrow} ${styles.right}`}>
						<span className={styles.shaft}></span>
					</span>
				</span>
			</div>
			{/* </li> */}
			{/* <li>
					<a
						className={styles.animatedArrow}
						href='https://google.com'
					>
						<span className={`${styles.theArrow} ${styles.left}`}>
							<span className={styles.shaft}></span>
						</span>
						<span className={styles.main}>
							<span className={styles.text}>View Projects</span>
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
						<span className={styles.main}>
							<span className={styles.text}>Get in Touch</span>
							<span
								className={`${styles.theArrow} ${styles.right}`}
							>
								<span className={styles.shaft}></span>
							</span>
						</span>
					</a>
				</li> */}
			{/* </ul> */}
		</div>
	)
}
