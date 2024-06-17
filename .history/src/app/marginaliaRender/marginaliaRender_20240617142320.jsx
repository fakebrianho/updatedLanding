import styles from './marginaliaRender.module.css'
export default function MarginaliaRender({ username, content, picture }) {
	return (
		<div className={styles.container}>
			<p>Name: {username}</p>
			<p className={`marginalia_text`}>
				<span className={styles.bold}>Text:</span> {content}
			</p>
			{picture !== null ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
		</div>
	)
}
