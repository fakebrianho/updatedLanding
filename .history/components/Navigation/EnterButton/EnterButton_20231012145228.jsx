import styles from './EnterButton.module.css'
import { useRouter } from 'next/navigation'
export default function EnterButton(props) {
	const router = useRouter()
	return (
		<div
			className={styles.enter_button}
			// onClick={() => router.push(`/chapters/${props.chapter}`)}
			onClick={() => console.log('hi')}
		>
			Read
		</div>
	)
}
