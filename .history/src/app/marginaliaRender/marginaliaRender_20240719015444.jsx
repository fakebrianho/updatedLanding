import styles from './marginaliaRender.module.css'
export default function MarginaliaRender({
	username,
	content,
	picture,
	fileName,
}) {
	return (
		<div className={styles.container}>
			<p>
				<span className={styles.bold}>Name: </span> {username}
			</p>
			<p className={`marginalia_text`}>
				<span className={styles.bold}>Text:</span> {content}
			</p>
			<p classn>Delete</p>
			{picture !== null ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
		</div>
	)
}
