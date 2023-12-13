import styles from './CurrentTitle.module.css'
import { isMobile } from 'react-device-detect'
export default function CurrentTitle(props) {
	if (isMobile) {
		return (
			<h1 className={`${styles.current_title} ${styles.mobile}`}>
				{props.title}
			</h1>
		)
	} else {
		return <h1 className={styles.current_title}>{props.title}</h1>
	}
}
