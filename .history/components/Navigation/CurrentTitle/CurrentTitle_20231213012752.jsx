import styles from './CurrentTitle.module.css'
import { isMobile } from 'react-device-detect'
export default function CurrentTitle(props) {
	return <h1 className={styles.current_title}>{props.title}</h1>
}
