import styles from './marginaliaRender.module.css'
export default function MarginaliaRender({ username, content, picture }) {
	console.log(picture)
	return (
		<div className={styles.container}>
			<p>{username}</p>
			<p className={`marginalia_text`}>{content}</p>
			{picture !== '' ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
			{/* <img src={picture} alt='marginalia picture' width={200} /> */}
		</div>
	)
}
