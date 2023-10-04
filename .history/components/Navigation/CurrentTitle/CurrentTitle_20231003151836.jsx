import styles from './CurrentTitle.module.css'
export default function CurrentTitle(props) {
	return <h1 className={styles.current_title}>{props.title}</h1>
}
