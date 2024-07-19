import styles from './marginaliaRender.module.css'

export default function MarginaliaRender({
	id,
	username,
	content,
	picture,
	fileName,
}) {
	const deleteMarginalia = async (fileName, id) => {
		try {
			const response = await fetch(`/api/marginalia/${fileName}/${id}`, {
				method: 'DELETE',
			})

			if (response.ok) {
				// Updates the marginalia front end component
				setmMarg(mMarg.filter((item) => item._id !== id))
			} else {
				console.error(
					'Failed to delete marginalia:',
					response.statusText
				)
			}
		} catch (error) {
			console.error('Error deleting marginalia:', error)
		}
	}
	return (
		<div className={styles.container}>
			<p>
				<span className={styles.bold}>Name: </span> {username}
			</p>
			<p className={`marginalia_text`}>
				<span className={styles.bold}>Text:</span> {content}
			</p>
			<p
				className={styles.delete}
				onClick={() => {
					deleteMarginalia(fileName, id)
				}}
			>
				Delete
			</p>
			{/* <p>{id}</p> */}
			{picture !== null ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
		</div>
	)
}
