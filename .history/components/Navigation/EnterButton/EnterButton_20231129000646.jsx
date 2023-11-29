import styles from './EnterButton.module.css'
import { useRouter } from 'next/navigation'
export default function EnterButton(props) {
	const router = useRouter()
	return (
		<div
			className={styles.enter_button}
			onClick={() => {
				if (props.topLevel) {
					router.push(`/chapters/${props.chapter}`)
				} else {
					router.push(`/chapters/${props.chapter}`)
				}
			}}
		>
			Read
		</div>
	)
}
