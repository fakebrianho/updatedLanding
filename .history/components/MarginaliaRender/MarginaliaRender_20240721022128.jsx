'use client'
import styles from './MarginaliaRender.module.css'
import { useState } from 'react'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
export default function MarginaliaRender({
	id,
	username,
	content,
	picture,
	fileName,
}) {
	const [deleted, setDeleted] = useState(false) // State to trigger re-render
	const router = useRouter()
	const deleteMarginalia = async () => {
		try {
			const response = await fetch(`/api/marginalia/${fileName}/${id}`, {
				method: 'DELETE',
			})

			if (response.ok) {
				// setDeleted(true)
				router.refresh()
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
		<div className={`${styles.container}`}>
			<p>
				<span className={styles.bold}>Name: </span> {username}
			</p>
			<p className={`marginalia_text`}>
				<span className={styles.bold}>Content:</span> {content}
			</p>
			<p className={styles.delete} onClick={deleteMarginalia}>
				Delete
			</p>
			{picture !== null ? (
				<img src={picture} alt='marginalia picture' width={200} />
			) : (
				''
			)}
		</div>
	)
}
