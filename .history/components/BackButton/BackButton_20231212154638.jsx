import styles from './BackButton.module.css'
import { useRouter } from 'next/navigation'
export default function BackButton(props) {
	const router = useRouter()

	const goBack = () => {
		router.back()
	}
    
    if(props.white){
        return(
            <PageProvider><
        )

    }
	return (
		<div className={styles.container}>
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
		</div>
	)
}
