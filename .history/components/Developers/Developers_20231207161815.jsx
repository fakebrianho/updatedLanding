import styles from './Developers.module.css'
export default function Developers() {
	return (
		<footer className={styles.container}>
			<h1 className={styles.header}>Developed By:</h1>
			<div styles={styles.textContainer}>
				<p className={styles.tag}>Miaoye Que</p>
				<p className={styles.tag}>Cindy Hu</p>
				<p className={styles.tag}>Brian Ho</p>
			</div>
		</footer>
	)
}
