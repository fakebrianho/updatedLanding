import styles from './marginaliaRender.module.css'
export default function MarginaliaRender({ username, content, picture }) {
	return (
		<div className={styles.container}>
			<p>{username}</p>
			<p className={`marginalia_text`}>{content}</p>
			{picture !== null ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
			{/* <img src={picture} alt='marginalia picture' width={200} /> */}
		</div>
	)
}
